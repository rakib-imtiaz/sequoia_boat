class HeroComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Check if video background is enabled - but default to false if not explicitly set
    const useVideo = this.hasAttribute('video-background') && this.getAttribute('video-background') === 'true';
    
    // High-quality placeholder image from Unsplash that matches the lake theme
    const placeholderImageUrl = 'https://images.unsplash.com/photo-1472107263350-a98e8b508deb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80';
    
    // Use full path to ensure the video loads properly
    const videoPath = window.location.pathname.endsWith('/') ? 'videos/lake-video-background.mp4' : './videos/lake-video-background.mp4';
    
    // Console log for debugging
    console.log('Video path:', videoPath);
    console.log('Video enabled:', useVideo);
    
    // Determine background content based on attribute
    const backgroundContent = useVideo ? 
      `<div class="video-background">
        <video autoplay muted loop playsinline poster="${placeholderImageUrl}" id="heroVideo">
          <source src="${videoPath}" type="video/mp4">
          <!-- Fallback image if video doesn't load -->
          <img src="${placeholderImageUrl}" alt="Inflatable boats on Kamloops lake" class="hero-bg">
        </video>
        <div class="video-controls">
          <button class="video-control" id="muteToggle" aria-label="Toggle mute">
            <i class="fas fa-volume-mute"></i>
          </button>
          <button class="video-control" id="pauseToggle" aria-label="Toggle pause">
            <i class="fas fa-pause"></i>
          </button>
        </div>
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
    
    // Add video control functionality
    if (useVideo) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const video = this.querySelector('#heroVideo');
        const muteToggle = this.querySelector('#muteToggle');
        const pauseToggle = this.querySelector('#pauseToggle');
        
        if (video && muteToggle && pauseToggle) {
          console.log('Video element found:', video);
          
          // Force video to load and play
          video.load();
          
          // Check if video can actually play
          video.addEventListener('canplay', () => {
            console.log('Video can play');
            video.play()
              .then(() => console.log('Video playback started successfully'))
              .catch(err => console.error('Video playback failed:', err));
          });
          
          // Ensure video is muted by default for better autoplay compatibility
          video.muted = true;
          
          // Add event listeners for controls
          muteToggle.addEventListener('click', () => {
            video.muted = !video.muted;
            muteToggle.querySelector('i').className = video.muted ? 
              'fas fa-volume-mute' : 'fas fa-volume-up';
          });
          
          pauseToggle.addEventListener('click', () => {
            if (video.paused) {
              video.play();
              pauseToggle.querySelector('i').className = 'fas fa-pause';
            } else {
              video.pause();
              pauseToggle.querySelector('i').className = 'fas fa-play';
            }
          });
          
          // Handle video loading issues
          video.addEventListener('error', (e) => {
            console.error('Video error event:', e);
            console.error('Video error code:', video.error ? video.error.code : 'No error code');
            console.error('Video error message:', video.error ? video.error.message : 'No error message');
            
            const videoBackground = this.querySelector('.video-background');
            if (videoBackground) {
              console.log('Falling back to image...');
              videoBackground.style.display = 'none';
              this.innerHTML = `
                <div class="hero-image">
                  <img src="${placeholderImageUrl}" alt="Inflatable boats on Kamloops lake" class="hero-bg">
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
              `;
            }
          });
        } else {
          console.error('Could not find video element or controls');
        }
      }, 0);
    }
  }
}

customElements.define('hero-component', HeroComponent);
