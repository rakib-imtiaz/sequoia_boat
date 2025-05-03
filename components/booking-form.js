class BookingFormComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Check if this is a full form or the simple version for homepage
    const isFullForm = this.getAttribute('full-form') === 'true';
    
    const formTitle = isFullForm ? '' : '<h2 class="section-title">Quick Booking</h2>';
    const formDescription = isFullForm ? '' : '<p class="booking-description">Check availability and book your eco-friendly boat rental in just a few steps.</p>';
    const additionalFields = isFullForm ? this.getAdditionalFields() : '';
    
    this.innerHTML = `
      <section class="booking-form-section ${isFullForm ? 'full-booking-form' : 'quick-booking-form'}">
        <div class="container">
          ${formTitle}
          ${formDescription}
          
          <form class="booking-form" id="bookingForm">
            <div class="form-group">
              <label for="lake">Choose a Lake</label>
              <select id="lake" name="lake" required>
                <option value="">Select a lake</option>
                <option value="heffley">Heffley Lake</option>
                <option value="paul">Paul Lake</option>
                <option value="monte">Monte Lake</option>
                <option value="shuswap">Shuswap Lake</option>
                <option value="kamloops">Kamloops Lake</option>
                <option value="laclejeune">Lac Le Jeune</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="boatType">Boat Type</label>
              <select id="boatType" name="boatType" required>
                <option value="">Select a boat type</option>
                <option value="single">1-2 Person Boat</option>
                <option value="family">Family Boat (3-4 People)</option>
                <option value="multiple">Multiple Boats</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="duration">Rental Duration</label>
              <select id="duration" name="duration" required>
                <option value="">Select duration</option>
                <option value="half-day">Half-Day (4 hours)</option>
                <option value="full-day">Full-Day (6-8 hours)</option>
                <option value="custom">Custom Hours</option>
              </select>
            </div>
            
            <div class="form-group custom-hours" style="display: none;">
              <label for="customHours">Number of Hours</label>
              <input type="number" id="customHours" name="customHours" min="4" max="8" value="4">
              <span class="help-text">Minimum 4 hours required</span>
            </div>
            
            <div class="form-group">
              <label for="date">Rental Date</label>
              <input type="date" id="date" name="date" required>
            </div>
            
            ${additionalFields}
            
            <div class="form-group addon-options">
              <label>Optional Add-ons</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" id="cooler" name="addons" value="cooler">
                  <label for="cooler">Cooler ($30)</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="speaker" name="addons" value="speaker">
                  <label for="speaker">Bluetooth Speaker ($20)</label>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" id="drybag" name="addons" value="drybag">
                  <label for="drybag">Dry Bags ($10)</label>
                </div>
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block">
              ${isFullForm ? 'Complete Booking' : 'Check Availability'}
            </button>
          </form>
        </div>
      </section>
    `;
    
    // Add event listeners
    this.addEventListeners();
  }
  
  getAdditionalFields() {
    return `
      <div class="booking-section">
        <h3>Contact Information</h3>
        
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
      </div>
      
      <div class="booking-section">
        <h3>Boating License</h3>
        
        <div class="form-group">
          <div class="radio-group">
            <div class="radio-item">
              <input type="radio" id="license-yes" name="license" value="yes" checked>
              <label for="license-yes">I have a boating license</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="license-no" name="license" value="no">
              <label for="license-no">I need licensing assistance</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="license-driver" name="license" value="driver">
              <label for="license-driver">I need a driver ($25/hour)</label>
            </div>
          </div>
        </div>
        
        <div class="form-group license-upload" id="licenseUpload">
          <label for="licenseFile">Upload License (optional)</label>
          <input type="file" id="licenseFile" name="licenseFile">
          <p class="help-text">You can also show your license at time of pickup</p>
        </div>
      </div>
      
      <div class="booking-section">
        <h3>Delivery Options</h3>
        
        <div class="form-group">
          <div class="radio-group">
            <div class="radio-item">
              <input type="radio" id="delivery-yes" name="delivery" value="yes" checked>
              <label for="delivery-yes">I need delivery to the selected lake</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="delivery-no" name="delivery" value="no">
              <label for="delivery-no">I will pick up the boat</label>
            </div>
          </div>
        </div>
        
        <div class="delivery-notice">
          <p>Note: Free delivery to Heffley Lake, Paul Lake, and Kamloops Lake. $50 per 100km for other locations.</p>
        </div>
      </div>
      
      <div class="booking-section">
        <h3>Special Requests</h3>
        
        <div class="form-group">
          <label for="notes">Additional Notes or Requests</label>
          <textarea id="notes" name="notes" rows="3"></textarea>
        </div>
      </div>
    `;
  }
  
  addEventListeners() {
    // Handle custom hours visibility
    const durationSelect = this.querySelector('#duration');
    const customHoursDiv = this.querySelector('.custom-hours');
    
    if (durationSelect && customHoursDiv) {
      durationSelect.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
          customHoursDiv.style.display = 'block';
        } else {
          customHoursDiv.style.display = 'none';
        }
      });
    }
    
    // Handle license upload visibility
    const licenseRadios = this.querySelectorAll('input[name="license"]');
    const licenseUpload = this.querySelector('#licenseUpload');
    
    if (licenseRadios.length > 0 && licenseUpload) {
      licenseRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
          if (e.target.value === 'yes') {
            licenseUpload.style.display = 'block';
          } else {
            licenseUpload.style.display = 'none';
          }
        });
      });
    }
    
    // Form submission
    const form = this.querySelector('#bookingForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // For a real implementation, you would send the form data to your server
        // or booking service here
        
        // Simple validation feedback
        alert('Thank you for your booking request! We will contact you shortly to confirm details.');
      });
    }
  }
}

customElements.define('booking-form-component', BookingFormComponent);
