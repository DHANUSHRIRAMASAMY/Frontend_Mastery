# 📘 React API Integration - Complete Learning Notes

# Table of Contents

1. Introduction
2. What is an API?
3. Why Do We Need APIs?
4. Types of APIs
5. HTTP Methods
6. What is JSON?
7. API Request and Response
8. Fetch API
9. Fetching Data in React
10. Why use useEffect()?
11. Why use useState()?
12. Fetch Data using Async/Await
13. Loading State
14. Error State
15. Displaying Data
16. Conditional Rendering
17. Optional Chaining
18. API Data Flow
19. Fetch Lifecycle
20. Common Mistakes
21. Best Practices
22. Interview Questions
23. Key Takeaways

---

# Introduction

Modern web applications rarely store all their data inside the frontend application. Instead, they retrieve information from servers whenever users need it.

Examples:

- Instagram loads posts from its server.
- Amazon loads products from its database.
- Netflix loads movies from its server.
- Weather applications load live weather reports.
- Banking applications load account information.

React communicates with these servers using **APIs**.

---

# What is an API?

API stands for

**Application Programming Interface**

An API is a communication bridge between two software applications.

Instead of accessing the database directly, React sends a request to an API.

The API processes the request and returns the required data.

Example

```
React Application

↓

API

↓

Server

↓

Database

↓

Server

↓

API

↓

React Application
```

Think of an API like a waiter in a restaurant.

```
Customer

↓

Waiter

↓

Kitchen

↓

Food

↓

Waiter

↓

Customer
```

Here,

Customer = React Application

Waiter = API

Kitchen = Server

Food = Data

---

# Why Do We Need APIs?

Without APIs,

React cannot communicate with databases.

Imagine opening Amazon.

Without an API,

there would be no

- products
- prices
- images
- reviews

Everything would be empty.

APIs allow applications to display real-time data.

Examples

Weather App

↓

API returns weather

Movie App

↓

API returns movies

News App

↓

API returns news

Shopping App

↓

API returns products

---

# Types of APIs

## REST API

The most commonly used API.

Uses HTTP methods.

Returns JSON.

Example

```
https://jsonplaceholder.typicode.com/users
```

---

## SOAP API

Uses XML instead of JSON.

Mostly used in enterprise applications.

---

## GraphQL API

Allows clients to request only the required data.

More efficient than REST in some scenarios.

---

# HTTP Methods

React communicates with APIs using HTTP methods.

## GET

Used to retrieve data.

Example

```
GET /users
```

Returns users.

---

## POST

Creates new data.

Example

```
POST /users
```

Adds a new user.

---

## PUT

Replaces existing data.

---

## PATCH

Updates only specific fields.

---

## DELETE

Removes data.

---

# What is JSON?

JSON means

JavaScript Object Notation.

JSON is the standard format used for exchanging data between servers and applications.

Example

```json
{
  "name":"John",
  "email":"john@gmail.com"
}
```

Array Example

```json
[
 {
   "id":1,
   "name":"John"
 },
 {
   "id":2,
   "name":"Sara"
 }
]
```

React easily converts JSON into JavaScript objects.

---

# API Request and Response

Every API interaction follows this process.

```
React

↓

Request

↓

API

↓

Server

↓

Response

↓

JSON

↓

React UI
```

---

# Fetch API

JavaScript provides a built-in function called

```javascript
fetch()
```

It sends HTTP requests to servers.

Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
```

The Fetch API returns a Promise.

That means React must wait until the server sends data.

---

# Fetching Data in React

Fetching data involves several steps.

```
Component Loads

↓

useEffect()

↓

fetch()

↓

Server

↓

Response

↓

JSON

↓

Store Data

↓

