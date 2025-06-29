function addTask() {
    const elementoHtmlInput = document.getElementById("taskInput"); //Selecionando o elemento ul
    const elementoHtmlUl = document.getElementById("taskList"); //Selecionando o elemento input
    const novoElementoHtmlLi = document.createElement("li"); //Criando o elemento li - Filho de ul
    const novoElementoHtmlbuttonRemover = document.createElement("button"); //Criando o elemento button - Filho de li

    novoElementoHtmlLi.textContent = elementoHtmlInput.value; //Adicionando o conteudo digitado dentro do input como descrição de li
    if (elementoHtmlInput.value === "") {
        alert("Digite uma descrição para uma nova tarefa!");
        return;
    }
    novoElementoHtmlbuttonRemover.textContent = "Remover"; //Adicionando um texto de descrição no botão
    novoElementoHtmlbuttonRemover.classList.add('remove-btn'); //Adicionando a classe remove-btn como atributo do botão

    novoElementoHtmlbuttonRemover.onclick = () => {
        const elementoHtmlUl = document.getElementById("taskList");
        const novoElementoHtmlLi = elementoHtmlUl.lastElementChild;
        elementoHtmlUl.removeChild(novoElementoHtmlLi);
    }

    elementoHtmlUl.appendChild(novoElementoHtmlLi); //Adicionando a li como filha de ul
    novoElementoHtmlLi.appendChild(novoElementoHtmlbuttonRemover); //Adicionando o button como filho de li
}