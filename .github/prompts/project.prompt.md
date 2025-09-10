# Master Repository Prompt: Project Guide & Protocols

## Parent Guide Reference
This project follows the directives and protocols defined in `.github/GEMINI.md`. All contributors and agents must adhere to the PRAR workflow (Perceive, Reason, Act, Refine) and the state-gated execution model described therein.

---

## 1. Important Paths

- **Views:** `src/views/`  
  Contains all main page components (e.g., `BlogHome.vue`, `Profile.vue`).
- **Components:** `src/components/`  
  Reusable UI elements and widgets, including subfolders like `cards/`.
- **Layout:** `src/layout/`  
  Shared layout elements such as navigation bars and footers.
- **Assets:** `src/assets/`  
  Static files, images, and stylesheets (including `scss/`).
- **Plugins:** `src/plugins/`  
  Global Vue plugins and mixins.
- **Public:** `public/`  
  Static files served at the root, including `index.html` and `resume.pdf`.
- **Scripts:** `deploy.sh`  
  Deployment automation script.

---

## 2. Running Locally

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Deploy (production):**
   ```sh
   ./deploy.sh
   ```

See `README.md` for further details.

---

## 3. Architectural Decision Protocol

- **Prompt for Review:**
  - After any major architectural decision (e.g., new dependency, refactor, directory structure change), you must explicitly prompt the user for review and approval before proceeding.
  - Example: _"A major architectural change is proposed. Please review and approve before implementation."_
- **Document Decisions:**
  - All major decisions must be documented in `README.md` and, if relevant, in `/docs/`.

---

## 4. Git Management Protocol

- **Frequent Checkpoints:**
  - Always checkpoint code after every meaningful change.
- **Commit Messages:**
  - Use clear, descriptive commit messages that explain the intent of the change.
  - Example: `feat: add BlogHome view with post listing` or `fix: correct image path in Profile.vue`
- **Atomic Commits:**
  - Each commit should represent a single logical change.
- **Review Before Push:**
  - Review staged changes before pushing to remote.

---

## 5. Compliance

All contributors and agents must follow these protocols in addition to the parent guide. Non-compliance may result in rework or rejection of changes.
