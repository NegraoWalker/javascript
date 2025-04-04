// ===== OBJETOS EM JAVASCRIPT - EXEMPLOS PRÁTICOS =====

// -----CRIANDO E ACESSANDO OBJETOS:-----
console.log("-----CRIANDO E ACESSANDO OBJETOS:-----");
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};
console.log("1. Nome:", pessoa.nome); // "João"
console.log("1. Idade via colchetes:", pessoa["idade"]); // 30
console.log("---------------------------------------------------");

// -----ADICIONAR/REMOVER PROPRIEDADES:-----
console.log("-----ADICIONAR/REMOVER PROPRIEDADES:-----");
pessoa.email = "joao@email.com"; // Adiciona
console.log("2. Após adicionar email:", pessoa);

delete pessoa.profissao; // Remove
console.log("2. Após remover profissao:", pessoa);
console.log("---------------------------------------------------");

// -----ITERAÇÃO SOBRE PROPRIEDADES:-----
console.log("-----ITERAÇÃO SOBRE PROPRIEDADES:-----");
console.log("3. Chaves do objeto:", Object.keys(pessoa)); // ["nome", "idade", "email"]
console.log("3. Valores do objeto:", Object.values(pessoa)); // ["João", 30, "joao@email.com"]

console.log("\n3. Entradas (chave-valor):");
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`   ${chave}: ${valor}`);
});
console.log("---------------------------------------------------");

// -----BUSCA E VERIFICAÇÃO:-----
console.log("-----BUSCA E VERIFICAÇÃO:-----");
console.log("4. Tem propriedade 'idade'?", "idade" in pessoa); // true
console.log("4. Valor da cidade:", pessoa.cidade ?? "Não definido"); // "Não definido"
console.log("---------------------------------------------------");

// -----MESCLAGEM DE OBJETOS:-----
console.log("-----MESCLAGEM DE OBJETOS:-----");
const infoExtra = { cidade: "São Paulo", pais: "Brasil" };
const pessoaCompleta = { ...pessoa, ...infoExtra };
console.log("5. Objeto mesclado:", pessoaCompleta);
console.log("---------------------------------------------------");

// -----DESESTRUTURAÇÃO:-----
console.log("-----DESESTRUTURAÇÃO:-----");
const { nome, idade } = pessoa;
console.log("6. Desestruturação:", nome, idade);
console.log("---------------------------------------------------");

// -----OBJETOS ANINHADOS:-----
console.log("-----OBJETOS ANINHADOS:-----");
const empresa = {
  nome: "Tech Corp",
  funcionarios: [
    { nome: "Maria", cargo: "CEO" },
    { nome: "Carlos", cargo: "CTO" }
  ]
};
console.log("7. Cargo do primeiro funcionário:", empresa.funcionarios[0].cargo);
console.log("---------------------------------------------------");

// -----MÉTODOS DE OBJETO:-----
console.log("-----MÉTODOS DE OBJETO:-----");
const carro = {
  marca: "Ford",
  acelerar() {
    return `${this.marca} acelerando!`;
  }
};
console.log("8. Método acelerar:", carro.acelerar());
console.log("---------------------------------------------------");

// -----CÓPIA SEGURA (IMUTABILIDADE):-----
console.log("-----CÓPIA SEGURA:-----");
const original = { a: 1, b: 2 };
const copia = JSON.parse(JSON.stringify(original)); // Cópia profunda
copia.c = 3;
console.log("9. Original:", original);
console.log("9. Cópia modificada:", copia);
console.log("---------------------------------------------------");

// -----PROTÓTIPOS E HERANÇA:-----
console.log("-----HERANÇA:-----");
const animal = { tipo: "Desconhecido" };
const cachorro = Object.create(animal);
cachorro.latir = () => "Au au!";
console.log("10. Tipo do cachorro:", cachorro.tipo); // "Desconhecido"
console.log("10. Latido:", cachorro.latir());
console.log("---------------------------------------------------");

// -----CONVERSÃO PARA JSON:-----
console.log("-----CONVERSÃO PARA JSON:-----");
const dados = { id: 1, produto: "Celular" };
const jsonString = JSON.stringify(dados);
console.log("12. JSON string:", jsonString);
console.log("12. Objeto convertido:", JSON.parse(jsonString));
console.log("---------------------------------------------------");

// -----VERIFICAÇÃO DE TIPO:-----
console.log("-----VERIFICAÇÃO DE TIPO:-----");
console.log("13. É objeto?", typeof pessoa === "object" && !Array.isArray(pessoa)); // true
console.log("---------------------------------------------------");

// ===== FIM =====