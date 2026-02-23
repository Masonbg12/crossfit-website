# Copilot Instructions for CrossFit Website

## Project Overview
CrossFit XLR8 website is a **React SPA** (Single Page Application) bootstrapped with Create React App. It's a community-focused gym website showcasing classes, schedules, WOD (Workout of the Day), about information, and contact details. The app uses **React Router v7** for client-side navigation and integrates an **AI chatbot** powered by an Express backend API.

## Architecture

### Core Structure
- **Entry Point**: [src/index.js](src/index.js) → [src/App.js](src/App.js) → [src/Router.js](src/Router.js)
- **Routing**: All page routes defined in [Router.js](src/Router.js) using React Router v7. Add new routes here for new pages.
- **Layout Components**:
  - [Navigation.js](src/components/Navigation.js): Responsive navbar with Offcanvas drawer (Bootstrap)
  - [Footer.js](src/components/Footer.js): Global footer on all pages except PostWod
  - [ChatBot.js](src/components/ChatBot.js): Floating AI assistant (exception-case: hidden on PostWod page)

### Key Pages (in `src/components/pages/`)
- **Home.js**: Hero section with carousel, programs, gym photos, reviews (fetches `/api/google-reviews/reviews`)
- **Schedule.js**: Class schedule display
- **Wod.js**: Workout of the Day details
- **AboutUs.js**: Gym information & coaching staff
- **ContactUs.js**: Contact info card with embedded FreeTrial component
- **PostWod.js**: Special layout (hides Footer & ChatBot—check App.js conditional rendering)

## Styling & Theme

### CSS Architecture
- **Main Stylesheet**: [src/styles/App.css](src/styles/App.css) (554 lines)
- **CSS Variables** (in `:root`):
  - `--bg-light1`: #D3D9EE (light purple background)
  - `--bg-light2`: #E6E9F5 (lighter purple)
  - `--bg-dark`: #4169E1 (royal blue, primary)
  - `--bg-black`: #000 (text color)

### Typography Classes
- `.poppins-900-main`: 3rem, weight 900 (main headings)
- `.poppins-900-sub`: 1.5rem, weight 900 (subheadings)
- `.poppins-700`: 1.5rem, weight 700 (nav/body text)
- Font: **Poppins** (imported from Google Fonts)

### Responsive Breakpoints
- Mobile-first: Breakpoints at `max-width: 991.98px` (Bootstrap `md` breakpoint)
- Hero section content repositions on mobile (absolute positioning adjustments)
- Use Bootstrap grid (`Row`, `Col`) with `xs`, `md` breakpoints

## UI Component Patterns

### Bootstrap Integration
- **Imports**: Use React Bootstrap components (`Container`, `Row`, `Col`, `Card`, `Button`, `Spinner`, `Modal`, `Form`, `Alert`, `Navbar`, `Nav`, `Image`, `Offcanvas`, `Carousel`)
- **Styling**: Inline styles preferred; use CSS variables for colors
- **Cards**: Wrap content in `Card` with `shadow-lg` and `border-0` classes for clean look

### Component Patterns
- **FreeTrial Section**: Use [FreeTrial.js](src/components/FreeTrial.js) component (composable); contains [FreeTrialButton.js](src/components/FreeTrialButton.js)
- **Loading States**: Use Bootstrap `Spinner` component with `animation="border"` (see Home.js for pattern)
- **State Management**: Use React hooks (`useState`, `useEffect`) only—no Redux/Context API
- **Async Operations**: `fetch()` directly (not wrapped in service); handle errors with `.catch()`

## External Integrations

### ChatBot Backend
- **File**: [ChatBot.js](src/components/ChatBot.js) (222 lines)
- **API Endpoint**: `POST /api/chat` (via `process.env.REACT_APP_API_URL || http://localhost:8080`)
- **Message Format**: `{ messages: Array<{role, content}> }`
- **Dependencies**: `openai` and `emailjs-com` packages in package.json
- **Modal UI**: Uses React Bootstrap Modal with form input and scroll-to-bottom auto-scroll

