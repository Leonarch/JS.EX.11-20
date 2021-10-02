class Person {
  constructor(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
  }
  static istance(obj){
    return new Person(obj.firstName, obj.lastName)
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.istance(obj);
console.log(`${person.name} ${person.surname}`);