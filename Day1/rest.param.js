
function fn_rest_param(a,b,...other){
    console.log("a=",a);
    console.log("b=",b);
    console.log("...other",other);
}

fn_rest_param(1,2);
fn_rest_param(1,2,4,5);
fn_rest_param(1,2,4,5,100,200);

//
function printNumber(num1, num2, ...otherNumbers) {
    console.log("num1 = " + num1);
    console.log("num2 = " + num2);
    console.log("Other Numbers: " + otherNumbers);
}

printNumber("one", "two", "three", "four", "five");
