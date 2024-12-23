/*
Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique se o desconto foi aplicado corretamente.
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
  



let descontoEspecial = Object.create(novaVenda);
descontoEspecial.aplicarDesconto = 20;


descontoEspecial.produto = "TV";
descontoEspecial.quantidade = 2;
descontoEspecial.precoUnitario = 3500.99;

console.log(descontoEspecial);


