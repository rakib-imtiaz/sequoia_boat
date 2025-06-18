/**
 * Sequoia Boat Rentals & Concierge Services
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Load Font Awesome for icons
    loadFontAwesome();

    // Initialize animations for elements
    initAnimations();

    // Smooth scrolling for anchor links
    initSmoothScrolling();

    // Initialize parallax effect
    initParallax();

    // Booking Summary Functionality
    const bookingForm = document.getElementById('quick-booking-form');
    const summaryDetails = document.getElementById('summary-details');

    if (bookingForm) {
        const formInputs = bookingForm.querySelectorAll('select, input[type="date"], input[type="checkbox"]');

        // Function to update summary
        function updateBookingSummary() {
            const lake = document.getElementById('lake');
            const boatType = document.getElementById('boat-type');
            const duration = document.getElementById('duration');
            const bookingDate = document.getElementById('booking-date');
            const bookingTime = document.getElementById('booking-time');
            const cooler = document.getElementById('cooler');
            const speaker = document.getElementById('speaker');
            const drybags = document.getElementById('drybags');

            // Check if all required fields are filled
            if (lake.value && boatType.value && duration.value && bookingDate.value && bookingTime.value) {
                // Show summary details
                summaryDetails.style.display = 'block';

                // Update summary fields
                document.getElementById('summary-lake').textContent = lake.options[lake.selectedIndex].text;
                document.getElementById('summary-boat-type').textContent = boatType.options[boatType.selectedIndex].text;
                document.getElementById('summary-duration').textContent = duration.options[duration.selectedIndex].text;

                const formattedDate = new Date(bookingDate.value).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                document.getElementById('summary-datetime').textContent = `${formattedDate} at ${bookingTime.options[bookingTime.selectedIndex].text}`;

                // Check add-ons
                let addons = [];
                let total = 0;

                if (cooler.checked) {
                    addons.push('Cooler (+$30)');
                    total += 30;
                }

                if (speaker.checked) {
                    addons.push('JBL Speaker (+$20)');
                    total += 20;
                }

                if (drybags.checked) {
                    addons.push('Dry Bags (+$10)');
                    total += 10;
                }

                document.getElementById('summary-addons').textContent = addons.length ? addons.join(', ') : 'None';

                // Calculate estimated total
                const isWeekend = new Date(bookingDate.value).getDay() === 0 || new Date(bookingDate.value).getDay() === 6;
                let basePrice = 0;

                if (duration.value === '2-hours') {
                    basePrice = isWeekend ? 160 : 140;
                } else if (duration.value === '4-hours') {
                    basePrice = isWeekend ? 280 : 240;
                } else if (duration.value === '6-hours') {
                    basePrice = isWeekend ? 360 : 300;
                }

                total += basePrice;
                document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
            }
        }

        // Add event listeners
        formInputs.forEach(input => {
            input.addEventListener('change', updateBookingSummary);
        });

        // Listen to form submission for availability check
        bookingForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            updateBookingSummary();

            const submitButton = bookingForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Checking...';

            // --- Form Data ---
            const lake = document.getElementById('lake');
            const boatType = document.getElementById('boat-type');
            const duration = document.getElementById('duration');
            const bookingDate = document.getElementById('booking-date');
            const bookingTime = document.getElementById('booking-time');
            const cooler = document.getElementById('cooler');
            const speaker = document.getElementById('speaker');
            const drybags = document.getElementById('drybags');
            const estimatedTotal = document.getElementById('summary-total').textContent;

            // --- Availability Check Logic ---
            const MAX_CONCURRENT_BOATS = 2; // We can operate 2 boats at the same time

            const getBookingSlot = (date, timeStr, durationStr) => {
                // First, try to parse the 12-hour AM/PM format (from database)
                let timeParts = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/);
                if (timeParts) {
                    let hours = parseInt(timeParts[1], 10);
                    const minutes = parseInt(timeParts[2], 10);
                    const ampm = timeParts[3];

                    if (ampm === 'PM' && hours < 12) hours += 12;
                    if (ampm === 'AM' && hours === 12) hours = 0; // Handle midnight case

                    const startTime = new Date(`${date}T00:00:00`);
                    startTime.setHours(hours, minutes, 0, 0);

                    const durationHours = parseInt(durationStr.split('-')[0], 10);
                    const endTime = new Date(startTime.getTime());
                    endTime.setHours(startTime.getHours() + durationHours);
                    return { startTime, endTime };
                }

                // If that fails, try to parse the 24-hour format (from form value)
                timeParts = timeStr.match(/(\d+):(\d+)/);
                if (timeParts) {
                    const hours = parseInt(timeParts[1], 10);
                    const minutes = parseInt(timeParts[2], 10);

                    const startTime = new Date(`${date}T00:00:00`);
                    startTime.setHours(hours, minutes, 0, 0);

                    const durationHours = parseInt(durationStr.split('-')[0], 10);
                    const endTime = new Date(startTime.getTime());
                    endTime.setHours(startTime.getHours() + durationHours);
                    return { startTime, endTime };
                }

                return null; // Return null if no format matches
            };

            const requestedSlot = getBookingSlot(bookingDate.value, bookingTime.value, duration.value);

            if (!requestedSlot) {
                alert("Invalid time format. Please select a valid time.");
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                return;
            }

            try {
                const snapshot = await db.collection('bookings').where('date', '==', bookingDate.value).get();
                const bookingsForDay = snapshot.docs.map(doc => doc.data());

                let overlappingBookings = 0;
                for (const existingBooking of bookingsForDay) {
                    const existingSlot = getBookingSlot(existingBooking.date, existingBooking.time, existingBooking.duration);
                    if (!existingSlot) continue;

                    // Check for overlap
                    if (requestedSlot.startTime < existingSlot.endTime && requestedSlot.endTime > existingSlot.startTime) {
                        overlappingBookings++;
                    }
                }

                if (overlappingBookings >= MAX_CONCURRENT_BOATS) {
                    alert("We're sorry, but we are fully booked for this time slot. Please select a different time or date.");
                } else {
                    const confirmBooking = confirm("A slot is available! Would you like to proceed with this booking?");
                    if (confirmBooking) {
                        submitButton.textContent = 'Booking...';
                        const bookingData = {
                            lake: lake.options[lake.selectedIndex].text,
                            boatType: boatType.options[boatType.selectedIndex].text,
                            duration: duration.options[duration.selectedIndex].text,
                            date: bookingDate.value,
                            time: bookingTime.options[bookingTime.selectedIndex].text, // Keep text for readability in db
                            addons: { cooler: cooler.checked, speaker: speaker.checked, drybags: drybags.checked },
                            estimatedTotal: estimatedTotal,
                            status: 'pending',
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        };

                        await db.collection('bookings').add(bookingData);
                        alert('Your booking has been confirmed! We will contact you shortly with more details.');
                        bookingForm.reset();
                        summaryDetails.style.display = 'none';
                    }
                }
            } catch (error) {
                console.error("Error checking availability: ", error);
                alert("There was an error checking for availability. Please try again or contact us directly.");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
});

/**
 * Load Font Awesome for icons
 */
