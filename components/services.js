/**
 * Sequoia Boat Rentals & Concierge Services
 * Services Component with Tabbed Interface
 */

(function () {
    const servicesHTML = `
    <div class="services section-padding">
        <div class="container">
            <h2 class="section-heading text-center">Our Services</h2>
            <p class="section-subtitle text-center">From boat rentals to concierge services, we provide everything you need for your lake adventure</p>
            
            <div class="services-tabs">
                <div class="tabs-navigation">
                    <button class="tab-button active" data-tab="boat-rentals">
                        <i class="fas fa-ship"></i>
                        <span>Boat Rentals</span>
                    </button>
                    <button class="tab-button" data-tab="concierge">
                        <i class="fas fa-concierge-bell"></i>
                        <span>Concierge Services</span>
                    </button>
                    <button class="tab-button" data-tab="add-ons">
                        <i class="fas fa-plus-circle"></i>
                        <span>Add-ons</span>
                    </button>
                </div>
                
                <div class="tabs-content">
                    <!-- Boat Rentals Tab -->
                    <div class="tab-pane active" id="boat-rentals">
                        <div class="service-content">
                            <div class="service-image image-container">
                                <img src="images/electric_inflatable_boat.png" alt="Electric, Eco-friendly Inflatable Boats" loading="lazy">
                            </div>
                            <div class="service-details">
                                <h3>Electric, Eco-friendly Inflatable Boats</h3>
                                <p>Our premium electric boats provide a quiet, peaceful experience that lets you connect with nature without disturbing it. Perfect for families, fishing enthusiasts, or anyone looking to explore the beautiful lakes of Kamloops.</p>
                                <ul class="service-benefits">
                                    <li><i class="fas fa-check"></i> Quiet, zero-emission electric motors</li>
                                    <li><i class="fas fa-check"></i> Comfortable seating for 2-4 people</li>
                                    <li><i class="fas fa-check"></i> Easy to operate, no experience needed</li>
                                    <li><i class="fas fa-check"></i> 6+ hours of battery life</li>
                                    <li><i class="fas fa-check"></i> Safety equipment included (life jackets, etc.)</li>
                                </ul>
                                
                                <h4>Pricing Information</h4>
                                <div class="pricing-table">
                                    <div class="pricing-row pricing-header">
                                        <div class="pricing-cell">Duration</div>
                                        <div class="pricing-cell">Weekday Price</div>
                                        <div class="pricing-cell">Weekend Price</div>
                                    </div>
                                    <div class="pricing-row">
                                        <div class="pricing-cell">2 Hours</div>
                                        <div class="pricing-cell">$70/hr <small>($140 total)</small></div>
                                        <div class="pricing-cell">$80/hr <small>($160 total)</small></div>
                                    </div>
                                    <div class="pricing-row">
                                        <div class="pricing-cell">4 Hours</div>
                                        <div class="pricing-cell">$60/hr <small>($240 total)</small></div>
                                        <div class="pricing-cell">$70/hr <small>($280 total)</small></div>
                                    </div>
                                    <div class="pricing-row">
                                        <div class="pricing-cell">6 Hours</div>
                                        <div class="pricing-cell">$50/hr <small>($300 total)</small></div>
                                        <div class="pricing-cell">$60/hr <small>($360 total)</small></div>
                                    </div>
                                </div>
                                
                                <h4>Rental Policies</h4>
                                <ul class="service-policies">
                                    <li><i class="fas fa-info-circle"></i> Must be 18+ with valid ID to rent</li>
                                    <li><i class="fas fa-info-circle"></i> Boating license required (can obtain temporary)</li>
                                    <li><i class="fas fa-info-circle"></i> Security deposit required at pickup</li>
                                    <li><i class="fas fa-info-circle"></i> Free delivery to popular lakes</li>
                                    <li><i class="fas fa-info-circle"></i> Rentals include basic safety training</li>
                                </ul>
                                
                                <a href="#booking-preview-container" class="btn btn-primary mt-4">Book Your Boat</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Concierge Services Tab -->
                    <div class="tab-pane" id="concierge">
                        <div class="service-content">
                            <div class="service-image image-container">
                                <img src="images/people_riding_boats_lakes.png" alt="Concierge Services" loading="lazy">
                            </div>
                            <div class="service-details">
                                <h3>Premium Concierge Services</h3>
                                <p>Enhance your lake experience with our range of concierge services. From transportation to dining arrangements, we're here to make your adventure as smooth and enjoyable as possible.</p>
                                
                                <div class="service-options">
                                    <div class="service-option">
                                        <div class="service-option-header">
                                            <h4>Guided Tours</h4>
                                            <span class="service-price">From $120</span>
                                        </div>
                                        <p>Experience the lakes with a knowledgeable local guide who will show you hidden spots, share local history, and enhance your adventure.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-header">
                                            <h4>Professional Driver</h4>
                                            <span class="service-price">From $150</span>
                                        </div>
                                        <p>Don't have a boating license? No problem! Hire one of our licensed drivers to operate the boat while you relax and enjoy the ride.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-header">
                                            <h4>Lakeside Picnic Setup</h4>
                                            <span class="service-price">From $80</span>
                                        </div>
                                        <p>We'll arrange a beautiful lakeside picnic with local foods and refreshments at a scenic spot of your choice.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-header">
                                            <h4>Photography Package</h4>
                                            <span class="service-price">From $200</span>
                                        </div>
                                        <p>Capture your adventure with a professional photographer who will join you for part of your journey and provide edited digital photos.</p>
                                    </div>
                                </div>
                                
                                <p class="service-note"><i class="fas fa-info-circle"></i> All concierge services should be booked at least 48 hours in advance. Contact us for custom packages and special requests.</p>
                                
                                <a href="#booking-preview-container" class="btn btn-primary mt-4">Inquire About Services</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Add-ons Tab -->
                    <div class="tab-pane" id="add-ons">
                        <div class="service-content">
                            <div class="service-image image-container">
                                <img src="images/jbl_flip6.png" alt="Rental Add-ons" loading="lazy">
                            </div>
                            <div class="service-details">
                                <h3>Enhance Your Adventure</h3>
                                <p>Make your day on the lake even better with our premium add-ons. From coolers to speakers, we have everything you need for the perfect day on the water.</p>
                                
                                <div class="add-ons-grid">
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-snowflake"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>Cooler Rental</h4>
                                            <p>Keep your drinks and snacks cold all day with our premium coolers.</p>
                                            <span class="add-on-price">$30/day</span>
                                        </div>
                                    </div>
                                    
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-volume-up"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>JBL Flip-6 Speaker</h4>
                                            <p>Waterproof Bluetooth speaker perfect for bringing your soundtrack to the lake.</p>
                                            <span class="add-on-price">$20/day</span>
                                        </div>
                                    </div>
                                    
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-water"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>Dry Bags</h4>
                                            <p>Keep your belongings safe and dry with our waterproof dry bags.</p>
                                            <span class="add-on-price">$10/day</span>
                                        </div>
                                    </div>
                                    
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-camera"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>GoPro Camera</h4>
                                            <p>Capture your adventure with a waterproof GoPro camera and mounting kit.</p>
                                            <span class="add-on-price">$40/day</span>
                                        </div>
                                    </div>
                                    
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-fish"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>Fishing Gear</h4>
                                            <p>Basic fishing rods and tackle box for casual fishing on the lake.</p>
                                            <span class="add-on-price">$25/day</span>
                                        </div>
                                    </div>
                                    
                                    <div class="add-on-item">
                                        <div class="add-on-icon">
                                            <i class="fas fa-umbrella-beach"></i>
                                        </div>
                                        <div class="add-on-details">
                                            <h4>Beach Essentials Kit</h4>
                                            <p>Beach umbrella, towels, and portable chairs for lakeside comfort.</p>
                                            <span class="add-on-price">$35/day</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p class="service-note"><i class="fas fa-info-circle"></i> Add-ons can be reserved during the booking process or added up to 24 hours before your rental.</p>
                                
                                <a href="#booking-preview-container" class="btn btn-primary mt-4">Book With Add-ons</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* Services Section Styles */
        .services {
            position: relative;
            overflow: hidden;
        }
        
        .service-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-lg);
        }
        
        .service-image {
            height: 100%;
            position: relative;
        }
        
        .service-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* Tabs Styling */
        .services-tabs {
            margin-top: var(--space-lg);
        }
        
        .tabs-navigation {
            display: flex;
            flex-wrap: wrap;
            border-bottom: 2px solid var(--section-bg);
            margin-bottom: var(--space-lg);
            overflow: auto;
        }
        
        .tab-button {
            background: none;
            border: none;
            padding: 1rem 1.5rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            color: var(--gray);
            transition: all var(--transition-medium);
            border-bottom: 3px solid transparent;
            display: flex;
            align-items: center;
            white-space: nowrap;
        }
        
        .tab-button i {
            margin-right: 0.5rem;
            font-size: 1.1rem;
        }
        
        .tab-button:hover {
            color: var(--secondary);
        }
        
        .tab-button.active {
            color: var(--secondary);
            border-bottom-color: var(--secondary);
        }
        
        .tab-pane {
            display: none;
            animation: fadeIn 0.5s ease;
        }
        
        .tab-pane.active {
            display: block;
        }
        
        /* Service Details Styling */
        .service-details {
            padding: var(--space-md);
        }
        
        .service-details h3 {
            margin-bottom: var(--space-md);
            color: var(--primary-dark);
            font-weight: 700;
        }
        
        .service-benefits, .service-policies {
            padding-left: 0;
            list-style: none;
            margin-bottom: var(--space-lg);
        }
        
        .service-benefits li, .service-policies li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.75rem;
        }
        
        .service-benefits li i, .service-policies li i {
            color: var(--secondary);
            margin-right: var(--space-sm);
            flex-shrink: 0;
            margin-top: 0.25rem;
        }
        
        .service-details h4 {
            margin-bottom: var(--space-sm);
            color: var(--primary-dark);
            font-size: 1.2rem;
        }
        
        /* Pricing Table */
        .pricing-table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: var(--space-lg);
            background-color: var(--white);
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .pricing-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .pricing-row:last-child {
            border-bottom: none;
        }
        
        .pricing-header {
            background-color: var(--secondary);
            color: white;
            font-weight: 600;
        }
        
        .pricing-cell {
            padding: 0.75rem 1rem;
            text-align: center;
        }
        
        .pricing-cell small {
            display: block;
            font-size: 0.8rem;
            color: var(--gray);
            margin-top: 0.2rem;
        }
        
        /* Service Options */
        .service-options {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-md);
            margin-bottom: var(--space-lg);
        }
        
        .service-option {
            background-color: var(--white);
            padding: var(--space-md);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-medium);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .service-option:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }
        
        .service-option-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--space-xs);
        }
        
        .service-option h4 {
            margin: 0;
            color: var(--primary-dark);
        }
        
        .service-price {
            background-color: var(--secondary);
            color: var(--white);
            padding: 0.25rem 0.75rem;
            border-radius: var(--radius-full);
            font-weight: 600;
            font-size: 0.9rem;
        }
        
        .service-option p {
            margin: var(--space-xs) 0 0;
            font-size: 0.95rem;
        }
        
        /* Add-ons */
        .add-ons-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-md);
            margin-bottom: var(--space-lg);
        }
        
        .add-on-item {
            display: flex;
            background-color: var(--white);
            padding: var(--space-md);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-medium);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .add-on-item:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }
        
        .add-on-icon {
            width: 50px;
            height: 50px;
            background-color: rgba(78, 205, 196, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: var(--space-md);
            font-size: 1.25rem;
            color: var(--secondary);
            flex-shrink: 0;
        }
        
        .add-on-details {
            flex: 1;
        }
        
        .add-on-details h4 {
            margin-bottom: 0.25rem;
            color: var(--primary-dark);
        }
        
        .add-on-details p {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        
        .add-on-price {
            font-weight: 700;
            color: var(--secondary);
            font-size: 1rem;
            display: block;
        }
        
        .service-note {
            background-color: rgba(255, 158, 67, 0.1);
            padding: var(--space-sm) var(--space-md);
            border-radius: var(--radius-md);
            margin-bottom: var(--space-md);
            font-size: 0.9rem;
            border-left: 3px solid var(--accent);
        }
        
        .service-note i {
            color: var(--accent);
            margin-right: var(--space-xs);
        }
        
        /* Media Queries */
        @media (min-width: 768px) {
            .service-content {
                grid-template-columns: 1fr 2fr;
                align-items: start;
            }
            
            .service-image {
                min-height: 400px;
            }
            
            .service-options {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .add-ons-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 767px) {
            .tab-button {
                padding: 0.75rem 1rem;
                font-size: 0.85rem;
            }
            
            .tab-button i {
                margin-right: 0.25rem;
            }
            
            .service-note {
                font-size: 0.8rem;
            }
            
            .service-price {
                font-size: 0.8rem;
            }
        }
    </style>

    <script>
        // Initialize tabs functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabPanes = document.querySelectorAll('.tab-pane');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and panes
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabPanes.forEach(pane => pane.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show corresponding tab pane
                    const tabId = button.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });
    </script>
    `;

    // Load the services component
    ComponentLoader.loadComponent('services-container', servicesHTML);
})();