/*
Exercício 2: Listagem do Cardápio Digital
Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.
*/

const cardapio = [
  { nome: "X-Tudo", preco: 39.99 },
  { nome: "X-Bacon", preco: 29.99 },
  { nome: "X-Egg", preco: 19.99 },
  { nome: "Hotdog", preco: 15.99 },
];

for (let index = 0; index < cardapio.length; index++) {
  console.log(
    `Item ${index + 1}: ${cardapio[index].nome}: R$ ${cardapio[index].preco}`
  );
}
