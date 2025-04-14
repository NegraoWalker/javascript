const string = "Aprendendo Python";
const arrayPalavras = string.split(" ");
arrayPalavras[1] = "Javascript";
const novaString = arrayPalavras[0] + " " + arrayPalavras[1];
console.log(novaString);