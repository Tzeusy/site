# Copilot Instructions for AI Agents

## Project Overview
This is a personal website built with Vue.js 2, using Creative Tim's Vue Material Kit and Materialize CSS for design. The codebase is structured for clarity and modularity, with a focus on reusability and separation of concerns.

## Parent Guide Reference
This project follows the directives and protocols defined in `.github/GEMINI.md`. All contributors and agents must adhere to the PRAR workflow (Perceive, Reason, Act, Refine) and the state-gated execution model described therein.

## Architecture & Key Patterns
- **Entry Point:** `src/main.js` initializes Vue, sets up plugins (MaterialKit, VueAnalytics), and mounts the app.
- **Routing:** `src/router.js` defines routes using named views for main content, header, and footer. The default route is the profile page; `/blog` and `/blog/:slug` are for blog content.
- **Views:** All main pages are in `src/views/` (e.g., `BlogHome.vue`, `Profile.vue`).
- **Components:** Reusable UI elements are in `src/components/`, with subfolders for organization (e.g., `cards/`).
- **Layout:** Shared layout elements (navbar, footer, mobile menu) are in `src/layout/` and are injected via router named views.
- **Assets:** Images and styles (including SCSS) are in `src/assets/`.
- **Plugins:** Global plugins and mixins are in `src/plugins/`.
- **Public:** Static files served at the root, including `index.html` and `resume.pdf`.
- **Scripts:** `deploy.sh` for deployment automation.
- **External Content:** Blog data is fetched via `src/buttercms.js` using a read-only API key.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start development server:** `npm run dev` (alias for `npm run serve`)
- **Build for production:** `npm run build`
- **Lint:** `npm run lint`
- **Clean install:** `npm run install:clean` (removes `node_modules` and lockfile, reinstalls, and starts dev server)
- **Deploy (production):** `./deploy.sh` (builds and pushes compiled files to the `tzeusy.github.io` repo)

See `README.md` for further details.

## Project-Specific Conventions
- **Routing:** Uses Vue Router's named views for header/footer injection. Props are passed to layout components for dynamic behavior (e.g., `colorOnScroll`).
- **Component Registration:** Some components are globally registered via plugins in `src/plugins/`.
- **State:** Minimal global state is managed via a `NavbarStore` object mixed into all components.
- **Styling:** Uses both Material Kit and Materialize CSS. SCSS files are organized under `src/assets/scss/`.
- **Blog Integration:** All blog content is fetched from ButterCMS; do not hardcode blog data.

## Integration Points
- **ButterCMS:** API key and usage in `src/buttercms.js`. All blog data flows through this service.
- **Analytics:** Google Analytics is set up via `vue-analytics` in `main.js`.

## Architectural Decision Protocol
- **Prompt for Review:**
	- After any major architectural decision (e.g., new dependency, refactor, directory structure change), you must explicitly prompt the user for review and approval before proceeding.
	- Example: _"A major architectural change is proposed. Please review and approve before implementation."_
- **Document Decisions:**
	- All major decisions must be documented in `README.md` and, if relevant, in `/docs/`.

## Git & Collaboration
- **Frequent Checkpoints:** Always checkpoint code after every meaningful change.
- **Commit Messages:** Use clear, descriptive commit messages that explain the intent of the change (e.g., `feat: add BlogHome view with post listing`).
- **Atomic Commits:** Each commit should represent a single logical change.
- **Review Before Push:** Review staged changes before pushing to remote.

## Examples
- To add a new view: create a `.vue` file in `src/views/`, add a route in `src/router.js`, and update navigation as needed.
- To add a new global component: place it in `src/components/`, register it in `src/plugins/globalComponents.js`.
- To fetch blog posts: use the `butter` object from `src/buttercms.js`.

## Compliance
All contributors and agents must follow these protocols in addition to the parent guide. Non-compliance may result in rework or rejection of changes.

## References
- See `.github/GEMINI.md` for detailed protocols and architectural guidance.
- See `README.md` for setup and running instructions.

---
If any section is unclear or missing, please provide feedback for further refinement.
