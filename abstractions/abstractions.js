//Abstraction OOP
function student(name, department){
    let nm = name;
    let dp = department;

    let getDetails_noAcc = function(){
        return (`Name is : ${nm} Department is : ${dp}`);
    }

    this. getDetails_acc = function(){
        return (`Name is : ${nm} Department is : ${dp}`);
    }
 }

 let student1 = new student ('Angelina','Medical');
 console.log(student1.nm);
 console.log(student1.getDetails_noAcc);
 console.log(student1.getDetails_acc);