# Async / Await

## What is async?

The `async` keyword is used before a function.

An `async` function always returns a Promise.

### Syntax

```javascript
async function functionName(){

}
```

### Example

```javascript
async function hello(){
    return "Hello";
}
```

---

## What is await?

The `await` keyword waits until a Promise is completed.

It can only be used inside an `async` function.

### Syntax

```javascript
let result = await promise;
```

### Example

```javascript
const data = await getStudents();
```

---

## try...catch

Used to handle errors while using `await`.

### Example

```javascript
try{

    const data = await getStudents();

}
catch(error){

    console.log(error);

}
```

---

## finally

Runs whether the Promise succeeds or fails.

### Example

```javascript
finally{

    console.log("Finished");

}
```

---

## Multiple await

Waits for one Promise after another.

### Example

```javascript
const user = await getUser();

const marks = await getMarks();
```

---

## Promise.all() with await

Runs multiple Promises in parallel.

### Example

```javascript
const result = await Promise.all([
    getUser(),
    getMarks()
]);
```

---