# Portfolio Project - Copilot Instructions

## Project Overview

This is a **high-end portfolio website** built with:
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: Spline React SDK
- **Language**: TypeScript

**Status**: ✅ Running at `http://localhost:3000`

## Architecture Layers

The portfolio is built on a **layered Z-index system** for proper composition:

| Layer | Z-Index | Component | Purpose |
|-------|---------|-----------|---------|
| 0 | z-0 | Spline 3D Scene | Fixed background |
| 1 | z-10 | Hero Content | Overlays 3D scene |
| 2 | z-20 | Sections | Above hero (white, about, contact) |
| 3 | z-9999 | Cursor | Always on top |

**Critical**: Use `pointer-events-none` on layers and `pointer-events-auto` on interactive elements to ensure clicks work properly.

## Key Components

### 1. Custom Cursor (`components/Cursor.tsx`)
- **What**: White 20px circle with cyan glow
- **How**: Uses Framer Motion `useSpring` for smooth tracking
- **Config**: 100ms tween animation, `mix-blend-mode: difference`
- **Global CSS**: `cursor: none !important` hides system cursor
- **Customization**:
  ```typescript
  filter: 'drop-shadow(0 0 6px #00d0ff)' // Adjust glow intensity
  ```

### 2. Magnetic Button (`components/MagneticButton.tsx`)
- **What**: Button that pulls toward cursor within 40px radius
- **Physics**: `damping: 15, stiffness: 150` (tunable)
- **Detection**: Distance calculation in `handleMouseMove`
- **Customization**:
  ```typescript
  const magneticRadius = 40; // Increase for larger pull area
  ```

### 3. Project Card (`components/ProjectCard.tsx`)
- **What**: Reveal-on-scroll animated cards
- **Animation**: Framer Motion `whileInView` with fade + Y-translate
- **Viewport**: `{ once: true, margin: '-100px' }` for early trigger
- **Styling**: Glassmorphism effect with `backdrop-blur-md`

## Core Files

### `app/globals.css`
```css
/* Critical settings */
* { cursor: none !important; }      /* Hide system cursor */
html { scroll-behavior: smooth; }   /* Smooth scrolling */
body { background-color: #050505; } /* Dark background */
```

**Never remove** `cursor: none !important` or interactive elements won't work.

### `app/layout.tsx`
```typescript
import Cursor from "@/components/Cursor"; // Must include
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Cursor />  {/* Top-level component */}
        {children}
      </body>
    </html>
  );
}
```

### `app/page.tsx`
The main page with:
- **Navigation**: Fixed top bar with magnetic links
- **Hero**: 3D Spline background + gradient text + CTA
- **Projects**: Grid of cards with reveal animation
- **About**: Stats + biography
- **Contact**: Email CTA

#### Spline Integration
```typescript
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false, // Critical: disable SSR for Spline
});

// Usage
<Spline scene="https://prod.spline.design/t3qRsU3zQaxLkzig/scene.splinecode" />
```

## Common Customizations

### 1. Change Hero Text
**File**: [app/page.tsx](app/page.tsx) ~line 85

```typescript
<h1 className="text-7xl md:text-8xl font-bold...">
  YOUR HEADLINE HERE
</h1>
<p className="text-xl md:text-2xl...">
  YOUR NAME - Creative Developer based in YOUR LOCATION
</p>
```

### 2. Update Project List
**File**: [app/page.tsx](app/page.tsx) ~line 13

```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'What it does',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    image: 'optional-url', // If you add image support
  },
  // ... more projects
];
```

### 3. Change Color Scheme
Replace Tailwind color classes:
- `from-cyan-500` → `from-blue-500` (or any color)
- `to-purple-600` → `to-pink-600`
- `text-cyan-400` → `text-lime-400`

Example:
```jsx
// Before
<div className="bg-gradient-to-r from-cyan-500 to-purple-600">

// After
<div className="bg-gradient-to-r from-blue-500 to-green-600">
```

### 4. Adjust Magnetic Pull Intensity
**File**: [components/MagneticButton.tsx](components/MagneticButton.tsx)

```typescript
transition={{
  type: 'spring',
  damping: 15,    // Lower = more bouncy (5-20 range)
  stiffness: 150, // Higher = snappier (50-200 range)
}}

const magneticRadius = 40; // Larger radius = wider pull area
```

### 5. Increase Cursor Glow
**File**: [components/Cursor.tsx](components/Cursor.tsx)

```typescript
style={{
  mixBlendMode: 'difference',
  filter: 'drop-shadow(0 0 6px #00d0ff)',  // Increase 6px for more glow
}}

// Or change color
filter: 'drop-shadow(0 0 10px #ff00ff)' // Different glow color
```

### 6. Change Spline 3D Scene
**File**: [app/page.tsx](app/page.tsx) ~line 41

