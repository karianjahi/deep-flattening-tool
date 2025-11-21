/*
Create a Deep Flattening Tool
IWe are implementing an array flattening algorithm.

Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.

For example:

Original |	Flattened
[[1], [], [2, [3]]] |	[1, 2, 3]
[1, {"foo": "bar"}, [2]]  |	[1, {"foo": "bar"}, 2]
["baz", [1, 2], {}] |	["baz", 1, 2, {}]

User Stories:

1. We should have a function named `steamrollArray`.
2. The `steamrollArray` function should accept one argument: a nested array.
3. The function should flatten the nested array, accounting for varying levels of nesting.
4. The solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap() `methods.
5. Global variables should not be used.
*/
