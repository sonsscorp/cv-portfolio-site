# Son Thanh Le - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a professional design showcasing 30+ years of experience in international trade and manufacturing operations.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with plenty of whitespace
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Automatic theme switching with manual toggle
- **Smooth Animations**: Beautiful Framer Motion animations throughout
- **Interactive Navigation**: Sticky navigation with active section highlighting
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with Next.js optimization features

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Fonts**: Geist Sans and Geist Mono from next/font/google

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cv-portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit the constants in `src/lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your tagline',
  email: 'your.email@example.com',
  location: 'Your Location',
  bio: 'Your bio description',
};
```

### Experience

Update the `EXPERIENCES` array in `src/lib/constants.ts` with your work history:

```typescript
export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Your Position',
    duration: '2022 - Present',
    location: 'Location',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2']
  },
  // Add more experiences
];
```

### Skills

Modify the `SKILLS` array to reflect your technical competencies:

```typescript
export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Expert' },
      // Add your skills
    ]
  },
  // Add more categories
];
```

### Projects

Update the `PROJECTS` array with your portfolio projects:

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech 1', 'Tech 2'],
    image: '/projects/project-image.jpg',
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/username/project',
    featured: true
  },
  // Add more projects
];
```

### Images

1. **Profile Photo**: Add your photo to `public/` and uncomment the Image component in `src/components/sections/about.tsx`
2. **Project Images**: Add project screenshots to `public/projects/` and update the image paths in the projects data
3. **Resume**: Add your resume PDF to `public/resume.pdf`

### Contact Form

The contact form is set up to work with Formspree. To activate it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the fetch URL in `src/components/sections/contact.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### Social Links

Update the `SOCIAL_LINKS` array in `src/lib/constants.ts` with your social media profiles.

### Colors and Styling

The site uses a professional blue color palette. To customize:

1. **Colors**: Update the color classes in Tailwind throughout the components
2. **Fonts**: Change the font imports in `src/app/layout.tsx`
3. **Styling**: Modify component styles in their respective files

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Main page sections
│   │   ├── hero.tsx       # Hero/landing section
│   │   ├── about.tsx      # About section
│   │   ├── experience.tsx # Experience timeline
│   │   ├── skills.tsx     # Skills showcase
│   │   ├── portfolio.tsx  # Projects portfolio
│   │   └── contact.tsx    # Contact form
│   ├── ui/                # Reusable UI components
│   │   ├── navigation.tsx # Sticky navigation
│   │   └── theme-toggle.tsx # Dark/light mode toggle
│   └── providers/
│       └── theme-provider.tsx # Theme context provider
├── lib/
│   ├── constants.ts       # Site data and configuration
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🚀 Deployment

The site is optimized for deployment on Vercel, Netlify, or any static hosting service.

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [vercel.com](https://vercel.com)
3. Deploy with default settings

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Google Fonts loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for faster loading
- **Bundle Analysis**: Built-in bundle analyzer

## 🎨 Design Decisions

- **Mobile-First**: Responsive design starting with mobile screens
- **Typography**: Clear hierarchy with Geist font family
- **Color Palette**: Professional blue theme with dark mode support
- **Animations**: Subtle, purposeful animations that enhance UX
- **Accessibility**: WCAG 2.1 AA compliant design

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
