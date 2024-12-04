let estoque = ["Milho", "Soja", "Arroz"];
let novoEstoque = [...estoque];
novoEstoque[2] = "Feijão";

console.log(novoEstoque);

let funcionario = {
  nome: "Beatriz",
  idade: 25,
};
let novoFuncionario = { ...funcionario };
novoFuncionario.nome = "Leticia";
console.log(novoFuncionario);
