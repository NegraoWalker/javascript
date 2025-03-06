function adicionaTarefa() {
    console.log("função adicionaTarefa()");
    const elementoUl = document.getElementById("taskList"); //Armazena o elemento lista
    const elementoLi = document.createElement("li"); //Cria um novo elemento da lista
    const elementoBotao = document.createElement("button"); //Cria um novo botão
    const taskText = taskInput.value.trim(); //Armazena o texto digitado dentro do input

    elementoLi.textContent = taskText; //Adiciona o texto digitado dentro da li
    elementoBotao.textContent = "Remover";
    elementoUl.appendChild(elementoLi); //Adiciona o novo elemento li dentro de ul
    elementoLi.appendChild(elementoBotao); //Adiciona o novo elemento button dentro de li
    taskInput.value = ""; //Limpa o campo de texto input

}

function removeTarefa() {

}