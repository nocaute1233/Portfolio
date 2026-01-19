// ===========================
// STATE MANAGEMENT
// ===========================
let folders = [];
let currentFolderId = null;
let currentEditingFolderId = null;
let currentPhotoIndex = 0;
let selectedFiles = [];

// ===========================
// LOCAL STORAGE
// ===========================
const STORAGE_KEY = 'photography_portfolio';

function loadFromStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      folders = JSON.parse(data);
    }

    // Seed default folder if empty
    if (folders.length === 0) {
      createFolder("10 PPM Rúben Milhazes", "Trabalhos da disciplina de PPM");
    }
  } catch (error) {
    console.error('Error loading from storage:', error);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(folders));
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
}

// ===========================
// FOLDER MANAGEMENT
// ===========================
function createFolder(name, description) {
  const folder = {
    id: Date.now().toString(),
    name,
    description,
    photos: [],
    createdAt: new Date().toISOString()
  };
  folders.push(folder);
  saveToStorage();
  return folder;
}

function updateFolder(id, name, description) {
  const folder = folders.find(f => f.id === id);
  if (folder) {
    folder.name = name;
    folder.description = description;
    saveToStorage();
  }
}

function deleteFolder(id) {
  folders = folders.filter(f => f.id !== id);
  saveToStorage();
}

function getFolder(id) {
  return folders.find(f => f.id === id);
}

// ===========================
// PHOTO MANAGEMENT
// ===========================
function addPhotosToFolder(folderId, photoDataArray) {
  const folder = getFolder(folderId);
  if (folder) {
    photoDataArray.forEach(photoData => {
      folder.photos.push({
        id: Date.now().toString() + Math.random(),
        data: photoData,
        addedAt: new Date().toISOString()
      });
    });
    saveToStorage();
  }
}

// ===========================
// UI RENDERING
// ===========================
function renderFolders() {
  const grid = document.getElementById('folders-grid');
  const emptyState = document.getElementById('folders-empty');

  if (folders.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    grid.innerHTML = folders.map(folder => {
      const photoCount = folder.photos.length;
      const thumbnail = photoCount > 0 ? folder.photos[0].data : null;

      return `
        <div class="folder-card" data-folder-id="${folder.id}">
          <div class="folder-thumbnail">
            ${thumbnail
          ? `<img src="${thumbnail}" alt="${folder.name}">`
          : '<div class="folder-placeholder">📁</div>'
        }
          </div>
          <div class="folder-info">
            <h3 class="folder-title">${folder.name}</h3>
            <p class="folder-description">${folder.description || 'Sem descrição'}</p>
            <div class="folder-meta">
              <span>${photoCount} foto${photoCount !== 1 ? 's' : ''}</span>
              <div class="folder-actions">
                <button class="action-btn edit-folder-btn" data-folder-id="${folder.id}" title="Editar">✏️</button>
                <button class="action-btn delete-folder-btn" data-folder-id="${folder.id}" title="Excluir">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Add event listeners
    document.querySelectorAll('.folder-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.folder-actions')) {
          const folderId = card.dataset.folderId;
          openFolder(folderId);
        }
      });
    });

    document.querySelectorAll('.edit-folder-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const folderId = btn.dataset.folderId;
        openEditFolderModal(folderId);
      });
    });

    document.querySelectorAll('.delete-folder-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const folderId = btn.dataset.folderId;
        openDeleteModal(folderId);
      });
    });
  }
}

function renderPhotos(folderId) {
  const folder = getFolder(folderId);
  if (!folder) return;

  const grid = document.getElementById('photos-grid');
  const emptyState = document.getElementById('photos-empty');
  const title = document.getElementById('folder-view-title');
  const description = document.getElementById('folder-view-description');

  title.textContent = folder.name;
  description.textContent = folder.description || '';

  if (folder.photos.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    grid.innerHTML = folder.photos.map((photo, index) => `
      <div class="photo-item" data-photo-index="${index}">
        <img src="${photo.data}" alt="Foto ${index + 1}">
      </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.photo-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.photoIndex);
        openLightbox(index);
      });
    });
  }
}

