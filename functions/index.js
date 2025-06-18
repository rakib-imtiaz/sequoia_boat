const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);
const cors = require("cors")({ origin: true });

exports.createStripeCheckout = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        try {
            const { amount, bookingId, description } = request.body;

            if (!amount || !bookingId) {
                throw new Error("Amount and Booking ID are required");
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [
                    {
                        price_data: {
                            currency: "cad",
                            product_data: {
                                name: description || "Sequoia Boat Rental",
                            },
                            unit_amount: amount, // Amount in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: "payment",
                success_url: `https://sequoiaboatrentals.firebaseapp.com/success.html?booking_id=${bookingId}`,
                cancel_url: `https://sequoiaboatrentals.firebaseapp.com/cancel.html`,
                metadata: {
                    bookingId: bookingId
                }
            });

            response.status(200).send({ sessionId: session.id });
        } catch (error) {
            console.error("Error creating Stripe checkout session:", error);
            response.status(500).send({ error: error.message });
        }
    });
}); 