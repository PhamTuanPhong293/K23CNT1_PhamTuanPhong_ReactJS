// Kế thừa class Person để tạo class Student
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = "SV001";
    }

    getStudentInfo() {
        return "Tên: " + this.getName() + "- Tuổi: " + this.getAge() + "- Mã SV: " + this.studentId;
    }
}

var student = new Student("Nguyễn Văn A", 20, "SV002");
console.log(student.getStudentInfo());