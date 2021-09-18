const person = {
  set name(value) {
    this.nameValue = value;
  },
  get name() {
    return this.nameValue;
  },
  set surname(value) {
    this.surnameValue = value;
  },
  get surname() {
    return this.surnameValue;
  },
  fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const john = Object.create(person);
john.name = 'John';
john.surname = 'Doe';

const simon = Object.create(person);
simon.name = 'Simon';
simon.surname = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins