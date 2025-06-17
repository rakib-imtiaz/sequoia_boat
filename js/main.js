/**
 * Sequoia Boat Rentals & Concierge Services
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Load Font Awesome for icons
    loadFontAwesome();

    // Initialize animations for elements
    initAnimations();

    // Smooth scrolling for anchor links
    initSmoothScrolling();

    // Initialize parallax effect
    initParallax();
});

/**
 * Load Font Awesome for icons
 */
function loadFontAwesome() {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    fontAwesomeLink.integrity = 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==';
    fontAwesomeLink.crossOrigin = 'anonymous';
    fontAwesomeLink.referrerPolicy = 'no-referrer';
    document.head.appendChild(fontAwesomeLink);
}

/**
 * Initialize animations for elements that should animate when they come into view
 */
function initAnimations() {
    // Get all elements that should animate when scrolled into view
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers that don't support Intersection Observer
        animatedElements.forEach(el => {
            el.classList.add('animated');
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    // Select all links with hashes
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if the anchor is on the current page
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header if present
                    behavior: 'smooth'
                });

                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

/**
 * Initialize parallax effect for sections
 */
function initParallax() {
    // Add parallax class to sections that should have parallax effect
    const sections = document.querySelectorAll('section, .hero, .footer');
    sections.forEach(section => {
        section.classList.add('parallax-section');
    });

    // Add CSS for parallax effect
    const style = document.createElement('style');
    style.textContent = `
        .parallax-section {
            position: relative;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            transform: translateZ(0);
            will-change: transform;
        }
        
        @media (max-width: 768px) {
            .parallax-section {
                background-attachment: scroll;
            }
        }
    `;
    document.head.appendChild(style);

    // Add parallax effect on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        // Apply parallax effect to elements with .parallax-bg class
        document.querySelectorAll('.parallax-bg').forEach(element => {
            const speed = element.dataset.speed || 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });

        // Apply subtle parallax effect to sections
        document.querySelectorAll('.parallax-section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const inView = (rect.top < window.innerHeight && rect.bottom > 0);

            if (inView) {
                const speed = 0.05;
                const yPos = (rect.top * speed);
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });

    // Add parallax background elements
    addParallaxBackgrounds();
}

/**
 * Add parallax background elements to sections
 */
function addParallaxBackgrounds() {
    // Add parallax background to about section
    const aboutSection = document.getElementById('about-container');
    if (aboutSection) {
        const aboutBg = document.createElement('div');
        aboutBg.className = 'parallax-bg';
        aboutBg.dataset.speed = '0.2';
        aboutSection.prepend(aboutBg);
    }

    // Add parallax background to features section
    const featuresSection = document.getElementById('features-container');
    if (featuresSection) {
        const featuresBg = document.createElement('div');
        featuresBg.className = 'parallax-bg';
        featuresBg.dataset.speed = '0.15';
        featuresSection.prepend(featuresBg);
    }

    // Add parallax background to lakes section
    const lakesSection = document.getElementById('lakes-container');
    if (lakesSection) {
        const lakesBg = document.createElement('div');
        lakesBg.className = 'parallax-bg';
        lakesBg.dataset.speed = '0.25';
        lakesSection.prepend(lakesBg);
    }

    // Add CSS for parallax backgrounds
    const style = document.createElement('style');
    style.textContent = `
        .parallax-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }
        
        #about-container .parallax-bg {
            background: radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0) 70%);
        }
        
        #features-container .parallax-bg {
            background: radial-gradient(circle at 20% 80%, rgba(11, 83, 148, 0.08) 0%, rgba(11, 83, 148, 0) 60%);
        }
        
        #lakes-container .parallax-bg {
            background: radial-gradient(circle at 90% 10%, rgba(78, 205, 196, 0.08) 0%, rgba(78, 205, 196, 0) 70%);
        }
    `;
    document.head.appendChild(style);
} 