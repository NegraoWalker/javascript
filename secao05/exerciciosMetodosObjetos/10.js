/*
Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
nova propriedade data separadamente.
*/

let novaVenda = {
  produto: "", // Inicializar como string vazia
  quantidade: 0, // Inicializar como número
  precoUnitario: 0.0, // Inicializar como número
  desconto: 0.0, // Inicializar como número

  // Método para calcular o total considerando o desconto
  calcularTotal() {
    return (
      this.quantidade * this.precoUnitario - this.desconto * this.precoUnitario
    );
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

  // Método para aplicar o desconto
  aplicarDesconto(novoDesconto) {
    this.desconto = novoDesconto / 100;
  },

  // Método para atualizar a quantidade de itens vendidos
  atualizarQuantidade(novaQuantidade) {
    this.quantidade = novaQuantidade;
  },

  // Método para verificar o estoque e a possibilidade de realizar a venda
  verificarEstoque() {
    if (this.quantidade === 0) {
      return "Ajustar estoque do produto!!";
    }
    return "A venda pode ser realizada!";
  },
};

// Atualizar propriedades do objeto existente
novaVenda.produto = "TV";
novaVenda.quantidade = 2;
novaVenda.precoUnitario = 3500.99;
novaVenda.desconto = 10;

// Adicionar a propriedade `data` como não enumerável
Object.defineProperty(novaVenda, "data", {
  value: "2024-08-03",
  enumerable: false,
});

// Exibir as propriedades do objeto (sem a propriedade `data`)
console.log(novaVenda);

// Exibir o valor da propriedade `data` separadamente
console.log("Data da venda:", novaVenda.data);
