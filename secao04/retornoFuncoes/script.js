let pedido = {
  id: 1,
  nome: "João",
  email: "joao@example.com",
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
  console.log(
    `Enviando email para ${email} confirmando o pedido de número ${idPedido}`
  );

  console.log(`Mensagem: ${nome} pedido confirmado`);
}

function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log("Pedido " + id + ", " + "processado!");
  console.log("O total do pedido é: " + totalPedido);
  return totalPedido;
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);
processarPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);
