# High-End Portfolio Website

A professional, modern portfolio built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **3D Spline integration**. Features include a custom liquid cursor, magnetic button interactions, and reveal-on-scroll animations.

## 🎯 Project Structure

```
portfolio-next/
├── app/
│   ├── globals.css          # Global styles with cursor: none
│   ├── layout.tsx           # Root layout with Cursor component
│   └── page.tsx             # Main page with hero, nav, projects, about, contact
├── components/
│   ├── Cursor.tsx           # Custom cursor with glow effect
│   ├── MagneticButton.tsx   # Buttons with magnetic pull interaction
│   └── ProjectCard.tsx      # Project cards with reveal-on-scroll
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## ✨ Key Features

### 1. **3D Background Layer**
- Fixed Spline 3D scene at `https://prod.spline.design/t3qRsU3zQaxLkzig/scene.splinecode`
- Loaded dynamically with SSR disabled
- Z-index: 0 (background layer)

### 2. **Custom Cursor**
- White 20px circle with `mix-blend-mode: difference`
- Cyan glow effect (`drop-shadow`)
- Smooth animation with Framer Motion
- Global CSS hides system cursor (`cursor: none !important`)

### 3. **Magnetic Buttons**
- Physics-based interaction within 40px radius
- Spring animation: `damping: 15, stiffness: 150`
- Smooth pull toward cursor
- Works on nav links and CTAs

### 4. **Navigation**
- Fixed top bar with "PORTFOLIO" logo
- Magnetic links: Projects, About, Contact
- Slides in on page load

### 5. **Hero Section**
- Large gradient text "DIGITAL ARTIFACTS"
- Tagline with name and location
- CTA button to scroll to projects

### 6. **Projects Section**
- White background for high contrast
- Project cards with reveal-on-scroll animation
- Tags, descriptions, and gradients

### 7. **About Section**
- Dark gradient background
- Stats display
- Professional bio

### 8. **Contact Section**
- Full-height black background
- Email CTA button

## 🚀 Getting Started

The development server is already running at **http://localhost:3000**!

### Development

To stop/restart the dev server:
```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### Update Hero Text
Edit [app/page.tsx](app/page.tsx) around line 85-88:
```typescript
<h1>YOUR HEADLINE HERE</h1>
<p>YOUR NAME - Location</p>
```

### Update Projects
Edit the `projects` array in [app/page.tsx](app/page.tsx):
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Your description',
    tags: ['Tech1', 'Tech2'],
  },
];
```

### Change Colors
Update Tailwind classes throughout:
- Gradients: `from-cyan-500 to-purple-600`
- Accents: `text-cyan-400`

### Adjust Magnetic Radius
Edit [components/MagneticButton.tsx](components/MagneticButton.tsx):
```typescript
const magneticRadius = 40; // Increase for larger pull area
```

### Change Spline Scene
Replace URL in [app/page.tsx](app/page.tsx) at line 41.

## 📦 Dependencies

- **next**: React framework
- **framer-motion**: Animations
- **tailwindcss**: Styling
- **@splinetool/react-spline**: 3D scenes
- **typescript**: Type safety

## 🎬 Interaction Details

- **Entrance**: Hero fades in with staggered animations
- **Scroll**: Project cards reveal on view
- **Magnetic**: Buttons pull toward cursor within 40px
- **Cursor**: Custom white circle with cyan glow

## 📋 Browser Support

✅ Chrome, Firefox, Safari, Edge
⚠️ Mobile: Custom cursor may not be visible

## 🐛 Troubleshooting

### Cursor Not Showing
- Check `globals.css` for `cursor: none !important`
- Verify Cursor component in layout.tsx

### Spline Not Loading
- Check internet connection
- Verify Spline URL is correct

### Magnetic Buttons Not Working
- Ensure `pointer-events-auto` on buttons
- Check `pointer-events-none` on parent layers

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm run start`
- Server listens on port 3000

---

**Enjoy your high-end portfolio!** 🚀