### Google Reviews API
- **Endpoint**: `GET /api/google-reviews/reviews` (relative path)
- **Usage**: Home page fetches reviews and displays in carousel (see Home.js line ~29)
- **Error Handling**: Silently fails with `.catch(() => setReviewsLoading(false))`

### Image Hosting
- **Cloudinary Integration**: `@cloudinary/react` and `@cloudinary/url-gen` in dependencies
- **Local Media**: `/public/media/` contains building photos, coaches, gallery images
- **Image Format**: Use `.webp` where optimized (see ContactUs.js example)

## Development Workflows

### Available Scripts
- `npm start`: Dev server on http://localhost:3000 (HMR enabled)
- `npm test`: Jest runner in watch mode
- `npm run build`: Production build (minified, hashed filenames)
- `npm run eject`: ⚠️ One-way operation—ejects Create React App configuration (not recommended)

### Testing Setup
- **Framework**: Jest + React Testing Library
- **Files**: [testing/setupTests.js](src/testing/setupTests.js), [testing/App.test.js](src/testing/App.test.js)
- **Config**: ESLint extends `react-app/jest` (see package.json)

## Code Conventions & Patterns

### File Naming
- **Pages**: PascalCase in `src/components/pages/` (e.g., `Home.js`, `ContactUs.js`)
- **Components**: PascalCase in `src/components/` (e.g., `Navigation.js`, `ChatBot.js`)
- **Styles**: Lowercase CSS file (e.g., `index.css`, `App.css`)

### Component Structure
- Export default function component (no class components)
- Props passed at component call site; destructure in function signature when needed
- Local state with `useState` for UI state (loading, modals, form inputs)
- Effects for async operations (API calls, side effects) in `useEffect`

### Route Fallback
- All undefined routes redirect to `/` via `<Route path="*" element={<Navigate to="/" replace />} />`

## Project Dependencies (Key Packages)
- **React 19.1.0**: Core framework
- **React Router 7.5.1**: Client-side routing
- **React Bootstrap 2.10.9**: Bootstrap 5 wrapper
- **Chakra UI 3.16.1**: Component library (secondary to Bootstrap)
- **TinyMCE 7.9.1**: Rich text editor
- **Framer Motion 12.7.4**: Animations
- **FontAwesome 6.7.2**: Icons
- **Cloudinary**: Image optimization & hosting
- **EmailJS**: Email service (likely for forms)
- **React Multi Date Picker**: Custom date selection

## Common Tasks

### Adding a New Page
1. Create component in `src/components/pages/NewPage.js`
2. Import in [Router.js](src/Router.js) and add `<Route>` entry
3. Add navigation link in [Navigation.js](src/components/Navigation.js)
4. Use standard layout (Navigation + Footer auto-included via App.js unless excluded)

### Styling New Content
- Use CSS variables: `color: "var(--bg-dark)"` or `color: "var(--bg-light1)"`
- Leverage Bootstrap's `Container`, `Row`, `Col` for responsive layout
- For special styling, add rules to [App.css](src/styles/App.css)
- Test responsive behavior at `max-width: 991.98px`

### Modifying ChatBot Behavior
- Update system prompt in [ChatBot.js](src/components/ChatBot.js) initial message
- Ensure backend `/api/chat` endpoint is running
- Check `.env` file for `REACT_APP_API_URL` configuration

### API Error Handling Pattern
```javascript
fetch(url)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => {
    console.error('Error:', err);
    // Set fallback state or user-facing error message
  });
```

## Known Limitations & Technical Debt
- No state management library—prop drilling for shared state
- ChatBot depends on external backend API (ensure `/api/chat` is available)
- Google Reviews endpoint must be configured
- PostWod page has special layout logic in App.js (check `location.pathname`)
- No TypeScript (JavaScript only)
