const numero = 1 / 0;
const notNumber = NaN;
const string = "abc";

const valorValido = 123;

console.log(numero);
console.log(notNumber);
console.log(string);

console.log(Number.isFinite(numero)); 
console.log(Number.isFinite(notNumber));
console.log(Number.isFinite(string));
console.log(isFinite(valorValido)); 