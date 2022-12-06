class Person {
  constructor(name, age){
    this.name = name;
    this.age = age
  }

  printName(){
    console.log(`my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(level, name, age){
    super(name, age);
    this.level = level
  }

  printMyLevel(){
    console.log(`my level is ${this.level}`)
  }
}

class Teacher extends Person {
  constructor(subject, name, age){
    super(name, age);
    this.subject = subject
  }

  printMySubject(){
    console.log(`my level is ${this.subject}`)
  }
}

const student = new Student('elementary', 'Ehsan', 12);
const teacher = new Teacher('Math', 'Tom', 40);

console.log(student.name);
console.log(student.age);
console.log(student.level);
student.printMyLevel();
student.printName();
teacher.printName();