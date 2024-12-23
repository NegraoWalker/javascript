/*
Verificar se a entrada é um número válido
Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
realizar qualquer operação.
Exemplo de Entrada: // "123abc";
Exemplo de Saída: // "A entrada não é um número válido."
*/

const entrada = "123abc";

if(isNaN(entrada)) {
    console.log("A entrada não é um número válido!");
}