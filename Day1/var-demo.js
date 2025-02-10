var x = 10; //Global

function varDemo() {
    console.log("Giá trị x bên trong hàm:", x);
}

console.log("Giá trị x bên ngoài hàm:", x);

// Thực thi hàm
varDemo();

// Gán lại giá trị
x = 200;
console.log("x được gán lại:", x);

// Khai báo lại biến x
var x = "Tuấn Phong";
console.log("x =", x);
