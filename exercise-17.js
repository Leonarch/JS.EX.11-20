function calculate() {
let operation = 0;


return {
  add(n) {
    operation += n;
    return this;
  },

  sub(n) {
    operation -= n;
    return this;
  },

  multiply(n) {
    operation *= n;
    return this;
  },

  divide(n) {
    operation /= n;
    return this;
  },

  printResult(){
  console.log(operation);}
}
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
