/* 
Adicione um método ao objeto Venda chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.
*/

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

  aplicarDesconto(novoDesconto) {
    this.desconto = novoDesconto / 100;
  },

  atualizarQuantidade(novaQuantidade) {
    this.quantidade = novaQuantidade;
  },
};

venda.produto = "TV";
venda.precoUnitario = 1999.99;

venda.atualizarQuantidade = 2;
venda.aplicarDesconto(10);
console.log(venda.detalharVenda());
console.log(`Total: R$ ${venda.calcularTotal().toFixed(2)}`);
