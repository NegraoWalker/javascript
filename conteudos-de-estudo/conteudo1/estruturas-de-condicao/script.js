console.log("IF:");
let idade1 = 20;
if (idade1 >= 18) {
    console.log("Você é maior de idade.");
}

console.log("IF-ELSE:");
let estaChovendo = true;
if (estaChovendo) {
    console.log("Leve um guarda-chuva!");
} else {
    console.log("Pode sair sem guarda-chuva.");
}


console.log("IF - ELSE IF E ELSE:");
let nota = 75;
if (nota >= 90) {
    console.log("Aprovado com excelência!");
} else if (nota >= 60) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado.");
}


console.log("SWITCH:");
let diaSemana = "terça";
switch (diaSemana) {
    case "segunda":
        console.log("Começo da semana.");
        break;
    case "terça":
        console.log("Segundo dia útil.");
        break;
    case "quarta":
        console.log("Meio da semana.");
        break;
    default:
        console.log("Outro dia.");
}

console.log("OPERADOR TERNÁRIO:");
let idade2 = 17;
let resultado = (idade2 >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado);

