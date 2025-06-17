/**
 * Sequoia Boat Rentals & Concierge Services
 * About Component
 */

(function () {
    const aboutHTML = `
    <div class="about section-padding scroll-zoom-section">
        <div class="scroll-zoom-bg" style="background-image: url('images/Heffley_Lake_1.png');"></div>
        <div class="container">
            <div class="about-content-wrapper">
                <h2 class="section-heading text-center">About Us</h2>
                <p class="section-subtitle text-center">Discover the joy of exploring Kamloops' pristine waters with our eco-friendly boat rental service</p>
                
                <div class="about-content grid grid-2">
                    <div class="about-image-container image-container">
                        <img src="images/happy_customer_on_a_inflatable_boat.png" alt="Happy customers enjoying a boat ride" class="about-image" loading="lazy">
                        <div class="about-image-secondary">
                            <img src="images/electric_inflatable_boat.png" alt="Electric inflatable boat" loading="lazy">
                        </div>
                    </div>
                    
                    <div class="about-text">
                        <h3>Your Gateway to Kamloops Lake Adventures</h3>
                        <p>At Sequoia Boat Rentals, we offer electric, eco-friendly inflatable boats to explore the pristine waters around Kamloops. From Heffley Lake to Shuswap, we make your lake adventure unforgettable.</p>
                        
                        <p>Our mission is simple: to provide accessible, environmentally friendly boating experiences that allow everyone to enjoy the stunning natural beauty of British Columbia's lakes.</p>
                        
                        <div class="about-features">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <div class="feature-text">
                                    <h4>Eco-Friendly</h4>
                                    <p>Our electric boats leave no pollution, ensuring pristine waters for generations to come.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-map-marked-alt"></i>
                                </div>
                                <div class="feature-text">
                                    <h4>Local Expertise</h4>
                                    <p>Explore hidden gems and secret spots with our insider knowledge of Kamloops lakes.</p>
                                </div>
                            </div>
                            
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-life-ring"></i>
                                </div>
                                <div class="feature-text">
                                    <h4>Safety First</h4>
                                    <p>All rentals include life jackets and comprehensive safety briefings.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#booking-preview-container" class="btn btn-primary mt-4">Book Your Experience</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* About Section Styles */
        .about.scroll-zoom-section {
            position: relative;
            background-color: transparent;
            z-index: 1;
            padding: var(--space-xl) 0;
        }

        .about .scroll-zoom-bg {
            display: none; /* Remove background image per latest request */
        }

        .about .about-content-wrapper {
            position: relative;
            z-index: 2;
            background-color: rgba(255, 255, 255, 0.85);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            box-shadow: var(--shadow-lg);
        }

        .about-content {
            align-items: center;
            gap: var(--space-xl);
        }
        
        .about-image-container {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }
        
        .about-image {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .about-image-secondary {
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 50%;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);
            border: 4px solid var(--white);
            overflow: hidden;
            display: none; /* Hidden by default, shown on larger screens */
        }
        
        .about-image-secondary img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        
        .about-text h3 {
            margin-bottom: var(--space-md);
            color: var(--primary-dark);
            font-weight: 700;
            position: relative;
            padding-bottom: var(--space-sm);
        }
        
        .about-text h3:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: var(--secondary);
        }
        
        .about-features {
            margin-top: var(--space-lg);
        }
        
        .feature-item {
            display: flex;
            margin-bottom: var(--space-md);
            align-items: flex-start;
        }
        
        .feature-icon {
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            background-color: rgba(78, 205, 196, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: var(--space-md);
            font-size: 1.25rem;
            color: var(--secondary);
        }
        
        .feature-text h4 {
            margin-bottom: var(--space-xs);
            color: var(--primary-dark);
        }
        
        .feature-text p {
            margin-bottom: 0;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        /* Media Queries */
        @media (min-width: 768px) {
            .about-image-secondary {
                display: block;
            }
        }
        
        @media (max-width: 767px) {
            .about-content {
                grid-template-columns: 1fr;
            }
            .about .scroll-zoom-bg {
                transform: none;
            }
            .about-text h3:after {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    </style>
    `;

    // Load the about component
    ComponentLoader.loadComponent('about-container', aboutHTML);

    // After component is injected, kick off the scroll-fade logic
    document.addEventListener('DOMContentLoaded', () => {
        const aboutSection = document.querySelector('#about-container .about.scroll-zoom-section');
        if (!aboutSection) return;
        const bg = aboutSection.querySelector('.scroll-zoom-bg');
        if (!bg) return;

        // Background effect removed; no observer needed.
    });
})(); 