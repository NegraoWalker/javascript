console.log("WHILE:");
let contador = 1;

while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++;
}

console.log("D0-WHILE:");
let numero = 1;

do {
    console.log("Número atual é: " + numero);
    numero++;
} while (numero <= 3);


console.log("FOR:");
for (let i = 1; i <= 5; i++) {
    console.log("Valor de i: " + i);
}


console.log("FOR-OF:");
let frutas = ["maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}


console.log("FOR-IN:");
let pessoa = {
    nome: "Walker",
    idade: 30,
    cidade: "Londrina"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
