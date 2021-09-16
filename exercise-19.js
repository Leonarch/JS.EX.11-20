const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';


console.log(person1);
console.log(person2);

//Possiamo modificare 'person1' attraverso 'person2' perchè 
//gli è stato assegnato come riferimento a rigo 7 collegando 
//cosi i due oggetti.