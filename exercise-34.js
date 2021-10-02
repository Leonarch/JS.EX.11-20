class Person {
    constructor(firstName, lastName) {
      this.name = firstName;
      this.surname = lastName;
    }
  }
  

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.name} ${developer.surname}`);