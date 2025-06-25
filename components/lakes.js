/**
 * Sequoia Boat Rentals & Concierge Services
 * Lakes Component
 */

(function () {
    const lakesHTML = `
    <div class="lakes section-padding">
        <div class="container">
            <h2 class="section-heading text-center">Explore Our Lakes</h2>
            <p class="section-subtitle text-center">Discover pristine waters around Kamloops with our eco-friendly boats. Each lake offers a unique experience.</p>
            
            <!-- Interactive Leaflet Map -->
            <div class="lakes-map-container mb-5">
                <div class="lakes-tabs-wrapper">
                    <div class="lakes-tabs">
                        <button class="lakes-tab" data-area="kamloops" role="tab" aria-label="Kamloops Area">Kamloops Area</button>
                        <button class="lakes-tab" data-area="shuswap" role="tab" aria-label="Shuswap Area">Shuswap Area</button>
                        <button class="lakes-tab" data-area="sunpeaks" role="tab" aria-label="Sun Peaks Area">Sun Peaks Area</button>
                        <button class="lakes-tab active" data-area="all" role="tab" aria-label="All Boating Areas">All Routes</button>
                    </div>
                </div>
                <div id="lakesMap" class="lakes-map" aria-label="Interactive map of boating areas" role="application"></div>
            </div>
            
            <div class="lakes-bento-grid">
                <!-- Heffley Lake -->
                <div class="lake-bento-item" style="background-image: url('images/Heffley_Lake_1.png');">
                    <div class="lake-bento-content">
                        <h3>Heffley Lake</h3>
                        <p>Closest to Sun Peaks</p>
                    </div>
                </div>
                
                <!-- Paul Lake -->
                <div class="lake-bento-item" style="background-image: url('images/paul_lake_1.png');">
                    <div class="lake-bento-content">
                        <h3>Paul Lake</h3>
                        <p>Family Friendly</p>
                    </div>
                </div>
                
                <!-- Monte Lake -->
                <div class="lake-bento-item" style="background-image: url('images/Monte_Lake_1.png');">
                    <div class="lake-bento-content">
                        <h3>Monte Lake</h3>
                        <p>Hidden Gem</p>
                    </div>
                </div>
                
                <!-- Shuswap Lake -->
                <div class="lake-bento-item" style="background-image: url('images/shuswap_Lake_1.png');">
                    <div class="lake-bento-content">
                        <h3>Shuswap Lake</h3>
                        <p>Worth the Drive</p>
                    </div>
                </div>
                
                <!-- Kamloops Lake -->
                <div class="lake-bento-item" style="background-image: url('images/Kamloops_Lake_1.png');">
                    <div class="lake-bento-content">
                        <h3>Kamloops Lake</h3>
                        <p>Closest to City</p>
                    </div>
                </div>
                
                <!-- Lac Le Jeune -->
                <div class="lake-bento-item" style="background-image: url('images/Lac_Le_Jeune.png');">
                    <div class="lake-bento-content">
                        <h3>Lac Le Jeune</h3>
                        <p>Perfect for Half-Day</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* Lakes Section Styles */
        .lakes {
            background-color: var(--section-bg);
            position: relative;
            overflow: hidden;
        }
        
        .lakes-intro {
            max-width: 800px;
            margin: 0 auto var(--space-lg);
            font-size: 1.1rem;
        }
        
        .lakes-bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: 250px;
            grid-gap: 1.5rem;
            margin-top: 4rem;
        }
        
        .lake-bento-item {
            position: relative;
            background-size: cover;
            background-position: center;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: box-shadow 0.4s ease;
            cursor: pointer;
        }
        
        .lake-bento-item:hover {
            box-shadow: var(--shadow-xl);
        }
        
        .lake-bento-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem;
            color: var(--white);
            
            /* Improved Glassmorphism */
            background: rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            
            /* Initial state: partially visible */
            transform: translateY(calc(100% - 5rem)); /* Adjust to show title */
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .lake-bento-item:hover .lake-bento-content {
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }
        
        .lake-bento-content h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin: 0 0 0.25rem 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
            color: var(--white);
        }
        
        .lake-bento-content p {
            margin: 0;
            font-size: 0.95rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            color: var(--white);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            transition-delay: 0.1s;
        }
        
        .lake-bento-item:hover .lake-bento-content p {
            opacity: 0.9;
        }
        
        /* Responsive adjustments */
        @media (min-width: 768px) {
            .lakes-bento-grid {
                grid-template-columns: 1fr 1fr;
                grid-auto-rows: 250px;
                grid-template-areas:
                    "heffley  shuswap"
                    "paul     lac-le-jeune"
                    "monte    lac-le-jeune"
                    "kamloops kamloops";
            }

            /* Reset any lingering column/row spans and display properties */
            .lake-bento-item {
                grid-column: auto;
                grid-row: auto;
                display: block !important;
            }

            .lake-bento-item:nth-child(1) { grid-area: heffley; }
            .lake-bento-item:nth-child(2) { grid-area: paul; }
            .lake-bento-item:nth-child(3) { grid-area: monte; }
            .lake-bento-item:nth-child(4) { grid-area: shuswap; }
            .lake-bento-item:nth-child(5) { grid-area: kamloops; }
            .lake-bento-item:nth-child(6) { grid-area: lac-le-jeune; }
        }
        
        @media (min-width: 1200px) {
            .lakes-bento-grid {
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows: 250px;
                grid-template-areas:
                    "heffley  heffley  shuswap"
                    "paul     lac-le-jeune lac-le-jeune"
                    "monte    lac-le-jeune lac-le-jeune"
                    "kamloops kamloops kamloops";
            }
        }

        /* Leaflet map */
        .lakes-map {
            width: 100%;
            height: 500px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md), inset 0 0 0 1px rgba(0, 180, 171, 0.25);
            border: 3px solid transparent;
            transition: border-color var(--transition-medium);
        }
        
        .lakes-map.highlighted {
            border: 3px solid var(--secondary);
            box-shadow: 0 0 15px rgba(78, 205, 196, 0.5), inset 0 0 0 1px rgba(0, 180, 171, 0.25);
        }

        .lakes-map-container {
            position: relative;
            background: #f6f9fb;
            border-radius: var(--radius-lg);
            padding: 1.5rem 0 0;
        }
        
        .map-highlight-label {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: var(--white);
            padding: 6px 12px;
            border-radius: var(--radius-md);
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--primary);
            box-shadow: var(--shadow-sm);
            z-index: 1000;
            border-left: 4px solid var(--secondary);
        }

        .lakes-tabs-wrapper {
            position: relative;
            margin-bottom: 1.25rem;
            padding: 0 1.5rem;
        }
        
        /* Gradient indicators for horizontal scrolling */
        .lakes-tabs-wrapper::before,
        .lakes-tabs-wrapper::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 20px;
            pointer-events: none;
            z-index: 5;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lakes-tabs-wrapper::before {
            left: 0;
            background: linear-gradient(to right, #f6f9fb, rgba(246, 249, 251, 0));
        }
        
        .lakes-tabs-wrapper::after {
            right: 0;
            background: linear-gradient(to left, #f6f9fb, rgba(246, 249, 251, 0));
        }
        
        .lakes-tabs-wrapper.scroll-start::after {
            opacity: 1;
        }
        
        .lakes-tabs-wrapper.scroll-middle::before,
        .lakes-tabs-wrapper.scroll-middle::after {
            opacity: 1;
        }
        
        .lakes-tabs-wrapper.scroll-end::before {
            opacity: 1;
        }

        .lakes-tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
            justify-content: center;
        }

        .lakes-tab {
            background: var(--white);
            border: 1px solid rgba(0,0,0,0.1);
            color: var(--dark);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-full);
            font-size: 0.85rem;
            cursor: pointer;
            transition: all var(--transition-medium);
            min-height: 44px;
            min-width: 100px;
        }

        .lakes-tab.active,
        .lakes-tab:hover {
            background: var(--secondary);
            color: var(--white);
            border-color: var(--secondary);
        }
        
        /* Mobile optimizations */
        @media (max-width: 767px) {
            .lakes-map {
                height: calc(100vh - 350px);
                min-height: 300px;
                max-height: 500px;
            }
            
            .lakes-tabs-wrapper {
                position: sticky;
                top: 60px;
                z-index: 10;
                background: #f6f9fb;
                padding: 0.75rem 0.5rem;
                border-radius: 20px 20px 0 0;
                margin: 0 0 0.75rem;
            }
            
            .lakes-tabs {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                padding-bottom: 5px;
                justify-content: flex-start;
                gap: 0.75rem;
                scrollbar-width: none; /* Firefox */
            }
            
            .lakes-tabs::-webkit-scrollbar { 
                display: none;  /* Chrome, Safari */
            }
            
            .lakes-tab {
                flex: 0 0 auto;
                white-space: nowrap;
                padding: 0.5rem 1rem;
                font-size: 0.85rem;
                min-width: auto;
                scroll-snap-align: center;
            }
            
            .lakes-bento-grid {
                grid-template-columns: 1fr;
                grid-auto-rows: 180px;
                grid-gap: 1rem;
                margin-top: 2rem;
            }
            
            .lake-bento-content {
                transform: translateY(0);
                background: rgba(0, 0, 0, 0.4);
            }
            
            .lake-bento-content p {
                opacity: 1;
                font-size: 0.85rem;
            }
            
            .lake-bento-content h3 {
                font-size: 1.2rem;
            }
            
            .section-subtitle {
                padding: 0 0.5rem;
                font-size: 0.9rem;
                margin-bottom: 1.5rem;
            }
            
            /* Improved map controls for mobile */
            .leaflet-control-zoom a {
                width: 40px !important;
                height: 40px !important;
                line-height: 40px !important;
                border-radius: 50% !important;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2) !important;
            }
        }
        
        /* Additional mobile optimization for very small screens */
        @media (max-width: 480px) {
            .lakes-tab[data-area="all"] {
                order: 10; /* Move "All Routes" to the end on small screens */
            }
            
            .section-subtitle {
                font-size: 0.875rem;
            }
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
            .lakes-tabs {
                scroll-snap-type: none;
            }
            
            .lake-bento-content {
                transition: none;
            }
            
            .lake-bento-content p {
                transition: none;
            }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', initLakesInteractiveMap);

        function initLakesInteractiveMap() {
            const mapContainer = document.getElementById('lakesMap');
            if (!mapContainer) return; // Component not yet in DOM
            
            // Handle horizontal scroll indicators for tabs
            const tabsWrapper = document.querySelector('.lakes-tabs-wrapper');
            const tabs = document.querySelector('.lakes-tabs');
            
            if (tabs && tabsWrapper) {
                // Check for scroll position
                const checkScrollPosition = () => {
                    const { scrollLeft, scrollWidth, clientWidth } = tabs;
                    
                    // Reset all classes
                    tabsWrapper.classList.remove('scroll-start', 'scroll-middle', 'scroll-end');
                    
                    if (scrollLeft <= 5) {
                        tabsWrapper.classList.add('scroll-start');
                    } else if (scrollLeft + clientWidth >= scrollWidth - 5) {
                        tabsWrapper.classList.add('scroll-end');
                    } else {
                        tabsWrapper.classList.add('scroll-middle');
                    }
                };
                
                // Initial check
                checkScrollPosition();
                
                // Listen for scroll
                tabs.addEventListener('scroll', checkScrollPosition);
            }
            
            // Check if Leaflet is loaded
            if (typeof L === 'undefined') {
                console.error('Leaflet library not loaded.');
                return;
            }

            // Lazy load the map if supported
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            initMap();
                            observer.disconnect();
                        }
                    });
                }, {
                    rootMargin: '250px 0px'
                });
                
                observer.observe(mapContainer);
            } else {
                // Fallback for browsers not supporting IntersectionObserver
                initMap();
            }
            
            function initMap() {
                // Prevent multiple initializations
                if (mapContainer.dataset.mapInitialized) return;
                mapContainer.dataset.mapInitialized = 'true';

                // Create the map
                const isMobile = window.innerWidth <= 767;
                const map = L.map('lakesMap', { 
                    scrollWheelZoom: !isMobile,
                    dragging: true,
                    tap: true,
                    doubleClickZoom: true
                }).setView([50.72, -120.33], 8);
                
                // Enable touch gestures
                if (map.tap) map.tap.enable();

                // Add tile layer
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map);

                // Sample route coordinates (replace with real tour paths)
                const routes = {
                    kamloops: [
                        [50.7136, -120.3718],
                        [50.7659, -120.4001],
                        [50.7912, -120.3299]
                    ],
                    shuswap: [
                        [50.9270, -119.5083],
                        [50.9371, -119.4465],
                        [50.9042, -119.4250]
                    ],
                    sunpeaks: [
                        [50.8880, -119.9350],
                        [50.9082, -119.9551],
                        [50.9233, -119.8999]
                    ]
                };

                // Create area labels and colors
                const areaLabels = {
                    all: "All Boating Areas",
                    kamloops: "Kamloops Lake Area",
                    shuswap: "Shuswap Lake Area",
                    sunpeaks: "Sun Peaks Area"
                };

                const areaColors = {
                    kamloops: '#4ecdc4',
                    shuswap: '#ff9e43',
                    sunpeaks: '#6a11cb'
                };

                // Create map label
                const mapLabel = document.createElement('div');
                mapLabel.className = 'map-highlight-label';
                mapLabel.textContent = areaLabels['all'];
                document.querySelector('.lakes-map-container').appendChild(mapLabel);

                const layers = {};
                Object.keys(routes).forEach(area => {
                    // Create a featureGroup so we can add multiple layers (polyline + markers)
                    const group = L.featureGroup();

                    // Create polyline for the route
                    const polyline = L.polyline(routes[area], {
                        color: areaColors[area] || '#4ecdc4',
                        weight: 5,
                        dashArray: '6 8',
                        lineJoin: 'round',
                        opacity: 0.9
                    }).addTo(group);

                    // Add markers to highlight route points
                    routes[area].forEach(coord => {
                        L.circleMarker(coord, {
                            radius: 6,
                            fillColor: areaColors[area] || '#4ecdc4',
                            color: '#ffffff',
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 0.9
                        }).addTo(group);
                    });

                    layers[area] = group;
                });

                // Group containing all areas so we can show everything initially
                const allLayer = L.featureGroup(Object.values(layers));
                layers['all'] = allLayer;
                allLayer.addTo(map);
                
                // Adjust padding for mobile
                const padding = isMobile ? [10, 10] : [20, 20];
                map.fitBounds(allLayer.getBounds(), { padding: padding });

                // Add highlighted border to map
                mapContainer.classList.add('highlighted');

                // Tab switching logic
                const tabsEls = document.querySelectorAll('.lakes-tab');
                tabsEls.forEach(tab => {
                    tab.addEventListener('click', () => {
                        // Active state styling
                        tabsEls.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        
                        // Scroll tab into view on mobile
                        if (isMobile) {
                            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }

                        const area = tab.dataset.area;

                        // Update map label
                        mapLabel.textContent = areaLabels[area] || 'Selected Area';

                        // Remove all layers
                        Object.values(layers).forEach(layer => {
                            if (map.hasLayer(layer)) map.removeLayer(layer);
                        });

                        // Add selected route(s)
                        layers[area].addTo(map);

                        // Adjust viewport with proper padding for mobile
                        const fitPadding = isMobile ? [20, 20] : [40, 40];
                        map.fitBounds(layers[area].getBounds(), { padding: fitPadding });

                        // Highlight effect
                        mapContainer.classList.remove('highlighted');
                        // Dynamically update border color based on selected area for extra clarity
                        const newBorderColor = areaColors[area] || getComputedStyle(document.documentElement).getPropertyValue('--secondary');
                        mapContainer.style.borderColor = newBorderColor.trim();

                        // Re-trigger highlight animation by toggling the class
                        setTimeout(() => {
                            mapContainer.classList.add('highlighted');
                        }, 10);
                    });
                });
                
                // Resize handler for mobile
                window.addEventListener('resize', () => {
                    const newIsMobile = window.innerWidth <= 767;
                    if (newIsMobile !== isMobile) {
                        // Reload the page to reinitialize the map with proper settings
                        window.location.reload();
                    }
                });
            }
        }
    </script>
    `;

    // Load the lakes component
    ComponentLoader.loadComponent('lakes-container', lakesHTML);
})();