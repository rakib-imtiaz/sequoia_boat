/**
 * Sequoia Boat Rentals - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  setupMobileNav();
  
  // Handle URL parameters for booking
  handleBookingParams();
  
  // Set minimum date for booking forms
  setMinimumBookingDate();
  
  // Initialize image lazy loading
  lazyLoadImages();
  
  // Initialize scroll animations
  initScrollAnimations();
});

/**
 * Setup mobile navigation functionality
 * Enhanced to work with Web Components
 */
function setupMobileNav() {
  // Use global selectors and IDs for more reliable targeting
  const setupMobileMenuListeners = () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (mobileMenuToggle) {
      // Remove any existing listeners to prevent duplicates
      const newToggle = mobileMenuToggle.cloneNode(true);
      if (mobileMenuToggle.parentNode) {
        mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);
      }
      
      // Add click event listener
      newToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('mobile-menu-open');
        console.log('Mobile menu toggled');
      });
    }
    
    // Close mobile menu when clicking on menu items
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        document.body.classList.remove('mobile-menu-open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      const mobileMenu = document.getElementById('mobileMenu');
      const isClickInsideMenu = mobileMenu && mobileMenu.contains(e.target);
      const isClickOnToggle = newToggle && (newToggle.contains(e.target) || newToggle === e.target);
      
      if (document.body.classList.contains('mobile-menu-open') && !isClickInsideMenu && !isClickOnToggle) {
        document.body.classList.remove('mobile-menu-open');
      }
    });
  };
  
  // Initial setup
  setupMobileMenuListeners();
  
  // Re-setup when custom elements are likely to be defined and rendered
  setTimeout(setupMobileMenuListeners, 100);
  setTimeout(setupMobileMenuListeners, 500);
  
  // Also handle dynamic insertion of components
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (node.nodeType === Node.ELEMENT_NODE && 
              (node.tagName.toLowerCase() === 'header-component' || 
               node.querySelector('#mobileMenuToggle'))) {
            setupMobileMenuListeners();
            break;
          }
        }
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Handle URL parameters for pre-filling booking form
 */
function handleBookingParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const lake = urlParams.get('lake');
  
  if (lake) {
    const lakeSelect = document.querySelector('#lake');
    if (lakeSelect) {
      // Remove 'lake-' prefix if it exists
      const lakeValue = lake.replace('lake-', '');
      
      // Find and select the matching option
      for (const option of lakeSelect.options) {
        if (option.value === lakeValue) {
          option.selected = true;
          break;
        }
      }
    }
  }
}

/**
 * Set minimum date for booking form date inputs to today
 */
function setMinimumBookingDate() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  if (dateInputs.length > 0) {
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
      input.min = today;
      
      // If no date is set, default to today
      if (!input.value) {
        input.value = today;
      }
    });
  }
}

/**
 * Initialize lazy loading for images
 */
function lazyLoadImages() {
  // Check if native lazy loading is supported
  if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage);
    });
  }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(element => {
      animationObserver.observe(element);
    });
  }
}

/**
 * Calculate and display booking price estimate
 * (This would be used in a real implementation with actual pricing logic)
 */
function calculateBookingPrice() {
  // This is a placeholder for actual pricing calculation logic
  // In a real implementation, this would calculate based on:
  // - Selected lake (some might have different rates)
  // - Boat type
  // - Duration (half-day, full-day, or custom hours)
  // - Weekend vs. weekday pricing
  // - Add-ons selected
  // - Delivery fees if applicable
  
  // Example calculation logic:
  const boatType = document.getElementById('boatType')?.value;
  const duration = document.getElementById('duration')?.value;
  const date = document.getElementById('date')?.value;
  const addons = document.querySelectorAll('input[name="addons"]:checked');
  
  if (!boatType || !duration || !date) return;
  
  let basePrice = 0;
  let addonTotal = 0;
  
  // Check if weekend (Friday, Saturday, Sunday)
  const selectedDate = new Date(date);
  const isWeekend = [5, 6, 0].includes(selectedDate.getDay());
  
  // Calculate base price
  if (duration === 'half-day') {
    basePrice = isWeekend ? 240 : 200;
  } else if (duration === 'full-day') {
    basePrice = isWeekend ? 400 : 300;
  } else if (duration === 'custom') {
    const hours = parseInt(document.getElementById('customHours')?.value || 4);
    const hourlyRate = isWeekend ? 60 : 50;
    basePrice = hours * hourlyRate;
  }
  
  // Add addon prices
  addons.forEach(addon => {
    switch(addon.value) {
      case 'cooler':
        addonTotal += 30;
        break;
      case 'speaker':
        addonTotal += 20;
        break;
      case 'drybag':
        addonTotal += 10;
        break;
    }
  });
  
  const totalPrice = basePrice + addonTotal;
  
  // Display the price (in a real implementation)
  const priceDisplay = document.getElementById('price-estimate');
  if (priceDisplay) {
    priceDisplay.textContent = `$${totalPrice}`;
    priceDisplay.parentElement.style.display = 'block';
  }
}
