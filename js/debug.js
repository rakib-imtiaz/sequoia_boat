/**
 * Debug helper script for Sequoia Boat Rentals
 * This helps identify and resolve issues with components
 */

// Only run in development environments
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('🐞 Debug mode active');

  // Force mobile view for testing on desktop
  window.forceMobileView = function() {
    document.body.classList.add('debug-mobile-view');
    console.log('🔄 Mobile view forced for testing');
  };

  // Test mobile menu toggle
  window.testMobileMenu = function() {
    const toggle = document.getElementById('mobileMenuToggle');
    if (toggle) {
      toggle.click();
      console.log('🍔 Mobile menu toggle clicked manually');
      return 'Menu toggle clicked';
    } else {
      console.error('❌ Mobile menu toggle not found with ID: mobileMenuToggle');
      return 'Toggle not found';
    }
  };

  // Add debug info to page
  const debugInfo = document.createElement('div');
  debugInfo.className = 'debug-info';
  debugInfo.innerHTML = `
    <style>
      .debug-info {
        position: fixed;
        bottom: 10px;
        left: 10px;
        background: rgba(0,0,0,0.7);
        color: lime;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 12px;
        z-index: 10000;
        max-width: 300px;
        transition: all 0.3s ease;
      }
      .debug-info.collapsed {
        transform: translateY(calc(100% - 30px));
      }
      .debug-info-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        cursor: pointer;
      }
      .debug-button {
        margin: 5px 0;
        padding: 5px;
        background: #333;
        border: none;
        color: lime;
        cursor: pointer;
        width: 100%;
        text-align: left;
        border-radius: 3px;
      }
      .debug-button:hover {
        background: #444;
      }
      .debug-mobile-view .mobile-menu-toggle {
        display: block !important;
      }
      .debug-mobile-view .main-nav, 
      .debug-mobile-view .header-contact,
      .debug-mobile-view .header-cta {
        display: none !important;
      }
    </style>
    <div class="debug-info-header">
      <span>🐞 Debug Tools</span>
      <span class="debug-collapse">▼</span>
    </div>
    <div class="debug-content">
      <button class="debug-button" onclick="forceMobileView()">Force Mobile View</button>
      <button class="debug-button" onclick="testMobileMenu()">Test Mobile Menu</button>
      <button class="debug-button" onclick="document.body.classList.toggle('mobile-menu-open')">Toggle Mobile Menu Class</button>
      <div class="debug-status"></div>
    </div>
  `;
  
  document.body.appendChild(debugInfo);
  
  // Make debug panel collapsible
  const header = debugInfo.querySelector('.debug-info-header');
  const collapseBtn = debugInfo.querySelector('.debug-collapse');
  header.addEventListener('click', () => {
    debugInfo.classList.toggle('collapsed');
    collapseBtn.textContent = debugInfo.classList.contains('collapsed') ? '▲' : '▼';
  });

  // Monitor mobile menu state
  const debugStatus = debugInfo.querySelector('.debug-status');
  setInterval(() => {
    const menuOpen = document.body.classList.contains('mobile-menu-open');
    debugStatus.innerHTML = `
      <div style="margin-top: 10px; font-size: 11px;">
        <div>Menu open: <b>${menuOpen ? 'YES' : 'NO'}</b></div>
        <div>Toggle exists: <b>${document.getElementById('mobileMenuToggle') ? 'YES' : 'NO'}</b></div>
        <div>Menu element: <b>${document.getElementById('mobileMenu') ? 'YES' : 'NO'}</b></div>
      </div>
    `;
  }, 1000);
} 