```typescript
<Spline scene="YOUR_NEW_SPLINE_URL_HERE" />
```

Get a new URL from: https://spline.design/

### 7. Add Navigation Link
**File**: [app/page.tsx](app/page.tsx) ~line 58

```typescript
<MagneticButton className="text-white hover:text-cyan-400">
  <a href="#your-section">Your Link</a>
</MagneticButton>
```

Then add corresponding section:
```typescript
<section id="your-section" className="relative z-20...">
  {/* Your content */}
</section>
```

### 8. Update About Stats
**File**: [app/page.tsx](app/page.tsx) ~line 185

```typescript
<div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
<div className="text-gray-400">Projects Completed</div>
```

### 9. Update Contact Email
**File**: [app/page.tsx](app/page.tsx) ~line 220

```typescript
<MagneticButton
  href="mailto:your.email@example.com"
  className="..."
>
  Get In Touch
</MagneticButton>
```

## Animation Timing

- **Page Load**: Hero slides in 0.6-0.8s with 0.2s delay
- **Nav**: Slides in 0.6s with staggered 0.1s delays
- **Scroll**: Project cards fade in when visible (0.6s)
- **Magnetic**: 100-150ms spring response
- **Cursor**: 100ms smooth trailing

## Debugging

### Issue: Cursor Not Visible
1. Check `globals.css` has `cursor: none !important`
2. Verify Cursor component renders in layout.tsx
3. Open DevTools → inspect cursor element (should be visible)
4. Clear browser cache and reload

### Issue: Buttons Not Responding
1. Verify `pointer-events-auto` on button
2. Check parent container has `pointer-events-none`
3. Ensure Z-index is correct (nav should be z-20)

### Issue: Spline 3D Not Loading
1. Check internet connection (CDN requirement)
2. Verify Spline URL is correct and accessible
3. Open network tab in DevTools to see CDN requests
4. Try refreshing page

### Issue: Magnetic Effect Too Weak
1. Increase `magneticRadius` to 60-80px
2. Decrease `damping` to 10-15
3. Increase `stiffness` to 200+

### Issue: Build Failures
1. Clear cache: `rm -rf .next`
2. Reinstall: `rm -rf node_modules && npm install`
3. Check TS errors: `npm run type-check`

## Development Workflow

### Start Development
```bash
npm run dev
# Opens at http://localhost:3000
# Hot reload on file save
```

### Production Build
```bash
npm run build     # Creates optimized build
npm run start     # Runs production server
```

### Type Check
```bash
npm run type-check
```

### ESLint
```bash
npm run lint
```

## File Organization

```
src/
├── app/
│   ├── globals.css          ← Global styles, cursor reset
│   ├── layout.tsx           ← Root layout, Cursor component
│   ├── page.tsx             ← Main portfolio page (8 sections)
│   └── favicon.ico
├── components/
│   ├── Cursor.tsx           ← Custom cursor (smooth following)
│   ├── MagneticButton.tsx   ← Magnetic interactive button
│   └── ProjectCard.tsx      ← Animated project card
├── public/                  ← Static assets
├── package.json             ← Dependencies
├── tailwind.config.ts       ← Tailwind setup
├── tsconfig.json            ← TypeScript config
└── next.config.ts           ← Next.js config
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.0 | React framework |
| react | 19.x | UI library |
| framer-motion | latest | Animations |
| tailwindcss | latest | Styling |
| @splinetool/react-spline | latest | 3D scenes |
| typescript | latest | Type safety |

To add a package:
```bash
npm install package-name
```

## Performance Tips

1. **Lazy load Spline**: Already done with `dynamic()` and `ssr: false`
2. **Optimize images**: Use Next.js Image component if adding images
3. **Code split**: Components are already split efficiently
4. **CSS**: Tailwind is tree-shaked in production

## Deployment

### Vercel (Recommended)
```bash
vercel
# Automatically deploys main branch
```

### Self-Hosted
```bash
npm run build
npm run start
# Server runs on port 3000
```

## Notes for Future Development

- **Color consistency**: Use Tailwind color naming (cyan, purple, pink)
- **Z-index**: Keep fixed layers at z-20, cursor at z-9999
- **Animations**: Use Framer Motion, keep durations 0.3-0.8s
- **Responsiveness**: Use md: breakpoints (already in place)
- **Accessibility**: Add aria labels to interactive elements
- **Spline**: Always use `ssr: false` with React Spline

## Quick Reference

```typescript
// Add Spline scene
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
});

// Magnetic button
import MagneticButton from '@/components/MagneticButton';
<MagneticButton>Your Content</MagneticButton>

// Scroll animation
whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 50 }}
viewport={{ once: true }}

// Gradient text
className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"

// Smooth scroll
className="scroll-smooth"
```
