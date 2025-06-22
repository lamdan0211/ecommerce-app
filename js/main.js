document.addEventListener('DOMContentLoaded', function() {
    // ===== LOCATION DROPDOWN (Chọn khu vực giao hàng) =====
    const locationDropdown = document.querySelector('.location-dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (dropdownToggle) {
        // Mở/đóng dropdown
        dropdownToggle.addEventListener('click', function() {
            locationDropdown.classList.toggle('active');
        });
        // Đóng dropdown khi click ra ngoài
        document.addEventListener('click', function(event) {
            if (!locationDropdown.contains(event.target)) {
                locationDropdown.classList.remove('active');
            }
        });
        // Chọn khu vực
        const locationLinks = document.querySelectorAll('.dropdown-menu ul li a');
        locationLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLocation = this.textContent;
                document.querySelector('.dropdown-toggle span').textContent = `Xem giá, đặt hàng: ${selectedLocation}`;
                locationDropdown.classList.remove('active');
            });
        });
    }
    
    // ===== MAIN SLIDER (Banner chính trang chủ) =====
    const mainSlides = document.querySelectorAll('.main-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    let mainSliderInterval = null;
    let isMainSliderPaused = false;
    
    // Hiển thị slide theo index
    function showSlide(index) {
        mainSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        mainSlides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Tự động chuyển slide
    function startMainSlider() {
        if (mainSliderInterval) clearInterval(mainSliderInterval);
        mainSliderInterval = setInterval(() => {
            if (!isMainSliderPaused) {
                currentSlide = (currentSlide + 1) % mainSlides.length;
                showSlide(currentSlide);
            }
        }, 2200);
    }
    
    // Khởi tạo slider
    showSlide(currentSlide);
    startMainSlider();
    
    // Chuyển slide khi click dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Dừng slider khi hover/focus
    const mainSlider = document.querySelector('.main-slider');
    if (mainSlider) {
        mainSlider.addEventListener('mouseenter', () => {
            isMainSliderPaused = true;
        });
        mainSlider.addEventListener('mouseleave', () => {
            isMainSliderPaused = false;
        });
        mainSlider.addEventListener('focusin', () => {
            isMainSliderPaused = true;
        });
        mainSlider.addEventListener('focusout', () => {
            isMainSliderPaused = false;
        });
    }
    
    // ===== PRODUCT CAROUSEL (Slider sản phẩm nổi bật) =====
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.querySelector('.carousel-container .prev');
    const nextBtn = document.querySelector('.carousel-container .next');
    const productCards = document.querySelectorAll('.carousel-wrapper .product-card');
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile && carouselWrapper && prevBtn && nextBtn && productCards.length > 0) {
        let carouselPosition = 0;
        const cardWidth = productCards[0].offsetWidth + 15; // Card width + gap
        const visibleCards = 5;
        const maxPosition = (productCards.length - visibleCards) * cardWidth;
    
        // Hiển thị/ẩn nút chuyển slider
        function updateProductArrowVisibility() {
            if (carouselPosition <= 0) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
            }
            if (carouselPosition >= maxPosition) {
                nextBtn.style.display = 'none';
            } else {
                nextBtn.style.display = 'flex';
            }
        }
    
        // Di chuyển slider
        function moveCarousel(direction) {
            if (direction === 'next' && carouselPosition < maxPosition) {
                carouselPosition += cardWidth;
            } else if (direction === 'prev' && carouselPosition > 0) {
                carouselPosition -= cardWidth;
            }
            carouselWrapper.style.transform = `translateX(-${carouselPosition}px)`;
            updateProductArrowVisibility();
        }
    
        prevBtn.addEventListener('click', () => moveCarousel('prev'));
        nextBtn.addEventListener('click', () => moveCarousel('next'));
    
        updateProductArrowVisibility();
    }
    
    // ===== CUSTOMER SLIDER (Slider khách hàng) =====
    const customerWrapper = document.querySelector('.customer-wrapper');
    const customerPrevBtn = document.querySelector('.customer-slider .prev');
    const customerNextBtn = document.querySelector('.customer-slider .next');
    const customerSlides = document.querySelectorAll('.customer-slide');
    
    let customerPosition = 0;
    const slideWidth = customerSlides[0].offsetWidth + 20; // Slide width + gap
    const visibleSlides = 3;
    const maxCustomerPosition = (customerSlides.length - visibleSlides) * slideWidth;
    
    // Hiển thị/ẩn nút chuyển slider khách hàng
    function updateCustomerArrowVisibility() {
        if (customerPosition <= 0) {
            customerPrevBtn.style.display = 'none';
        } else {
            customerPrevBtn.style.display = 'flex';
        }
        if (customerPosition >= maxCustomerPosition) {
            customerNextBtn.style.display = 'none';
        } else {
            customerNextBtn.style.display = 'flex';
        }
    }
    
    // Di chuyển slider khách hàng
    function moveCustomerSlider(direction) {
        if (direction === 'next' && customerPosition < maxCustomerPosition) {
            customerPosition += slideWidth;
        } else if (direction === 'prev' && customerPosition > 0) {
            customerPosition -= slideWidth;
        }
        customerWrapper.style.transform = `translateX(-${customerPosition}px)`;
        updateCustomerArrowVisibility();
    }
    
    customerPrevBtn.addEventListener('click', () => moveCustomerSlider('prev'));
    customerNextBtn.addEventListener('click', () => moveCustomerSlider('next'));
    
    updateCustomerArrowVisibility();
    
    // ===== BRAND FILTER (Lọc sản phẩm theo hãng) =====
    const brandBtns = document.querySelectorAll('.brand-btn');
    
    brandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            brandBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // (Có thể thêm code lọc sản phẩm ở đây)
        });
    });
    
    // ===== NEWS FILTER (Lọc tin tức) =====
    const newsBtns = document.querySelectorAll('.news-btn');
    
    newsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            newsBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // (Có thể thêm code lọc tin tức ở đây)
        });
    });
    
    // ===== COUNTDOWN TIMER (Đếm ngược ở banner sản phẩm) =====
    // function updateCountdown() {
    //     const countdownElement = document.querySelector('.section-header h2');
    //     if (!countdownElement || !countdownElement.textContent.includes('KẾT THÚC SAU')) return;
        
    //     // Parse the current time from the element
    //     let timeString = countdownElement.textContent.replace('KẾT THÚC SAU: ', '');
    //     let [hours, minutes, seconds] = timeString.split(':').map(Number);
        
    //     // Decrease one second
    //     seconds--;
        
    //     // Handle time rollover
    //     if (seconds < 0) {
    //         seconds = 59;
    //         minutes--;
            
    //         if (minutes < 0) {
    //             minutes = 59;
    //             hours--;
                
    //             if (hours < 0) {
    //                 // Reset to a default time when countdown reaches zero
    //                 hours = 8;
    //                 minutes = 0;
    //                 seconds = 0;
    //             }
    //         }
    //     }
        
    //     // Format the time with leading zeros
    //     const formattedHours = hours.toString().padStart(2, '0');
    //     const formattedMinutes = minutes.toString().padStart(2, '0');
    //     const formattedSeconds = seconds.toString().padStart(2, '0');
        
    //     // Update the countdown display
    //     countdownElement.textContent = `KẾT THÚC SAU: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    // }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    
    // ===== RESPONSIVE (Tối ưu hiển thị slider theo màn hình) =====
    function setupResponsive() {
        // Adjust carousel visible items based on screen width
        const screenWidth = window.innerWidth;
        
        if (screenWidth < 987) {
            // For mobile view
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.style.minWidth = 'calc(50% - 8px)';
            });
        } else if (screenWidth < 1024) {
            // For tablet view
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.style.minWidth = 'calc(33.333% - 10px)';
            });
        }
    }
    
    // Initial setup
    setupResponsive();
    
    // Update on window resize
    window.addEventListener('resize', setupResponsive);

    // ===== CATEGORY SCROLL NGANG (Mobile) =====
    const catScroll = document.querySelector('.category-scroll');
    const catBtnLeft = document.querySelector('.category-arrow.left');
    const catBtnRight = document.querySelector('.category-arrow.right');
    const catScrollAmount = 150;

    if (catBtnLeft && catBtnRight && catScroll) {
        catBtnLeft.addEventListener('click', () => {
            catScroll.scrollBy({ left: -catScrollAmount, behavior: 'smooth' });
        });
        catBtnRight.addEventListener('click', () => {
            catScroll.scrollBy({ left: catScrollAmount, behavior: 'smooth' });
        });
    }

    // Drag to scroll (mouse)
    let catIsDown = false;
    let catStartX;
    let catScrollLeft;
    if (catScroll) {
        catScroll.addEventListener('mousedown', (e) => {
            catIsDown = true;
            catScroll.classList.add('dragging');
            catStartX = e.pageX - catScroll.offsetLeft;
            catScrollLeft = catScroll.scrollLeft;
        });
        catScroll.addEventListener('mouseleave', () => {
            catIsDown = false;
            catScroll.classList.remove('dragging');
        });
        catScroll.addEventListener('mouseup', () => {
            catIsDown = false;
            catScroll.classList.remove('dragging');
        });
        catScroll.addEventListener('mousemove', (e) => {
            if (!catIsDown) return;
            e.preventDefault();
            const x = e.pageX - catScroll.offsetLeft;
            const walk = (x - catStartX) * 1.5;
            catScroll.scrollLeft = catScrollLeft - walk;
        });
        // Touch to scroll (mobile)
        let catTouchStartX = 0;
        let catTouchScrollLeft = 0;
        catScroll.addEventListener('touchstart', (e) => {
            catTouchStartX = e.touches[0].pageX;
            catTouchScrollLeft = catScroll.scrollLeft;
        });
        catScroll.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX;
            const walk = (catTouchStartX - x) * 1.2;
            catScroll.scrollLeft = catTouchScrollLeft + walk;
        });
    }
});