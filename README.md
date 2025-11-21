# 🧰 deep-flattening-tool

A tiny JavaScript utility to **deep-flatten nested arrays of any depth** without using `Array.prototype.flat()` or `flatMap()` 🚫🧬

`deep-flattening-tool` exposes a single function:

```js
steamrollArray(nestedArray) -> flatArray
```
It walks through a nested array structure and returns a one-dimensional array while preserving the original left-to-right order of non-array elements.

## ✨ Features
- ✅ Flattens arrays of arbitrary depth

- ✅ Preserves element order

- ✅ Leaves non-array values unchanged (objects, strings, numbers, etc.)

- ✅ Does not use flat() or flatMap()

- ✅ No global variables

- ✅ Simple, dependency-free implementation in plain JavaScript

## 📦 Getting Started
1. Clone the repository
```bash
git clone https://github.com/karianjahi/deep-flattening-tool.git
cd deep-flattening-tool
```
2. Run the example
Make sure you have `Node.js` installed, then:
```bash
node source.js
```
You should see a flattened array printed to the console.
 
## 🧪 Usage
### Import / require
You can copy the `steamrollArray` function into your project or import it from `source.js` if you wire it up as a module.
```js
// Example if you export steamrollArray from source.js:
// module.exports = { steamrollArray };

// Then in another file:
const { steamrollArray } = require("./source");
```

## Basic examples
### Example 1 – Nested numbers
```js
const input = [[1], [], [2, [3]]];
const output = steamrollArray(input);

console.log(output);
// ➜ [1, 2, 3]
```

### Example 2 - Mixed types
```js
const input = [1, { foo: "bar" }, [2]];
const output = steamrollArray(input);

console.log(output);
// ➜ [1, { foo: "bar" }, 2]
```

### Example 3 - Deeply nested
```js
const input = [
  [3, 5, 6],
  [7, 2],
  8,
  9,
  [17, 18],
  [[[[[[[23, 14], [28, 88]], [2, 5]]]]]],
];

const output = steamrollArray(input);

console.log(output);
// ➜ [3, 5, 6, 7, 2, 8, 9, 17, 18, 23, 14, 28, 88, 2, 5]
```

## 🧾 API

### `steamrollArray(array)`

#### **Parameters**
- **array** (`Array<any>`): A possibly nested array.

#### **Returns**
- **Array<any>**:  
  A new, flattened array containing all non-array elements in order.

#### **Behavior**
- Only **arrays** are unwrapped.  
- Other values *(objects, strings, numbers, booleans, null, etc.)* are left as-is.  
- The **top-level array** is copied before processing — see caveats below about nested arrays.

---

## 📜 License
This project is licensed under the MIT License.
See the LICENSE file for details.