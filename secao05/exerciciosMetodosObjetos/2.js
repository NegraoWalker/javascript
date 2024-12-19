/* 
Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal.
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

  aplicarDesconto(valor) {
    this.desconto = valor / 100;
  },
};

venda.produto = "TV";
venda.quantidade = 2;
venda.precoUnitario = 1999.99;

// Exibindo os detalhes da venda
venda.aplicarDesconto(10);
console.log(venda.detalharVenda());
console.log(`Total: R$ ${venda.calcularTotal().toFixed(2)}`);
