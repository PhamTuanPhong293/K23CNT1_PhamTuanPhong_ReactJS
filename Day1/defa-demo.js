// //Default parameter
// function greet(name = "Tuấn Phong") {
//     console/log('Xin chào, ${name}!');
// }
// greet(); // ✅ "Xin chào, các bạn!"
// greet("K23CNT1"); // ✅ "Xin chào, cả lớp!"


function fn_add(num1, num2=10){
    let kq=num1+num2;
    console.log(num1,"+",num2,"=",kq);
}

fn_add(10,20);
fn_add(100);

// ChatGPT -> example


// Tham số mặc định tại vị trí khai báo hàm
function add(num1, num2 = 1) {
    return num1 + num2;
}

console.log('Tổng 2 số là: ' + add(5, 1)); 
// Sử dụng tham số mặc định
console.log('Tổng 2 số khi sử dụng tham số mặc định: ' + add(5));

function showName(name) {
    // Tham số mặc định bên trong hàm
    name = name || "Tên mặc định";
    return name;
}

console.log('Tên là: ' + showName("Phạm Tuấn Phong"));
// Sử dụng tham số mặc định
console.log('Tên là: ' + showName());
