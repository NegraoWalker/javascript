/*
Converta valores de texto em números
Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
convertê-los para números reais.
Exemplo de Entrada: 
// "150.50";
// "200px";
// "abc";
Exemplo de Saída: 
// 150.50
// 200
// NaN
*/

const string1 = "150.50";
const string2 = "200px";
const string3 = "abc";


const numero1 = Number.parseFloat(string1);
const numero2 = Number.parseFloat(string2);
const numero3 = Number.parseFloat(string3);


console.log("Número 1: " + typeof(numero1) + " " + numero1);
console.log("Número 2: " + typeof(numero2) + " " + numero2);
console.log("Número 3: " + typeof(numero3) + " " + numero3);