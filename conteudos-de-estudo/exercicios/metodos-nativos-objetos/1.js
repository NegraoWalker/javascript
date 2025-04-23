const venda = {
    produto: "TV",
    quantidade: 1,
    precoUnitario: 1999.89,
    desconto: 5,

    calcularTotal() {
        return this.quantidade * this.precoUnitario - (this.desconto / 100) * this.precoUnitario;
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