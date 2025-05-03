# Sequoia Boat Rentals Website

A modern, responsive website for Sequoia Boat Rentals & Concierge Services, built with HTML, CSS, and JavaScript using web components.

## Project Structure

```
sequoia-boat-rentals/
├── components/        # Web components
│   ├── header.js      # Site header with navigation
│   ├── footer.js      # Site footer
│   ├── hero.js        # Hero section component
│   ├── about.js       # About us section
│   ├── features.js    # Why Choose Us section
│   ├── booking-form.js # Booking form component
│   └── lake-card.js   # Lake card component
├── css/
│   └── style.css      # Main stylesheet
├── images/            # Image assets
│   └── README.md      # Image requirements
├── js/
│   └── main.js        # Main JavaScript file
├── index.html         # Homepage
├── services.html      # Services page
├── lakes.html         # Lakes/Locations page
├── booking.html       # Booking page
├── contact.html       # Contact page
└── README.md          # This file
```

## Features

- Responsive design that works on all devices
- Modular web components for easy maintenance
- Interactive booking form
- Detailed lake information with modal popups
- Mobile-friendly navigation

## Setup Instructions

1. Clone or download this repository
2. Add your images to the `images/` directory (see `images/README.md` for details)
3. Open the site locally or upload to your web hosting

No build process is required as this is a pure HTML/CSS/JS implementation.

## Customization

### Modifying Text Content

Edit the HTML files or the web component files to change text content.

### Changing Colors

The color scheme can be easily modified by editing the CSS variables at the top of `css/style.css`:

```css
:root {
  --primary: #0078a8;
  --primary-dark: #00628a;
  --primary-light: #4ca8c8;
  --secondary: #f39c12;
  /* More color variables... */
}
```

### Adding More Lakes

To add a new lake:

1. Add the lake's image to the `images/` directory
2. Edit `lakes.html` to add a new lake-card component with the lake's details

### Updating Pricing

Modify the pricing information in:
- `services.html`
- `components/booking-form.js`
- `js/main.js` (the `calculateBookingPrice` function)

## Browser Support

This website works in all modern browsers. The web components may require a polyfill for older browsers.

## Credits

- Font Awesome for icons
- Google Fonts for typography

## Contact

For any questions or issues, please contact:
- Email: info@sequoiaboatrentals.com
- Phone: (250) 555-7890 