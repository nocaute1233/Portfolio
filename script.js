// Photo categories with descriptions
const categories = {
    'todas': {
        name: 'Todas',
        description: 'Explore a coleção completa de fotografias',
        folder: null
    },
    'arquitetura': {
        name: 'Arquitetura',
        description: 'Fotografias de arquitetura externa e interna, capturando linhas, formas e estruturas',
        folder: 'Arquitetura'
    },
    'contraluz': {
        name: 'Contraluz',
        description: 'Técnicas de fotografia em contraluz, explorando silhuetas e luminosidade',
        folder: 'Contraluz'
    },
    'cor': {
        name: 'Cor',
        description: 'Composições focadas em cores vibrantes e paletas harmoniosas',
        folder: 'Cor'
    },
    'forma': {
        name: 'Forma',
        description: 'Estudos de formas geométricas e orgânicas na fotografia',
        folder: 'Forma'
    },
    'paisagem': {
        name: 'Paisagem',
        description: 'Fotografias de paisagens naturais e urbanas',
        folder: 'Paisagem'
    },
    'profundidade': {
        name: 'Profundidade de Campo',
        description: 'Experimentos com profundidade de campo e foco seletivo',
        folder: 'Profundida de Campo'
    },
    'luz-sombra': {
        name: 'Luz e Sombra',
        description: 'Interação entre luz e sombra, criando contraste e dramaticidade',
        folder: 'luz sombra'
    },
    'reflexo': {
        name: 'Reflexo',
        description: 'Fotografias de reflexos em superfícies diversas',
        folder: 'reflexo'
    },
    'retratos': {
        name: 'Retratos',
        description: 'Fotografia de retratos e expressões humanas',
        folder: 'retratos'
    },
    'textura': {
        name: 'Textura',
        description: 'Estudos de texturas e padrões visuais',
        folder: 'textura'
    }
};

// Photo database - mapping to actual files
const photoDatabase = {
    'arquitetura': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/exteriores/20260105_165840067_iOS.jpg', name: 'Exterior 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/exteriores/20260105_170120780_iOS.jpg', name: 'Exterior 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/exteriores/20260105_170137834_iOS.jpg', name: 'Exterior 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/exteriores/20260105_170153093_iOS.jpg', name: 'Exterior 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/exteriores/20260105_170208113_iOS.jpg', name: 'Exterior 5' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/interiores/20251215_165709317_iOS.jpg', name: 'Interior 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/interiores/20251215_165924736_iOS.jpg', name: 'Interior 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/interiores/20251215_165947799_iOS.jpg', name: 'Interior 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/interiores/20251215_170114564_iOS.jpg', name: 'Interior 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Arquitetura/interiores/20251215_170406196_iOS.jpg', name: 'Interior 5' }
    ],
    'contraluz': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Contraluz/20250930_191004417_iOS.jpg', name: 'Contraluz 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Contraluz/20260105_170508386_iOS.jpg', name: 'Contraluz 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Contraluz/20260105_170537083_iOS.jpg', name: 'Contraluz 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Contraluz/20260105_170539101_iOS.jpg', name: 'Contraluz 4' }
    ],
    'cor': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Cor/20251215_165621131_iOS.jpg', name: 'Cor 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Cor/20251215_165924736_iOS.jpg', name: 'Cor 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Cor/DSC_1679.JPG', name: 'Cor 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Cor/DSC_1680.JPG', name: 'Cor 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Cor/DSC_1682.JPG', name: 'Cor 5' }
    ],
    'forma': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Forma/20251215_165621131_iOS.jpg', name: 'Forma 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Forma/20251215_165924736_iOS.jpg', name: 'Forma 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Forma/20251215_170100309_iOS.jpg', name: 'Forma 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Forma/20251215_170910996_iOS.jpg', name: 'Forma 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Forma/20251215_171141752_iOS.jpg', name: 'Forma 5' }
    ],
    'paisagem': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Paisagem/20250930_191000025_iOS.jpg', name: 'Paisagem 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Paisagem/20250930_191004417_iOS.jpg', name: 'Paisagem 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Paisagem/20251008_185847445_iOS.jpg', name: 'Paisagem 3' }
    ],
    'profundidade': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Profundida de Campo/DSC_0007.JPG', name: 'Profundidade 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Profundida de Campo/DSC_0011.JPG', name: 'Profundidade 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Profundida de Campo/DSC_0330.JPG', name: 'Profundidade 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Profundida de Campo/DSC_0342.JPG', name: 'Profundidade 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/Profundida de Campo/DSC_0343.JPG', name: 'Profundidade 5' }
    ],
    'luz-sombra': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0005.JPG', name: 'Luz e Sombra 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0010.JPG', name: 'Luz e Sombra 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0324.JPG', name: 'Luz e Sombra 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0331.JPG', name: 'Luz e Sombra 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0340.JPG', name: 'Luz e Sombra 5' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/DSC_0341.JPG', name: 'Luz e Sombra 6' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/IMG_2637.JPG', name: 'Luz e Sombra 7' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/IMG_2638.JPG', name: 'Luz e Sombra 8' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/luz sombra/IMG_2640.JPG', name: 'Luz e Sombra 9' }
    ],
    'reflexo': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/reflexo/20251215_165515035_iOS.jpg', name: 'Reflexo 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/reflexo/20251215_170042353_iOS.jpg', name: 'Reflexo 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/reflexo/IMG_2639.JPG', name: 'Reflexo 3' }
    ],
    'retratos': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/retratos/20251215_170724242_iOS.jpg', name: 'Retrato 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/retratos/20251215_170744562_iOS.jpg', name: 'Retrato 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/retratos/DSC_0006.JPG', name: 'Retrato 3' }
    ],
    'textura': [
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/textura/20251215_165439925_iOS.jpg', name: 'Textura 1' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/textura/DSC_1690.JPG', name: 'Textura 2' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/textura/DSC_1691.JPG', name: 'Textura 3' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/textura/DSC_1710.JPG', name: 'Textura 4' },
        { file: '../../Downloads/OneDrive_2026-01-25/10 PPM_Ruben Milhazes/textura/DSC_1712.JPG', name: 'Textura 5' }
    ]
};

