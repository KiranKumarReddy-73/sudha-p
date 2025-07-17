# Sudha Pujari - Portfolio Website

A modern, responsive portfolio website for Sudha Pujari, Product Security Engineer, built with React, TypeScript, and Three.js.

## 🚀 Features

- **Modern Design**: Cyberpunk-inspired design with glassmorphism effects
- **3D Animations**: Interactive 3D sphere using Three.js and React Three Fiber
- **Smooth Animations**: Framer Motion for fluid page transitions and interactions
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Code splitting and optimized bundle size
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Smooth Scrolling**: Lenis

## 📁 Project Structure

```
pro1/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── Hero.tsx         # Hero section with 3D sphere
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Experience.tsx   # Professional experience
│   │   ├── Contact.tsx      # Contact form
│   │   └── BackToTop.tsx    # Back to top button
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   └── useActiveSection.ts
│   ├── utils/               # Utility functions
│   │   ├── constants.ts     # App constants
│   │   └── scrollUtils.ts   # Scroll utilities
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.tsx              # Main app component
│   └── main.tsx             # App entry point
├── public/                  # Static assets
│   ├── highlights.html      # Highlights page
│   └── contributions.html   # Contributions page
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

- **Cyberpunk Aesthetic**: Dark theme with neon accents
- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradient Animations**: Dynamic color transitions
- **Particle Effects**: Floating particles and interactive elements
- **Hover States**: Rich micro-interactions
- **Smooth Scrolling**: Lenis-powered smooth scroll experience

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly interactions
- Optimized typography scaling

## ⚡ Performance

- Code splitting with dynamic imports
- Optimized bundle size with manual chunks
- Lazy loading for non-critical components
- Efficient re-renders with React best practices

## 🔧 Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd pro1

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The project is configured for easy deployment to various platforms:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform

## 🎯 Key Sections

1. **Hero**: Interactive 3D sphere with call-to-action buttons
2. **About**: Personal introduction with specializations
3. **Skills**: Interactive skill cards with proficiency levels
4. **Experience**: Timeline-based professional journey
5. **Contact**: Contact form with social links

## 🔒 Security Features

- Input validation on contact forms
- XSS protection through React's built-in sanitization
- Secure external link handling
- Content Security Policy ready

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Sudha Pujari**
- Product Security Engineer
- Email: sudha.security@example.com
- LinkedIn: [linkedin.com/in/sudha-pujari](https://linkedin.com/in/sudha-pujari)
- Location: San Francisco Bay Area

---

*Built with ❤️ and ☕ by Sudha Pujari*