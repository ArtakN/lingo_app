/* The Object.entries() method in JavaScript is a built-in function that 
   returns an array of a given object’s own enumerable string-keyed property key-value pairs1. The order of the array returned by Object.entries() is the same as that provided by a for...in loop1.  */

Object.entries(obj)

// In this example, Object.entries(obj) returns an array of key - value pairs from the obj object1.
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));   // [ ['foo', 'bar'], ['baz', 42] ]
