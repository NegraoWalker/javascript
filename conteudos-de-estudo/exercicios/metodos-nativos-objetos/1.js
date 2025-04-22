const venda = {
    produto: "TV",
    quantidade: 1,
    precoUnitario: 1999.89,
    desconto: "0.1",

    calcularTotal() {
        return this.quantidade * this.precoUnitario - this.desconto;
    },

    detalharVenda() {
    return `Detalhe da venda: 
Nome do produto: ${this.produto} 
Quantidade: ${this.quantidade} 
Preço do produto: ${this.precoUnitario}
Desconto: ${this.desconto}
Valor a pagar: R$${this.calcularTotal().toFixed(2)}
`
    }
}

console.log(venda.detalharVenda());