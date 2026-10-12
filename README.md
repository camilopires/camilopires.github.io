# Camilo Pires - Portfolio Website

A modern, accessible portfolio website built with Astro, showcasing my work as a Product Manager and App Developer.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Built with Astro 7, TypeScript, and Tailwind CSS 4
- **Accessibility First**: WCAG 2.1 AA compliant with 10/10 accessibility score
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Performance Optimized**: Fast loading with optimized assets
- **Maintenance Mode**: Easy toggle for site maintenance

### SEO & Performance Features
- **Advanced SEO**: Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema markup for better search visibility
- **Image Optimization**: Built-in Astro image optimization with WebP/AVIF support
- **Sitemap Generation**: Automatic XML sitemap with configurable settings
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Performance Monitoring**: Optimized loading and Core Web Vitals

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Optimized for assistive technologies
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user motion preferences

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd camilo-astro-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

### Project Structure
```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Navigation header
│   ├── Footer.astro    # Site footer
│   └── OptimizedImage.astro # Image optimization component
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout with SEO
├── pages/              # Astro pages
├── styles/             # Global styles
└── config/             # Configuration files
```

### Key Components

#### Layout.astro
The main layout component includes comprehensive SEO features:
- **Meta Tags**: Title, description, keywords
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Proper URL handling
- **Theme Colors**: Browser theme integration

#### OptimizedImage.astro
Advanced image optimization component:
- **Automatic Format Selection**: WebP/AVIF with fallbacks
- **Responsive Images**: Multiple sizes for different screens
- **Lazy Loading**: Performance optimization
- **Quality Control**: Configurable image quality
- **Public/Asset Support**: Handles both public and imported images

### SEO Configuration

#### Meta Tags
```astro
<Layout 
  title="Page Title"
  description="Page description for search engines"
  image="/path/to/image.jpg"
  type="website|article|profile"
  tags={["tag1", "tag2"]}
>
```

#### Structured Data
Automatic JSON-LD generation for:
- **Person Schema**: Author information
- **Organization Schema**: Site publisher details
- **Article Schema**: Blog post metadata (when applicable)
- **WebPage Schema**: General page information

#### Sitemap Configuration
```javascript
sitemap({
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date()
})
```

### Image Optimization

#### Using OptimizedImage Component
```astro
<OptimizedImage 
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={90}
  format="webp"
  loading="lazy"
/>
```

#### Features
- **Automatic Format Selection**: WebP/AVIF with JPEG fallback
- **Responsive Sizes**: Multiple image sizes for different screens
- **Quality Control**: Configurable compression levels
- **Lazy Loading**: Performance optimization
- **Accessibility**: Proper alt text and loading attributes

## 🔧 Configuration

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  site: 'https://camilopires.co.uk',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Maintenance Mode
Toggle maintenance mode using the provided script:
```bash
npm run maintenance
```

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🎯 SEO Features

### Search Engine Optimization
- **Meta Tags**: Comprehensive meta tag implementation
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

### Technical SEO
- **Semantic HTML**: Proper heading hierarchy
- **Fast Loading**: Optimized assets and lazy loading
- **Mobile-Friendly**: Responsive design
- **HTTPS**: Secure connections
- **Clean URLs**: SEO-friendly URL structure

## 🔍 Accessibility

### WCAG 2.1 AA Compliance
- **Semantic HTML**: Proper landmarks and structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Optimized for assistive technologies
- **Color Contrast**: AA compliant color ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

### Testing
- Automated accessibility testing
- Manual screen reader testing
- Keyboard navigation testing
- Color contrast validation

## 🚀 Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment:
- Build output: `docs/` directory
- Custom domain: `camilopires.co.uk`
- Automatic deployment on push to main branch

### Build Process
```bash
npm run build
# Generates optimized static files in docs/
```

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type checking
npm run maintenance  # Toggle maintenance mode
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test accessibility and performance
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: dev@camilopires.co.uk
- **Website**: https://camilopires.co.uk
- **LinkedIn**: https://www.linkedin.com/in/camilo-pires

---

**Last Updated**: August 2025
**Astro Version**: 4.x
**Accessibility Score**: 10/10
**Performance Score**: 95+