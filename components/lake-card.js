class LakeCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Get attributes
    const id = this.getAttribute('id') || '';
    const name = this.getAttribute('name') || 'Lake Name';
    const subtitle = this.getAttribute('subtitle') || '';
    const description = this.getAttribute('description') || '';
    const image = this.getAttribute('image') || 'placeholder-lake.jpg';
    
    this.innerHTML = `
      <div class="lake-card" id="${id}">
        <div class="lake-image">
          <img src="images/${image}" alt="${name}" class="lake-img">
        </div>
        <div class="lake-content">
          <h3 class="lake-title">${name}</h3>
          ${subtitle ? `<span class="lake-subtitle">${subtitle}</span>` : ''}
          <div class="lake-description">
            <p>${description}</p>
          </div>
          <div class="lake-actions">
            <a href="booking.html?lake=${id}" class="btn btn-primary lake-cta">Rent a Boat Here</a>
            <button class="btn btn-text lake-more-info">Learn More</button>
          </div>
        </div>
        
        <div class="lake-details">
          <div class="lake-details-content">
            <h4>About ${name}</h4>
            <p>${description}</p>
            
            <div class="lake-amenities">
              <h5>Lake Features</h5>
              <ul class="amenities-list">
                <li><i class="fas fa-water"></i> Boat Launch</li>
                <li><i class="fas fa-parking"></i> Parking Available</li>
                <li><i class="fas fa-swimmer"></i> Swimming Area</li>
                <li><i class="fas fa-fish"></i> Fishing</li>
              </ul>
            </div>
            
            <div class="lake-gallery">
              <h5>Gallery</h5>
              <div class="gallery-images">
                <img src="images/${image}" alt="${name} view 1" class="gallery-img">
                <img src="images/${image.replace('.jpg', '-2.jpg')}" alt="${name} view 2" class="gallery-img">
                <img src="images/${image.replace('.jpg', '-3.jpg')}" alt="${name} view 3" class="gallery-img">
              </div>
            </div>
            
            <button class="btn btn-text close-details">Close</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners
    this.addEventListeners();
  }
  
  addEventListeners() {
    const moreInfoBtn = this.querySelector('.lake-more-info');
    const closeBtn = this.querySelector('.close-details');
    const lakeDetails = this.querySelector('.lake-details');
    
    if (moreInfoBtn && closeBtn && lakeDetails) {
      moreInfoBtn.addEventListener('click', () => {
        lakeDetails.classList.add('active');
        document.body.classList.add('lake-details-open');
      });
      
      closeBtn.addEventListener('click', () => {
        lakeDetails.classList.remove('active');
        document.body.classList.remove('lake-details-open');
      });
    }
  }
}

customElements.define('lake-card', LakeCard);
