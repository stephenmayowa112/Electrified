# Quick Start Guide - Electrified Engineering Website

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
cd Electrified-site
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

---

## 📝 Configuration

### Email Service (EmailJS)
Update the following in `src/pages/Contact.jsx`:
- Service ID: `service_6gg0f5e`
- Template IDs: `template_h5j52lt`, `template_tfe0hih`
- Public Key: `7NnVlLCFLZATz5a91`

### WhatsApp Number
Update in `src/components/WhatsAppButton.jsx`:
- Phone: `2348082999567`

### Google Maps
Update the iframe src in `src/pages/Contact.jsx` with your actual location coordinates.

### Social Media Links
Update in `src/components/Footer.jsx`:
- Facebook, Twitter, LinkedIn, Instagram URLs

---

## 🎨 Customization

### Colors
Main brand color is green-600 (#16a34a). To change:
- Search for `green-600` and `green-700` in all files
- Update to your preferred Tailwind color

### Logo
Replace `/public/logo.png` with your logo file

### Images
Add your images to `/public/` folder:
- Team photos: `/public/team/`
- Client logos: `/public/logos/`
- Banner images: `/public/`

### Content
Update text content in each page component:
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - Company information
- `src/pages/Services.jsx` - Service details
- etc.

---

## 📱 Features Overview

### Navigation
- Fixed navbar with scroll effect
- Mobile responsive menu
- Active page highlighting

### Home Page
- Hero carousel with 5 images
- Animated statistics counters
- Services preview
- Client testimonials
- Featured clients
- Multiple CTAs

### Contact Page
- Form with validation
- Google Maps integration
- WhatsApp button
- Business hours

### All Pages
- SEO optimized
- Mobile responsive
- Loading states
- Error handling

---

## 🔧 Development Tips

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in navbar
4. Add SEO component

### Adding New Components
1. Create component in `src/components/`
2. Import and use in pages
3. Follow existing patterns

### Styling
- Uses Tailwind CSS
- Custom animations in `src/index.css`
- Responsive breakpoints: sm, md, lg, xl

---

## 📦 Project Structure

```
Electrified-site/
├── public/              # Static assets
│   ├── images/         # Favicon files
│   ├── logos/          # Client logos
│   ├── team/           # Team photos
│   └── *.jpg           # Banner images
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json
└── vite.config.js
```

---

## 🐛 Troubleshooting

### Images not loading
- Check file paths in `/public/`
- Ensure images are in correct folders
- Check file extensions match

### Email not sending
- Verify EmailJS credentials
- Check browser console for errors
- Test EmailJS service status

### Styles not applying
- Clear browser cache
- Restart dev server
- Check Tailwind config

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your server
```

---

## 📞 Support

For questions or issues:
- Email: info@electrifiedengineering.com
- Phone: +234 (0) 808 299 9567

---

## ✅ Checklist Before Launch

- [ ] Update all placeholder content
- [ ] Replace placeholder images
- [ ] Configure EmailJS
- [ ] Update WhatsApp number
- [ ] Update Google Maps location
- [ ] Add social media links
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Test in different browsers
- [ ] Add SSL certificate
- [ ] Set up domain

---

**Happy Building! 🎉**
