//Classes OOP
class Animal {
    constructor(name, group){
        this.name = name;
        this.group = group;
    }
    clsnAnml(){
        console.log(`Name : ${this.name}`);
        console.log(`Group : ${this.group}`);
    }
}
let myAnimal = new Animal("Cat", "Mamals");
myAnimal.clsnAnml();