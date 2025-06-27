/**
 * Sequoia Boat Rentals & Concierge Services
 * Services Component with Tabbed Sliders
 */

(function () {
    const servicesHTML = `
    <div class="services section-padding" style="background-color: #f8f9fa;">
        <div class="container">
            <h2 class="section-heading text-center">Our Services</h2>
            <p class="section-subtitle text-center">From boat rentals to concierge services, we provide everything you need for your lake adventure.</p>

            <div class="services-slider-tabs">
                <button class="service-tab-button active" data-tab="boat-rentals-slider">
                    <i class="fas fa-ship"></i> Boat Rentals
                </button>
                <button class="service-tab-button" data-tab="concierge-slider">
                    <i class="fas fa-concierge-bell"></i> Concierge
                </button>
                <button class="service-tab-button" data-tab="add-ons-slider">
                    <i class="fas fa-plus-circle"></i> Add-ons
                </button>
            </div>

            <div class="service-sliders-container">
                <!-- Boat Rentals Slider -->
                <div id="boat-rentals-slider" class="service-slider-wrapper active">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <!-- Slide 1: Features -->
                            <div class="swiper-slide">
                                <div class="service-slide-content">
                                    <h3>Electric, Eco-friendly Inflatable Boats</h3>
                                    <p>Our premium electric boats provide a quiet, peaceful experience that lets you connect with nature without disturbing it.</p>
                                    <ul class="service-benefits">
                                        <li><i class="fas fa-check"></i> Quiet, zero-emission electric motors</li>
                                        <li><i class="fas fa-check"></i> Comfortable seating for 2-4 people</li>
                                        <li><i class="fas fa-check"></i> Easy to operate, no experience needed</li>
                                        <li><i class="fas fa-check"></i> 6+ hours of battery life</li>
                                        <li><i class="fas fa-check"></i> Safety equipment included (life jackets, etc.)</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Slide 2: Pricing -->
                            <div class="swiper-slide">
                                <div class="service-slide-content">
                                    <h4>Pricing Information</h4>
                                    <div class="pricing-table">
                                        <div class="pricing-row pricing-header"><div>Duration</div><div>Weekday</div><div>Weekend</div></div>
                                        <div class="pricing-row"><div>2 Hours</div><div>$70-80/hr</div><div>$80-90/hr</div></div>
                                        <div class="pricing-row"><div>4 Hours</div><div>$60-70/hr</div><div>$70-80/hr</div></div>
                                        <div class="pricing-row"><div>6 Hours</div><div>$50-60/hr</div><div>$60-70/hr</div></div>
                                        <div class="pricing-row"><div>Full Day (8 Hours)</div><div>$45/hr</div><div>$55/hr</div></div>
                                    </div>
                                    <a href="#booking-preview-container" class="btn btn-primary mt-3">Book Now</a>
                                </div>
                            </div>
                            <!-- Slide 3: Policies -->
                            <div class="swiper-slide">
                                <div class="service-slide-content">
                                    <h4>Rental Policies</h4>
                                    <ul class="service-policies">
                                        <li><i class="fas fa-info-circle"></i> Must be 18+ with valid ID to rent</li>
                                        <li><i class="fas fa-info-circle"></i> Boating license required (can obtain temporary)</li>
                                        <li><i class="fas fa-info-circle"></i> Security deposit required at pickup</li>
                                        <li><i class="fas fa-info-circle"></i> Free delivery to popular lakes</li>
                                        <li><i class="fas fa-info-circle"></i> Rentals include basic safety training</li>
                                    </ul>
                                    <a href="#booking-preview-container" class="btn btn-primary mt-3">Book Your Boat</a>
                                </div>
                            </div>
                        </div>
                        <!-- Navigation and Pagination moved inside .swiper -->
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>

                <!-- Concierge Slider -->
                <div id="concierge-slider" class="service-slider-wrapper">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><div class="service-slide-content concierge"><h4>Guided Tours</h4><p>Experience the lakes with a knowledgeable local guide. Perfect for discovering hidden spots.</p><span class="price">From $120</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content concierge"><h4>Professional Driver</h4><p>Don't have a boating license? Hire one of our licensed drivers to operate the boat for you.</p><span class="price">From $150</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content concierge"><h4>Lakeside Picnic Setup</h4><p>We'll arrange a beautiful lakeside picnic with local foods and refreshments.</p><span class="price">From $80</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content concierge"><h4>Photography Package</h4><p>Capture your adventure with a professional photographer for edited digital photos.</p><span class="price">From $200</span></div></div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>

                <!-- Add-ons Slider -->
                <div id="add-ons-slider" class="service-slider-wrapper">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>Cooler Rental</h4><p>Keep your drinks and snacks cold all day.</p><span class="price">$30/day</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>JBL Flip-6 Speaker</h4><p>Waterproof Bluetooth speaker for your soundtrack.</p><span class="price">$20/day</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>Dry Bags</h4><p>Keep your valuable belongings safe and dry.</p><span class="price">$10/day</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>GoPro Camera</h4><p>Capture your adventure with a waterproof GoPro.</p><span class="price">$40/day</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>Fishing Gear</h4><p>Basic fishing rods and tackle box for casual fishing.</p><span class="price">$25/day</span></div></div>
                            <div class="swiper-slide"><div class="service-slide-content add-on"><h4>Beach Essentials Kit</h4><p>Umbrella, towels, and chairs for lakeside comfort.</p><span class="price">$35/day</span></div></div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
    .services-slider-tabs {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    .service-tab-button {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 999px; /* Pill shape */
        background-color: transparent;
        color: var(--dark);
        transition: all 0.3s ease;
    }
    .service-tab-button:hover {
        background-color: #e9ecef;
        border-color: #ccc;
    }
    .service-tab-button.active {
        background-color: var(--primary);
        color: white;
        border-color: var(--primary);
    }
    .service-sliders-container .service-slider-wrapper {
        display: none;
    }
    .service-sliders-container .service-slider-wrapper.active {
        display: block;
    }
    .service-slider-wrapper .swiper {
      background-color: #ffffff;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: 2rem;
      position: relative;
    }
    .service-slide-content {
        min-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; /* Left-align content */
        text-align: left; /* Left-align text */
        width: 80%; /* Give some space on the sides */
        margin: 0 auto;
    }
    .service-slide-content h3, .service-slide-content h4 {
        margin-bottom: 1.5rem;
        width: 100%;
        text-align: center;
    }
    .service-benefits, .service-policies {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;
        align-self: flex-start;
    }
    .service-benefits li, .service-policies li {
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
    }
    .service-benefits i, .service-policies i {
        color: var(--primary);
        margin-right: 0.75rem;
    }
    .pricing-table {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        border: 1px solid #eee;
        border-radius: var(--radius-md);
    }
    .pricing-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid #eee;
    }
    .pricing-row:last-child { border-bottom: none; }
    .pricing-row div { padding: 0.75rem; text-align: center; }
    .pricing-row.pricing-header {
        background-color: #f8f9fa;
        font-weight: 600;
    }
    .service-slide-content .btn {
        align-self: center;
    }
    /* Swiper Styles */
    .swiper-button-next, .swiper-button-prev {
        color: var(--primary);
        width: 2.75rem;
        height: 2.75rem;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: background-color 0.3s;
    }
    .swiper-button-next:hover, .swiper-button-prev:hover {
        background-color: #f8f9fa;
    }
    .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 1rem;
        font-weight: bold;
    }
    .swiper-pagination {
        bottom: 1rem !important;
    }
    .swiper-pagination-bullet-active {
        background: var(--primary);
    }
    .concierge h4, .add-on h4 { text-align: center; width: 100%; }
    .concierge p, .add-on p { text-align: center; width: 100%; }
    .concierge .price, .add-on .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary);
        margin-top: 1rem;
        text-align: center;
        width: 100%;
    }
    </style>
    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.service-tab-button');
        const sliderWrappers = document.querySelectorAll('.service-slider-wrapper');

        const initSwiper = (selector) => {
            return new Swiper(selector, {
                loop: false,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        };
        
        const swipers = {
          'boat-rentals-slider': initSwiper('#boat-rentals-slider .swiper'),
          'concierge-slider': initSwiper('#concierge-slider .swiper'),
          'add-ons-slider': initSwiper('#add-ons-slider .swiper')
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetSliderId = tab.dataset.tab;

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                sliderWrappers.forEach(wrapper => {
                    if (wrapper.id === targetSliderId) {
                        wrapper.classList.add('active');
                    } else {
                        wrapper.classList.remove('active');
                    }
                });
            });
        });
    });
    </script>
    `;

    ComponentLoader.loadComponent('services-container', servicesHTML);
})();