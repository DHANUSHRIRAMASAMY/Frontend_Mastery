# TypeScript - Deeper Concepts

## Summary

| Topic | Symbol | Purpose |
|--------|--------|---------|
| Union Type | `\|` | One variable can store multiple data types |
| Optional Property | `?` | A property or parameter can be omitted |
| Type Narrowing | `typeof`, `instanceof`, `in` | Checks the actual type before using it |
| Generic | `<T>` | Creates reusable and type-safe code |
| Partial | `Partial<T>` | Makes all properties optional |
| Required | `Required<T>` | Makes all properties required |
| Readonly | `Readonly<T>` | Prevents modification of properties |
| Pick | `Pick<T, K>` | Selects specific properties from a type |
| Omit | `Omit<T, K>` | Removes specific properties from a type |
| Record | `Record<K, T>` | Creates an object type with specified keys and value types |
| Exclude | `Exclude<T, U>` | Removes specific types from a union |
| Extract | `Extract<T, U>` | Keeps only matching types from a union |
| NonNullable | `NonNullable<T>` | Removes `null` and `undefined` from a type |
| ReturnType | `ReturnType<T>` | Gets the return type of a function |

---

# Topics Covered

## 1. Union Type (`|`)

A Union Type allows a variable to store more than one data type.

### Syntax

```ts
let value: number | string;
```

### Example

```ts
let price: number | string;

price = 500;
price = "500";
```

---

## 2. Optional Property (`?`)

An optional property is not mandatory while creating an object.

### Syntax

```ts
interface Product {
    brand?: string;
}
```

### Example

```ts
interface Product {
    name: string;
    price: number;
    brand?: string;
}
```

---

## 3. Generic Function (`<T>`)

Generics allow writing reusable functions without losing type safety.

### Syntax

```ts
function printValue<T>(value: T): T {
    return value;
}
```

### Example

```ts
printValue("Hello");
printValue(100);
printValue(true);
```

---

## 4. Utility Types

TypeScript provides built-in utility types to create new types from existing ones.

### Partial

Makes all properties optional.

```ts
const emp: Partial<Employee> = {
    name: "Dhanushri"
};
```

---

### Readonly

Makes object properties read-only.

```ts
const emp: Readonly<Employee> = {
    id: 1,
    name: "Sibi",
    department: "IT"
};
```

---

### Pick

Selects only the required properties.

```ts
type EmployeeBasic = Pick<Employee, "id" | "name">;
```

---

### Omit

Removes specific properties.

```ts
type EmployeeWithoutDepartment = Omit<Employee, "department">;
```

---

### Record

Creates an object type with specified key and value types.

```ts
type Marks = Record<string, number>;
```

Example

```ts
const studentMarks = {
    Maths: 95,
    English: 90,
    Science: 98
};
```

---

## 5. Optional Function Parameter

A function parameter can be made optional using `?`.

### Syntax

```ts
function displayUser(name: string, city?: string) {

}
```

### Example

```ts
displayUser("Dhanushri");
displayUser("Sibi", "Chennai");
```

---

# Practice Program

The practice program includes:

- Union Type
- Optional Property
- Generic Function
- Partial Utility Type
- Readonly Utility Type
- Pick Utility Type
- Omit Utility Type
- Record Utility Type
- Optional Function Parameter

---

# Output

```text
Price: 500
Price: 500

{ name: 'Laptop', price: 50000 }

{ name: 'Mobile', price: 20000, brand: 'Samsung' }

TypeScript
100
true

{ name: 'Dhanushri' }

{ id: 1, name: 'Sibi', department: 'IT' }

{ id: 2, name: 'Rahul' }

{ id: 3, name: 'Anu' }

{ Maths: 95, English: 90, Science: 98 }

Name: Dhanushri

Name: Sibi
City: Chennai
```
---
