---
name: Modern Romance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4f4445'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#807475'
  outline-variant: '#d2c3c4'
  surface-tint: '#70585b'
  primary: '#70585b'
  on-primary: '#ffffff'
  primary-container: '#fadadd'
  on-primary-container: '#765e61'
  inverse-primary: '#debfc2'
  secondary: '#6b5d3d'
  on-secondary: '#ffffff'
  secondary-container: '#f2ddb6'
  on-secondary-container: '#706141'
  tertiary: '#775a19'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffdda1'
  on-tertiary-container: '#7d5f1e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdbde'
  primary-fixed-dim: '#debfc2'
  on-primary-fixed: '#281719'
  on-primary-fixed-variant: '#574144'
  secondary-fixed: '#f5e0b9'
  secondary-fixed-dim: '#d8c49e'
  on-secondary-fixed: '#241a03'
  on-secondary-fixed-variant: '#524528'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is anchored in a sophisticated, celebratory aesthetic that balances the warmth of a heartfelt occasion with the precision of modern luxury. It is designed to evoke a sense of intimacy and premium quality, making it ideal for high-end event planning, digital invitations, and milestone celebrations.

The visual style is a refined blend of **Modern Minimalism** and **Glassmorphism**. It utilizes multi-layered depth to support immersive 3D parallax effects, where elements seem to float at varying distances from the viewer. This depth is achieved through the interaction of translucent surfaces, soft lighting, and high-quality typography, creating a digital environment that feels as tactile and considered as a physical event space.

## Colors
The palette is a harmonic collection of warm, celebratory tones.
- **Soft Blush:** Used for primary accents and romantic highlights. It should be treated as the emotional core of the interface.
- **Deep Champagne:** Provides a sophisticated secondary layer, often used for container backgrounds or subtle gradients.
- **Warm Gold:** Reserved for interactive elements, call-to-actions, and decorative flourishes to signify premium status.
- **Clean White:** Acts as the foundation for all surfaces, ensuring the interface remains airy and modern.

Color application should favor light, airy compositions with occasional deep champagne "voids" to create contrast and focus.

## Typography
Typography in this design system emphasizes the contrast between the timeless, high-contrast serif of the headlines and the friendly, legible sans-serif of the body text.

**Playfair Display** is used for all display and headline roles. Its high contrast and elegant curves provide a romantic, editorial feel. Use generous tracking for uppercase sub-headers to add a sense of luxury.

**Plus Jakarta Sans** provides a modern, soft touch for body copy and UI labels. Its geometric but warm letterforms ensure readability while maintaining the approachable personality of the brand.

## Layout & Spacing
The layout philosophy is centered on **breathable composition**. It uses a fluid 12-column grid for desktop with generous outer margins to keep content centered and focused, reminiscent of a luxury print invitation.

- **Desktop (1440px+):** 12 columns, 80px margins, 24px gutters.
- **Tablet (768px - 1439px):** 8 columns, 48px margins, 20px gutters.
- **Mobile (Up to 767px):** 4 columns, 24px margins, 16px gutters.

Spacing should be used to create clear groupings and hierarchy. Large vertical gaps (xl) are encouraged between major sections to allow the 3D parallax elements room to breathe without overlapping critical information.

## Elevation & Depth
Elevation is not conveyed through traditional heavy shadows, but through **Tonal Layering** and **Glassmorphism**.

1.  **Base Layer:** Solid white or ultra-pale blush surfaces.
2.  **Floating Layer:** Glassmorphic containers with a `backdrop-filter: blur(20px)` and a 1px white border at 20% opacity. These represent cards or menus floating above the background.
3.  **Accent Depth:** Very soft, diffused shadows (0px 20px 40px rgba(197, 160, 89, 0.08)) are used to lift the most important interactive elements, like primary buttons or featured gifts.

The parallax effect should be applied to decorative elements (florals, gold sparkles, or abstract shapes) tucked between these layers to create a sense of physical immersion.

## Shapes
The shape language is soft and organic. A standard radius of `0.5rem` (8px) is applied to secondary buttons and input fields, while `1rem` (16px) or larger is used for cards and main containers to evoke a gentle, welcoming feel.

Interactive elements like "Add to Guestlist" or "RSVP" may use pill-shaped (fully rounded) buttons to emphasize their distinctiveness and playfulness within the elegant framework.

## Components
- **Buttons:** Primary buttons use a solid Warm Gold background with white text. Secondary buttons are "ghost" style with a Soft Blush border or a glassmorphic fill.
- **Cards:** Utilize the glassmorphism effect. Each card should have a subtle 1px border and a slight inner glow to simulate a glass edge.
- **Chips/Badges:** Small, pill-shaped tags in Deep Champagne with dark-muted text, used for categories or status indicators.
- **Inputs:** Clean, white surfaces with a 1px Champagne border. On focus, the border transitions to Warm Gold with a soft outer glow.
- **Lists:** Separated by thin, low-opacity champagne lines. Items should have generous vertical padding (16px+) to maintain the premium feel.
- **Featured Component (The "Toast"):** A unique modal component used for celebratory announcements, featuring a deep champagne backdrop and gold-leaf style typography.