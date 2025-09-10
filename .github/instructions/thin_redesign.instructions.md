# Thin Redesign Instructions: Clean, Minimal, Thin-Line Aesthetic

## Objective
Redesign the website for a clean, modern look using straight lines, thin accents, and a visual style inspired by 'thin Roboto' typography. All existing content and structure must be preserved; only the visual design and styling should change.

## Design Principles
- **Typography:**
  - Use Roboto font, prioritizing the 'Thin' (100/300) weights for headings and body text.
  - Avoid decorative or heavy fonts; keep all text crisp and light.
- **Layout:**
  - Use straight lines and clear grid alignment.
  - Generous whitespace; avoid clutter.
  - Prefer left-aligned or center-aligned content blocks.
- **Accents & Borders:**
  - Use thin (1px) lines for dividers, borders, and underlines.
  - Minimal color palette: mostly white backgrounds, black/gray text, and a single accent color (e.g., #1976d2 or similar blue) for highlights/links.
- **Buttons & Inputs:**
  - Flat, border-only or underline-only styles.
  - No drop shadows or gradients.
  - Rounded corners should be subtle or omitted.
- **Navigation:**
  - Navbar should be slim, with thin separators and minimal height.
  - Active links use a thin underline or color accent.
- **Cards/Sections:**
  - Use thin borders or subtle box-shadows (if any).
  - Avoid heavy backgrounds or overlays.
- **Responsiveness:**
  - Ensure the design remains clean and readable on all screen sizes.

## Implementation Steps
1. **Update Fonts:**
   - Import Roboto Thin (100/300) from Google Fonts in `public/index.html` or main SCSS.
   - Set as default font-family in global styles.
2. **Refactor SCSS/CSS:**
   - Replace existing font, border, and accent styles with thin, minimal equivalents.
   - Remove or reduce heavy backgrounds, shadows, and thick borders.
   - Use variables for accent color and border thickness.
3. **Component Redesign:**
   - Update all components (navbar, cards, buttons, etc.) to use thin lines and minimal padding.
   - Ensure all interactive elements (links, buttons) use thin underlines or color for feedback.
4. **Layout Adjustments:**
   - Increase whitespace and spacing between sections.
   - Align content to a simple grid or flex layout.
5. **Test Responsiveness:**
   - Check all views/components on mobile and desktop for clarity and consistency.
6. **Preserve Content:**
   - Do not change or remove any content or routes; only update the visual style.

## Example CSS Snippet
```css
body {
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  background: #fff;
  color: #222;
}
hr, .thin-divider {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 2rem 0;
}
.navbar {
  border-bottom: 1px solid #e0e0e0;
  font-weight: 300;
  min-height: 48px;
}
.button, .btn {
  border: 1px solid #1976d2;
  background: none;
  color: #1976d2;
  font-weight: 300;
  border-radius: 2px;
  padding: 0.5em 1.5em;
}
.button:hover, .btn:hover {
  background: #f5faff;
}
```

## Notes
- Use SCSS variables for colors and border thickness for easy future adjustments.
- Reference Material Design's "thin" look for inspiration, but avoid heavy shadows and overlays.
- If using Materialize or Material Kit, override their defaults as needed to achieve the thin, minimal look.

---
If any aspect of the instructions is unclear or incomplete, please request clarification before proceeding.
