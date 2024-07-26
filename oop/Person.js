class Person {
    constructor(name, lastName, age, isSleeping ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isSleeping = isSleeping;
    }
    sleeping(){
        return (this.isSleeping = true);
}
    calAge(){
        return 2024- this.age;
    }
}

module.exports = Person;

new Person ('sabine', 'S', 21, true).calAge();
