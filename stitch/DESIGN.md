---
name: Guard Glob Probe Fresh
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The brand personality is deterministic, authoritative, and strictly utilitarian. It is designed for system administrators and technical operators who require immediate, unambiguous status updates. The design system follows a **Modern Corporate** style with leanings toward **Systematic Minimalism**. 

The UI prioritizes data density and functional clarity over aesthetic flourish. Every element exists to serve a specific informational purpose. The emotional response should be one of stability and reliability—a "dashboard" feel that remains calm even during critical system alerts. There are no illustrations, decorative gradients, or rounded "playful" elements; the aesthetic is grounded in professional efficiency.

## Colors
The palette is rooted in a Slate/Neutral gray scale to provide a calm, non-distracting background. 
- **Primary:** A deep Slate (#0F172A) used for high-level navigation and primary headers to establish authority.
- **Action:** A solid Corporate Blue (#2563EB) reserved strictly for primary interactive elements.
- **Status Indicators:** Emerald Green for success, Amber for warnings, and Red for errors. These colors must maintain high contrast against the background to ensure glanceability.
- **Backgrounds:** A very light cool gray (#F8FAFC) to reduce eye strain during prolonged monitoring sessions.

## Typography
The system utilizes **Inter** for all UI copy due to its exceptional legibility at small sizes and neutral character. For status values, timestamps, and IP addresses, **JetBrains Mono** (or a system monospaced font) is used to ensure tabular alignment, allowing operators to scan columns of numbers quickly.

Text roles are strictly enforced:
- **Headlines:** Reserved for page titles and major section headers.
- **Body:** Standardized at 14px for optimal information density.
- **Labels:** Small, uppercase, and bold for metadata titles (e.g., "LAST PROBE").
- **Data:** Monospaced for all dynamic status values and time-series data.

## Layout & Spacing
The design system employs a **Fixed Grid** model on desktop (12 columns) and a fluid single-column model on mobile. 
- **Spacing Scale:** A strict 4px baseline grid is used. Most component internal padding should be 12px or 16px to maintain a "compact" but readable feel.
- **Grid:** Use a 16px gutter between cards. 
- **Density:** High density is preferred. Elements should be packed closely to maximize the "at-a-glance" information available without scrolling.
- **Breakpoints:** Mobile (<600px), Tablet (600px-1024px), Desktop (>1024px). On mobile, horizontal margins shrink to 16px to preserve screen real estate.

## Elevation & Depth
This design system avoids shadows to maintain a flat, professional, and deterministic look. 
- **Surface Hierarchy:** Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**. 
- **Cards:** Use a white background with a 1px solid border (#E2E8F0). No shadow.
- **Active States:** Subtle gray backgrounds (#F1F5F9) indicate hovered or active list items.
- **Separators:** 1px solid lines (#F1F5F9) are used to divide list items and header sections.
- **Modals:** Only in specific interaction cases, a 2px stroke and a very subtle, tight 4px blur shadow may be used to provide minimal separation from the background.

## Shapes
In line with the utilitarian theme, the design system uses a **Soft (0.25rem)** roundedness level. This provides just enough visual comfort to distinguish elements without appearing "bubbly" or informal.
- **Buttons & Inputs:** 4px (0.25rem) border radius.
- **Cards & Containers:** 6px (0.375rem) border radius for a slightly more structured appearance.
- **Status Pills:** Fully rounded (pill-shaped) but only for status indicators to make them instantly recognizable as "tags."

## Components
- **Buttons:** Primary buttons use the Corporate Blue background with white text. High contrast is mandatory. Secondary buttons use a white background with a 1px Slate-300 border.
- **Compact Cards:** Used for individual probe or glob monitors. Borders are 1px #E2E8F0. Headers within cards should use `label-caps` for metadata.
- **Toggle Switches:** Small, rectangular with slightly rounded corners. "On" state uses the Success Green (#10B981).
- **Activity Logs:** Clean list items with a `data-tabular` timestamp on the left, followed by a status indicator pill and a brief event description.
- **Input Fields:** 1px solid Slate-300 border. On focus, the border changes to Corporate Blue with a 1px blue "halo" (outline).
- **Status Pills:** Small, high-saturation tags. Green for "Fresh," Red for "Stale," and Amber for "Probing."
- **Data Tables:** No vertical lines. Horizontal separators only. Header row has a light gray background (#F1F5F9).