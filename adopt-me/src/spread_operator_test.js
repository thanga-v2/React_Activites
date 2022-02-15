// normal array concat() method
// let arr = [1,2,3];
// let arr2 = [4,5];

// arr = arr.concat(arr2);

// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// spread operator doing the concat job
// let arr = [1,2,3];
// let arr2 = [4,5];

// arr = [...arr,...arr2];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// copying the contents of an array

// let arr = ['a','b','c'];
// let arr2 = arr;

// console.log(arr2);

// problems if we do above

// spread operator doing the concat job
//let arr = [1,2,3];
//let arr2 = arr;

// arr2.push(5)
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr2);
// console.log("reflected on both the arrays");
// console.log("original array also got changed");
// above will reflect on both

// using spread operator

console.log("with spread operator");
let arr = [1, 2, 3, 4];
let arr2 = [...arr];

console.log(arr);
console.log(arr2);
console.log("deep copy");
arr2.push(10);
console.log(arr);
console.log(arr2);

let person1 = { age: 30, name: "Kapil" };
let person2 = { age: 40, name: "Sachin" };

let person3 = { ...person1 };

console.log("test");
console.log(person3);
console.log("changing");

let newperson = { ...person1, age: 60 };
console.log(newperson);
let sachin = { ...person2, age: 35 };
console.log(sachin);