function loadFontAwesome() {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    fontAwesomeLink.integrity = 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==';
    fontAwesomeLink.crossOrigin = 'anonymous';
    fontAwesomeLink.referrerPolicy = 'no-referrer';
    document.head.appendChild(fontAwesomeLink);
}

/**
 * Initialize animations for elements that should animate when they come into view
 */
function initAnimations() {
    // Get all elements that should animate when scrolled into view
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers that don't support Intersection Observer
        animatedElements.forEach(el => {
            el.classList.add('animated');
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    // Select all links with hashes
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if the anchor is on the current page
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header if present
                    behavior: 'smooth'
                });

                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

/**
 * Initialize parallax effect for sections
 */
function initParallax() {
    // Add parallax class to sections that should have parallax effect
    const sections = document.querySelectorAll('section, .hero, .footer');
    sections.forEach(section => {
        section.classList.add('parallax-section');
    });

    // Add CSS for parallax effect
    const style = document.createElement('style');
    style.textContent = `
        .parallax-section {
            position: relative;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            transform: translateZ(0);
            will-change: transform;
        }
        
        @media (max-width: 768px) {
            .parallax-section {
                background-attachment: scroll;
            }
        }
    `;
    document.head.appendChild(style);

    // Add parallax effect on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        // Apply parallax effect to elements with .parallax-bg class
        document.querySelectorAll('.parallax-bg').forEach(element => {
            const speed = element.dataset.speed || 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });

        // Apply subtle parallax effect to sections
        document.querySelectorAll('.parallax-section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const inView = (rect.top < window.innerHeight && rect.bottom > 0);

            if (inView) {
                const speed = 0.05;
                const yPos = (rect.top * speed);
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });

    // Add parallax background elements
    addParallaxBackgrounds();
}

/**
 * Add parallax background elements to sections
 */
function addParallaxBackgrounds() {
    // Add parallax background to about section
    const aboutSection = document.getElementById('about-container');
    if (aboutSection) {
        const aboutBg = document.createElement('div');
        aboutBg.className = 'parallax-bg';
        aboutBg.dataset.speed = '0.2';
        aboutSection.prepend(aboutBg);
    }

    // Add parallax background to features section
    const featuresSection = document.getElementById('features-container');
    if (featuresSection) {
        const featuresBg = document.createElement('div');
        featuresBg.className = 'parallax-bg';
        featuresBg.dataset.speed = '0.15';
        featuresSection.prepend(featuresBg);
    }

    // Add parallax background to lakes section
    const lakesSection = document.getElementById('lakes-container');
    if (lakesSection) {
        const lakesBg = document.createElement('div');
        lakesBg.className = 'parallax-bg';
        lakesBg.dataset.speed = '0.25';
        lakesSection.prepend(lakesBg);
    }

    // Add CSS for parallax backgrounds
    const style = document.createElement('style');
    style.textContent = `
        .parallax-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }
        
        #about-container .parallax-bg {
            background: radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0) 70%);
        }
        
        #features-container .parallax-bg {
            background: radial-gradient(circle at 20% 80%, rgba(11, 83, 148, 0.08) 0%, rgba(11, 83, 148, 0) 60%);
        }
        
        #lakes-container .parallax-bg {
            background: radial-gradient(circle at 90% 10%, rgba(78, 205, 196, 0.08) 0%, rgba(78, 205, 196, 0) 70%);
        }
    `;
    document.head.appendChild(style);
} 