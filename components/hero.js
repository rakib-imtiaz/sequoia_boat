/**
 * Sequoia Boat Rentals & Concierge Services
 * Hero Component with Video Background
 */

(function () {
    const heroHTML = `
    <div class="hero video-background">
        <video autoplay muted loop playsinline poster="images/people_riding_boats_lakes.png">
            <source src="videos/lake-video-background.mp4" type="video/mp4">
            <!-- Fallback for browsers that don't support video -->
        </video>
        
        <div class="video-overlay"></div>
        
        <div class="hero-content container">
            <div class="hero-text fade-in">
                <span class="hero-tagline">A Variety of Charters for Everyone</span>
                <h1>Inspirational Routes</h1>
                <p class="hero-subtitle">Discover the pristine waters surrounding Kamloops with our eco-friendly inflatable boats. Each lake offers a unique experience!</p>
                <div class="hero-cta">
                    <a href="#booking-preview-container" class="btn slide-up delay-1">Book Your Adventure</a>
                </div>
            </div>
        </div>
        
        <!-- Left/Right Navigation -->
        <div class="hero-navigation">
            <button class="nav-arrow prev" aria-label="Previous slide">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="nav-arrow next" aria-label="Next slide">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        
        <!-- Wave divider -->
        <div class="wave-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,64 C288,100 960,0 1440,80 L1440,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
        </div>
    </div>

    <style>
        /* Hero Styles */
        .hero {
            height: 100vh;
            min-height: 600px;
            position: relative;
            color: var(--white);
            display: flex;
            align-items: flex-end;
            margin-bottom: 0;
            padding-top: 80px; /* Reduced padding to account for header */
        }
        
        .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 10%;
        }
        
        .hero-text {
            text-align: center;
            max-width: 650px;
            background-color: transparent;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: var(--radius-md);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }
        
        .hero-tagline {
            display: block;
            font-family: var(--font-primary);
            font-size: 1rem;
            margin-bottom: var(--space-sm);
            color: var(--white);
            opacity: 0.9;
            font-weight: 100;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
        }
        
        .hero h1 {
            margin-bottom: var(--space-md);
            font-size: 2.5rem;
            font-weight: 100;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            line-height: 1.1;
            color: var(--white);
            text-transform: none;
        }

        .hero h1 .highlight {
            color: #4ecdc4;
            position: relative;
            display: inline-block;
        }
        
        .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: var(--space-md);
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
            color: var(--white);
            font-weight: 100;
            line-height: 1.5;
        }
        
        .hero-cta {
            display: flex;
            justify-content: center;
            margin-top: var(--space-md);
        }
        
        .hero-cta .btn {
            min-width: 180px;
            position: relative;
            overflow: hidden;
            font-size: 0.85rem;
            padding: 0.8rem 1.8rem;
            border-radius: 4px;
            letter-spacing: 0.5px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            color: white;
            font-weight: 100;
        }

        .hero-cta .btn:hover {
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .hero-navigation {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            z-index: 10;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
        }
        
        .nav-arrow {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-medium);
            font-size: 0.9rem;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
        
        .nav-arrow:hover {
            background-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }
        
        .nav-arrow:focus {
            outline: none;
        }

        .video-background {
            position: relative;
            overflow: hidden;
        }

        .video-background video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translateX(-50%) translateY(-50%);
            z-index: -1;
            object-fit: cover;
        }

        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
            z-index: 0;
        }
        
        /* Wave Divider */
        .wave-divider {
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 100px;
            z-index: 5;
            pointer-events: none;
            overflow: hidden;
            display: block;
            line-height: 0;
        }
        
        .wave-divider svg {
            width: 100%;
            height: 100%;
            display: block;
            transform-origin: bottom;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .wave-divider svg path {
            fill-opacity: 0.9;
            fill: var(--white);
            filter: drop-shadow(0 -5px 10px rgba(0, 0, 0, 0.1));
        }
        
        .hero:hover .wave-divider svg {
            transform: scaleY(1.05);
        }
        
        /* Media Queries */
        @media (min-width: 576px) {
            .hero h1 {
                font-size: 2.7rem;
            }
            
            .hero-subtitle {
                font-size: 1rem;
            }
        }
        
        @media (min-width: 768px) {
            .hero h1 {
                font-size: 3.2rem;
            }
            
            .hero-subtitle {
                font-size: 1.05rem;
            }
            
            .hero-text {
                padding: 2.5rem;
            }
            
            .hero-tagline {
                font-size: 1.2rem;
            }
        }
        
        @media (max-width: 768px) {
            .hero {
                min-height: 500px;
                height: 90vh;
            }
            
            .hero-content {
                padding-bottom: 6rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero-tagline {
                font-size: 0.95rem;
                margin-bottom: 0.5rem;
            }
            
            .hero-text {
                padding: 1.5rem;
                max-width: 90%;
                background-color: transparent;
            }
            
            .hero-subtitle {
                margin-bottom: 1.5rem;
                font-size: 0.9rem;
            }
            
            .hero-navigation {
                display: none;
            }
        }

        @media (max-width: 576px) {
            .hero-content {
                padding-bottom: 5rem;
            }
            
            .hero-text {
                padding: 1.25rem;
                max-width: 95%;
            }
            
            .hero h1 {
                font-size: 1.8rem;
                margin-bottom: 0.6rem;
            }
            
            .wave-divider {
                height: 80px;
            }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Video fallback logic
            const video = document.querySelector('.hero video');
            const videoSource = video.querySelector('source');
            
            // If video fails to load or browser doesn't support, use poster image
            video.addEventListener('error', () => {
                video.style.display = 'none';
                videoParent.classList.add('fallback');
            });
            
            videoSource.addEventListener('error', () => {
                video.style.display = 'none';
                video.parentElement.classList.add('fallback');
            });
            
            // Animation classes
            const fadeInElements = document.querySelectorAll('.fade-in');
            const slideUpElements = document.querySelectorAll('.slide-up');
            
            // Add animated class after a small delay
            setTimeout(() => {
                fadeInElements.forEach(el => el.classList.add('animated'));
                slideUpElements.forEach(el => el.classList.add('animated'));
            }, 300);
            
            // Slider functionality (for future multi-slide hero)
            const prevArrow = document.querySelector('.nav-arrow.prev');
            const nextArrow = document.querySelector('.nav-arrow.next');
            
            // Example slide handling (can be expanded for multiple slides)
            if (prevArrow && nextArrow) {
                prevArrow.addEventListener('click', () => {
                    console.log('Previous slide');
                });
                
                nextArrow.addEventListener('click', () => {
                    console.log('Next slide');
                });
            }
        });
    </script>
    `;

    // Load the hero component
    ComponentLoader.loadComponent('hero-container', heroHTML);
})(); 