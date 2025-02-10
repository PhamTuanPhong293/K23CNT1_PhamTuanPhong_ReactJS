// 
var oldArray = [10,11,12];
var newArray = [oldArray,22,33];
console.log("oldArray:",oldArray);
console.log("newArray:",newArray);

// spread
var oldArray = [10,11,12];
var newArray = [...oldArray,22,33];
console.log("oldArray:",oldArray);
console.log("newArray:",newArray);

// không dùng spread operator
const oldArray = [1, 2, 3];
const newArray = [oldArray, 4, 5];
console.log(newArray);

// dùng spread operator ...
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);
