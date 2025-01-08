/*
Exercício 6: Gerenciamento de Estoque de Itens em Falta
Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
processo.
*/

const estoqueLanchonete = {
  hamburguer: 20,
  batataFrita: 15,
  refrigerante: 30,
  milkshake: 10,
};

console.log("Estoque da Lanchonete:");
console.log(estoqueLanchonete);
let continuarAdicionando = true;
let itemNaoEncontrado = false; // Variável para rastrear se o item não foi encontrado;
do {
  const itemEmFalta = "hamburguer"; // Substitua pelo item em falta (ou obtenha do usuário)
  const quantidadeAdicionar = 5; // Quantidade a ser adicionada
  if (!estoqueLanchonete.hasOwnProperty(itemEmFalta)) {
    // Se o item não existe no estoque, exiba a mensagem apenas uma vez
    if (!itemNaoEncontrado) {
      console.log("Item não encontrado no estoque.");
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemEmFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(
      `Limite de estoque (${itemEmFalta}: ${estoqueLanchonete[itemEmFalta]})
    atingido.`
    );
  } else {
    atualizarEstoque(estoqueLanchonete, itemEmFalta, quantidadeAdicionar);
  }
} while (continuarAdicionando);

console.log("Estoque final:");
console.log(estoqueLanchonete);

function atualizarEstoque(estoque, itemEmFalta, quantidadeAdicionar) {
  if (estoque.hasOwnProperty(itemEmFalta)) {
    estoque[itemEmFalta] += quantidadeAdicionar;
    console.log(`Estoque atualizado: ${itemEmFalta}: ${estoque[itemEmFalta]}`);
  } else {
    console.log("Item não encontrado no estoque.");
  }
}
