/**
 * Sequoia Boat Rentals & Concierge Services
 * Services Component with Tabbed Interface
 */

(function () {
    const servicesHTML = `
    <div class="services section-padding">
        <div class="services-background-image" style="background-image: url('images/people_riding_boats_lakes.png');"></div>
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
                                        <div class="pricing-cell">2 Hours<br><small>(must have boating license)</small></div>
                                        <div class="pricing-cell">$70-79.89/hr <small>($140-159.78 total)</small></div>
                                        <div class="pricing-cell">$80-89/hr <small>($160-178 total)</small></div>
                                    </div>
                                    <div class="pricing-row">
                                        <div class="pricing-cell">4 Hours<br><small>(driver provided if needed)</small></div>
                                        <div class="pricing-cell">$60-69.89/hr <small>($240-279.56 total)</small></div>
                                        <div class="pricing-cell">$70-79.89/hr <small>($280-319.56 total)</small></div>
                                    </div>
                                    <div class="pricing-row">
                                        <div class="pricing-cell">6 Hours<br><small>(driver provided if needed)</small></div>
                                        <div class="pricing-cell">$50-59.89/hr <small>($300-359.34 total)</small></div>
                                        <div class="pricing-cell">$60-69.89/hr <small>($360-419.34 total)</small></div>
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
                            <div class="service-details">
                                <h3>Premium Concierge Services</h3>
                                <p>Enhance your lake experience with our range of concierge services. From transportation to dining arrangements, we're here to make your adventure as smooth and enjoyable as possible.</p>
                                
                                <div class="service-options">
                                    <div class="service-option">
                                        <div class="service-option-icon">
                                            <i class="fas fa-map-marked-alt"></i>
                                        </div>
                                        <div class="service-option-header">
                                            <h4>Guided Tours</h4>
                                            <span class="service-price">From $120</span>
                                        </div>
                                        <p>Experience the lakes with a knowledgeable local guide who will show you hidden spots, share local history, and enhance your adventure.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-icon">
                                            <i class="fas fa-id-card"></i>
                                        </div>
                                        <div class="service-option-header">
                                            <h4>Professional Driver</h4>
                                            <span class="service-price">From $150</span>
                                        </div>
                                        <p>Don't have a boating license? No problem! Hire one of our licensed drivers to operate the boat while you relax and enjoy the ride.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-icon">
                                            <i class="fas fa-utensils"></i>
                                        </div>
                                        <div class="service-option-header">
                                            <h4>Lakeside Picnic Setup</h4>
                                            <span class="service-price">From $80</span>
                                        </div>
                                        <p>We'll arrange a beautiful lakeside picnic with local foods and refreshments at a scenic spot of your choice.</p>
                                    </div>
                                    
                                    <div class="service-option">
                                        <div class="service-option-icon">
                                            <i class="fas fa-camera"></i>
                                        </div>
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
            z-index: 1;
        }
        
        .services-background-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.85;
            z-index: -2;
        }

        .services .section-heading,
        .services .section-subtitle {
            color: var(--dark);
            text-shadow: 0 1px 2px rgba(255,255,255,0.5);
            position: relative;
        }

        .services .tabs-navigation {
            background: rgba(255, 255, 255, 0.7);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: var(--radius-lg);
            padding: 15px;
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            box-shadow: var(--shadow-md);
        }
        
        .service-content {
            padding: 2.5rem;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: var(--dark);
            box-shadow: var(--shadow-md);
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
        
        .tab-button {
            background: transparent;
            border: none;
            padding: 12px 24px;
            margin: 0 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 8px;
            position: relative;
            color: var(--primary);
            font-weight: 700;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
        }
        
        /* Mobile adjustments for tab buttons */
        @media(max-width: 575px){
            .services .tabs-navigation{
                overflow-x:auto;
                white-space:nowrap;
                padding-bottom:4px;
                justify-content:flex-start;
            }
            .services .tab-button{
                flex:0 0 auto;
                padding:8px 16px;
                font-size:0.9rem;
                margin:0 3px;
            }
        }
        
        .tab-button i {
            margin-right: 10px;
            font-size: 1.3rem;
            color: var(--primary);
        }
        
        .tab-button:hover {
            background: rgba(255, 255, 255, 0.4);
        }
        
        .tab-button.active {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: var(--shadow-sm);
        }
        
        .tab-button.active::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid rgba(255, 255, 255, 0.9);
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
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--primary-dark);
        }
        
        .service-details h4 {
            font-size: 1.3rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(11, 83, 148, 0.3);
            color: var(--primary);
        }
        
        .service-benefits, .service-policies {
            padding-left: 0;
            list-style: none;
            margin-bottom: var(--space-lg);
        }
        
        .service-benefits li, .service-policies li {
            margin-bottom: 0.75rem;
        }
        
        .service-benefits .fa-check, .service-policies .fa-info-circle {
            color: var(--secondary);
            margin-right: 0.5rem;
        }
        
        /* Pricing Table */
        .pricing-table {
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: var(--shadow-sm);
        }
        
        .pricing-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .pricing-row:last-child {
            border-bottom: none;
        }
        
        .pricing-header {
            background-color: var(--primary);
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
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .service-option {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 1.75rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.4);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .service-option::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, var(--primary), var(--secondary));
        }
        
        .service-option:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .service-option-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            position: relative;
        }
        
        .service-option-header h4 {
            color: var(--dark) !important;
            margin: 0;
            font-size: 1.35rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            border-bottom: none;
        }
        
        .service-option-icon {
            background: white;
            color: var(--primary);
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
        }
        
        .service-option-icon i {
            font-size: 1.5rem;
        }
        
        .service-price {
            background: var(--primary);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 30px;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            min-width: 100px;
            display: inline-block;
        }
        
        .service-option p {
            color: var(--dark) !important;
            margin-bottom: 0;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        /* Add-ons */
        .add-ons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .add-on-item {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            align-items: flex-start;
            gap: 1.25rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.4);
            position: relative;
            overflow: hidden;
        }
        
        .add-on-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, var(--primary), var(--secondary));
        }
        
        .add-on-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .add-on-icon {
            background: white;
            color: var(--primary);
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .add-on-icon i {
            font-size: 1.5rem;
        }
        
        .add-on-details {
            flex-grow: 1;
        }
        
        .add-on-details h4 {
            margin: 0 0 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--dark) !important;
            border-bottom: none;
            padding-bottom: 0;
        }
        
        .add-on-details p {
            margin: 0 0 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: var(--dark) !important;
        }
        
        .add-on-price {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            min-width: 90px;
        }
        
        /* Service Notes */
        .service-note {
            background: rgba(255, 158, 67, 0.1);
            border-left: 4px solid var(--accent);
            padding: 1rem 1.5rem;
            margin-top: 2rem;
            border-radius: 0 8px 8px 0;
            color: var(--dark) !important;
            display: flex;
            align-items: center;
        }
        
        .service-note i {
            color: var(--accent);
            margin-right: 0.75rem;
            font-size: 1.25rem;
        }

        /* Service Benefits and Policies */
        .service-benefits, 
        .service-policies {
            padding-left: 0;
            list-style: none;
            margin: 1.5rem 0;
        }
        
        .service-benefits li, 
        .service-policies li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: flex-start;
            background: rgba(255, 255, 255, 0.6);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }
        
        .service-benefits li:hover, 
        .service-policies li:hover {
            transform: translateX(5px);
            background: rgba(255, 255, 255, 0.8);
        }
            
        .service-benefits li i, 
        .service-policies li i {
            color: var(--primary);
            margin-right: 0.75rem;
            font-size: 1.1rem;
            margin-top: 0.2rem;
        }

        /* Tab Content Styles */
        .tabs-content {
            background: rgba(255, 255, 255, 0.4);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: var(--radius-lg);
            padding: 2rem;
            box-shadow: var(--shadow-md);
            margin-top: -10px; /* Overlap with tabs */
            z-index: 10;
            position: relative;
        }
        
        .tab-pane {
            display: none;
            animation: fadeIn 0.5s;
        }
        
        .tab-pane.active {
            display: block;
        }
        
        .service-details {
            flex: 2 1 60%;
        }

        .services .service-details p,
        .services .service-details .service-note,
        .services .service-details ul li {
            color: var(--dark);
        }
            
        .services .service-details h3,
        .services .service-details h4 {
            color: var(--primary-dark);
        }

        /* Pricing Table Styling */
        .pricing-table {
            width: 100%;
            margin: 1.5rem 0;
            border-collapse: separate;
            border-spacing: 0;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
            
        .pricing-row {
            display: flex;
        }
        
        .pricing-row.pricing-header {
            background: var(--primary);
        }
        
        .pricing-row:not(.pricing-header) {
            background-color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid #e0e0e0;
        }
            
        .pricing-row:last-child {
            border-bottom: none;
        }
        
        .pricing-cell {
            flex: 1;
            padding: 1rem;
            text-align: center;
            color: var(--dark) !important;
        }
        
        .pricing-row.pricing-header .pricing-cell {
            color: white !important;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .pricing-cell small {
            display: block;
            font-size: 0.85rem;
            color: var(--gray);
            margin-top: 0.25rem;
        }

        /* Mobile Redesign */
        @media (max-width: 767px) {
            /* Tab Navigation - Full Width Buttons */
            .services .tabs-navigation {
                flex-direction: column;
                gap: 0;
                padding: 0;
                border-radius: 10px;
                overflow: hidden;
                background: #fff;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .services .tab-button {
                width: 100%;
                border-radius: 0;
                margin: 0;
                padding: 15px;
                border-bottom: 1px solid rgba(0,0,0,0.07);
                justify-content: center;
                font-size: 0.9rem;
                font-weight: 600;
                position: relative;
            }
            
            .services .tab-button:last-child {
                border-bottom: none;
            }
            
            .services .tab-button.active {
                background-color: var(--primary);
                color: white;
            }
            
            .services .tab-button.active i {
                color: white;
            }
            
            /* Remove arrow indicator on mobile */
            .services .tab-button.active::after {
                display: none;
            }
            
            /* Content Container */
            .services .tabs-content {
                margin-top: 1rem;
                padding: 1rem;
                border-radius: 10px;
            }
            
            .services .service-content {
                padding: 1rem;
            }
            
            .services .service-details {
                padding: 0;
            }
            
            /* Service Details & Headings */
            .services .service-details h3 {
                font-size: 1.3rem;
                margin-bottom: 0.75rem;
            }
            
            .services .service-details h4 {
                font-size: 1.1rem;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
            }
            
            .services .service-details p {
                font-size: 0.95rem;
                line-height: 1.5;
            }
            
            /* Service Cards */
            .services .service-option {
                padding: 1.25rem;
                margin-bottom: 1rem;
            }
            
            .services .service-option-header {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            
            .services .service-option-header h4 {
                font-size: 1rem;
                margin: 0;
            }
            
            .services .service-price {
                font-size: 0.85rem;
                padding: 0.4rem 1rem;
                text-align: center;
                min-width: 90px;
            }
            
            .services .service-option-icon {
                width: 36px;
                height: 36px;
                margin-bottom: 0.75rem;
            }
            
            .services .service-option-icon i {
                font-size: 1rem;
            }
            
            .services .service-option p {
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .services .add-on-price {
                padding: 0.4rem 1rem;
                text-align: center;
                font-size: 0.85rem;
            }
            
            /* Call to action buttons */
            .services .btn {
                width: 100%;
                font-size: 0.9rem;
                padding: 10px;
            }
            
            /* Service Note */
            .services .service-note {
                padding: 0.75rem 1rem;
                font-size: 0.85rem;
                margin-top: 1.5rem;
            }
            
            .services .service-note i {
                font-size: 1rem;
                margin-right: 0.5rem;
            }
            
            /* Service Options Layout for Mobile */
            .services .service-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            /* Add-ons Grid */
            .services .add-ons-grid {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .services .add-on-item {
                padding: 1rem;
            }
            
            .services .add-on-icon {
                width: 36px;
                height: 36px;
            }
            
            .services .add-on-icon i {
                font-size: 1rem;
            }
            
            .services .add-on-details h4 {
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }
            
            .services .add-on-details p {
                font-size: 0.85rem;
                margin-bottom: 0.5rem;
            }
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
            .service-options,
            .add-ons-grid {
                grid-template-columns: 1fr;
            }
            
            .pricing-row {
                flex-direction: column;
            }
            
            .pricing-cell {
                padding: 0.75rem;
            }
            
            .pricing-row.pricing-header {
                display: none;
            }
            
            .pricing-cell:before {
                content: attr(data-label);
                font-weight: 600;
                display: block;
                margin-bottom: 0.5rem;
            }
        }

        /* End of responsive styles */
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