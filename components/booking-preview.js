/**
 * Sequoia Boat Rentals & Concierge Services
 * Booking Preview Component
 */

(function () {
    const bookingPreviewHTML = `
    <div class="booking-preview section-padding">
        <div class="container">
            <div class="booking-preview-inner">
                <div class="booking-content">
                    <h2 class="section-heading">Quick Booking</h2>
                    <p class="booking-intro">Book your lake adventure in just a few simple steps! Select your preferred lake, boat type, and rental duration to get started.</p>
                    
                    <div class="booking-features">
                        <div class="booking-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Instant confirmation</span>
                        </div>
                        <div class="booking-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Free cancellation up to 48 hours</span>
                        </div>
                        <div class="booking-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>All safety equipment included</span>
                        </div>
                        <div class="booking-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>No hidden fees or charges</span>
                        </div>
                    </div>
                </div>
                
                <div class="booking-form-container">
                    <form id="quick-booking-form" class="booking-form">
                        <div class="form-group">
                            <label for="lake" class="form-label">Choose a Lake</label>
                            <select id="lake" class="form-control" required>
                                <option value="" disabled selected>Select a lake</option>
                                <option value="heffley">Heffley Lake (Closest to Sun Peaks)</option>
                                <option value="paul">Paul Lake</option>
                                <option value="monte">Monte Lake</option>
                                <option value="shuswap">Shuswap Lake</option>
                                <option value="kamloops">Kamloops Lake</option>
                                <option value="laclejeune">Lac Le Jeune</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="boat-type" class="form-label">Boat Type</label>
                            <select id="boat-type" class="form-control" required>
                                <option value="" disabled selected>Select boat type</option>
                                <option value="single">Single Boat (1-2 people)</option>
                                <option value="multiple">Multiple Boats</option>
                                <option value="family">Family-sized Boat (3-4 people)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="duration" class="form-label">Rental Duration</label>
                            <select id="duration" class="form-control" required>
                                <option value="" disabled selected>Select duration</option>
                                <option value="2-hours">2 Hours ($70-79.89/hr weekday, $80-89/hr weekend)</option>
                                <option value="4-hours">4 Hours ($60-69.89/hr weekday, $70-79.89/hr weekend)</option>
                                <option value="6-hours">6 Hours ($50-59.89/hr weekday, $60-69.89/hr weekend)</option>
                            </select>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="booking-date" class="form-label">Date</label>
                                <input type="date" id="booking-date" class="form-control" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="booking-time" class="form-label">Time</label>
                                <select id="booking-time" class="form-control" required>
                                    <option value="" disabled selected>Select time</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM (Noon)</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Add-ons (Optional)</label>
                            <div class="checkbox-group">
                                <div class="form-check">
                                    <input type="checkbox" id="cooler" value="cooler" class="form-check-input">
                                    <label for="cooler" class="form-check-label">Cooler ($30)</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" id="speaker" value="speaker" class="form-check-input">
                                    <label for="speaker" class="form-check-label">JBL Flip-6 Speaker ($20)</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" id="drybags" value="drybags" class="form-check-input">
                                    <label for="drybags" class="form-check-label">Dry Bags ($10)</label>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn btn-accent btn-lg btn-block">Check Availability</button>
                    </form>
                    
                    <div class="booking-summary">
                        <h4>Booking Summary</h4>
                        <p>Your selected options will appear here. Complete the form above to see estimated pricing and availability.</p>
                        <div id="summary-details" class="summary-details" style="display: none;">
                            <div class="summary-row">
                                <span>Selected Lake:</span>
                                <span id="summary-lake"></span>
                            </div>
                            <div class="summary-row">
                                <span>Boat Type:</span>
                                <span id="summary-boat-type"></span>
                            </div>
                            <div class="summary-row">
                                <span>Duration:</span>
                                <span id="summary-duration"></span>
                            </div>
                            <div class="summary-row">
                                <span>Date & Time:</span>
                                <span id="summary-datetime"></span>
                            </div>
                            <div class="summary-row">
                                <span>Add-ons:</span>
                                <span id="summary-addons"></span>
                            </div>
                            <div class="summary-row total">
                                <span>Estimated Total:</span>
                                <span id="summary-total"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* Booking Preview Styles */
        .booking-preview {
            background-color: var(--primary-dark);
            color: var(--white);
            position: relative;
            background-image: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            overflow: hidden;
        }
        
        .booking-preview::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url('images/people_riding_boats_lakes.png');
            background-size: cover;
            background-position: center;
            opacity: 0.1;
            z-index: 0;
        }
        
        .booking-preview-inner {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            position: relative;
            z-index: 1;
        }
        
        .booking-content {
            padding: var(--space-md) 0;
        }
        
        .booking-content .section-heading {
            color: var(--white);
        }
        
        .booking-content .section-heading:after {
            background-color: var(--secondary);
        }
        
        .booking-intro {
            font-size: 1.1rem;
            margin-bottom: var(--space-lg);
            color: rgba(255, 255, 255, 0.9);
        }
        
        .booking-features {
            margin-top: var(--space-lg);
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-sm);
        }
        
        .booking-feature {
            display: flex;
            align-items: center;
            margin-bottom: var(--space-sm);
            font-weight: 500;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 0.75rem var(--space-md);
            border-radius: var(--radius-md);
            backdrop-filter: blur(5px);
        }
        
        .booking-feature i {
            color: var(--secondary);
            margin-right: var(--space-sm);
            font-size: 1.1rem;
        }
        
        .booking-form-container {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            box-shadow: var(--shadow-lg);
        }
        
        .booking-form {
            color: var(--dark);
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-md);
        }
        
        .checkbox-group {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-sm);
        }
        
        .btn-block {
            width: 100%;
            margin-top: var(--space-md);
            background-color: var(--secondary);
            border-color: var(--secondary);
        }
        
        .btn-block:hover {
            background-color: var(--secondary-dark);
            border-color: var(--secondary-dark);
        }
        
        /* Booking Summary Styles */
        .booking-summary {
            margin-top: var(--space-lg);
            padding-top: var(--space-md);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .booking-summary h4 {
            margin-bottom: var(--space-sm);
            font-weight: 600;
        }
        
        .summary-details {
            margin-top: var(--space-md);
            background-color: rgba(0, 0, 0, 0.02);
            border-radius: var(--radius-md);
            padding: var(--space-md);
        }
        
        .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
        }
        
        .summary-row:last-child {
            border-bottom: none;
        }
        
        .summary-row.total {
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 2px solid rgba(0, 0, 0, 0.1);
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        /* Media Queries */
        @media (min-width: 768px) {
            .booking-features {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .form-row {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .checkbox-group {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (min-width: 992px) {
            .booking-preview-inner {
                grid-template-columns: 1fr 1fr;
                align-items: center;
            }
            
            .booking-features {
                grid-template-columns: 1fr;
            }
        }
        
        @media (min-width: 1200px) {
            .booking-preview-inner {
                grid-template-columns: 45% 55%;
            }
        }
    </style>

    <script>
        // Initialize form functionality
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('quick-booking-form');
            
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    
                    // In a real implementation, you would send the form data to a server
                    // For now, we'll just show an alert
                    alert('Thank you! We will check availability and contact you shortly.');
                    
                    // Set minimum date to today
                    const today = new Date().toISOString().split('T')[0];
                    document.getElementById('booking-date').setAttribute('min', today);
                });
                
                // Set minimum date to today
                const today = new Date().toISOString().split('T')[0];
                document.getElementById('booking-date').setAttribute('min', today);
            }
        });
    </script>
    `;

    // Load the booking preview component
    ComponentLoader.loadComponent('booking-preview-container', bookingPreviewHTML);
})(); 