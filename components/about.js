class AboutComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="about-section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2 class="section-title">About Us</h2>
              <p class="about-description">
                At Sequoia Boat Rentals, we offer electric, eco-friendly inflatable boats to explore the pristine 
                waters around Kamloops. From Heffley Lake to Shuswap, we make your lake adventure unforgettable.
              </p>
              <p class="about-description">
                Our mission is to provide accessible, environmentally-friendly boating experiences that allow you 
                to connect with nature while enjoying the beautiful lakes of British Columbia. Our inflatable boats 
                are easy to operate, comfortable, and perfect for families, friends, or solo adventurers.
              </p>
              <a href="services.html" class="btn btn-secondary">Our Services</a>
            </div>
            <div class="about-image">
              <img src="images/happy_customer_on_a_inflatable_boat.png" alt="Happy customers on an inflatable boat" class="about-img">
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-component', AboutComponent);