Render UI
```

Example

```tsx
useEffect(() => {

fetchUsers();

}, []);
```

---

# Why use useEffect()?

Fetching data is called a **side effect**.

Side effects include

- API calls
- Timers
- Local Storage
- Event Listeners

React uses

```tsx
useEffect()
```

to perform these operations.

Example

```tsx
useEffect(()=>{

fetchUsers();

},[]);
```

The empty dependency array

```
[]
```

means

Run only once after the component loads.

Without it,

React will repeatedly fetch data on every render.

---

# Why use useState()?

React needs a place to store data.

Example

```tsx
const [users,setUsers]=useState([]);
```

Initially

```
users=[]
```

After API call

```
users=[{...},{...}]
```

Whenever state changes,

React automatically updates the UI.

---

# Fetch Data using Async/Await

Example

```tsx
const fetchUsers = async () => {

const response = await fetch(url);

const data = await response.json();

setUsers(data);

}
```

Explanation

await

↓

Wait until response arrives.

response.json()

↓

Convert JSON into JavaScript object.

setUsers()

↓

Store data.

---

# Loading State

API requests take time.

Sometimes

1 second

Sometimes

5 seconds

Sometimes

10 seconds

Users should know that something is happening.

Instead of showing

```
Blank Screen
```

show

```
Loading...
```

Example

```tsx
const [loading,setLoading]=useState(true);
```

Before fetch

```
loading=true
```

After fetch

```
loading=false
```

Display

```tsx
if(loading){

return <h2>Loading...</h2>

}
```

---

# Error State

Sometimes

- Internet fails
- Server crashes
- Wrong URL
- API unavailable

Without error handling,

React may crash.

Instead

```tsx
const [error,setError]=useState("");
```

Example

```tsx
try{

...

}catch{

setError("Failed to fetch data");

}
```

Display

```tsx
if(error){

return <h2>{error}</h2>

}
```

---

# Showing Data

After receiving JSON,

React displays it.

Example

```tsx
users.map((user)=>(

<div>

<h2>{user.name}</h2>

</div>

))
```

React creates one UI element for every object.

---

# Conditional Rendering

React decides what to display.

```
Loading?

↓

Yes

↓

Loading...

↓

No

↓

Error?

↓

Yes

↓

Show Error

↓

No

↓

Display Data
```

Example

```tsx
{loading && <p>Loading...</p>}
```

Example

```tsx
{error && <p>{error}</p>}
```

Example

```tsx
{users.map(...)}
```

---

# Optional Chaining

Sometimes data may not exist.

Instead of

```tsx
user.company.name
```

Use

```tsx
user.company?.name
```

If company is missing,

React does not crash.

---

# API Data Flow

Complete lifecycle

```
Application Starts

↓

Component Mounts

↓

useEffect Executes

↓

API Request

↓

Server

↓

JSON Response

↓

setState()

↓

React Re-renders

↓

Display Updated UI
```

---

# Fetch Lifecycle

```
Start

↓

Loading=true

↓

fetch()

↓

Receive Response

↓

response.json()

↓

Store Data

↓

Loading=false

↓

Display Data
```

If Error

```
Loading=true

↓

fetch()

↓

Error

↓

setError()

↓

Loading=false

↓

Display Error
```

---

# Common Mistakes

❌ Calling fetch directly inside component

```tsx
fetch(...)
```

Causes repeated requests.

Always use

```tsx
useEffect()
```

---

❌ Forgetting

```tsx
await
```

Response is never converted correctly.

---

❌ Forgetting

```tsx
response.json()
```

You receive raw response instead of usable data.

---

❌ Forgetting

```tsx
key={user.id}
```

React shows warnings.

---

❌ Not handling errors.

Applications should never assume APIs always work.

---

# Best Practices

✔ Use Async/Await

✔ Handle Errors

✔ Show Loading

✔ Use Reusable Components

✔ Keep API logic separate

✔ Use TypeScript Interfaces

✔ Always provide unique keys

✔ Keep UI responsive

✔ Validate API responses

---

# Interview Questions

### What is an API?

A bridge that allows two applications to communicate.

---

### Why use useEffect for API calls?

Because API calls are side effects.

---

### Why use useState?

To store fetched data and update the UI.

---

### Why use Loading State?

To inform users that data is being fetched.

---

### Why use Error State?

To handle API failures gracefully.

---

### What is JSON?

A lightweight data format used to exchange information between servers and applications.

---

### Why use map()?

To display multiple objects dynamically.

---

### Why use filter()?

To search or remove unwanted items.

---

### Difference between Fetch and Axios?

Fetch

- Built into JavaScript
- Manual JSON conversion
- Lightweight

Axios

- External library
- Automatic JSON conversion
- Better error handling

---

# Key Takeaways

- APIs allow React applications to retrieve external data.
- Fetch API is used to send HTTP requests.
- useEffect() performs API calls after rendering.
- useState() stores fetched data.
- Loading state improves user experience.
- Error state prevents application crashes.
- map() displays API data dynamically.
- filter() enables searching.
- Conditional rendering determines what the user sees.
- Reusable components make React applications cleaner and easier to maintain.
