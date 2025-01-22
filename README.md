# Javascript Unhandled Null Case and Type Error
This repo contains a simple example of a common Javascript error: failing to handle null or undefined values and assuming the object type.
The `bug.js` file contains a function with a potential error. The `bugSolution.js` shows how to handle this error.
## Bug
The `foo` function attempts to access the `length` property of `x`. However, if `x` is `null` or `undefined`, or not an object with a length property, a `TypeError` is thrown. 
## Solution
The solution involves explicit null checks before accessing `x.length` to handle different cases gracefully.  More robust solutions might involve using optional chaining (?.) or the nullish coalescing operator (??).