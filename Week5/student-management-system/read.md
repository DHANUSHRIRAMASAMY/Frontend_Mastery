# 1. Understanding React Rendering

Before learning `useEffect`, I first understood how React renders a component because `useEffect` always works **after rendering**.

React applications are built using **components**. A component is simply a JavaScript or TypeScript function that returns JSX.

Example:

```tsx
function StudentDashboard() {
    return (
        <h1>Student Management System</h1>
    );
}
```

Many beginners misunderstand rendering.

Rendering **does not mean** opening a `.tsx` file or loading the file into the browser.

Rendering means React performs the following steps:

* Executes the component function.
* Reads the returned JSX.
* Converts JSX into JavaScript objects (Virtual DOM).
* Compares it with the previous Virtual DOM.
* Updates only the necessary parts of the actual browser DOM.
* Displays the updated UI.

### Rendering Flow

```
Component Function Executes
          ↓
React Reads JSX
          ↓
Creates Virtual DOM
          ↓
Compares with Previous Virtual DOM
          ↓
Updates Browser DOM
          ↓
User Sees Updated UI
```

Rendering is simply React's process of displaying or updating the user interface.

---

# 2. Initial Render and Re-render

React mainly performs two types of rendering.

## Initial Render

The first time a component is displayed on the browser.

Flow:

```
Application Starts
        ↓
React Executes Component
        ↓
Reads JSX
        ↓
Displays UI
```

Example:

When the Student Management System starts, React renders the dashboard for the first time.

---

## Re-render

A re-render happens whenever the component's **state** or **props** change.

Example:

Suppose the application initially contains three students.

```
Rahul
Priya
Arun
```

When a new student is added,

```
Sneha
```

the student list changes.

React automatically executes the component again and updates only the changed part of the UI instead of refreshing the entire webpage.

Flow:

```
User Adds Student
        ↓
Student State Changes
        ↓
React Re-renders Component
        ↓
Updated Student List Appears
```

React performs this process efficiently using the Virtual DOM.

---

# 3. Understanding React Hooks

React Hooks are special functions introduced in React 16.8 that allow functional components to use React features such as state management and lifecycle functionality.

Before Hooks, these features were available only in class components.

The Hooks learned so far are:

* `useState`
* `useEffect`

### Why Hooks?

Hooks make components:

* Easier to read
* Easier to maintain
* Reusable
* Simpler than class components

---

# 4. Revisiting `useState`

Before learning `useEffect`, I revised `useState` because both Hooks work together.

`useState` is used to store and update dynamic data inside a component.

Syntax:

```tsx
const [students, setStudents] = useState([]);
```

Here,

* `students` → stores the current student data.
* `setStudents()` → updates the student list.

Whenever `setStudents()` updates the value,

React automatically performs a re-render.

Flow:

```
User Action
      ↓
setStudents()
      ↓
State Updates
      ↓
React Re-renders Component
      ↓
Updated UI Appears
```

This automatic re-render is one of the core features of React.

---

# 5. Understanding `useEffect`

`useEffect` is a built-in React Hook used to perform **side effects** after React finishes rendering a component.

Syntax:

```tsx
useEffect(() => {

});
```

Unlike `useState`, `useEffect` does not directly update the UI.

Instead, it performs tasks that should happen **after** React has rendered the component.

React always follows this order:

```
Component Executes
        ↓
React Renders UI
        ↓
Browser Displays UI
        ↓
useEffect Executes
```

This sequence is important because `useEffect` should never interrupt the rendering process.

---

# 6. Understanding Side Effects

A **side effect** is any operation that happens after rendering and is not directly responsible for displaying the UI.

Rendering should only focus on showing the interface.

Operations such as fetching data or updating the browser title happen separately using `useEffect`.

Common side effects include:

* Fetching API data
* Updating the browser title
* Logging information
* Displaying alerts
* Saving data to Local Storage
* Reading Local Storage
* Starting timers
* Clearing timers
* Adding event listeners
* Removing event listeners
* Connecting to WebSockets
* Authentication checks

Example:

```tsx
useEffect(() => {
    console.log("Student Dashboard Loaded");
}, []);
```

Here,

React first renders the Student Dashboard.

Only after rendering is complete does the message appear in the browser console.

Another example:

```tsx
useEffect(() => {
    document.title = "Student Management System";
}, []);
```

Instead of updating the webpage,

this updates the browser tab title after rendering.

---

# 7. Understanding the Dependency Array

One of the most important parts of `useEffect` is the **dependency array**.

The dependency array tells React **when the effect should run**.

General Syntax:

```tsx
useEffect(() => {

}, [dependencies]);
```

There are three common ways to use it.

---

## Case 1 – Without Dependency Array

```tsx
useEffect(() => {
    console.log("Component Rendered");
});
```

Behaviour:

* Runs after the initial render.
* Runs after every re-render.
* Executes whenever any state changes.

Flow:

```
Render
   ↓
useEffect

State Changes
   ↓
Render
   ↓
useEffect

State Changes
   ↓
Render
   ↓
useEffect
```

This is rarely used because it can lead to unnecessary executions.

---

## Case 2 – Empty Dependency Array

```tsx
useEffect(() => {
    console.log("Dashboard Loaded");
}, []);
```

Behaviour:

* Executes only once.
* Runs immediately after the initial render.
* Does not run again unless the component is removed and mounted again.

Common uses:

* API requests
* Initial application setup
* Loading configuration
* Reading Local Storage

Flow:

```
Application Starts
        ↓
Render
        ↓
useEffect Executes Once
```

---

## Case 3 – Dependency Array with State

```tsx
useEffect(() => {
    document.title = `${students.length} Students`;
}, [students]);
```

Behaviour:

Runs:

* After the initial render.
* Whenever the `students` state changes.

Does **not** run when unrelated state values change.

Flow:

```
Student Added
        ↓
students Changes
        ↓
React Re-renders
        ↓
useEffect Executes
        ↓
Browser Title Updates
```

Using dependencies improves performance because React executes the effect only when required.

---

# 8. Understanding the Cleanup Function

Sometimes an effect starts an operation that should not continue forever.

Examples include:

* Timers
* Event listeners
* WebSocket connections
* Intervals

To stop these operations, React provides the **cleanup function**.

Syntax:

```tsx
useEffect(() => {

    // Start side effect

    return () => {

        // Cleanup

    };

}, []);
```

The cleanup function runs:

* Before the component is removed from the screen (unmounted).
* Before the effect runs again if its dependencies have changed.

Example using a timer:

```tsx
useEffect(() => {

    const timer = setInterval(() => {
        console.log("Updating...");
    }, 1000);

    return () => {
        clearInterval(timer);
    };

}, []);
```

Without cleanup:

* Multiple timers continue running.
* Memory usage increases.
* Performance decreases.

With cleanup:

* The timer is removed correctly.
* Resources are released.
* The application remains efficient.

Cleanup is especially important in real-world applications where components are frequently mounted and unmounted.

---
