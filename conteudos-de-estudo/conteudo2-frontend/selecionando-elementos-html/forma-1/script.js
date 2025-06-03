//Forma 1:
const elementos1 = document.getElementsByTagName("h2");
console.log("Selecionando os elementos pela tag:", elementos1);
//Forma 2:
const elementos2 = document.getElementsByClassName("texto-lista");
console.log("Selecionando os elementos pela classe:", elementos2);
//Forma 3:
const elementos3 = document.getElementById("destacado");
console.log("Selecionando o elemento pelo id:", elementos3);
//Forma 4:
const elemento4 = document.querySelector("#destacado");
console.log("Selecionando o elemento pelo seletor CSS (querySelector):", elemento4);
//Forma 5:
const elementos5 = document.querySelectorAll(".texto-lista");
console.log("Selecionando os elementos pelo seletor CSS (querySelectorAll):", elementos5);
//Forma 6:
const elemento6 = document.getElementsByName("username");
console.log("Selecionando o elemento pelo atributo (name):", elemento6);
//Forma 7:
const todosElementos = document.querySelectorAll("*");
console.log("Selecionando TODOS os elementos:", todosElementos);