// ===========================
// VIEW NAVIGATION
// ===========================
function showFoldersView() {
  document.getElementById('folders-view').classList.remove('hidden');
  document.getElementById('photos-view').classList.add('hidden');
  document.getElementById('intro').classList.remove('hidden'); // Show intro on home
  document.getElementById('breadcrumb').classList.remove('active');
  currentFolderId = null;
  renderFolders();
}

function openFolder(folderId) {
  currentFolderId = folderId;
  const folder = getFolder(folderId);

  document.getElementById('folders-view').classList.add('hidden');
  document.getElementById('photos-view').classList.remove('hidden');
  document.getElementById('intro').classList.add('hidden'); // Hide intro inside folder
  document.getElementById('breadcrumb').classList.add('active');
  document.getElementById('breadcrumb-current').textContent = folder.name;

  renderPhotos(folderId);
}

// ===========================
// MODAL MANAGEMENT
// ===========================
function openNewFolderModal() {
  currentEditingFolderId = null;
  document.getElementById('folder-modal-title').textContent = 'Nova Pasta';
  document.getElementById('folder-name').value = '';
  document.getElementById('folder-description').value = '';
  document.getElementById('folder-modal').classList.add('active');
  document.getElementById('folder-name').focus();
}

function openEditFolderModal(folderId) {
  currentEditingFolderId = folderId;
  const folder = getFolder(folderId);

  document.getElementById('folder-modal-title').textContent = 'Editar Pasta';
  document.getElementById('folder-name').value = folder.name;
  document.getElementById('folder-description').value = folder.description || '';
  document.getElementById('folder-modal').classList.add('active');
  document.getElementById('folder-name').focus();
}

function closeFolderModal() {
  document.getElementById('folder-modal').classList.remove('active');
  currentEditingFolderId = null;
}

function saveFolderModal() {
  const name = document.getElementById('folder-name').value.trim();
  const description = document.getElementById('folder-description').value.trim();

  if (!name) {
    alert('Por favor, insira um nome para a pasta');
    return;
  }

  if (currentEditingFolderId) {
    updateFolder(currentEditingFolderId, name, description);
    if (currentFolderId === currentEditingFolderId) {
      renderPhotos(currentFolderId);
      document.getElementById('breadcrumb-current').textContent = name;
    } else {
      renderFolders();
    }
  } else {
    createFolder(name, description);
    renderFolders();
  }

  closeFolderModal();
}

function openUploadModal() {
  selectedFiles = [];
  document.getElementById('upload-preview').innerHTML = '';
  document.getElementById('confirm-upload-btn').disabled = true;
  document.getElementById('upload-modal').classList.add('active');
}

function closeUploadModal() {
  document.getElementById('upload-modal').classList.remove('active');
  selectedFiles = [];
}

function openDeleteModal(folderId) {
  currentEditingFolderId = folderId;
  const folder = getFolder(folderId);
  document.getElementById('delete-message').textContent =
    `Tem certeza que deseja excluir a pasta "${folder.name}" e todas as suas ${folder.photos.length} foto(s)?`;
  document.getElementById('delete-modal').classList.add('active');
}

function closeDeleteModal() {
  document.getElementById('delete-modal').classList.remove('active');
  currentEditingFolderId = null;
}

function confirmDelete() {
  if (currentEditingFolderId) {
    deleteFolder(currentEditingFolderId);
    closeDeleteModal();

    if (currentFolderId === currentEditingFolderId) {
      showFoldersView();
    } else {
      renderFolders();
    }
  }
}

