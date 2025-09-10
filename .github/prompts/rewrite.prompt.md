# Blog Rewrite Prompt: Thin, Responsive, Two-Tone Personal Site

## Objective
Rewrite the entire personal site and blog for a clean, thin, and highly responsive two-tone aesthetic. Use the existing content sources (ButterCMS for blog posts, current CI/CD and deployment process), but do not reuse any of the current Vue components. Instead, create new, minimal, and modern components from scratch.

## Requirements
- **Content:**
  - All blog content must be fetched from ButterCMS as in the current implementation.
  - Preserve all existing content, routes, and external integrations (e.g., analytics, resume PDF, deployment scripts).
- **Component Architecture:**
  - Do not reuse or copy any existing Vue components or SCSS from `src/`.
  - Design and implement a new set of components and layouts, prioritizing clarity, minimalism, and responsiveness.
  - Use a new `src/` directory for all rewritten code. Keep the old code in `src_bak/` for reference only.
- **Aesthetic:**
  - Emphasize a thin, two-tone (e.g., white + one accent color) visual style.
  - Use straight lines, thin borders, and generous whitespace.
  - Typography should be light (e.g., Roboto Thin or similar), with clear hierarchy and minimal decoration.
  - All UI elements (navbar, cards, buttons, etc.) should be flat, border-only or underline-only, and avoid heavy backgrounds or shadows.
- **Responsiveness:**
  - The site must be fully responsive, with layouts and typography adapting smoothly to all device sizes.
  - Use CSS grid/flexbox and media queries to ensure a seamless mobile and desktop experience.
- **File Structure:**
  - Place all new code in a fresh `src/` directory. Use `src_bak/` as a reference for routes, content flow, and integration points.
  - Organize components, views, assets, and styles for clarity and maintainability.
- **Integration:**
  - Maintain the current ButterCMS integration for blog data.
  - Preserve the CI/CD and deployment process (e.g., `deploy.sh`, build scripts).
  - Ensure all static assets (resume, favicon, etc.) remain accessible.

## Implementation Steps
1. **Set up a new `src/` directory** with a clean structure (see `src_bak/` for reference).
2. **Design new layout and UI components** (navbar, footer, blog list, blog post, profile/about, etc.) from scratch, following the thin, two-tone style.
3. **Implement routing and data fetching** for all main pages (profile, blog home, blog post) using ButterCMS and existing API keys.
4. **Apply global styles and variables** for typography, colors, spacing, and responsiveness.
5. **Test all views and components** on mobile and desktop for clarity, speed, and visual consistency.
6. **Document all new conventions and structure** in the project README and relevant `.github/prompts/` files.

## Notes
- Do not copy or adapt any code from the old `src/` except for integration points (e.g., ButterCMS usage, deployment scripts).
- Focus on performance, accessibility, and maintainability.
- Use modern CSS (flexbox, grid, custom properties) and minimal dependencies.

---
If any aspect of this prompt is unclear or incomplete, request clarification before proceeding.
