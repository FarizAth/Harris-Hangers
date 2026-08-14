# Harris Hangers Website Project

Production-ready, multi-page website built for **Harris Hangers** (Syracuse, NY).

## Project Structure
- `index.html`: Homepage featuring hero video, core service previews, before/after spotlight, and review slider.
- `services.html`: Detailed breakdown of Drywall, Water Repairs, Framing, Basements & Attics.
- `projects.html`: Real photo gallery with category filter and modal lightbox.
- `about.html`: Profile on Ed Harris, 12-year veteran, featuring video intro and business values.
- `contact.html`: Conversion page with phone links, business hours, service areas, and functional contact form.
- `css/`: Stylesheets for core design, responsiveness, and keyframe animations.
- `js/`: Modular JavaScript files for nav, slider, gallery, custom cursor, and form handling.
- `api/contact.js`: Serverless endpoint handler for Vercel/Netlify backend submissions.
- `assets/`: Organized directory containing authentic brand images and video clips.

## Deployment Instructions

### Vercel / Netlify
1. Connect repository to deployment platform.
2. Ensure build command is left empty (static HTML project).
3. Set environment variables if connecting real SMTP in `/api/contact.js`:
   - `CONTACT_EMAIL`: harrishangers17@yahoo.com
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`

## Phone & Contact Verification
- **Phone**: 315-679-7913 (`tel:+13156797913`)
- **Email**: harrishangers17@yahoo.com
- **Facebook**: https://www.facebook.com/share/1EgX6A1dfe/?mibextid=wwXIfr