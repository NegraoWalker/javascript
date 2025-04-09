let estoque = ["TV", "Laptop", "Fogão", "Geladeira"];
let novoEstoque = [...estoque]; //Não modifica o array original
//let novoEstoque = estoque; //Modifica o array original

novoEstoque[0] = "Garrafa";
console.log(estoque);

let funcionario = {
    nome: "Bruno",
    cpf: "0000000000000-00",
    cargo: "Borracheiro",
    salario: 4535.12
};

let novoFuncionario = {...funcionario}; //Não modifica o objeto original

novoFuncionario.nome = "João";
console.log(funcionario);
