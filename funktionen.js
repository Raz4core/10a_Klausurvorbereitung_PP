/* DATENSTRUKTUREN */

/* Primitives */

let a    // (var) Definition oder Deklaration

// Wertzuweisung / Assigment
a = true;     //boolean (true,false)
a = "Hallo";  //string
a = 2;        // number

console.log(typeof a);
console.log(a); 

/* Arrays */

let arr;
arr = new Array();
arr = [true,false,false,true];

// Index beginnt mit 0
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr[5]);