class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {

    var Bob = new Person("Bob", 17, 145, 160);
    var Carl = new Person("Carl", 21, 150, 190);

    var bobArray = [Bob, Carl];


    // Bob.name = "Bob";
    // Bob.age = 17;
    // Bob.weight = 145;
    // Bob.height = 160;
    //
    // Person.Carl = new Person();
    // Carl.name = "Carl";
    // Carl.age = 17;
    // Carl.weight = 145;
    // Carl.height = 160;

alert(Bob.name + " has a body mass index of: " + Bob.bodyMassIndex());
alert(Carl.name + " has a body mass index of: " + Carl.bodyMassIndex());
bobArray[0].printPerson();

}

main();