// ===========================
// FILE UPLOAD
// ===========================
function handleFileSelect(files) {
  selectedFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

  if (selectedFiles.length === 0) {
    alert('Por favor, selecione apenas arquivos de imagem');
    return;
  }

  const preview = document.getElementById('upload-preview');
  preview.innerHTML = `<p style="color: var(--text-secondary);">${selectedFiles.length} arquivo(s) selecionado(s)</p>`;
  document.getElementById('confirm-upload-btn').disabled = false;
}

function confirmUpload() {
  if (selectedFiles.length === 0 || !currentFolderId) return;

  const uploadButton = document.getElementById('confirm-upload-btn');
  uploadButton.textContent = 'Carregando...';
  uploadButton.disabled = true;

  const photoPromises = selectedFiles.map(file => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  });

  Promise.all(photoPromises).then(photoDataArray => {
    addPhotosToFolder(currentFolderId, photoDataArray);
    renderPhotos(currentFolderId);
    closeUploadModal();
    uploadButton.textContent = 'Upload';
  });
}

// ===========================
// LIGHTBOX
// ===========================
function openLightbox(index) {
  const folder = getFolder(currentFolderId);
  if (!folder || !folder.photos[index]) return;

  currentPhotoIndex = index;
  document.getElementById('lightbox-image').src = folder.photos[index].data;
  document.getElementById('lightbox').classList.add('active');

  updateLightboxNavigation();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function navigateLightbox(direction) {
  const folder = getFolder(currentFolderId);
  if (!folder) return;

  currentPhotoIndex += direction;

  if (currentPhotoIndex < 0) {
    currentPhotoIndex = folder.photos.length - 1;
  } else if (currentPhotoIndex >= folder.photos.length) {
    currentPhotoIndex = 0;
  }

  document.getElementById('lightbox-image').src = folder.photos[currentPhotoIndex].data;
  updateLightboxNavigation();
}

function updateLightboxNavigation() {
  const folder = getFolder(currentFolderId);
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (folder && folder.photos.length > 1) {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
}

// ===========================
// EVENT LISTENERS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderFolders();

  // Folder Modal
  document.getElementById('new-folder-btn').addEventListener('click', openNewFolderModal);
  document.getElementById('empty-new-folder-btn').addEventListener('click', openNewFolderModal);
  document.getElementById('close-folder-modal').addEventListener('click', closeFolderModal);
  document.getElementById('cancel-folder-btn').addEventListener('click', closeFolderModal);
  document.getElementById('save-folder-btn').addEventListener('click', saveFolderModal);

  // Folder Form Submit
  document.getElementById('folder-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveFolderModal();
  });

  // Upload Modal
  document.getElementById('upload-photos-btn').addEventListener('click', openUploadModal);
  document.getElementById('empty-upload-btn').addEventListener('click', openUploadModal);
  document.getElementById('close-upload-modal').addEventListener('click', closeUploadModal);
  document.getElementById('cancel-upload-btn').addEventListener('click', closeUploadModal);
  document.getElementById('confirm-upload-btn').addEventListener('click', confirmUpload);

  // File Upload
  const fileInput = document.getElementById('file-input');
  const fileUploadArea = document.getElementById('file-upload-area');

  fileUploadArea.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files));

  // Drag and Drop
  fileUploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadArea.classList.add('drag-over');
  });

  fileUploadArea.addEventListener('dragleave', () => {
    fileUploadArea.classList.remove('drag-over');
  });

  fileUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUploadArea.classList.remove('drag-over');
    handleFileSelect(e.dataTransfer.files);
  });

  // Delete Modal
  document.getElementById('close-delete-modal').addEventListener('click', closeDeleteModal);
  document.getElementById('cancel-delete-btn').addEventListener('click', closeDeleteModal);
  document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);

  // Breadcrumb
  document.getElementById('breadcrumb-home').addEventListener('click', showFoldersView);
  document.getElementById('logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    showFoldersView();
  });

  // Lightbox
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => navigateLightbox(1));

  // Lightbox keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });

  // Close modals on background click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});
