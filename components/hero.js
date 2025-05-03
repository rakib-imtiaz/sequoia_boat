class HeroComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="hero-section">
        <div class="hero-image">
          <img src="images/hero-bg.jpg" alt="Inflatable boats on Kamloops lake" class="hero-bg" 
               onerror="this.onerror=null; this.src='https://via.placeholder.com/1920x1080.jpg?text=Sequoia+Boat+Rentals+-+Explore+Kamloops+Lakes';">
        </div>
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Explore Kamloops Lakes with Sequoia Boat Rentals & Concierge Services</h1>
            <p class="hero-subtitle">Electric, eco-friendly inflatable boats for unforgettable adventures</p>
            <div class="hero-cta">
              <a href="booking.html" class="btn btn-primary btn-large">Book Your Adventure Now</a>
              <a href="lakes.html" class="btn btn-secondary btn-large">Discover Lakes</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
