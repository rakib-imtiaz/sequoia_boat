/**
 * Sequoia Boat Rentals & Concierge Services
 * About Component - New Bento Grid Design
 */

(function () {
    const aboutHTML = `
    <div class="about-section-new">
        <div class="about-background" style="background-image: url('images/about_us_bg.png');"></div>
        <div class="about-overlay"></div>
        
        <div class="about-container-new">
            <div class="about-text-content">
                <h2 class="about-heading-new">About Us</h2>
                <h3 class="about-subheading-new">Your Gateway to Kamloops Lake Adventures</h3>
                    </div>
                    
            <div class="bento-grid-new">
                <div class="bento-card-new card-1">
                    <div class="card-icon-new"><i class="fas fa-leaf"></i></div>
                                    <h4>Eco-Friendly</h4>
                    <p>Quiet, clean, and eco-friendly electric boats.</p>
                                </div>
                <div class="bento-card-new card-2">
                    <div class="card-icon-new"><i class="fas fa-shield-alt"></i></div>
                    <h4>Safety First</h4>
                    <p>All rentals include premium life jackets.</p>
                            </div>
                <div class="bento-card-new card-3">
                    <div class="card-icon-new"><i class="fas fa-map-marked-alt"></i></div>
                                    <h4>Local Expertise</h4>
                    <p>Discover the best spots with our local guides.</p>
                                </div>
                <div class="bento-card-new card-4">
                    <div class="card-icon-new"><i class="fas fa-concierge-bell"></i></div>
                    <h4>Concierge Services</h4>
                    <p>Trip planning and catering available.</p>
                            </div>
                <div class="bento-card-new card-5">
                    <div class="card-icon-new"><i class="fas fa-shipping-fast"></i></div>
                    <h4>Free Delivery</h4>
                    <p>Delivery to popular lakes at no charge.</p>
                </div>
            </div>
        </div>
    </div>

    <style>
        .about-section-new {
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 120px var(--space-lg) 60px;
            display: flex;
            align-items: center;
            overflow: hidden;
            margin-top: -60px; /* Overlap with hero wave */
            z-index: 1;
        }
        
        .about-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: -2;
        }
        
        .about-overlay {
            position: absolute;
            inset: 0;
            background: none; /* Removed overlay */
            z-index: -1;
        }
        
        .about-container-new {
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: var(--space-xl);
            align-items: center;
        }
        
        .about-text-content {
            color: var(--white);
            text-align: left;
        }

        .about-heading-new {
            font-size: 2rem;
            font-weight: 500;
            opacity: 0.9; /* Adjusted opacity for better visibility */
            margin-bottom: var(--space-md);
            color: var(--white);
            text-shadow: 0 2px 10px rgba(0,0,0,0.3); /* Added text shadow for readability */
        }

        .about-subheading-new {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            color: var(--white);
        }
        
        .bento-grid-new {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 150px) 180px;
            gap: 1.25rem;
            transform: translateY(-40px);
        }
        
        .bento-card-new {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 1.5rem;
            color: var(--white);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        
        .bento-card-new:hover {
            transform: translateY(-8px) scale(1.03);
            background: rgba(255, 255, 255, 0.12);
            box-shadow: 0 16px 40px rgba(0,0,0,0.3);
            border-color: rgba(255, 255, 255, 0.25);
        }

        .card-icon-new {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
            opacity: 0.9;
        }
        
        .bento-card-new h4 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--white);
        }
        
        .bento-card-new p {
            font-size: 0.9rem;
            opacity: 0.8;
            line-height: 1.5;
            color: var(--white);
        }
        
        /* Unique Grid positions */
        .card-1 { grid-column: 1 / 2; grid-row: 1 / 3; }
        .card-2 { grid-column: 2 / 3; grid-row: 1 / 3; }
        .card-3 { grid-column: 3 / 4; grid-row: 1 / 3; }
        .card-4 { grid-column: 1 / 3; grid-row: 3 / 4; }
        .card-5 { grid-column: 3 / 4; grid-row: 3 / 4; }

        @media (max-width: 1024px) {
            .about-container-new {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .about-text-content {
                text-align: center;
                margin-bottom: 2rem;
            }
            .bento-grid-new {
                transform: translateY(0);
                grid-template-rows: repeat(3, 140px);
            }
        }
        
        @media (max-width: 768px) {
            .about-section-new {
                padding: 80px var(--space-md) 40px;
                margin-top: -30px;
            }
            .bento-grid-new {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: repeat(4, 130px);
            }
            .card-1 { grid-column: 1 / 2; grid-row: 1 / 3; }
            .card-2 { grid-column: 2 / 3; grid-row: 1 / 2; }
            .card-3 { grid-column: 2 / 3; grid-row: 2 / 3; }
            .card-4 { grid-column: 1 / 2; grid-row: 3 / 4; }
            .card-5 { grid-column: 2 / 3; grid-row: 3 / 4; }
        }
        
        @media (max-width: 500px) {
             .bento-grid-new {
                grid-template-columns: 1fr;
                grid-template-rows: repeat(5, auto);
                gap: 1rem;
            }
            .bento-card-new {
                grid-column: auto !important;
                grid-row: auto !important;
                aspect-ratio: 2/1;
            }
            .about-subheading-new {
                font-size: 2.5rem;
            }
        }
    </style>
    `;
    // We are replacing the whole component, so we find the container by its ID
    const container = document.getElementById('about-container');
    if (container) {
        // Clear previous content and replace with the new design
        container.innerHTML = aboutHTML;
    }
})(); 