//❖Destructuring
var array = [11,22,33,44];
var [x,y]=array; // x=11; y=22
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);



// object
const person = {
    name: "Chung Trinhj",
    age: 25,
    city: "New York"
};

console.log(person.name); // ✅ John
console.log(person.age);  // ✅ 25

const { name, city } = person;
console.log(name); // ✅ John
// console.log(age);  // ✅ 25
console.log(city); // ✅ New York

// Destructuring với mảng
const arr = [1, 2, 3, 4, 5];
const [a, b] = arr;

console.log("Giá trị a: " + a);
console.log("Giá trị b: " + b);
console.log("Mảng arr: " + arr);

// Destructuring với object
const personObject = {
    name: "Phạm Tuấn Phong",
    age: 37,
    address: "Hà Nội"
};

const { name, age } = personObject;

console.log("Name: " + name);
console.log("Age: " + age);
console.log(personObject);
