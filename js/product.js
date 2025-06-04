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
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
  },
  tim: {
    128: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
  },
  den: {
    128: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
  },
  trang: {
    128: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
  },
  hong: {
    128: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    256: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
    ],
    512: [
      'images/xanh-128-1.png',
      'images/xanh-128-2.png',
      'images/xanh-128-3.png',
      'images/xanh-128-4.png',
      'images/xanh-128-5.png',
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