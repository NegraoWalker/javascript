/*
Exercício 5: Adivinhe o Número Secreto para Desconto
Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
tentem adivinhar o número secreto.
*/

adivinharNumeroSecreto();

function adivinharNumeroSecreto() {
  const numeroSecreto = Math.floor(Math.random() * 100); // Número secreto entre 0 e 99
  let tentativa;
  let tentativas = 0;
  do {
    tentativa = Math.floor(Math.random() * 100); // Gere uma nova tentativa aleatória;
    tentativas++;
    if (tentativa === numeroSecreto) {
      console.log(
        `Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`
      );
    }
  } while (tentativa !== numeroSecreto);
}
