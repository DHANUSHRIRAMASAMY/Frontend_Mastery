# 📖 React Router
React Router is a library used in React applications to create **multiple pages** without reloading the browser. It allows users to navigate between different components while keeping the application fast and smooth.

Instead of loading a new HTML page every time a user clicks a link, React Router simply changes the component displayed on the screen.

**Example:**

Without React Router:

```
Home → (Page Reload) → About → (Page Reload) → Contact
```

With React Router:

```
Home → About → Contact
```

The browser URL changes, but the page does not reload.

---

# 🌐 Single Page Application (SPA)

A **Single Page Application (SPA)** loads only one HTML page. React updates only the required components when the URL changes.

For example:

```
URL: /
Displays Home Component

URL: /about
Displays About Component

URL: /contact
Displays Contact Component
```

Only the component changes; the application itself remains loaded.

### Advantages of SPA

* Faster navigation
* Better user experience
* No complete page refresh
* Maintains application state
* Less server communication

---

# 📦 Installing React Router

To use React Router, install it using npm.

```bash
npm install react-router-dom
```

After installation, React Router components become available throughout the project.

---

# 🌍 BrowserRouter

`BrowserRouter` is the root component that enables routing in a React application.

It monitors the browser's URL and decides which component should be displayed.

```tsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <App />
</BrowserRouter>
```

Without `BrowserRouter`, routing will not work.

---

# 🛣 Routes

`Routes` acts as a container that stores all the routes in the application.

Example:

```tsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>
```

React checks every route inside `<Routes>` and renders the matching one.

---

# 📍 Route

A `Route` connects a URL to a React component.

Example:

```tsx
<Route path="/about" element={<About />} />
```

Meaning:

```
URL:
/about

↓

Displays

About Component
```

---

# 🔗 Link

Instead of using HTML's `<a>` tag, React Router provides `<Link>`.

```tsx
<Link to="/about">About</Link>
```

Clicking the link changes the URL without refreshing the page.

### Why not use `<a>`?

```html
<a href="/about">About</a>
```

The browser reloads the entire page.

### Why use `<Link>`?

```
No page refresh

Faster navigation

Maintains application state
```

---

# ⭐ NavLink

`NavLink` works like `Link` but automatically detects the currently active page.

```tsx
<NavLink to="/about">About</NavLink>
```

If the current URL is `/about`, the About link becomes active.

Example:

```
Home

About ✅

Contact
```

This is commonly used in navigation bars.

---

# 🚀 useNavigate()

`useNavigate()` allows navigation using JavaScript instead of clicking links.

Example:

```tsx
const navigate = useNavigate();

function handleLogin() {
    navigate("/dashboard");
}
```

Common uses:

* Login
* Logout
* Form Submission
* Checkout
* Dashboard Redirect

---

# 🔄 Navigate Component

`Navigate` redirects users automatically.

Example:

```tsx
return <Navigate to="/login" />;
```

Useful when users try to access protected pages without logging in.

---

# 📂 Multiple Pages

A React application usually contains separate components for each page.

Example folder structure:

```
src

pages
    Home.tsx
    About.tsx
    Contact.tsx

components
    Navbar.tsx

App.tsx
```

Each page is connected using React Router.

---

# 🧩 Nested Routing

Nested Routing means one page contains multiple child pages.

Example:

```
Dashboard

├── Profile

├── Settings

└── Orders
```

Routing:

```tsx
<Route path="/dashboard" element={<Dashboard />}>

<Route path="profile" element={<Profile />} />

<Route path="settings" element={<Settings />} />

</Route>
```

---

# 🪟 Outlet

`Outlet` displays child routes inside the parent component.

Example:

```tsx
function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <Outlet />
        </>
    );
}
```

Without `Outlet`, nested routes will not appear.

---

# 🆔 Dynamic Routes

Dynamic Routes allow URLs to contain variable values.

Example:

```
/product/1

/product/2

/product/3
```

Instead of creating separate routes:

```tsx
<Route path="/product/:id" element={<Product />} />
```

---

# 🔍 useParams()

`useParams()` reads values from Dynamic Routes.

Example URL:

```
/product/10
```

Code:

```tsx
const { id } = useParams();
```

Output:

```
10
```

This is useful when displaying product details or user profiles.

---

# 🔎 Query Parameters

Query parameters are optional values added to the URL.

Example:

```
/search?name=React
```

Reading them:

```tsx
const [searchParams] = useSearchParams();

searchParams.get("name");
```

Output:

```
React
```

Used for:

* Search
* Filters
* Sorting
* Pagination

---

# 📍 useLocation()

`useLocation()` provides information about the current page.

Example:

```tsx
const location = useLocation();

console.log(location.pathname);
```

Output:

```
/about
```

Useful for:

* Active menus
* Breadcrumbs
* Analytics
* Page tracking

---

# 🚫 Wildcard Route (404)

Handles invalid URLs.

```tsx
<Route path="*" element={<NotFound />} />
```

Example:

```
localhost:5173/xyz

↓

404 Page Not Found
```

---

# 🔒 Protected Routes

Some pages should only be accessible after login.

Example:

```
Dashboard

↓

Check Login

↓

Yes → Dashboard

No → Login Page
```

Example:

```tsx
return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;
```

---

# ⚡ Lazy Loading

Lazy Loading loads components only when they are required.

```tsx
const Home = lazy(() => import("./Home"));
```

Advantages:

* Faster initial loading
* Better performance
* Smaller bundle size

---

# 📊 Link vs NavLink

| Link                            | NavLink                                 |
| ------------------------------- | --------------------------------------- |
| Used for navigation             | Used for navigation with active styling |
| Does not highlight current page | Highlights active page automatically    |

---

# 📊 Route Parameters vs Query Parameters

| Route Parameter | Query Parameter     |
| --------------- | ------------------- |
| `/user/10`      | `/user?id=10`       |
| Required        | Optional            |
| `useParams()`   | `useSearchParams()` |

---

# 📌 Common Mistakes

* Forgetting to wrap the application with `BrowserRouter`.
* Using `<a>` instead of `<Link>`.
* Forgetting to use `<Outlet>` for nested routes.
* Incorrect route paths.
* Missing the wildcard (`*`) route for 404 pages.
* Forgetting to import React Router components.

---

# 🎯 Real-World Examples

## Amazon

```
/

Home

/products

Product List

/products/5

Product Details

/cart

Shopping Cart

/orders

Orders

/profile

User Profile
```

## Instagram

```
/

Feed

/profile

User Profile

/reels

Reels

/messages

Chats

/settings

Settings
```

---
