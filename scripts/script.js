/**
 * Person
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.verify = function () {
        alert(this.firstName + ' ' + this.lastName + '\n' + this.email);
    };
    return Person;
})();
// function with meaningful name!
function foo() {
    var person = new Person();
    person.firstName = 'Shahedur';
    person.lastName = 'Rahman';
    person.email = 'shahed@outlook.com';
    person.verify();
}
//# sourceMappingURL=script.js.map