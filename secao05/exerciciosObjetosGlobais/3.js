/*
Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
resultados no console.
Exemplo Entrada: // 50, 100
Exemplo Saída: 
Aleatório entre 0 e 1: 0.8629821531529918
Aleatório entre 0 e 100: 42.48780566605361
Aleatório entre 50 e 100: 63.70589822740784
*/

function gerarNumeroAleatorio(valor1, valor2){
    const numeroAleatorio1 = Math.random().toFixed(2);
    const numeroAleatorio2 = Math.random().toFixed(2)*100;
    const numeroAleatorio3 = Math.random().toFixed(2) * (valor2 - valor1) + valor1;

    return `Aleatório entre 0 e 1: ${numeroAleatorio1}\nAleatório entre 0 e 100: ${numeroAleatorio2}\nAleatório entre 50 e 100: ${numeroAleatorio3}`
}

console.log(gerarNumeroAleatorio(51,99));