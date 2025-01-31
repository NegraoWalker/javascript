const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pela tag h2: ", titulo);

const paragrafosItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando pela classe: ", paragrafosItens);

const destacado = document.getElementById("destacado");
console.log("Selecionando pelo id: ", destacado);

const destacadoSelector = document.querySelector("#destacado");
console.log("Selecionando pelo id: ", destacado);

const todosItens = document.querySelectorAll(".texto-lista");
console.log("Selecionando todos os elementos pela classe ", todosItens);

const input = document.getElementsByName("username");
console.log("Selecionando os elementos pelo atributo name: ", input);

const selecionandoTodosOsElementos = document.querySelectorAll("*");
console.log("Selecionando todos os elementos: ", selecionandoTodosOsElementos);
