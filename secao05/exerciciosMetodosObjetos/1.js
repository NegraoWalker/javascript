/*
Crie um objeto chamado Venda com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda.
*/

let venda = {
  produto: "", // Inicializar como string vazia
  quantidade: 0, // Inicializar como número
  precoUnitario: 0.0, // Inicializar como número
  desconto: 0.0, // Inicializar como número

  // Método para calcular o total considerando o desconto
  calcularTotal() {
    return this.quantidade * this.precoUnitario - this.desconto;
  },

  // Método para detalhar a venda
  detalharVenda() {
    return (
      `Produto: ${this.produto}\n` +
      `Preço Unitário: R$ ${this.precoUnitario.toFixed(2)}\n` +
      `Quantidade: ${this.quantidade}\n` +
      `Desconto: R$ ${this.desconto.toFixed(2)}`
    );
  },
};

// Atribuindo valores às propriedades
venda.produto = "TV";
venda.quantidade = 5;
venda.precoUnitario = 2999.99;
venda.desconto = 250;

// Exibindo os detalhes da venda
console.log(venda.detalharVenda());
console.log(`Total: R$ ${venda.calcularTotal().toFixed(2)}`);
