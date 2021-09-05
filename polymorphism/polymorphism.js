//polymorphism
class Student {
    study()
    {
    console.log("Student is learning");
    }
 }
 class Teacher extends Student{
 }
 let teach = new Teacher();
 teach.study();
