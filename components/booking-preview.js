/**
 * Sequoia Boat Rentals & Concierge Services
 * Booking Preview Component - Mobile-First Refactor
 */

(function () {
    const bookingPreviewHTML = `
    <div class="booking-preview section-padding">
        <div class="container">
            <div class="booking-preview-inner">
                <div class="booking-content">
                    <h2 class="section-heading">Quick Booking</h2>
                    <div class="booking-features">
                        <div class="booking-feature"><i class="fas fa-check-circle"></i> Instant confirmation</div>
                        <div class="booking-feature"><i class="fas fa-check-circle"></i> Free cancellation</div>
                        <div class="booking-feature"><i class="fas fa-check-circle"></i> Safety gear included</div>
                        <div class="booking-feature"><i class="fas fa-check-circle"></i> No hidden fees</div>
                    </div>
                </div>
                
                <div class="booking-form-container">
                    <form id="quick-booking-form" class="booking-form">
                        <!-- Step 1: Core Choices -->
                        <div class="form-step active" id="form-step-1">
                        <div class="form-group">
                                <label for="lake">Choose a Lake</label>
                                <div class="select-wrapper">
                            <select id="lake" class="form-control" required>
                                        <option value="" disabled selected>Select a lake...</option>
                                        <option value="heffley">Heffley Lake</option>
                                <option value="paul">Paul Lake</option>
                                <option value="monte">Monte Lake</option>
                            </select>
                        </div>
                            </div>
                        <div class="form-group">
                                <label for="boat-type">Boat Type</label>
                                <div class="select-wrapper">
                            <select id="boat-type" class="form-control" required>
                                        <option value="" disabled selected>Select boat type...</option>
                                <option value="single">Single Boat (1-2 people)</option>
                                        <option value="family">Family Boat (3-4 people)</option>
                            </select>
                        </div>
                            </div>
                        <div class="form-group">
                                <label for="duration">Rental Duration</label>
                                 <div class="select-wrapper">
                            <select id="duration" class="form-control" required>
                                        <option value="" disabled selected>Select duration...</option>
                                        <option value="2">2 Hours</option>
                                        <option value="4">4 Hours</option>
                                        <option value="6">6 Hours</option>
                            </select>
                                </div>
                            </div>
                            <button type="button" class="btn btn-accent btn-block" id="form-next-btn">Next</button>
                        </div>

                        <!-- Step 2: Details & Add-ons -->
                        <div class="form-step" id="form-step-2">
                            <div class="form-group">
                                <label for="booking-date">Date</label>
                                <input type="date" id="booking-date" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="booking-time">Time</label>
                                <input type="time" id="booking-time" class="form-control" required>
                            </div>
                        <div class="form-group">
                                <label>Add-ons (Optional)</label>
                                <div class="chip-group">
                                    <button type="button" class="chip-toggle" data-value="cooler">Cooler ($30)</button>
                                    <button type="button" class="chip-toggle" data-value="speaker">JBL Speaker ($20)</button>
                                    <button type="button" class="chip-toggle" data-value="drybags">Dry Bags ($10)</button>
                                </div>
                            </div>
                            <button type="button" class="btn-text" id="form-back-btn">← Back</button>
                        </div>
                    </form>
                    
                    <div class="booking-footer">
                        <div class="price-preview" aria-live="polite">
                            <span>Est. Total:</span>
                            <span id="price-total">$0.00</span>
                        </div>
                        <button type="submit" form="quick-booking-form" class="btn btn-accent btn-lg btn-block" id="cta-btn">Check Availability</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* BASE & LAYOUT */
        .booking-preview {
            background-image: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            color: var(--white);
            position: relative;
            padding-top: 48px;
            padding-bottom: 48px;
        }
        .booking-preview-inner {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .booking-content .section-heading {
            color: var(--white);
            font-size: clamp(24px, 5vw, 32px);
            text-align: left;
            margin-bottom: 1rem;
        }
        .booking-content .section-heading:after {
            display: none;
        }
        .booking-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
        }
        .booking-feature {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 0.75rem;
            border-radius: var(--radius-md);
            font-size: 0.9rem;
        }
        .booking-feature i {
            color: var(--secondary);
            margin-right: 0.5rem;
        }
        
        /* FORM CONTAINER */
        .booking-form-container {
            background-color: var(--white);
            color: var(--dark);
            border-radius: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            padding: 1.5rem 1.25rem;
            display: flex;
            flex-direction: column;
            margin: 0.5rem;
        }
        .booking-form {
             flex-grow: 1;
        }
        .form-step { display: none; }
        .form-step.active { display: block; animation: fadeIn 0.4s; }

        /* FORM ELEMENTS */
        .form-group {
            margin-bottom: 1.25rem;
        }
        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--dark);
        }
        .form-control {
            width: 100%;
            min-height: 48px; /* Tap target */
            padding: 0 1rem;
            border: 1px solid #ddd;
            border-radius: var(--radius-md);
            font-size: 1rem;
            background-color: #f8f8f8;
        }
        .select-wrapper {
            position: relative;
        }
        .select-wrapper::after {
            content: '▼';
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #888;
            font-size: 0.8rem;
        }
        select.form-control {
            appearance: none; 
            -webkit-appearance: none;
            padding-right: 2.5rem;
        }
        .btn-text {
            background: none;
            border: none;
            color: var(--primary);
            font-weight: 600;
            cursor: pointer;
            padding: 0.5rem;
        }

        /* CHIPS */
        .chip-group {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }
        .chip-toggle {
            flex: 1 1 100%;
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: var(--radius-full);
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all var(--transition-medium);
        }
        .chip-toggle.active {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }
        
        /* FOOTER & STICKY CTA */
        .booking-footer {
            margin-top: 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid #eee;
        }
        .price-preview {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        #price-total { font-size: 1.25rem; }
        
        .booking-footer.sticky {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--white);
            padding: 1rem 6%;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
            border-top: 1px solid #ddd;
            z-index: 100;
        }

        #cta-btn {
            width: 100%;
            font-size: 1rem;
            padding: 0.8rem 1rem;
        }
        
        /* MOBILE OPTIMIZATIONS */
        @media (max-width: 576px) {
            .booking-preview {
                padding-top: 32px;
                padding-bottom: 32px;
            }
            
            .booking-form-container {
                border-radius: 20px;
                padding: 1.25rem 1rem;
                margin: 0 0.25rem;
            }
            
            .form-control {
                font-size: 16px; /* Prevents iOS zoom on focus */
            }
            
            .booking-feature {
                font-size: 0.85rem;
                padding: 0.4rem 0.6rem;
            }
            
            .form-group label {
                font-size: 0.85rem;
            }
            
            #cta-btn {
                padding: 0.7rem 1rem;
            }
        }
        
        /* DESKTOP STYLES */
        @media (min-width: 768px) {
            .booking-preview-inner {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-xl);
                align-items: center;
            }
            
            .booking-features {
                grid-template-columns: 1fr 1fr;
            }
            
            .booking-form-container {
                padding: 2rem;
                border-radius: 32px;
                margin: 0;
            }
            
            .chip-group {
                display: flex;
                flex-wrap: wrap;
            }
            
            .chip-toggle {
                flex: 1 0 auto;
            }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Variables
            const form = document.getElementById('quick-booking-form');
            const step1 = document.getElementById('form-step-1');
            const step2 = document.getElementById('form-step-2');
            const nextBtn = document.getElementById('form-next-btn');
            const backBtn = document.getElementById('form-back-btn');
            const ctaBtn = document.getElementById('cta-btn');
            const priceTotal = document.getElementById('price-total');
            const chipToggles = document.querySelectorAll('.chip-toggle');
            
            // Core functionality
            if (nextBtn) nextBtn.addEventListener('click', () => {
                step1.classList.remove('active');
                step2.classList.add('active');
                updateCTA('Book Now');
                calculatePrice();
            });
            
            if (backBtn) backBtn.addEventListener('click', () => {
                step2.classList.remove('active');
                step1.classList.add('active');
                updateCTA('Check Availability');
            });
            
            // Toggle chip selection
            chipToggles.forEach(chip => {
                chip.addEventListener('click', () => {
                    chip.classList.toggle('active');
                    calculatePrice();
                });
            });
            
            // Form field change event for price calculation
            const formFields = form.querySelectorAll('select, input');
            formFields.forEach(field => {
                field.addEventListener('change', calculatePrice);
            });
            
            // Initial state of CTA
            updateCTA('Check Availability');
            
            // CTA text update function
            function updateCTA(text) {
                if (ctaBtn) ctaBtn.textContent = text;
            }
            
            // Price calculation logic
            function calculatePrice() {
                // Get values
                const boatType = document.getElementById('boat-type')?.value;
                const duration = document.getElementById('duration')?.value;
                
                // Base prices
                const prices = {
                    single: {
                        2: 70,
                        4: 60,
                        6: 50
                    },
                    family: {
                        2: 90,
                        4: 80,
                        6: 70
                    }
                };
                
                // Add-ons
                const addOns = {
                    cooler: 30,
                    speaker: 20,
                    drybags: 10
                };
                
                // Calculate base price
                let total = 0;
                if (boatType && duration) {
                    total = prices[boatType][duration] * duration;
                }
                
                // Add selected add-ons
                document.querySelectorAll('.chip-toggle.active').forEach(chip => {
                    const addOnType = chip.dataset.value;
                    if (addOnType && addOns[addOnType]) {
                        total += addOns[addOnType];
                    }
                });
                
                // Update UI
                if (priceTotal) priceTotal.textContent = '$' + total.toFixed(2);
            }
        });
    </script>
    `;

    // Load the booking preview component
    ComponentLoader.loadComponent('booking-preview-container', bookingPreviewHTML);
})(); 
