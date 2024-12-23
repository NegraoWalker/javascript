/*
Somar valores numéricos de uma entrada de formulário
Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
Exemplo de Entrada: 
// "10" e "20.5";
Exemplo de Saída: 
// 30.5
*/

const string1 = "10";
const string2 = "20.5";



const numero1 = Number.parseFloat(string1);
const numero2 = Number.parseFloat(string2);

const soma = numero1 + numero2;


console.log("Número 1: " + typeof(numero1) + " " + numero1);
console.log("Número 2: " + typeof(numero2) + " " + numero2);
console.log("Soma: " + soma.toFixed(2));
