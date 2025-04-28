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

// =========================
// Exercício 12: Remover a propriedade "desconto"

// Remover
delete venda.desconto;

// Verificar se foi removido
console.log('desconto' in venda); // false
console.log(venda.hasOwnProperty('desconto')); // false

// Mostrar propriedades restantes
console.log(Object.keys(venda)); 
// Esperado: [ 'produto', 'quantidade', 'precoUnitario', 'calcularTotal', 'detalharVenda', 'aplicarDesconto', 'atualizarQuantidade', 'verificarEstoque' ]
