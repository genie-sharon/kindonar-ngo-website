# Kindonar Humanitarian

AWWWARDS-winning cinematic NGO website with immersive fake-3D storytelling, built for maximum recruiter/judge impact.

## Architecture Overview

- **Next.js 14 App Router**: File-based routing with server components
- **TypeScript**: Strict type safety across all components
- **Tailwind CSS**: Custom pastel pink luxury design system
- **GSAP + Framer Motion**: Cinematic animations and scroll effects
- **Zustand**: Lightweight donation state management with persistence
- **Stripe Checkout**: Secure payment processing (test mode)

## Cinematic Storytelling System

The website uses a 3-act cinematic structure:

**Act 1 — Immersion**
- Giant cinematic hero with parallax
- Emotional imagery with slow atmospheric motion
- Layered depth with foreground/background separation
- Minimal typography for impact

**Act 2 — Human Impact**
- Statistics emerge from imagery
- Documentary-style storytelling
- Measurable outcomes displayed elegantly
- Animated counters with GSAP

**Act 3 — Participation**
- Donation flow becomes central
- Floating CTA layers
- Frictionless giving experience

**Final Moment — Hope**
- Calm elegant ending
- Emotional resolution
- Inspiring CTA

## Fake 3D Illusion Approach

Simulated without WebGL using:

1. **Layered Parallax**: `data-speed` attributes create depth
   - Foreground layers move 2x faster than background
   - `initParallax()` helper calculates scroll-based y-offset

2. **Expanding Imagery**: GSAP ScrollTrigger-driven
   - Images begin cropped, expand during scroll
   - Scale transforms with `power2.out` easing
   - Clip-path animations for reveal effects

3. **Environmental Effects**:
   - Floating particles via CSS animations
   - Drifting gradients for atmospheric depth
   - Glassmorphism cards create layering

## GSAP Animation Strategy

- **ScrollTrigger**: All scroll-linked animations
- **Scrub**: Smooth scroll syncing (`scrub: true`)
- **Counter Animations**: `toggleActions: "play none none reverse"`
- **Image Scaling**: `scale: 1.1` during scroll viewport intersection
- **Cleanup**: `ScrollTrigger.getAll().forEach(trigger => trigger.kill())`

## Mobile-First Optimization

- `clamp()` typography for responsive sizing
- Adaptive parallax (reduced intensity on mobile)
- Thumb-friendly sticky donation CTA
- Preserved cinematic composition on all viewports
- No horizontal overflow guarantees
- Touch-friendly interactions

## Stripe Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Stripe test keys from https://dashboard.stripe.com/test/apikeys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. Test donation flow with test card: `4242 4242 4242 4242`

## Performance Optimization

- **60fps Target**: Using `transform` only (no layout-triggering properties)
- **Next.js Image**: Optimization with Unsplash remote patterns
- **Code Splitting**: Next.js dynamic imports
- **Zustand Persistence**: Avoids prop drilling
- **Minimal Layout Shifts**: CLS < 0.1

## Lighthouse Considerations

Target scores:
- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Optimization techniques:
- Preconnect to Unsplash and Stripe domains
- Lazy load non-critical components
- Minimize third-party script impact
- Optimize animation layer count for mobile GPUs

## Deployment Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to https://vercel.com/import
   - Select your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy

3. **Update Environment Variables** in Vercel settings:
   - Set `NEXT_PUBLIC_BASE_URL` to your production URL

## Project Structure

```
app/
  layout.tsx           # Root layout with Navbar, Footer, ErrorBoundary
  page.tsx             # Home page with cinematic hero
  programs/
    page.tsx           # Programs listing
    [id]/page.tsx      # Program detail
  donate/page.tsx       # Donation page (Stripe)
  about/page.tsx        # Impact/About page
  success/page.tsx      # Donation success
  cancel/page.tsx       # Donation cancel
  api/create-checkout-session/
    route.ts             # Stripe API route

components/
  Navbar.tsx            # Navigation with mobile menu
  Footer.tsx            # Site footer
  ScrollHero.tsx         # Cinematic hero section
  ProgramCard.tsx        # Program card with hover effects
  ImpactStats.tsx        # Animated counter stats
  FloatingGlassCard.tsx   # Reusable glassmorphism card
  DonationDrawer.tsx     # Floating donation drawer
  MagneticButton.tsx     # Magnetic hover effect button
  AnimatedCounter.tsx    # GSAP-powered counter
  ShareButtons.tsx       # Social share buttons
  SecureBadge.tsx        # Secure payment badge
  ErrorBoundary.tsx      # Error boundary component

store/
  donationStore.ts       # Zustand store with persistence

data/
  programData.ts        # Program data

utils/
  gsapHelpers.ts        # GSAP parallax/expanding helpers
  clipboard.ts          # Clipboard utilities
  formatCurrency.ts     # Currency formatting
```

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Stripe keys

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the cinematic NGO site.
