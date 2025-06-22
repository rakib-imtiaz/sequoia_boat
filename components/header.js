/**
 * Sequoia Boat Rentals & Concierge Services
 * Header Component
 */

(function () {
    const headerHTML = `
    <header class="header">
        <div class="main-header">
            <div class="container">
                <a href="index.html" class="logo">
                    <img src="images/logo_transparent.png" alt="Sequoia logo">
                    <span>Sequoia</span>
                </a>
                    <nav class="main-nav">
                    <ul>
                        <li><a href="#hero-container"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#about-container"><i class="fas fa-info-circle"></i> About</a></li>
                        <li><a href="#services-container"><i class="fas fa-concierge-bell"></i> Services</a></li>
                        <li><a href="#lakes-container"><i class="fas fa-water"></i> Lakes</a></li>
                        <li><a href="#footer-container"><i class="fas fa-envelope"></i> Contact</a></li>
                        </ul>
                </nav>
                <div class="header-actions">
                    <a href="#booking-preview-container" class="btn btn-book-now">
                        <i class="fas fa-plus"></i> Book Now
                    </a>
                </div>
                <button class="mobile-nav-toggle" aria-label="Toggle Navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                </button>
            </div>
        </div>
    </header>

    <style>
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .main-header {
            background-color: transparent;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .header.scrolled .main-header {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: 0 2px 15px rgba(0,0,0,0.07);
            border-bottom-color: transparent;
        }

        .main-header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: var(--white);
            font-size: 2.2rem;
            font-weight: 700;
            transition: color 0.3s ease;
        }
        .header.scrolled .logo {
            color: var(--primary);
        }

        .logo img {
            height: 65px;
            margin-right: 0.5rem;
        }
        
        .main-nav ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .main-nav li {
            margin: 0 1.25rem;
        }
        .main-nav a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: color 0.2s ease;
        }
        .header.scrolled .main-nav a {
            color: var(--dark);
        }
        .main-nav a:hover,
        .main-nav a.active {
            color: var(--secondary);
        }
        .header.scrolled .main-nav a:hover,
        .header.scrolled .main-nav a.active {
            color: var(--primary);
        }
        
        .header-actions {
            display: flex;
            align-items: center;
        }
        
        .btn-book-now {
            background: linear-gradient(90deg, #1cb5e0, #0072ff);
            color: white;
            padding: 0.6rem 1.25rem;
            border-radius: 50px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            white-space: nowrap;
            z-index: 100;
        }
        .btn-book-now:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 114, 255, 0.3);
            color: white;
        }
        
        .mobile-nav-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1001;
            padding: 0;
        }
        
        .mobile-nav-toggle span {
            display: block;
            width: 24px;
            height: 2px;
            background-color: var(--white);
            border-radius: 1px;
            transition: all 0.3s ease;
        }
        .mobile-nav-toggle span:not(:last-child) {
            margin-bottom: 6px;
        }
        .header.scrolled .mobile-nav-toggle span {
            background-color: var(--dark);
        }
        /* Hamburger animation when open */
        .mobile-nav-toggle.open span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
            }
        .mobile-nav-toggle.open span:nth-child(2) {
            opacity: 0;
        }
        .mobile-nav-toggle.open span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        @media (max-width: 992px) {
            .main-nav {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                padding: 1.5rem 0;
                display: none; /* Hidden by default on mobile */
            }
            .main-nav.show {
                display: flex;
            }
            .header.scrolled .main-nav a {
                color: var(--dark);
            }
            .main-nav a {
                color: var(--dark);
                font-size: 1.1rem;
            }
            .logo img {
                height: 50px;
            }
            .logo {
                font-size: 1.8rem;
            }
            .btn-book-now {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
        }
        
        @media (max-width: 576px) {
            .logo img {
                height: 40px;
            }
            .logo {
                font-size: 1.5rem;
            }
            .btn-book-now {
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
                position: relative;
                z-index: 1001;
            }
            .main-header .container {
                height: 70px;
            }
        }
    </style>
    `;

    // Load the header component
    ComponentLoader.loadComponent('header-container', headerHTML);

    // Header scroll and active link functionality
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.main-nav a');
        const sections = document.querySelectorAll('div[id$="-container"]');

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile nav toggle
        const mobileToggle = header.querySelector('.mobile-nav-toggle');
        const mainNav = header.querySelector('.main-nav');
        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('open');
                mainNav.classList.toggle('show');
            });
        }
    });
})(); 