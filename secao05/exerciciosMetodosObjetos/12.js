/*
Remova a propriedade desconto do objeto Venda. Verifique se a propriedade foi removida com sucesso e exiba as propriedades restantes do objeto.
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
  

delete novaVenda.desconto;
delete novaVenda.aplicarDesconto;

console.log(Object.keys(novaVenda));