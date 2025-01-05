/*
Exercício 4: Entrega de Pedidos Pendentes
Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.
*/

const pedidosPendentes = ["Hambúrguer","Batata Frita","Refrigerante","Milkshake"];

realizarEntregas(pedidosPendentes);


function realizarEntregas(pedidosPendentes) {
    let pedidoAtual = "";
    console.log("Iniciando entregas:");

    while (pedidosPendentes.length > 0) {
        pedidoAtual = pedidosPendentes.shift(); 
        console.log(`Entregando: ${pedidoAtual}`);
    }
    console.log("Todos os pedidos foram entregues.");
}