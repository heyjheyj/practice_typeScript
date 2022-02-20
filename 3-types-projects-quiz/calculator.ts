/**
 * Let's make a calculator 🧮
 */

type Type = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Type, a:number, b:number):number {
  switch(command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknown error')
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


// function calculate(type: Type, num1: number, num2: number){
//   if(type === 'add') {
//     return num1 + num2;
//   } else if ( type === 'substract') {
//     return num1 - num2;
//   } else if ( type === 'multiply') {
//     return num1 * num2;
//   } else if ( type === 'divide') {
//     return num1 / num2;
//   } else if ( type === 'remainder') {
//     return num1 % num2;
//   }
// }