/**
 * Sequoia Boat Rentals & Concierge Services
 * Invoice Generator Component
 */

/**
 * Generate and display an invoice modal with payment option
 * 
 * @param {Object} bookingData - The booking data object
 * @param {String} bookingId - The document ID in Firestore
 * @returns {Promise<boolean>} - Returns true if payment was initiated
 */
async function showInvoiceModal(bookingData, bookingId) {
    return new Promise((resolve) => {
        // Format addon items for display
        const addonsArray = [];
        let addonsTotal = 0;

        if (bookingData.addons.cooler) {
            addonsArray.push({
                name: 'Cooler Rental',
                price: 30.00
            });
            addonsTotal += 30;
        }

        if (bookingData.addons.speaker) {
            addonsArray.push({
                name: 'JBL Speaker Rental',
                price: 20.00
            });
            addonsTotal += 20;
        }

        if (bookingData.addons.drybags) {
            addonsArray.push({
                name: 'Dry Bags Rental',
                price: 10.00
            });
            addonsTotal += 10;
        }

        // Parse the estimated total from string (e.g. "$140.00")
        const estimatedTotal = parseFloat(bookingData.estimatedTotal.replace(/[^0-9.]/g, ''));
        const basePrice = estimatedTotal - addonsTotal;

        // Generate invoice number from booking id and date
        const invoiceNum = `SBR-${new Date().getFullYear()}-${bookingId.substring(0, 6).toUpperCase()}`;

        // Format date for display
        const bookingDate = new Date(bookingData.date);
        const formattedDate = bookingDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Build the invoice HTML
        const invoiceHTML = `
            <div class="invoice-container">
                <div class="invoice-header">
                    <div class="company-info">
                        <h2>Sequoia Boat Rentals</h2>
                        <p>Arrowstone Drive, Kamloops, BC, V2C1P9</p>
                        <p>Tel: (250) 879-6055 | Email: info@sequoiaservices.ca</p>
                    </div>
                    <div class="invoice-info">
                        <h3>INVOICE</h3>
                        <p><strong>Invoice #:</strong> ${invoiceNum}</p>
                        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                    </div>
                </div>
                
                <div class="customer-details">
                    <h4>Booking Details</h4>
                    <p><strong>Location:</strong> ${bookingData.lake}</p>
                    <p><strong>Date:</strong> ${formattedDate}</p>
                    <p><strong>Time:</strong> ${bookingData.time}</p>
                    <p><strong>Boat Type:</strong> ${bookingData.boatType}</p>
                </div>
                
                <table class="invoice-items">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th class="text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Boat Rental (${bookingData.duration}) - ${bookingData.boatType}</td>
                            <td class="text-right">$${basePrice.toFixed(2)}</td>
                        </tr>
                        ${addonsArray.map(addon => `
                            <tr>
                                <td>${addon.name}</td>
                                <td class="text-right">$${addon.price.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th class="text-right">$${estimatedTotal.toFixed(2)}</th>
                        </tr>
                    </tfoot>
                </table>
                
                <div class="payment-info">
                    <p><strong>Payment Status:</strong> <span class="status-badge status-pending">Pending Payment</span></p>
                    <p>Please complete your booking by proceeding to the secure payment checkout.</p>
                </div>
            </div>
        `;

        // Set up the modal
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalFooter = document.getElementById('modal-footer');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalCloseBtn = document.getElementById('modal-close');

        // Set content
        modalTitle.textContent = 'Booking Invoice';
        modalBody.innerHTML = invoiceHTML;
        modalFooter.innerHTML = '';

        // Add payment button - simplified to just one button
        const paymentButton = document.createElement('button');
        paymentButton.id = 'checkout-button';
        paymentButton.className = 'btn btn-accent';
        paymentButton.textContent = 'Proceed to Payment';
        modalFooter.appendChild(paymentButton);

        // Show modal
        modalOverlay.style.display = 'flex';

        // Helper to update payment status in Firebase
        function updatePaymentStatus() {
            try {
                // Update the booking with payment status
                db.collection('bookings').doc(bookingId).update({
                    isPaid: true,
                    paidAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            } catch (err) {
                console.error("Error updating payment status:", err);
            }
        }

        // Add event listeners
        function onCheckout() {
            modalOverlay.style.display = 'none';
            paymentButton.removeEventListener('click', onCheckout);
            modalCloseBtn.removeEventListener('click', onClose);

            // In a real implementation this would happen after successful payment
            // For now we'll simulate that the payment will be successful
            updatePaymentStatus();

            resolve(true);
        }

        function onClose() {
            modalOverlay.style.display = 'none';
            paymentButton.removeEventListener('click', onCheckout);
            modalCloseBtn.removeEventListener('click', onClose);
            resolve(false);
        }

        // Add event listeners
        paymentButton.addEventListener('click', onCheckout);
        modalCloseBtn.addEventListener('click', onClose);
    });
} 