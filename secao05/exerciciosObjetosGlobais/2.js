/*
Crie uma função que receba uma lista de números e retorne o valor máximo e o
valor mínimo dessa lista.
Exemplo Entrada: // 10, 5, 20, 40, 1, 7
Exemplo Saída: // Valor mínimo: 1
Valor máximo: 40
*/

function encontrarMinMax(lista){
    const valorMin = Math.min(...lista);
    const valorMax = Math.max(...lista);

    return `Valor mínimo da lista: ${valorMin}\nValor máximo da lista: ${valorMax}`
}

const lista = [10, 5, 20, 40, 1, 7];
console.log(encontrarMinMax(lista));