# TypeScript Interfaces

## What is an Interface?

An **interface** is a blueprint that defines the structure of an object. It tells TypeScript what properties and methods an object must contain and what their data types should be.
Interfaces are used only during development for type checking. They do not exist in the compiled JavaScript.

# Basic Syntax

```typescript
interface Person {
  name: string;
  age: number;
}
```

Creating an object:

```typescript
const person: Person = {
  name: "Dhanu",
  age: 21
};
```

---

# Interface Rules

Every property must follow:

* Property name
* Data type
* Required or optional

Example:

```typescript
interface Student {
  name: string;
  age: number;
}
```

Correct:

```typescript
const student: Student = {
  name: "John",
  age: 20
};
```

Incorrect:

```typescript
const student: Student = {
  name: "John"
};
```

Reason:

```
Property 'age' is missing.
```

---

# Interface with Multiple Properties

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}
```

---

# Optional Properties

Use **?** to make a property optional.

```typescript
interface User {
  name: string;
  email?: string;
}
```

Valid:

```typescript
const user1: User = {
  name: "Ram"
};

const user2: User = {
  name: "Hari",
  email: "hari@gmail.com"
};
```

---

# Readonly Properties

Cannot be changed after object creation.

```typescript
interface Product {
  readonly id: number;
  name: string;
}
```

```typescript
const item: Product = {
  id: 1,
  name: "Laptop"
};

item.name = "Mouse";
```

Invalid:

```typescript
item.id = 2;
```

Error:

```
Cannot assign to 'id' because it is a read-only property.
```

---

# Interface with Functions

Interfaces can define functions.

```typescript
interface Greeting {
  greet(): void;
}
```

Implementation:

```typescript
const person: Greeting = {
  greet() {
    console.log("Hello");
  }
};
```

---

# Function Parameters

```typescript
interface Login {
  login(username: string, password: string): boolean;
}
```

Implementation:

```typescript
const user: Login = {
  login(username, password) {
    return username === "admin";
  }
};
```

---

# Function Return Types

```typescript
interface Calculator {
  add(a: number, b: number): number;
}
```

---

# Interface with Arrow Function

```typescript
interface Sum {
  (a: number, b: number): number;
}

const add: Sum = (a, b) => a + b;
```

---

# Interface with Arrays

```typescript
interface NumberArray {
  numbers: number[];
}
```

Example:

```typescript
const arr: NumberArray = {
  numbers: [1,2,3,4]
};
```

---

# Interface for Object Arrays

```typescript
interface Student {
  name: string;
  age: number;
}

const students: Student[] = [
  {
    name: "John",
    age: 20
  },
  {
    name: "Sam",
    age: 22
  }
];
```

---

# Nested Interfaces

```typescript
interface Address {
  city: string;
  state: string;
}

interface Employee {
  name: string;
  address: Address;
}
```

Object:

```typescript
const emp: Employee = {
  name: "David",
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
};
```

---

# Interface Extending Another Interface

One interface can inherit another.

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

Object:

```typescript
const dog: Dog = {
  name: "Rocky",
  breed: "Labrador"
};
```

---

# Multiple Interface Inheritance

```typescript
interface A {
  name: string;
}

interface B {
  age: number;
}

interface C extends A, B {
  city: string;
}
```

---

# Interface with Classes

A class can implement an interface.

```typescript
interface Person {
  name: string;
  display(): void;
}

class Student implements Person {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }

}
```

---

# Interface with Constructor

```typescript
interface User {
  name: string;
}

class Employee implements User {

  constructor(public name: string) {}

}
```

---

# Index Signature

Used when property names are unknown.

```typescript
interface Marks {

  [subject: string]: number;

}
```

Example:

```typescript
const marks: Marks = {

  Maths: 90,
  English: 95,
  Science: 88

};
```

---

# Interface with Mixed Properties

```typescript
interface User {

  id: number;
  name: string;
  active: boolean;

}
```

---

# Interface with Methods

```typescript
interface Shape {

  area(): number;

}
```

Implementation:

```typescript
const square: Shape = {

  area() {
    return 25;
  }

};
```

---

# Interface Merging

Interfaces with the same name are automatically merged.

```typescript
interface Student {
  name: string;
}

interface Student {
  age: number;
}
```

Equivalent to:

```typescript
interface Student {
  name: string;
  age: number;
}
```

# Object Types

Instead of an interface, you can define the object's structure directly.

```typescript
const student: {
  name: string;
  age: number;
} = {
  name: "Dhanu",
  age: 21
};
```

---

# Interface vs Object Type

Interface:

```typescript
interface Student {
  name: string;
  age: number;
}

const s1: Student = {
  name: "John",
  age: 20
};
```

Object Type:

```typescript
const s2: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 20
};
```

Use an interface when the structure will be reused. Use an object type for a one-time declaration.


### Extra Property

```typescript
const user: User = {
  name: "Ram",
  age: 20,
  city: "Chennai"
};
```
Error:

```
Object literal may only specify known properties.
```
---
### Readonly Property

```typescript
product.id = 10;
```

Error:

```
Cannot assign to 'id'.
```
---