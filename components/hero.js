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
                <p class="hero-subtitle">Eco-friendly electric inflatable boats for unforgettable lake adventures</p>
                <div class="hero-cta">
                    <a href="#booking-preview-container" class="btn btn-accent btn-lg slide-up delay-1">LEARN MORE</a>
                </div>
            </div>
        </div>
        
        <div class="hero-slider-controls">
            <button class="slider-arrow prev"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-arrow next"><i class="fas fa-chevron-right"></i></button>
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
            align-items: center;
            text-align: center;
            margin-bottom: 0;
            padding-top: 80px; /* Reduced padding to account for header */
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1000px;
            margin: 0 auto;
            padding: 1rem;
            width: 100%;
            text-align: center;
        }
        
        .hero-text {
            text-align: center;
            max-width: 100%;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            padding: 2rem;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hero-tagline {
            display: block;
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.5rem;
            margin-bottom: var(--space-md);
            color: var(--white);
            opacity: 0.9;
        }
        
        .hero h1 {
            margin-bottom: var(--space-md);
            font-size: 3rem;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            line-height: 1.2;
            color: var(--white);
            text-transform: none;
        }

        .hero h1 .highlight {
            color: #4ecdc4;
            position: relative;
            display: inline-block;
        }
        
        .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: var(--space-lg);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            color: var(--white);
            font-weight: 400;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .hero-cta {
            display: flex;
            justify-content: center;
            margin-top: var(--space-lg);
        }
        
        .hero-cta .btn {
            margin: 0 auto;
            min-width: 180px;
            position: relative;
            overflow: hidden;
            font-size: 0.9rem;
            padding: 0.9rem 2rem;
            border-radius: 3px;
            letter-spacing: 1px;
            background-color: #4ecdc4;
            border: none;
        }

        .hero-cta .btn-accent {
            background-color: #4ecdc4;
            border-color: #4ecdc4;
            box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
        }

        .hero-cta .btn-accent:hover {
            background-color: #36b1a8;
            border-color: #36b1a8;
            box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
        }
        
        .hero-slider-controls {
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
        
        .slider-arrow {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-medium);
            font-size: 0.9rem;
        }
        
        .slider-arrow:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
        
        .slider-arrow:focus {
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
            background: rgba(0, 0, 0, 0.4);
            z-index: 0;
        }
        
        /* Wave Divider */
        .wave-divider {
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 120px;
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
            fill-opacity: 0.8;
            filter: drop-shadow(0 -5px 10px rgba(0, 0, 0, 0.1));
        }
        
        .hero:hover .wave-divider svg {
            transform: scaleY(1.05);
        }
        
        /* Media Queries */
        @media (min-width: 576px) {
            .hero h1 {
                font-size: 3.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.25rem;
            }
            
            .hero-cta .btn {
                font-size: 0.9rem;
                padding: 0.9rem 2.5rem;
            }
            
            .hero-slider-controls {
                padding: 0 30px;
            }
        }
        
        @media (min-width: 768px) {
            .hero-content {
                padding: 2rem;
            }
            
            .hero-tagline {
                font-size: 1.8rem;
            }
            
            .hero h1 {
                font-size: 4rem;
            }
            
            .hero-subtitle {
                font-size: 1.4rem;
            }
            
            .hero-cta .btn {
                font-size: 1rem;
            }
            
            .hero-slider-controls {
                padding: 0 40px;
            }
            
            .slider-arrow {
                width: 50px;
                height: 50px;
            }
        }

        @media (min-width: 1200px) {
            .hero h1 {
                font-size: 4.5rem;
            }
            
            .hero-tagline {
                font-size: 2rem;
            }
        }
        
        @media (max-width: 767px) {
            .hero {
                height: 100vh;
                min-height: 500px;
                padding-top: 70px;
            }
            
            .hero-text {
                padding: 1.5rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-tagline {
                font-size: 1.2rem;
            }
            
            .hero-subtitle {
                font-size: 1rem;
            }
            
            .hero-cta .btn {
                padding: 0.8rem 1.5rem;
            }
            
            .hero-slider-controls {
                display: none; /* Hide slider controls on mobile */
            }
            
            .wave-divider {
                height: 60px; /* Smaller wave on mobile */
            }
            
            .wave-divider svg path {
                fill-opacity: 0.9; /* More opaque on mobile */
            }
        }
    </style>
    
    <script>
        // Load Playfair Display font for the hero tagline
        document.addEventListener('DOMContentLoaded', function() {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
            document.head.appendChild(link);
        });
    </script>
    `;

    // Load the hero component
    ComponentLoader.loadComponent('hero-container', heroHTML);
})(); 