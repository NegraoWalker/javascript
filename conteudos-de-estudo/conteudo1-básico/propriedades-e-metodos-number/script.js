console.log("=================================================================================================");
// Método toFixed: Formata o número com uma quantidade fixa de casas decimais
const numero = 123.456;
console.log("Uso do método toFixed - duas casas decimais: " + numero.toFixed(2));

console.log("=================================================================================================");
// Método toExponential: Retorna a representação em notação exponencial
console.log("Uso do método toExponential - notação com 2 dígitos: " + numero.toExponential(2));

console.log("=================================================================================================");
// Método toPrecision: Formata o número para uma precisão específica
console.log("Uso do método toPrecision - precisão de 4 dígitos: " + numero.toPrecision(4));

console.log("=================================================================================================");
// Método toString: Converte o número para string, opcionalmente em uma base numérica
const inteiro = 10;
console.log("Uso do método toString - base binária: " + inteiro.toString(2));

console.log("=================================================================================================");
// Método valueOf: Retorna o valor primitivo do objeto Number
console.log("Uso do método valueOf: " + numero.valueOf());

console.log("=================================================================================================");
// Propriedade Number.MAX_VALUE: Maior número representável
console.log("Uso da propriedade Number.MAX_VALUE: " + Number.MAX_VALUE);

console.log("=================================================================================================");
// Propriedade Number.MIN_VALUE: Menor número positivo representável
console.log("Uso da propriedade Number.MIN_VALUE: " + Number.MIN_VALUE);

console.log("=================================================================================================");
// Propriedade Number.MAX_SAFE_INTEGER: Maior inteiro seguro
console.log("Uso da propriedade Number.MAX_SAFE_INTEGER: " + Number.MAX_SAFE_INTEGER);

console.log("=================================================================================================");
// Propriedade Number.MIN_SAFE_INTEGER: Menor inteiro seguro
console.log("Uso da propriedade Number.MIN_SAFE_INTEGER: " + Number.MIN_SAFE_INTEGER);

console.log("=================================================================================================");
// Propriedade Number.EPSILON: Menor diferença entre dois números
console.log("Uso da propriedade Number.EPSILON: " + Number.EPSILON);

console.log("=================================================================================================");
// Método Number.isInteger: Verifica se o valor é um inteiro
console.log("Uso do método Number.isInteger - 10 é inteiro?: " + Number.isInteger(10));
console.log("Uso do método Number.isInteger - 10.5 é inteiro?: " + Number.isInteger(10.5));

console.log("=================================================================================================");
// Método Number.isSafeInteger: Verifica se o valor é um inteiro seguro
console.log("Uso do método Number.isSafeInteger - 9007199254740991 é seguro?: " + Number.isSafeInteger(9007199254740991));
console.log("Uso do método Number.isSafeInteger - 9007199254740992 é seguro?: " + Number.isSafeInteger(9007199254740992));

console.log("=================================================================================================");
// Método Number.parseFloat: Converte uma string para um número de ponto flutuante
console.log("Uso do método Number.parseFloat - '123.45px' convertido: " + Number.parseFloat("123.45px"));

console.log("=================================================================================================");
// Método Number.parseInt: Converte uma string para um inteiro na base especificada
console.log("Uso do método Number.parseInt - '1010' binário para decimal: " + Number.parseInt("1010", 2));