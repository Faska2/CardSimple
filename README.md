# Premium Digital Business Card

A modern, responsive, and minimalist **Digital Business Card / Personal Profile** website built using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. No frameworks, no build tools, and zero server dependencies required.

---

## ✨ Features

- 🌑 **Premium Dark Aesthetic**: Sleek charcoal and deep black design with smooth gradient overlays and ambient atmospheric lighting.
- 📱 **Mobile-First & Responsive**: Designed primarily for smartphones, while adapting elegantly into a centered card showcase on desktop screens.
- ⚡ **Direct Browser Execution**: Works straight out of the box by opening `index.html` in any browser.
- 📞 **Instant Action Matrix**:
  - **Phone Call**: Direct dialer trigger (`tel:`).
  - **Email**: Formatted compose link (`mailto:`).
  - **SMS**: Direct messaging app link (`sms:`).
  - **WhatsApp**: Direct chat link (`wa.me`) with pre-composed greeting.
- 📇 **Dynamic vCard (`.vcf`) Generation**: One-click download of a standardized vCard 3.0 contact file to add directly to phone address books.
- 📲 **Offline QR Code Modal**: Generates and renders a QR code on an HTML5 canvas without requiring external network requests. Includes link copying and QR image download.
- 🔗 **Native Web Share**: Uses the Web Share API (`navigator.share`) with automatic clipboard fallback and toast feedback.
- 🛠️ **Centralized Configuration**: All profile data is managed in a single, clearly organized JavaScript configuration object. Empty or missing fields are automatically hidden.

---

## 📁 Project Structure

```
CardSimple/
│
├── index.html          # Semantic HTML structure & icon templates
├── README.md           # Documentation & customization guide
├── .gitignore          # Git ignore rules
│
├── css/
│   └── style.css       # Dark theme, typography, layout & animations
│
├── js/
│   ├── app.js          # Profile config, vCard generator, modals & actions
│   └── qrcode.min.js   # Standalone offline QR code engine
│
└── assets/
    ├── profile.jpg     # Executive studio portrait
    └── logo.png        # Circular company badge
```

---

## 🚀 How to Customize

All information displayed on the card is controlled by the `profile` object at the top of [`js/app.js`](js/app.js):

```javascript
const profile = {
  fullName: "John Richards",
  jobTitle: "Marketing Manager",
  company: "Teamwork.Co",
  logo: "assets/logo.png",
  profileImage: "assets/profile.jpg",
  phone: "+212600000000",
  email: "john@example.com",
  whatsapp: "+212600000000",
  website: "https://example.com",
  biography: "Hi, I am Flody, working as marketing manager at Teamwork.co",
  address: "Agadir, Morocco",
  socialLinks: {
    instagram: "",
    linkedin: "",
    facebook: "",
    x: ""
  }
};
```

### Dynamic Hiding
If any property is empty (e.g. `phone: ""`, `email: ""`, or `socialLinks`), its button or container will be hidden automatically without leaving awkward empty spaces.

---

## 💻 Local Usage

Simply double-click or open `index.html` in any web browser (Chrome, Edge, Safari, Firefox). No local web server or terminal commands are required.

---

## 📄 License

MIT License. Free to use and customize for personal and commercial digital business cards.
