# 1. Components

## What is a Component?

A **Component** is a reusable and independent piece of the user interface (UI). Every React application is made up of multiple components.

Instead of writing the entire webpage in one file, React divides the UI into smaller reusable parts.

### Example

- Header
- Navbar
- Sidebar
- Student Card
- Footer

Each of these is a separate component.

---

## Why Components?

- Makes code reusable
- Improves readability
- Easy to maintain
- Easy to debug
- Reduces code duplication

---

## Types of Components

### Functional Component (Modern React)

```tsx
function Header() {
  return <h1>Welcome</h1>;
}

export default Header;
```

Functional Components are the most commonly used components in modern React.

---

### Class Component

Older versions of React used Class Components.

```jsx
class Header extends React.Component {}
```

Nowadays, Functional Components are preferred because they are simpler and support Hooks.

---

## Component Naming Rules

✔ Component names must start with a capital letter.

Correct

```tsx
Header
Footer
StudentCard
```

Wrong

```tsx
header
footer
studentCard
```

React treats lowercase names as HTML elements.

---

# 2. JSX (JavaScript XML)

## What is JSX?

JSX is a syntax extension that allows us to write HTML-like code inside JavaScript or TypeScript.

Example

```tsx
<h1>Hello React</h1>
```

Without JSX

```javascript
React.createElement("h1", null, "Hello React");
```

JSX makes React code easier to read and write.

---

## JSX Rules

### 1. Return only one parent element

Correct

```tsx
<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>
```

---

### 2. Close all tags

Correct

```tsx
<img />
<input />
```

Wrong

```tsx
<img>
<input>
```

---

### 3. Use className instead of class

HTML

```html
<div class="box"></div>
```

React

```tsx
<div className="box"></div>
```

---

### 4. JavaScript expressions use {}

```tsx
const name = "Dhanushri";

<h1>{name}</h1>
```

---

### 5. Comments inside JSX

```tsx
{/* This is a comment */}
```

---

# 3. Multiple Components

React applications are built using many small components.

Example

```
App
│
├── Header
├── StudentCard
├── StudentCard
├── StudentCard
└── Footer
```

Each component has its own responsibility.

---

# 4. Props

## What are Props?

Props (Properties) are used to pass data from a Parent Component to a Child Component.

Props are **Read-Only**.

Data flows in one direction:

```
Parent
   ↓
 Child
```

---

## Example

Parent Component

```tsx
<StudentCard
    name="Dhanushri"
    age={20}
    course="Information Technology"
/>
```

Child Component

```tsx
type StudentProps = {
    name: string;
    age: number;
    course: string;
};

function StudentCard({ name, age, course }: StudentProps) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{course}</p>
        </>
    );
}
```

---

## Types of Props

### String

```tsx
name="Dhanushri"
```

---

### Number

```tsx
age={20}
```

---

### Boolean

```tsx
isPlaced={true}
```

---

### Array

```tsx
skills={["React", "TypeScript"]}
```

---

### Object

```tsx
student={{
    name: "Dhanushri",
    age: 20
}}
```

---

### Function

```tsx
<Button onClick={handleClick} />
```

---

## Destructuring Props

Instead of

```tsx
props.name
props.age
```

Use

```tsx
function StudentCard({ name, age }: StudentProps) {

}
```

It makes the code cleaner and easier to read.

---

## Important Points

- Props are read-only.
- Props cannot be modified inside the child component.
- Props allow components to be reusable.
- Parent passes data, child receives data.

---

# 5. Component Composition

## What is Component Composition?

Component Composition means building a larger component by combining multiple smaller components.

Example

```
App
│
├── Header
├── StudentCard
├── StudentCard
├── Footer
```

Instead of writing everything inside one component, React encourages splitting the UI into reusable components.

---

## Advantages

- Reusable UI
- Cleaner code
- Easy maintenance
- Better project structure
- Easier debugging

---

# Project Structure

```
src
│
├── component
│      ├── Header.tsx
│      ├── StudentCard.tsx
│      └── Footer.tsx
│
├── App.tsx
├── main.tsx
```

---

# Concepts Practiced

✔ Functional Components

✔ JSX

✔ React Fragments

✔ Import and Export Components

✔ Multiple Components

✔ Props

✔ TypeScript Props

✔ Destructuring Props

✔ Component Composition

✔ Rendering Multiple Components

✔ Running React using Vite

---

# Common Mistakes

❌ Using lowercase component names

```tsx
<header />
```

Correct

```tsx
<Header />
```

---

❌ Wrong file extension

```
StudentCard.tsc
```

Correct

```
StudentCard.tsx
```

---

❌ Forgetting export

```tsx
export default Header;
```

---

❌ Incorrect import path

```tsx
import Header from "./component/Header";
```

---

❌ Returning multiple JSX elements without a parent

Wrong

```tsx
<h1>Hello</h1>
<p>React</p>
```

Correct

```tsx
<>
    <h1>Hello</h1>
    <p>React</p>
</>
```

---

# Interview Questions

### 1. What is React Component?

A reusable and independent piece of UI.

---

### 2. What is JSX?

A syntax extension that allows writing HTML-like code inside JavaScript.

---

### 3. Why do we use Components?

To improve reusability, readability, and maintainability.

---

### 4. What are Props?

Props are read-only data passed from Parent to Child components.

---

### 5. Can a child modify Props?

No.

Props are immutable.

---

### 6. What is Component Composition?

Building a larger UI by combining multiple smaller reusable components.

---

### 7. Difference between Components and Props?

| Components | Props |
|------------|-------|
| Build UI | Pass Data |
| Reusable blocks | Read-only values |
| Independent | Passed from Parent to Child |

---
