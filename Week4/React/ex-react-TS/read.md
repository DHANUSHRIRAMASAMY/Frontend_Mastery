---

# 📚 Topics Covered

## React Introduction
- JavaScript library for building **User Interfaces (UI)**.
- Developed by **Meta (Facebook)**.
- Uses a **Component-Based Architecture**.
- Updates only the required part of the UI using the **Virtual DOM**.

---

## Why React?
- Reusable Components.
- Faster UI updates.
- Easy to maintain.
- Better code organization.
- Supports Single Page Applications (SPA).
- Large community and ecosystem.

---

## React + TypeScript
- TypeScript adds **static typing** to React.
- Detects errors during development.
- Improves IntelliSense and auto-completion.
- Makes code safer and easier to maintain.

Example:
```ts
let age: number = 20;
```

---

## Vite Introduction
- Modern frontend build tool.
- Creates React projects quickly.
- Faster startup than Create React App.
- Supports Hot Module Replacement (HMR).
- Optimized development experience.

---

## Create React + TypeScript App

### Commands Used

```bash
npm create vite@latest
cd react-ts
npm install
npm run dev
```

### Selected Options

- Framework → React
- Variant → TypeScript
- Linter → ESLint

---

# 📁 Project Structure

## node_modules
- Stores all installed npm packages.
- Created automatically after `npm install`.

## public
- Stores static files.
- Example: Images, favicon, robots.txt.

## src
- Main source folder.
- Contains application logic and components.

## assets
- Stores images, icons, fonts, SVG files.

## components
- Stores reusable React components.
- Example: Begin.tsx, Navbar.tsx, Footer.tsx.

## App.tsx
- Root Component.
- Combines and displays other components.

## main.tsx
- Entry point of the React application.
- Renders `<App />` into the browser.

## index.html
- Contains `<div id="root"></div>`.
- React application is mounted here.

## App.css
- Styles specific to App component.

## index.css
- Global CSS applied to the whole application.

## package.json
- Project information.
- Dependencies.
- npm scripts.

## tsconfig.json
- TypeScript compiler configuration.

## vite.config.ts
- Configuration file for Vite.

## .gitignore
- Files and folders ignored by Git.

---

# ⚛️ Functional Components

- Modern way of creating React components.
- Written as JavaScript/TypeScript functions.
- Must return JSX.
- Component names should start with a Capital Letter.

Example

```tsx
function Begin() {
    return <h1>Hello React</h1>;
}
```

---

# 📝 JSX Basics

- JSX = JavaScript XML.
- Looks like HTML but written inside JavaScript/TypeScript.
- Makes UI easier to write and understand.
- Every component returns JSX.

Example

```tsx
<h1>Hello React</h1>
```

---

# 🔤 Component Naming Convention

Use **PascalCase**

✅ Correct

```text
Begin.tsx
Navbar.tsx
ProfileCard.tsx
```

❌ Wrong

```text
begin.tsx
navbar.tsx
```

---

# 📦 Import & Export Components

### Export

Makes a component available for other files.

```tsx
export default Begin;
```

### Import

Uses the exported component in another file.

```tsx
import Begin from "./components/Begin";
```

---

# 🖥️ Rendering Components

Rendering means **displaying a component on the browser**.

Component

```tsx
<Begin />
```

React executes the component and displays its returned JSX.

---

# 🔄 React Rendering Flow

```text
npm run dev
      │
      ▼
Vite Development Server
      │
      ▼
index.html
      │
      ▼
main.tsx
      │
      ▼
<App />
      │
      ▼
<Begin />
      │
      ▼
Browser Screen
```

---

# 🔥 Hot Module Replacement (HMR)

- Automatically updates the browser after saving a file.
- No manual refresh required.
- Makes development faster.

---

# 💻 First Component

Created **Begin.tsx**

```tsx
function Begin() {
    return (
        <div>
            <h1>Welcome to React + TypeScript!</h1>
            <p>This is my first React component.</p>
        </div>
    );
}

export default Begin;
```

---

# 🖥️ Rendered Component

Imported inside `App.tsx`

```tsx
import Begin from "./components/Begin";

function App() {
    return (
        <Begin />
    );
}

export default App;
```