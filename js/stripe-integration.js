/**
 * Sequoia Boat Rentals & Concierge Services
 * Stripe Payment Integration
 */

// Initialize Stripe with your publishable key (from environment variables in production)
// For development, you can set this in a .env file (not committed to git)
const stripePublicKey = 'pk_test_51Q3kG52MjkSKR6fvmtb34MRHNdvuf71pcRXm8AnvPEOXLAHnVe21vxp6yhs0M4pesJJbi0zPE98GDEG7lHmqATWn00rj6Mm2Ag';
let stripe;

// Define your Stripe Payment Link (create in Stripe dashboard)
const paymentLinkURL = 'https://buy.stripe.com/test_1234567890abcdefg'; // TODO: replace with real payment link

// Initialize Cloud Functions reference
const functions = firebase.functions();

/**
 * Initialize Stripe with the provided key
 */
function initializeStripe() {
    // In a production environment, you would load this from environment variables
    // For example: const stripeKey = process.env.STRIPE_PUBLIC_KEY;
    if (typeof Stripe !== 'undefined') {
        stripe = Stripe(stripePublicKey);
    } else {
        console.error('Stripe.js is not loaded');
    }
}

/**
 * Create a simple checkout link for the stripe payment page
 * 
 * This is a simplified version. In a production environment, you would:
 * 1. Have a server endpoint that creates a Stripe Checkout session
 * 2. Return the session ID to the client
 * 3. Use stripe.redirectToCheckout() with that session ID
 * 
 * @param {Object} bookingData - The booking details
 * @param {String} price - The price to charge
 * @returns {String} - A URL to redirect to for checkout
 */
function createCheckoutLink(bookingData, price) {
    return paymentLinkURL;
}

/**
 * Direct Stripe checkout creation - temporary while Cloud Functions are being set up
 * @param {Object} booking - Booking data
 */
function createDirectCheckoutSession(booking) {
    // This is a demo-only version that redirects to a test Stripe checkout
    // In production, this would be properly implemented with your backend

    // Format price from booking data
    const priceString = booking.estimatedTotal || '100.00';
    const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));

    // Construct test URL with price and product info in the URL
    const testSessionURL = `https://checkout.stripe.com/c/pay/cs_test_a1AEM4JM1EAq8SwucMkFhtdLTMiuQitkQT9tfONp3wPOergPWuZj2q3j9i#fidkdWxOYHwnPyd1blpxYHZxWjA0SWZpXGdHV013UmB0PEF3Nnc1QF9JNzY0TnJMNTJqfzNJSTVhTjxDRzdJNDQwMnc2YnBxNWFBR3dhVDA1N2NKbk1XUHVsYmFkZEltS21dXGRLYDU1MWs0NGdyVm5NVWtnTicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl`;
    return testSessionURL;
}

/**
 * Redirects user to Stripe Checkout using a Cloud Function to create the session.
 * @param {String} bookingId Firestore document id
 */
async function redirectToStripeCheckout(bookingId) {
    const btn = document.getElementById('checkout-button');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Redirecting...';
    }
    try {
        // First, get the booking data from Firestore
        const bookingDoc = await db.collection('bookings').doc(bookingId).get();
        if (!bookingDoc.exists) {
            throw new Error('Booking not found');
        }
        const bookingData = bookingDoc.data();

        // TEMPORARY SOLUTION: Use direct checkout instead of Cloud Functions
        window.location.href = createDirectCheckoutSession(bookingData);
        return;

        /* CLOUD FUNCTION CODE - COMMENTED OUT UNTIL CLOUD FUNCTION DEPLOYS
        if (!stripe) initializeStripe();
        
        // Get a reference to the Cloud Function
        const createSession = firebase.functions().httpsCallable('createStripeCheckout');
        
        // Call the function with the bookingId
        const result = await createSession({ bookingId: bookingId });

        if (result.data && result.data.sessionId) {
            // Redirect to Stripe checkout
            await stripe.redirectToCheckout({ sessionId: result.data.sessionId });
        } else {
            // Handle cases where the function returns no session ID
            throw new Error('Invalid session ID received from server.');
        }
        */

    } catch (err) {
        console.error('Stripe redirect error:', err);
        let errorMessage = 'Unable to start the payment process. Please try again later.';
        if (err.code === 'not-found') {
            errorMessage = 'The payment function is not available. Please contact support.';
        } else if (err.message) {
            errorMessage = `An error occurred: ${err.message}`;
        }

        showModal({ title: 'Payment Error', message: errorMessage, confirmText: 'OK' });
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Proceed to Payment';
        }
    }
}

// expose
window.redirectToStripeCheckout = redirectToStripeCheckout; 