let listaA = [1, 2, 3];

let listaB = listaA;
listaB[0] = 99; //Tipo referência: altera o valor no endereço de memória. Assim, ocorre a alteração para ambos os arrays

console.log("Exemplo tipo referência 1:");
console.log(listaA);
console.log(listaB);
/*======================================================================================================================*/
let string = "Olá";
let mensagem = string;
mensagem = "Olá Bem vindo"; //Tipo primitivo: altera apenas o valor do array mensagem

console.log("Exemplo tipo primitivo 1:");
console.log(mensagem);
console.log(string);
/*======================================================================================================================*/
let objA = { nome: "Millene" };
let objB = objA;
objB.idade = 34;

console.log("Exemplo tipo referência 2:");
console.log(objA);
console.log(objB);
/*======================================================================================================================*/
let listaC = [...listaA]; //Copia os valores do array A para o C - cópia superficial (shallow copy) - operador spread
console.log(listaC);
listaC[3] = 100; //Não altera o valor do array A, isso porque foi feita uma cópia superficial (shallow copy)

console.log("Exemplo tipo referência 3:");
console.log(listaC);
console.log(listaA);
/*======================================================================================================================*/
let objC = { ...objA }; //Copia os valores do objeto A para o C - cópia superficial (shallow copy) - operador spread
objC.corDeCabelo = "Castanho"; //Não altera o valor do objeto A, isso porque foi feita uma cópia superficial (shallow copy)

console.log("Exemplo tipo referência 4:");
console.log(objC);
console.log(objA);
/*======================================================================================================================*/
