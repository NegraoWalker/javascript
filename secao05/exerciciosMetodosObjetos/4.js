let venda = {
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

// Atribuindo valores ao objeto de venda
venda.produto = "TV";
venda.precoUnitario = 1999.99;

// Verificando se a venda pode ser realizada antes de atualizar a quantidade
console.log(venda.verificarEstoque()); // Esperado: "Ajustar estoque do produto!!"

// Atualizando a quantidade e aplicando o desconto
venda.atualizarQuantidade(2);
venda.aplicarDesconto(10);

// Detalhando a venda e mostrando o total
console.log(venda.detalharVenda());
console.log(`Total: R$ ${venda.calcularTotal().toFixed(2)}`); // Esperado: valor com desconto aplicado
