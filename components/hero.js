class HeroComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Check if video background is enabled - but default to false if not explicitly set
    const useVideo = this.hasAttribute('video-background') && this.getAttribute('video-background') === 'true';
    
    // Use a placeholder image that is more reliable
    const placeholderImageUrl = 'https://via.placeholder.com/1920x1080.jpg?text=Sequoia+Boat+Rentals';
    
    // Determine background content based on attribute
    const backgroundContent = useVideo ? 
      `<div class="video-background">
        <video autoplay muted loop playsinline poster="${placeholderImageUrl}">
          <source src="videos/lake-video-background.mp4" type="video/mp4">
          <!-- Fallback image if video doesn't load -->
          <img src="${placeholderImageUrl}" alt="Inflatable boats on Kamloops lake" class="hero-bg">
        </video>
      </div>` : 
      `<div class="hero-image">
        <img src="${placeholderImageUrl}" alt="Inflatable boats on Kamloops lake" class="hero-bg">
      </div>`;
    
    this.innerHTML = `
      <section class="hero-section">
        ${backgroundContent}
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
