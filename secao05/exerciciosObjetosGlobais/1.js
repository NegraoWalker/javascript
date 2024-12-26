/*
Você precisa criar uma função que receba um número decimal e o arredonde de
três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
resultado de cada arredondamento no console.
Exemplo Entrada: // 7.89
Exemplo Saída: 
Arredondado para baixo: 7
Arredondado para cima: 8
Arredondado para o valor mais próximo: 8
*/


function arredondamento(numero) {
    const praCima = Math.ceil(numero);
    const praBaixo = Math.floor(numero);
    const inteiroMaisProximo = Math.round(numero);
    return `Arrendondado para baixo: ${praBaixo}\nArrendondado para cima: ${praCima}\nArredondado para o valor mais próximo: ${inteiroMaisProximo}`
}

console.log(arredondamento(7.89));