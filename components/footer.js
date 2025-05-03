class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C150,10 350,90 500,50 C650,10 850,90 1000,50 C1150,10 1350,90 1440,50 L1440,100 L0,100 Z" class="wave" />
          </svg>
        </div>
        <div class="container">
          <div class="footer-content">
            <div class="footer-brand">
              <div class="footer-logo">
                <a href="index.html">
                  <img src="images/logo_transparent.png" alt="Sequoia Boat Rentals Logo" class="footer-logo-img">
                </a>
              </div>
              <p class="footer-tagline">Explore Kamloops Lakes with eco-friendly inflatable boats</p>
              <div class="footer-contact-info">
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Kamloops, BC, Canada</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <a href="tel:2505557890">(250) 555-7890</a>
                </div>
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:info@sequoiaboatrentals.com">info@sequoiaboatrentals.com</a>
                </div>
              </div>
              <div class="social-links">
                <a href="https://facebook.com/" target="_blank" aria-label="Facebook" class="social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/" target="_blank" aria-label="Instagram" class="social-link"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/" target="_blank" aria-label="Twitter" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="https://youtube.com/" target="_blank" aria-label="YouTube" class="social-link"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div class="footer-links">
              <div class="footer-nav">
                <h3 class="footer-heading">Navigation</h3>
                <ul class="footer-nav-list">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="lakes.html">Lakes</a></li>
                  <li><a href="booking.html">Book Now</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
              
              <div class="footer-services">
                <h3 class="footer-heading">Services</h3>
                <ul class="footer-nav-list">
                  <li><a href="services.html#boat-rentals">Boat Rentals</a></li>
                  <li><a href="services.html#concierge">Concierge Services</a></li>
                  <li><a href="services.html#delivery">Lake Delivery</a></li>
                  <li><a href="services.html#boating-license">License Assistance</a></li>
                  <li><a href="services.html#addons">Equipment Add-ons</a></li>
                </ul>
              </div>
              
              <div class="footer-lakes">
                <h3 class="footer-heading">Popular Lakes</h3>
                <ul class="footer-nav-list">
                  <li><a href="lakes.html#heffley-lake">Heffley Lake</a></li>
                  <li><a href="lakes.html#paul-lake">Paul Lake</a></li>
                  <li><a href="lakes.html#kamloops-lake">Kamloops Lake</a></li>
                  <li><a href="lakes.html#shuswap-lake">Shuswap Lake</a></li>
                  <li><a href="lakes.html#monte-lake">Monte Lake</a></li>
                  <li><a href="lakes.html#lac-le-jeune">Lac Le Jeune</a></li>
                </ul>
              </div>
              
              <div class="footer-book">
                <h3 class="footer-heading">Book Now</h3>
                <p class="footer-book-text">Ready for an unforgettable lake adventure?</p>
                <a href="booking.html" class="btn btn-secondary btn-block">Reserve Your Boat</a>
                <p class="footer-hours">
                  <strong>Hours:</strong> 7 days a week<br>
                  May through September<br>
                  8am - 8pm
                </p>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p class="copyright">&copy; ${new Date().getFullYear()} Sequoia Boat Rentals & Concierge Services. All rights reserved.</p>
            <ul class="footer-legal">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="back-to-top" id="backToTop" title="Back to Top">
          <i class="fas fa-chevron-up"></i>
        </div>
      </footer>
    `;
    
    // Back to top functionality
    const backToTopButton = this.querySelector('#backToTop');
    
    if (backToTopButton) {
      // Show button after scrolling
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      });
      
      // Scroll to top on click
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
}

customElements.define('footer-component', FooterComponent);
