const venda = {
    produto: "TV",
    quantidade: 1,
    precoUnitario: 1999.89,
    desconto: 5,

    calcularTotal() {
        const totalBruto = this.quantidade * this.precoUnitario;
        const descontoValor = totalBruto * (this.desconto / 100);
        return totalBruto - descontoValor;
    },

    detalharVenda() {
        return `Detalhe da venda:
Nome do produto: ${this.produto}
Quantidade: ${this.quantidade}
Preço unitário: R$${this.precoUnitario.toFixed(2)}
Desconto: ${this.desconto}%
Valor a pagar: R$${this.calcularTotal().toFixed(2)}
`;
    }
}

// Métodos dinâmicos:
venda.aplicarDesconto = function (desconto) {
    this.desconto = desconto;
}

venda.atualizarQuantidade = function (quantidade) {
    this.quantidade = quantidade;
}

venda.verificarEstoque = function (quantidadeDisponivel) {
    if (quantidadeDisponivel >= this.quantidade) {
        return "Venda pode ser realizada";
    }
    return "Venda não pode ser realizada";
}

// Aplicações:
venda.aplicarDesconto(10);    // Atualiza o desconto para 10%
venda.atualizarQuantidade(2); // Atualiza a quantidade para 2 produtos

// Define a propriedade "data" como não enumerável
Object.defineProperty(venda, "data", {
    value: "2024-08-03",
    enumerable: false,
});

// Testando:
console.log(venda.data); // Mostra a data (mesmo não sendo listada em for-in ou Object.keys)
console.log(venda.detalharVenda());
console.log(venda.verificarEstoque(5));
