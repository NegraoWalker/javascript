// Código fornecido
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

// Métodos dinâmicos
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

// Atualizações no objeto venda
venda.aplicarDesconto(10);
venda.atualizarQuantidade(2);

// Definindo a propriedade "data" como não enumerável
Object.defineProperty(venda, "data", {
    value: "2024-08-03",
    enumerable: false,
});

// Testes no objeto venda
console.log(venda.data);
console.log(venda.detalharVenda());
console.log(venda.verificarEstoque(5));

// ------------------------------------------------------
// RESOLUÇÃO DO EXERCÍCIO 11
// ------------------------------------------------------

// Criando novo objeto herdando de venda
const descontoEspecial = Object.create(venda);

// Aplicando desconto fixo de 20%
descontoEspecial.aplicarDesconto(20);

// Exibindo as informações do novo objeto
console.log(descontoEspecial.detalharVenda());
