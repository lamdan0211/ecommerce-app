// Đổi ảnh chính khi click thumbnail
const mainImg = document.getElementById('mainProductImg');
const thumbs = document.querySelectorAll('.product-gallery-thumbs .thumb');
const sliderIndex = document.querySelector('.gallery-slider-index');
let currentImgIdx = 0;

function updateMainImg(idx) {
  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[idx].classList.add('active');
  mainImg.src = thumbs[idx].src;
  currentImgIdx = idx;
  if (sliderIndex) sliderIndex.textContent = `${idx + 1}/${thumbs.length}`;
}

thumbs.forEach((thumb, idx) => {
  thumb.addEventListener('click', function() {
    updateMainImg(idx);
  });
});

// Nếu muốn có nút next/prev slider, có thể thêm code ở đây
// Ví dụ:
// document.querySelector('.gallery-next').onclick = () => updateMainImg((currentImgIdx+1)%thumbs.length);
// document.querySelector('.gallery-prev').onclick = () => updateMainImg((currentImgIdx-1+thumbs.length)%thumbs.length);

// Chọn màu sắc
const colorBtns = document.querySelectorAll('.option-list--color .option-btn');

// DEMO: Mapping ảnh cho từng màu + dung lượng
const productImages = {
  xanh: {
    128: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    512: [
     'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
  },
  tim: {
    128: [
     'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    256: [
    'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    512: [
     'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
  },
  den: {
    128: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
  },
  trang: {
    128: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
  },
  hong: {
    128: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
    512: [
     'images/xanh-128-1.png',
      'images/den.png',
      'images/trang.png',
      'images/grey.png',
      'images/xanh-128-3.png',
    ],
  },
};

function getSelectedColor() {
  return document.querySelector('.option-list--color .option-btn.active').dataset.color;
}
function getSelectedCapacity() {
  return document.querySelector('.option-list--capacity .option-btn.active').dataset.capacity;
}

function updateGallery() {
  const color = getSelectedColor();
  const capacity = getSelectedCapacity();
  const imgs = (productImages[color] && productImages[color][capacity]) ? productImages[color][capacity] : [];
  thumbs.forEach((thumb, idx) => {
    if (imgs[idx]) {
      thumb.src = imgs[idx];
      thumb.style.display = '';
    } else {
      thumb.style.display = 'none';
    }
  });
  if (imgs[0]) {
    mainImg.src = imgs[0];
  }
  updateMainImg(0);
}

colorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    colorBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    updateGallery();
  });
});

// Chọn dung lượng
const capacityBtns = document.querySelectorAll('.option-list--capacity .option-btn');
capacityBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    capacityBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    updateGallery();
  });
});

// Chuyển tab mô tả/thông số
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    tabBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const tab = this.getAttribute('data-tab');
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tab);
    });
  });
});

// Handle thumbnail gallery
document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.getElementById('mainProductImg');
    const thumbs = document.querySelectorAll('.thumb');
    const galleryIndex = document.querySelector('.gallery-slider-index');
    let currentIndex = 0;

    // Update main image when clicking thumbnails
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainImg.src = thumb.src;
            currentIndex = index;
            galleryIndex.textContent = `${currentIndex + 1}/${thumbs.length}`;
            
            // Update active state
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Product options handling
    const capacityBtns = document.querySelectorAll('.option-list--capacity .option-btn');
    const colorBtns = document.querySelectorAll('.option-list--color .option-btn');
    
    // Product variants data (you should replace this with your actual data)
    const productVariants = {
        '128': {
            'xanh': {
                price: '19.190.000đ',
                image: 'images/xanh-128-1.png'
            },
            'tim': {
                price: '19.290.000đ',
                image: 'images/trang.png'
            },
            'den': {
                price: '19.190.000đ',
                image: 'images/den.png'
            },
            'trang': {
                price: '19.190.000đ',
                image: 'images/trang.png'
            },
            'hong': {
                price: '19.190.000đ',
                image: 'images/grey.png'
            }
        },
        '256': {
            'xanh': {
                price: '21.190.000đ',
                image: 'images/grey.png'
            },
            // Add other color variants for 256GB
        },
        '512': {
            'xanh': {
                price: '23.190.000đ',
                image: 'images/xanh-128-3.png'
            },
            // Add other color variants for 512GB
        }
    };

    let currentCapacity = '128';
    let currentColor = 'xanh';

    // Handle capacity selection
    capacityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            capacityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCapacity = btn.dataset.capacity;
            updateProductDisplay();
        });
    });

    // Handle color selection
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentColor = btn.dataset.color;
            updateProductDisplay();
        });
    });

    function updateProductDisplay() {
        const variant = productVariants[currentCapacity]?.[currentColor];
        if (variant) {
            // Update price
            document.querySelector('.product-price-main').textContent = variant.price;
            
            // Update main image
            mainImg.src = variant.image;
            
            // Update first thumbnail
            if (thumbs[0]) {
                thumbs[0].src = variant.image;
            }
        }
    }
}); 