class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <a href="index.html" aria-label="Sequoia Boat Rentals Home">
                <img src="images/logo_transparent.png" alt="Sequoia Boat Rentals Logo" class="logo-img">
                <span class="logo-text">
                  <span class="logo-primary">Sequoia</span>
                  <span class="logo-secondary">Boat Rentals</span>
                </span>
              </a>
            </div>

            <nav class="main-nav">
              <ul class="nav-links">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="services.html" class="nav-link">Services</a></li>
                <li><a href="lakes.html" class="nav-link">Lakes</a></li>
                <li><a href="booking.html" class="nav-link">Book Now</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
              </ul>
            </nav>

            <div class="header-actions">
              <div class="header-contact">
                <a href="tel:2505557890" class="header-phone">
                  <i class="fas fa-phone-alt"></i>
                  <span class="phone-number">(250) 555-7890</span>
                </a>
              </div>
              <div class="header-cta">
                <a href="booking.html" class="btn btn-primary">Book Now</a>
              </div>
              <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" id="mobileMenuToggle">
                <span class="toggle-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-header">
          <h3>Menu</h3>
          <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="container">
          <ul class="mobile-nav-links">
            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="services.html"><i class="fas fa-concierge-bell"></i> Services</a></li>
            <li><a href="lakes.html"><i class="fas fa-water"></i> Lakes</a></li>
            <li><a href="booking.html"><i class="fas fa-calendar-check"></i> Book Now</a></li>
            <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact</a></li>
          </ul>
          <div class="mobile-cta">
            <a href="tel:2505557890" class="mobile-phone">
              <i class="fas fa-phone-alt"></i> Call Us: (250) 555-7890
            </a>
            <a href="booking.html" class="btn btn-primary btn-block">Book Your Adventure</a>
          </div>
        </div>
      </div>
    `;

    // Wait for DOM to fully load before attaching event listeners
    setTimeout(() => {
      // Add event listener for mobile menu toggle with ID selector
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenuClose = document.getElementById('mobileMenuClose');
      
      if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
          document.body.classList.toggle('mobile-menu-open');
        });
      }
      
      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
          document.body.classList.remove('mobile-menu-open');
        });
      }

      // Close mobile menu when clicking on links
      const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
          document.body.classList.remove('mobile-menu-open');
        });
      });

      // Add scroll effect for header
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          document.querySelector('.site-header').classList.add('scrolled');
        } else {
          document.querySelector('.site-header').classList.remove('scrolled');
        }
      });

      // Add active class to current page link
      const currentPage = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.nav-link');
      const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
      
      const setActiveLink = (links) => {
        links.forEach(link => {
          const linkHref = link.getAttribute('href');
          if (linkHref === currentPage || 
              (currentPage === '' && linkHref === 'index.html') ||
              (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
          }
        });
      };
      
      setActiveLink(navLinks);
      setActiveLink(mobileLinks);
    }, 0);
  }
}

customElements.define('header-component', HeaderComponent);
