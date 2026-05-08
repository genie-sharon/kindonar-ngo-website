# Kindonar Humanitarian

Modern NGO website template built with Next.js 14, TypeScript, and Tailwind CSS.

Designed for international non-profit organizations with a focus on donations, program discovery, responsive UI, and smooth user experience.

---

## Live Demo

https://kindonar-ngo-website.vercel.app/

---

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion
- Zustand
- Stripe Checkout

---

## Features

### Home Page
- Mission-focused hero section
- Featured programs
- Animated impact statistics
- Donate CTA

### Programs Page
- Program listings with images
- Progress indicators
- Social sharing support

### Program Detail Page
- Detailed program information
- Donation section
- Share functionality

### Donate Page
- Predefined + custom donation amounts
- Stripe Checkout integration
- Secure payment experience

### Impact / About Page
- Organization mission
- Impact statistics
- Responsive layouts

---

## UI & Experience

- Scroll-based animations
- Layered parallax effects
- Glassmorphism components
- Mobile-first responsive design
- Optimized animations for smooth performance

---

## Performance

### Lighthouse Goals
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization
- Next.js Image optimization
- Dynamic imports
- Lazy loading
- Minimal layout shifts
- Mobile GPU optimization

---

## Stripe Setup

Create a `.env.local` file:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Test card:

```bash
4242 4242 4242 4242
```

---

## Project Structure

```bash
app/
  programs/
  donate/
  about/
  api/

components/
store/
data/
utils/
```

---

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Deployment

Deploy easily using Vercel:

https://vercel.com/import

---

## Challenge Coverage

### Included Pages
- Home Page
- Programs Page
- Program Detail Page
- Donate Page
- Impact / About Page

### Focus Areas
- Donation experience
- Responsive UI
- Program discovery
- Social sharing
- Mobile optimization
- Micro-interactions

---

## Submission Notes

This project was built with a focus on usability, accessibility, responsive design, and a smooth donation experience for global non-profit organizations.
