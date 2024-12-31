/*
Exercício 6: Semáforo de Trânsito
Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
"vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
do semáforo. Utilize o operador ternário para determinar a mensagem.
*/

console.log(mensagemSemaforo('vermelho')); // "Pare"
console.log(mensagemSemaforo('amarelo'));  // "Atenção"
console.log(mensagemSemaforo('verde'));    // "Siga"
console.log(mensagemSemaforo('azul'));     // "Cor inválida"



function mensagemSemaforo(cor) {
    return cor === 'vermelho' ? 'Pare' : cor === 'amarelo' ? 'Atenção' : cor === 'verde' ? 'Siga' : 'Cor inválida';
}

