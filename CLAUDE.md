# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a modern Next.js 15 CV/Portfolio site built with:
- **Next.js 15.4.6** with App Router architecture
- **React 19.1.0** for components 
- **TypeScript** for type safety
- **Tailwind CSS v4** with PostCSS plugin for styling
- **Framer Motion 12.23** for animations
- **next-themes 0.4** for dark/light mode switching
- **Lucide React 0.537** for icons

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Run ESLint linting
npm run lint
```

## Project Architecture

### Single Page Application Structure
The site is built as a single-page application with all sections rendered on the main page (`src/app/page.tsx`). Navigation uses smooth scrolling to different sections rather than routing between pages.

### Data-Driven Architecture
All content is centralized in `src/lib/constants.ts` including:
- **PERSONAL_INFO**: Basic personal details, bio, contact info
- **EXPERIENCES**: Work history with descriptions and technologies
- **SKILLS**: Categorized skill sets with proficiency levels  
- **PROJECTS**: Portfolio projects with images and tech stacks
- **EDUCATION**: Academic background and qualifications
- **SOCIAL_LINKS**: Social media and contact links
- **NAV_LINKS**: Navigation menu structure

### Component Structure

**Sections** (`src/components/sections/`):
- Each major page section is a separate component (Hero, About, Experience, Skills, Portfolio, Contact)
- All sections use Framer Motion for scroll animations and interactions
- Responsive design with mobile-first approach

**UI Components** (`src/components/ui/`):
- `navigation.tsx`: Sticky navigation with active section detection and mobile menu
- `theme-toggle.tsx`: Dark/light mode toggle button

**Providers** (`src/components/providers/`):
- `theme-provider.tsx`: Wraps app with next-themes for theme management

### Type System
Comprehensive TypeScript interfaces in `src/types/index.ts` for:
- `Project`, `Experience`, `Skill`, `SkillCategory`  
- `SocialLink`, `ContactForm`, `Education`

### Utilities
`src/lib/utils.ts` contains:
- `cn()`: Tailwind class merging utility (clsx + tailwind-merge)
- `scrollToSection()`: Smooth scrolling navigation helper
- `validateEmail()`, `formatDate()`: Form and data utilities
- `debounce()`, `throttle()`: Performance optimization helpers

## Styling Architecture

- **Tailwind CSS v4**: Uses PostCSS plugin configuration
- **CSS Custom Properties**: Color theming with CSS variables in `globals.css`
- **Dark Mode**: System preference detection with manual override
- **Responsive Design**: Mobile-first breakpoints throughout
- **Font Optimization**: Geist Sans/Mono fonts loaded via next/font/google

## Animation System

Framer Motion powers all animations:
- **Scroll Animations**: Sections animate in on scroll using `whileInView`
- **Hover Effects**: Interactive elements have micro-animations
- **Page Transitions**: Smooth navigation between sections
- **Mobile Menu**: Animated mobile navigation drawer

## Theme Management

- **next-themes**: Handles system theme detection and manual switching
- **CSS Variables**: Theme colors defined as CSS custom properties  
- **Theme Toggle**: Button component for manual theme switching
- **Persistence**: Theme preference saved to localStorage

## Contact Form Integration

The contact form in `src/components/sections/contact.tsx` is configured for Formspree integration but requires setup:
1. Sign up at formspree.io
2. Create form and get form ID
3. Update fetch URL with your form endpoint

## Content Customization

To customize the portfolio content:

1. **Personal Information**: Edit `PERSONAL_INFO` object in `src/lib/constants.ts`
2. **Work Experience**: Update `EXPERIENCES` array with job history
3. **Skills**: Modify `SKILLS` array to reflect your technical competencies  
4. **Projects**: Update `PROJECTS` array with your portfolio work
5. **Education**: Edit `EDUCATION` array with academic background
6. **Images**: Add profile photo and project images to `public/` directory

## SEO Configuration

Comprehensive SEO setup in `src/app/layout.tsx`:
- Meta tags for title, description, keywords
- Open Graph tags for social sharing
- Twitter Card configuration  
- Structured data ready for enhancement

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization ready
- **Font Loading**: Optimized Google Fonts with variable CSS properties
- **Code Splitting**: Automatic by Next.js App Router
- **Static Generation**: Pre-rendered pages for faster loading
- **Bundle Analysis**: Built-in Next.js bundle analyzer available