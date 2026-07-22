# JavaScript Promises

### Syntax

```javascript
let promise = new Promise(function(resolve, reject) {

});
```

---

## Promise States

### 1. Pending
The Promise is waiting for the result.

### 2. Fulfilled
The Promise completed successfully using `resolve()`.

### 3. Rejected
The Promise failed using `reject()`.

---

## resolve()

Used to complete a Promise successfully.

### Example

```javascript
resolve("Data Loaded");
```

---

## reject()

Used when an error occurs.

### Example

```javascript
reject("Something went wrong");
```

---

## .then()

Executes when the Promise is fulfilled.

### Example

```javascript
promise.then(function(result){
    console.log(result);
});
```

---

## .catch()

Executes when the Promise is rejected.

### Example

```javascript
promise.catch(function(error){
    console.log(error);
});
```

---

## .finally()

Executes whether the Promise is fulfilled or rejected.

### Example

```javascript
promise.finally(function(){
    console.log("Completed");
});
```

---

## Promise Chaining

Used to perform multiple asynchronous operations one after another.

### Example

```javascript
promise
.then(function(data){
    return data;
})
.then(function(result){
    console.log(result);
});
```

---

## Promise Methods

### Promise.resolve()

Creates a resolved Promise.

```javascript
Promise.resolve("Success");
```

### Promise.reject()

Creates a rejected Promise.

```javascript
Promise.reject("Error");
```

### Promise.all()

Waits for all Promises to complete.

```javascript
Promise.all([promise1, promise2]);
```

### Promise.race()

Returns the first completed Promise.

```javascript
Promise.race([promise1, promise2]);
```

### Promise.any()

Returns the first fulfilled Promise.

```javascript
Promise.any([promise1, promise2]);
```

### Promise.allSettled()

Waits until all Promises are completed (fulfilled or rejected).

```javascript
Promise.allSettled([promise1, promise2]);
```

---
