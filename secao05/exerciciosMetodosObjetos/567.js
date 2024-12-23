/*
Retorne um array com todas as suas propriedades e valores do objeto Venda.
Exiba as propriedades e valores em um formato legível.
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

venda = {
    produto: "TV", 
    quantidade: 1, 
    precoUnitario: 2500.99, 
    desconto: 10, 
}

const propriedades = Object.keys(venda);
const valores = Object.values(venda);
const propriedadesValores = Object.entries(venda)

console.log("Propriedades: " + propriedades)
console.log("valores: " + valores)
console.log("Propriedades e Valores: " + propriedadesValores)

//Formatação:
  let propriedadesEValores = Object.entries(venda).map(([chave, valor]) => {
    if (typeof valor === "function") {
      return `${chave}: [Função]`; // Indica que é um método
    }
    return `${chave}: ${valor}`;
  });
  
  // Exibir as propriedades e valores de forma legível
  console.log(propriedadesEValores);
  