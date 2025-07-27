# SWAJANA Foundation Website

A modern, responsive Angular website for SWAJANA Foundation - an NGO dedicated to providing free education to children in rural India.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with a professional color palette (soft blue, white, and green)
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Performance Optimized**: Lazy loading for better performance and faster load times
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🎨 Design System

### Color Palette
- **Primary Blue**: #4A90E2
- **Soft Blue**: #E3F2FD
- **Accent Green**: #4CAF50
- **Light Green**: #E8F5E8
- **Pure White**: #FFFFFF
- **Text Dark**: #2C3E50
- **Text Light**: #7F8C8D

### Typography
- **Font**: Inter (with fallbacks to system fonts)
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable line-height and spacing

## 📱 Pages

1. **Home** - Hero section, mission overview, programs, testimonials, and impact stats
2. **About Us** - Foundation story, team, values, and impact numbers
3. **Our Mission** - Detailed mission statement and goals
4. **Education Programs** - Comprehensive list of all educational initiatives
5. **Success Stories** - Inspiring stories of students and their achievements
6. **Donate** - Donation options, transparency, and impact information
7. **Volunteer** - Volunteer opportunities and application process
8. **News** - Latest updates and announcements
9. **Contact** - Contact information and inquiry form

## 🚀 Technology Stack

- **Framework**: Angular 18+ (Standalone Components)
- **Styling**: SCSS with Bootstrap 5
- **Icons**: Font Awesome 6
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18.17.1 or higher)
- npm (v9.6.7 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swajana-foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📦 Build & Deploy

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/         # Navigation header
│   │   └── footer/         # Site footer
│   ├── pages/              # Page components
│   │   ├── home/           # Home page
│   │   ├── about/          # About page
│   │   ├── mission/        # Mission page
│   │   ├── programs/       # Programs page
│   │   ├── success-stories/ # Success stories
│   │   ├── donate/         # Donation page
│   │   ├── volunteer/      # Volunteer page
│   │   ├── news/           # News page
│   │   └── contact/        # Contact page
│   ├── services/           # Angular services
│   │   ├── data.service.ts # Data management
│   │   └── seo.service.ts  # SEO management
│   ├── app.component.*     # Root component
│   ├── app.config.ts       # App configuration
│   └── app.routes.ts       # Routing configuration
├── styles.scss             # Global styles
└── index.html              # Main HTML file
```

## 🎯 Key Features

### Performance Optimizations
- **Lazy Loading**: All pages are lazy-loaded for better performance
- **Tree Shaking**: Unused code is automatically removed
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Image Optimization**: Responsive images with proper sizing

### SEO Features
- **Meta Tags**: Comprehensive meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Schema markup for better search results
- **Semantic HTML**: Proper HTML5 semantic elements

### Accessibility
- **ARIA Labels**: Proper ARIA labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color contrast
- **Focus Management**: Proper focus indicators and management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions about this website, please contact:
- **Email**: tech@swajana-foundation.org
- **Website**: https://swajana-foundation.org

## 🌟 Acknowledgments

- **Bootstrap** for the responsive grid system and components
- **Font Awesome** for the beautiful icons
- **Unsplash** for the high-quality placeholder images
- **Angular Team** for the amazing framework

---

**Built with ❤️ for SWAJANA Foundation**

*Empowering rural children through education*
