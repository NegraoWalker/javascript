function adicionaTarefa() {
    const elementoUl = document.getElementById("taskList"); //Armazena o elemento lista
    const elementoLi = document.createElement("li"); //Cria um novo elemento da lista
    const elementoBotao = document.createElement("button"); //Cria um novo botão
    const taskText = taskInput.value.trim(); //Armazena o texto digitado dentro do input

    if (taskText === "") {
       alert("Insira uma nova tarefa"); 
    }

    if (taskText !== "") {
        elementoLi.textContent = taskText; //Adiciona o texto digitado dentro da li
        elementoBotao.textContent = "Remover";
        elementoBotao.setAttribute("onclick", "removeTarefa(this)"); //Adicionando o atributo onclick para o elemento HTML botão
        elementoUl.appendChild(elementoLi); //Adiciona o novo elemento li dentro de ul
        elementoLi.appendChild(elementoBotao); //Adiciona o novo elemento button dentro de li
        taskInput.value = ""; //Limpa o campo de texto input
    }

}

function removeTarefa() {
    const elementoUl = document.getElementById("taskList"); 
    const elementoLi = elementoUl.lastElementChild;
    elementoUl.removeChild(elementoLi);
}