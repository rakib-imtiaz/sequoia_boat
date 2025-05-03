class FeaturesComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="features-section">
        <div class="container">
          <h2 class="section-title">Why Choose Us</h2>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h3 class="feature-title">Eco-friendly Electric Boats</h3>
              <p class="feature-description">Our electric boats are environmentally friendly, quiet, and produce zero emissions while you enjoy the pristine lake waters.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-id-card"></i>
              </div>
              <h3 class="feature-title">Boating License Assistance</h3>
              <p class="feature-description">Don't have a boating license? We'll help you obtain a temporary license or provide a driver for your adventure.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-concierge-bell"></i>
              </div>
              <h3 class="feature-title">Concierge Services Available</h3>
              <p class="feature-description">Enjoy personalized service with our concierge options, including delivery, setup, and local recommendations.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-truck"></i>
              </div>
              <h3 class="feature-title">Free Delivery to Popular Lakes</h3>
              <p class="feature-description">We offer free delivery to Heffley Lake, Paul Lake, and Kamloops Lake, with affordable delivery to other locations.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-life-ring"></i>
              </div>
              <h3 class="feature-title">Life Jackets & Paddles Included</h3>
              <p class="feature-description">Safety first! All rentals include life jackets and paddles, ensuring you have everything you need for a safe adventure.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-calendar-check"></i>
              </div>
              <h3 class="feature-title">Easy Online Booking</h3>
              <p class="feature-description">Our simple booking process makes it quick and convenient to reserve your boat and start planning your lake day.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('features-component', FeaturesComponent);
