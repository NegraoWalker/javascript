/*
Exercício 3: Contagem de Dinheiro no Caixa
Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
lanchonete.
*/


calcularVendas(10);




function calcularVendas(totalDeVendasDesejado) {
    let dinheiroRecebido = 0.0;
    let vendasConcluidas = false;
    let qtdVendasRealizadas = 0;

    while(!vendasConcluidas) {
        const valorDaVenda = 35.88;
        dinheiroRecebido += valorDaVenda;
        qtdVendasRealizadas++;

        if(qtdVendasRealizadas === totalDeVendasDesejado) {
            vendasConcluidas = true;
        }
    }

    console.log(`Total de dinheiro recebido: R$ ${dinheiroRecebido.toFixed(2)}`);
}