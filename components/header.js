/**
 * Sequoia Boat Rentals & Concierge Services
 * Header Component
 */

(function () {
    const headerHTML = `
    <div class="header">
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-inner">
                    <div class="contact-info">
                        <span class="contact-item"><i class="fas fa-phone-alt"></i> Call us: (250) 555-7890</span>
                        <span class="contact-item"><i class="fas fa-map-marker-alt"></i> Kamloops, BC, Canada</span>
                    </div>
                    <div class="language-selector">
                        <a href="https://sequoiaservices.ca/" class="website-link" target="_blank">sequoiaservices.ca</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="main-header">
            <div class="container">
                <div class="header-inner">
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo_transparent.png" alt="Sequoia Boat Rentals" class="logo-img">
                            <div class="logo-text">
                                <span class="logo-title">Sequoia</span>
                                <span class="logo-subtitle">BOAT RENTALS</span>
                            </div>
                        </a>
                    </div>
                    
                    <nav class="main-nav">
                        <ul class="nav-menu">
                            <li class="nav-item"><a href="#hero-container" class="nav-link active">Home</a></li>
                            <li class="nav-item"><a href="#about-container" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="#services-container" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#lakes-container" class="nav-link">Lakes</a></li>
                            <li class="nav-item"><a href="#booking-preview-container" class="nav-link">Booking</a></li>
                            <li class="nav-item"><a href="#footer-container" class="nav-link">Contact Us</a></li>
                        </ul>
                        <div class="mobile-nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* Header Styles */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: all var(--transition-medium);
        }
        
        /* Top Bar */
        .top-bar {
            background-color: transparent; /* Transparent by default */
            padding: 8px 0;
            font-size: 0.85rem;
            color: var(--white);
            transition: background-color var(--transition-medium);
        }
        
        /* Colored when scrolled */
        .header.scrolled .top-bar {
            background-color: #0b5394;
        }
        
        .top-bar-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .contact-info {
            display: flex;
        }
        
        .contact-item {
            margin-right: 20px;
            display: flex;
            align-items: center;
        }
        
        .contact-item i {
            margin-right: 6px;
            font-size: 0.9rem;
        }
        
        .language-selector {
            display: flex;
            align-items: center;
        }
        
        .lang-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--white);
            color: var(--primary);
            font-weight: 600;
            font-size: 0.8rem;
            cursor: pointer;
        }
        
        .website-link {
            color: var(--white);
            font-size: 0.85rem;
            font-weight: 600;
            text-decoration: none;
            transition: color var(--transition-fast);
            display: flex;
            align-items: center;
        }
        
        .website-link:hover {
            color: var(--secondary);
        }
        
        .website-link::before {
            content: '\f0ac';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            margin-right: 6px;
            font-size: 0.9rem;
        }
        
        /* Main Header */
        .main-header {
            background-color: rgba(255, 255, 255, 0);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        .header.scrolled .main-header {
            background-color: #0b5394;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo a {
            display: flex;
            align-items: center;
            color: var(--white);
            text-decoration: none;
        }
        
        .logo-img {
            max-height: 50px;
            width: auto;
            margin-right: 10px;
        }
        
        .logo-text {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }
        
        .logo-title {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .logo-subtitle {
            font-size: 0.75rem;
            letter-spacing: 2px;
        }
        
        .main-nav {
            display: flex;
            align-items: center;
        }
        
        .nav-menu {
            display: flex;
            align-items: center;
        }
        
        .nav-item {
            margin-left: 1.5rem;
        }
        
        .nav-link {
            color: var(--white);
            font-weight: 500;
            position: relative;
            padding: 0.25rem 0;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
        }
        
        .nav-link:hover, .nav-link:focus {
            color: var(--secondary);
        }
        
        .nav-link.active {
            color: var(--secondary);
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--secondary);
            border-radius: var(--radius-full);
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after, .nav-link:focus::after, .nav-link.active::after {
            width: 100%;
        }
        
        .mobile-nav-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 22px;
            cursor: pointer;
            z-index: 1001;
        }
        
        .mobile-nav-toggle span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--white);
            transition: all var(--transition-medium);
        }
        
        /* Mobile Navigation */
        @media (max-width: 991px) {
            .top-bar {
                display: none;
            }
            
            .nav-menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                max-width: 400px;
                height: 100vh;
                background-color: var(--primary-dark);
                box-shadow: var(--shadow-md);
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 2rem;
                transition: right var(--transition-medium);
                overflow-y: auto;
                z-index: 999;
            }
            
            .nav-menu.active {
                right: 0;
            }
            
            .nav-item {
                width: 100%;
                margin: 0.75rem 0;
                text-align: center;
            }
            
            .nav-link {
                display: block;
                width: 100%;
                padding: 0.75rem 0;
                font-size: 1.2rem;
            }
            
            .mobile-nav-toggle {
                display: flex;
            }
            
            .mobile-nav-toggle.active span:nth-child(1) {
                transform: translateY(10px) rotate(45deg);
            }
            
            .mobile-nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-nav-toggle.active span:nth-child(3) {
                transform: translateY(-10px) rotate(-45deg);
            }
            
            body.nav-open {
                overflow: hidden;
            }
        }
        
        @media (max-width: 576px) {
            .logo-img {
                max-height: 40px;
            }
            
            .logo-title {
                font-size: 1.2rem;
            }
            
            .logo-subtitle {
                font-size: 0.65rem;
            }
        }
    </style>

    <script>
        // Mobile navigation toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileToggle = document.querySelector('.mobile-nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const body = document.body;
            
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                    mobileToggle.classList.toggle('active');
                    body.classList.toggle('nav-open');
                });
                
                // Close menu when clicking a nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', function() {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                        body.classList.remove('nav-open');
                    });
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!event.target.closest('.nav-menu') && !event.target.closest('.mobile-nav-toggle')) {
                        if (navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                            mobileToggle.classList.remove('active');
                            body.classList.remove('nav-open');
                        }
                    }
                });
            }
        });
    </script>
    `;

    // Load the header component
    ComponentLoader.loadComponent('header-container', headerHTML, function () {
        // After the header is loaded, add scroll event listener
        const header = document.querySelector('.header');

        if (header) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Check active nav item based on scroll position
            function updateActiveNavLink() {
                const sections = document.querySelectorAll('section[id], div[id]');
                const scrollPosition = window.scrollY + 100;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }

            window.addEventListener('scroll', updateActiveNavLink);
            updateActiveNavLink(); // Call on initial load
        }
    });
})(); 