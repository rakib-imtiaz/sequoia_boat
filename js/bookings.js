const BOOKINGS_API = 'https://684a75f5165d05c5d358c9c6.mockapi.io/api/v1/bookings';

// DOM elements
const lakeEl = document.getElementById('lake-select');
const boatEl = document.getElementById('boat-select');
const dateEl = document.getElementById('date-input');
const hoursEl = document.getElementById('hours-input');
const checkBtn = document.getElementById('check-btn');
const bookBtn = document.getElementById('book-btn');
const msgEl = document.getElementById('availability-msg');

// Load bookings from API
async function loadBookings() {
    const res = await fetch(BOOKINGS_API);
    if (!res.ok) throw new Error('Failed to load bookings');
    return res.json();
}

// Check for booking conflicts
function hasConflict(bookings, lake, boat, date) {
    return bookings.some(b =>
        b.lake === lake &&
        b.boat === boat &&
        b.date === date
    );
}

// Check Availability handler
checkBtn.addEventListener('click', async () => {
    const lake = lakeEl.value;
    const boat = boatEl.value;
    const date = dateEl.value;
    const hrs = parseInt(hoursEl.value, 10);

    if (!date || isNaN(hrs) || hrs < 2 || hrs > 8) {
        msgEl.textContent = '⚠️ Please pick a date and enter between 2-8 hours';
        msgEl.style.color = 'orange';
        bookBtn.disabled = true;
        return;
    }

    try {
        const bookings = await loadBookings();
        if (hasConflict(bookings, lake, boat, date)) {
            msgEl.textContent = '❌ Sorry, that slot is already booked.';
            msgEl.style.color = 'crimson';
            bookBtn.disabled = true;
        } else {
            msgEl.textContent = '✅ Good news — your boat is available!';
            msgEl.style.color = 'green';
            bookBtn.disabled = false;
        }
    } catch (err) {
        msgEl.textContent = '⚠️ Network error. Please try again later.';
        msgEl.style.color = 'gray';
        bookBtn.disabled = true;
    }
});

// Book Now handler
bookBtn.addEventListener('click', async () => {
    const lake = lakeEl.value;
    const boat = boatEl.value;
    const date = dateEl.value;
    const hrs = parseInt(hoursEl.value, 10);

    try {
        const res = await fetch(BOOKINGS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lake, boat, date, hours: hrs })
        });
        if (!res.ok) throw new Error('Booking failed');
        msgEl.textContent = '🎉 Success—you're all booked!';
        msgEl.style.color = 'blue';
        bookBtn.disabled = true;
    } catch (err) {
        msgEl.textContent = '⚠️ Could not complete booking. Try again.';
        msgEl.style.color = 'gray';
    }
});
