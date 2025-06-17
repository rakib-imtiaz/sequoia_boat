/**
 * Sequoia Boat Rentals & Concierge Services
 * Lakes Component
 */

(function () {
    const lakesHTML = `
    <div class="lakes section-padding">
        <div class="container">
            <h2 class="section-heading text-center">Explore Our Lakes</h2>
            <p class="section-subtitle text-center">Discover the pristine waters surrounding Kamloops with our eco-friendly inflatable boats. Each lake offers a unique experience!</p>
            
            <!-- Interactive Leaflet Map -->
            <div class="lakes-map-container mb-5">
                <div class="lakes-tabs">
                    <button class="lakes-tab active" data-area="all">All Routes</button>
                    <button class="lakes-tab" data-area="kamloops">Kamloops Area</button>
                    <button class="lakes-tab" data-area="shuswap">Shuswap Area</button>
                    <button class="lakes-tab" data-area="sunpeaks">Sun Peaks Area</button>
                </div>
                <div id="lakesMap" class="lakes-map"></div>
            </div>
            
            <div class="lakes-grid">
                <!-- Heffley Lake -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/Heffley_Lake_1.png" alt="Heffley Lake" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Closest to Sun Peaks</div>
                        <h3>Heffley Lake</h3>
                        <p>Nestled just 20 minutes from the heart of Sun Peaks, Heffley Lake is a serene escape that feels like a local secret. With its calm, glassy waters and picture-perfect mountain backdrop.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>20 min from Sun Peaks</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-water"></i>
                                <span>Calm waters</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-ship"></i>
                                <span>Easy boat launch</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
                    </div>
                </div>
                
                <!-- Paul Lake -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/paul_lake_1.png" alt="Paul Lake" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Family Friendly</div>
                        <h3>Paul Lake</h3>
                        <p>Just 25 minutes from Kamloops, Paul Lake is a clean, scenic haven that's become a go-to summer spot for locals and visitors alike. Tucked within a peaceful Provincial Park.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>25 min from Kamloops</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-campground"></i>
                                <span>Campgrounds nearby</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-parking"></i>
                                <span>Ample parking</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
                    </div>
                </div>
                
                <!-- Monte Lake -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/Monte_Lake_1.png" alt="Monte Lake" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Hidden Gem</div>
                        <h3>Monte Lake</h3>
                        <p>Monte Lake is a hidden gem nestled between Kamloops and Vernon, offering the perfect spot for a peaceful day on the water. The warm waters in summer make it ideal to cool off.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>30 min from Kamloops</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-temperature-high"></i>
                                <span>Warm water</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-user-friends"></i>
                                <span>Less crowded</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
                    </div>
                </div>
                
                <!-- Shuswap Lake -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/shuswap_Lake_1.png" alt="Shuswap Lake" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Worth the Drive</div>
                        <h3>Shuswap Lake</h3>
                        <p>Shuswap Lake is just a short 45–60-minute drive from Kamloops, but totally worth the drive! With its massive, winding waters and endless coves, perfect for full-day adventures.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>45-60 min from Kamloops</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-mountain"></i>
                                <span>Breathtaking views</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-water"></i>
                                <span>Numerous coves</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
                    </div>
                </div>
                
                <!-- Kamloops Lake -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/Kamloops_Lake_1.png" alt="Kamloops Lake" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Closest to City</div>
                        <h3>Kamloops Lake</h3>
                        <p>Kamloops Lake is the closest large lake to the city, and perfect for a relaxing day on the water! This expansive, open lake offers stunning views of the surrounding mountains.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>15 min from downtown</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-fish"></i>
                                <span>Great fishing</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-expand-arrows-alt"></i>
                                <span>Large, open waters</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
                    </div>
                </div>
                
                <!-- Lac Le Jeune -->
                <div class="lake-card">
                    <div class="lake-image">
                        <img src="images/Lac_Le_Jeune.png" alt="Lac Le Jeune" loading="lazy">
                    </div>
                    <div class="lake-content">
                        <div class="lake-badge">Perfect for Half-Day</div>
                        <h3>Lac Le Jeune</h3>
                        <p>Just a short 30–35 minute drive from Kamloops, Lac Le Jeune is perfect for those looking for a peaceful, more intimate experience on the water. Great for half-day rentals.</p>
                        <div class="lake-features">
                            <div class="lake-feature">
                                <i class="fas fa-route"></i>
                                <span>30-35 min from Kamloops</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-leaf"></i>
                                <span>Serene atmosphere</span>
                            </div>
                            <div class="lake-feature">
                                <i class="fas fa-utensils"></i>
                                <span>Picnic areas</span>
                            </div>
                        </div>
                        <a href="#booking-preview-container" class="btn btn-outline">Book This Lake</a>
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
        
        .lakes-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-lg);
        }
        
        .lake-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            display: flex;
            flex-direction: column;
            transition: all var(--transition-medium);
            border: 1px solid rgba(0,0,0,0.05);
            height: 100%;
        }
        
        .lake-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }
        
        .lake-image {
            position: relative;
            overflow: hidden;
            height: 250px;
        }
        
        .lake-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform var(--transition-medium);
        }
        
        .lake-card:hover .lake-image img {
            transform: scale(1.05);
        }
        
        .lake-content {
            padding: var(--space-lg);
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        
        .lake-badge {
            display: inline-block;
            background-color: var(--secondary);
            color: var(--white);
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius-full);
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: var(--space-sm);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .lake-content h3 {
            margin-bottom: var(--space-sm);
            color: var(--primary-dark);
            font-weight: 700;
            font-size: 1.4rem;
        }
        
        .lake-content p {
            color: var(--gray);
            margin-bottom: var(--space-md);
            flex-grow: 0;
            font-size: 0.95rem;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .lake-features {
            margin-bottom: var(--space-md);
            margin-top: auto;
            padding-top: var(--space-sm);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .lake-feature {
            display: flex;
            align-items: center;
            margin-bottom: var(--space-xs);
        }
        
        .lake-feature i {
            color: var(--secondary);
            margin-right: var(--space-sm);
            width: 20px;
            text-align: center;
            font-size: 0.9rem;
        }
        
        .lake-feature span {
            font-size: 0.9rem;
            color: var(--dark);
        }
        
        .lake-card .btn {
            align-self: flex-start;
            margin-top: var(--space-md);
        }
        
        /* Media Queries */
        @media (min-width: 768px) {
            .lakes-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1200px) {
            .lakes-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* Leaflet map */
        .lakes-map {
            width: 100%;
            height: 500px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            border: 3px solid transparent;
            transition: border-color var(--transition-medium);
        }
        
        .lakes-map.highlighted {
            border: 3px solid var(--secondary);
            box-shadow: 0 0 15px rgba(78, 205, 196, 0.5);
        }

        .lakes-map-container {
            position: relative;
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
            padding: 0.45rem 1rem;
            border-radius: var(--radius-full);
            font-size: 0.85rem;
            cursor: pointer;
            transition: all var(--transition-medium);
        }

        .lakes-tab.active,
        .lakes-tab:hover {
            background: var(--secondary);
            color: var(--white);
            border-color: var(--secondary);
        }
    </style>
    `;

    // Load the lakes component
    ComponentLoader.loadComponent('lakes-container', lakesHTML);

    // Initialize Leaflet map once component is in the DOM
    document.addEventListener('DOMContentLoaded', initLakesInteractiveMap);

    function initLakesInteractiveMap() {
        const mapContainer = document.getElementById('lakesMap');
        if (!mapContainer) return; // Component not yet in DOM
        if (typeof L === 'undefined') {
            console.error('Leaflet library not loaded.');
            return;
        }

        // Prevent multiple initializations
        if (mapContainer.dataset.mapInitialized) return;
        mapContainer.dataset.mapInitialized = 'true';

        // Create the map
        const map = L.map('lakesMap', { scrollWheelZoom: false }).setView([50.72, -120.33], 8);

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
        map.fitBounds(allLayer.getBounds(), { padding: [20, 20] });

        // Add highlighted border to map
        mapContainer.classList.add('highlighted');

        // Tab switching logic
        const tabs = document.querySelectorAll('.lakes-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Active state styling
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const area = tab.dataset.area;

                // Update map label
                mapLabel.textContent = areaLabels[area] || 'Selected Area';

                // Remove all layers
                Object.values(layers).forEach(layer => {
                    if (map.hasLayer(layer)) map.removeLayer(layer);
                });

                // Add selected route(s)
                layers[area].addTo(map);

                // Adjust viewport
                map.fitBounds(layers[area].getBounds(), { padding: [40, 40] });

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
    }
})();