
/**
 * Person
 */
class Person {
    firstName: string;
    lastName: string;
    email: string;

    constructor() {
    }

    verify() {
        alert(this.firstName + ' ' + this.lastName + '\n' + this.email);
    }
}

// function with meaningful name!
function foo() {
    var person = new Person();
    person.firstName = 'Shahedur';
    person.lastName = 'Rahman';
    person.email = 'shahed@outlook.com';

    person.verify();
}