// State management
let currentCategory = 'todas';
let currentPhotoIndex = 0;
let currentPhotos = [];

// DOM elements
const categoryGrid = document.getElementById('categoryGrid');
const photoGrid = document.getElementById('photoGrid');
const galleryTitle = document.getElementById('galleryTitle');
const galleryDescription = document.getElementById('galleryDescription');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Initialize the app
function init() {
    renderCategories();
    renderPhotos('todas');
    setupEventListeners();
}

// Render category cards
function renderCategories() {
    categoryGrid.innerHTML = '';

    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey];
        const photoCount = categoryKey === 'todas'
            ? getAllPhotos().length
            : (photoDatabase[categoryKey]?.length || 0);

        const card = document.createElement('div');
        card.className = `category-card ${categoryKey === currentCategory ? 'active' : ''}`;
        card.dataset.category = categoryKey;

        card.innerHTML = `
            <div class="category-name">${category.name}</div>
            <div class="category-count">${photoCount} foto${photoCount !== 1 ? 's' : ''}</div>
        `;

        card.addEventListener('click', () => selectCategory(categoryKey));
        categoryGrid.appendChild(card);
    });
}

// Get all photos from all categories
function getAllPhotos() {
    const allPhotos = [];
    Object.keys(photoDatabase).forEach(categoryKey => {
        photoDatabase[categoryKey].forEach(photo => {
            allPhotos.push({
                ...photo,
                category: categories[categoryKey].name
            });
        });
    });
    return allPhotos;
}

// Select a category
function selectCategory(categoryKey) {
    currentCategory = categoryKey;

    // Update active state on category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.toggle('active', card.dataset.category === categoryKey);
    });

    // Update gallery title and description
    const category = categories[categoryKey];
    galleryTitle.textContent = category.name;
    galleryDescription.textContent = category.description;

    // Render photos for selected category
    renderPhotos(categoryKey);
}

// Render photos
function renderPhotos(categoryKey) {
    photoGrid.innerHTML = '';

    // Get photos for the category
    let photos = [];
    if (categoryKey === 'todas') {
        photos = getAllPhotos();
    } else {
        photos = (photoDatabase[categoryKey] || []).map(photo => ({
            ...photo,
            category: categories[categoryKey].name
        }));
    }

    currentPhotos = photos;

    if (photos.length === 0) {
        photoGrid.innerHTML = `
            <div class="empty-state">
                <h3>Nenhuma foto encontrada</h3>
                <p>Esta categoria ainda não possui fotos.</p>
            </div>
        `;
        return;
    }

    // Create photo cards
    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';

        card.innerHTML = `
            <div class="photo-wrapper">
                <img src="${photo.file}" alt="${photo.name}" class="photo-image" loading="lazy">
            </div>
            <div class="photo-info">
                <div class="photo-category">${photo.category}</div>
            </div>
        `;

        card.addEventListener('click', () => openLightbox(index));
        photoGrid.appendChild(card);
    });
}

// Open lightbox
function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox image
function updateLightboxImage() {
    const photo = currentPhotos[currentPhotoIndex];
    if (!photo) return;

    lightboxImage.src = photo.file;
    lightboxImage.alt = photo.name;
    lightboxCategory.textContent = photo.category;
    lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${currentPhotos.length}`;
}

// Navigate to previous photo
function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightboxImage();
}

// Navigate to next photo
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    updateLightboxImage();
}

// Setup event listeners
function setupEventListeners() {
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', previousPhoto);
    lightboxNext.addEventListener('click', nextPhoto);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousPhoto();
                break;
            case 'ArrowRight':
                nextPhoto();
                break;
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
