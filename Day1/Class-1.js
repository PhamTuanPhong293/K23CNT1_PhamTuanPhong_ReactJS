// Định nghĩa class Person
class Person {
    constructor() {
        this.name = "Phạm Tuấn Phong";
        this.age = 20;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

var person = new Person();
person.setAge(21);
console.log("Tên người: " + person.getName());
console.log("Tuổi: " + person.getAge());



