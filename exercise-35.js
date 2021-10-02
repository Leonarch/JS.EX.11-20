class Person {
  constructor(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
  }
}
class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName); 
   this.role = role;
  }

}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.name} ${developer.surname} - ${developer.role}`);