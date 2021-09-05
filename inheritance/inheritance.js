//Inheritance OOP
class Pet {
    constructor(name, group){
        this.name = name;
        this.group = group;
    }
    clsnml() {
        console.log(`Name : ${this.name}`);
        console.log(`Group : ${this.group}`);
    }
}

//inheritings
class Animal extends Pet {

}

let myanimal = new Animal('Cat', 'Mamals');
myanimal.clsnml();