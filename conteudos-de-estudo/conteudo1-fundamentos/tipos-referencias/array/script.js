// ===== ARRAYS EM JAVASCRIPT - EXEMPLOS PRÁTICOS =====

// -----CRIANDO E ACESSANDO ARRAYS:-----
console.log("-----CRIANDO E ACESSANDO ARRAYS:-----");
let frutas = ["Maçã", "Banana", "Laranja"];
console.log("1. Primeira fruta:", frutas[0]); // "Maçã"
console.log("---------------------------------------------------");

// -----MÉTODOS PARA ADICIONAR/REMOVER:-----
console.log("-----MÉTODOS PARA ADICIONAR/REMOVER:-----");
frutas.push("Uva");
console.log("2. Após push:", frutas); 

frutas.pop();
console.log("2. Após pop:", frutas);

frutas.unshift("Morango");
console.log("2. Após unshift:", frutas);

frutas.shift();
console.log("2. Após shift:", frutas);
console.log("---------------------------------------------------");

// -----ITERAÇÃO SOBRE ELEMENTOS:-----
console.log("-----ITERAÇÃO SOBRE ELEMENTOS:-----");
const produtos = ["Camisa", "Calça", "Tênis"];
console.log("3. Iteração com for...of:");
for (const produto of produtos) {
  console.log(`   Produto: ${produto}`);
}

console.log("\n3. Iteração com forEach():");
frutas.forEach((fruta, indice) => {
  console.log(`   ${indice + 1}. ${fruta}`);
});

console.log("\n3. Transformação com map():");
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log("   Frutas em maiúsculas:", frutasMaiusculas);
console.log("---------------------------------------------------");

// -----BUSCA E FILTRAGEM:-----
console.log("-----BUSCA E FILTRAGEM:-----");
console.log("4. Índice da Banana:", frutas.indexOf("Banana")); // 1
console.log("4. Existe Maçã?", frutas.includes("Maçã")); // true

let numeros = [10, 20, 30, 40];
let pares = numeros.filter(num => num % 2 === 0);
console.log("4. Números pares:", pares);
console.log("---------------------------------------------------");

// -----REDUÇÃO E CÁLCULOS:-----
console.log("-----REDUÇÃO E CÁLCULOS:-----");
let total = numeros.reduce((acc, num) => acc + num, 0);
console.log("5. Soma total:", total);
console.log("---------------------------------------------------");

// -----ARRAYS DE OBJETOS (DADOS COMPLEXOS):-----
console.log("-----ARRAYS DE OBJETOS (DADOS COMPLEXOS):-----");
let clientes = [
  { id: 1, nome: "Ana", idade: 30 },
  { id: 2, nome: "Lucas", idade: 25 },
  { id: 3, nome: "Maria", idade: 35 }
];

let nomesClientes = clientes.map(cliente => cliente.nome);
console.log("6. Nomes dos clientes:", nomesClientes);

let clientesAcima30 = clientes.filter(cliente => cliente.idade >= 30);
console.log("6. Clientes acima de 30:", clientesAcima30);
console.log("---------------------------------------------------");

// -----ORDENAÇÃO:-----
console.log("-----ORDENAÇÃO:-----");
let palavras = ["zebra", "abelha", "macaco"];
palavras.sort();
console.log("7. Ordem alfabética:", palavras);

let numerosDesordenados = [40, 1, 5, 200];
numerosDesordenados.sort((a, b) => a - b);
console.log("7. Números ordenados:", numerosDesordenados);
console.log("---------------------------------------------------");

// -----COMBINAÇÃO DE ARRAYS:-----
console.log("-----COMBINAÇÃO DE ARRAYS:-----");
let vegetais = ["Cenoura", "Brócolis"];
let alimentos = [...frutas, ...vegetais];
console.log("8. Alimentos combinados:", alimentos);
console.log("---------------------------------------------------");

// -----CONVERSÃO PARA STRING:-----
console.log("-----CONVERSÃO PARA STRING:-----");
let meses = ["Jan", "Fev", "Mar"];
console.log("9. String formatada:", meses.join(" - "));
console.log("---------------------------------------------------");

// -----PILHA E FILA (ESTRUTURAS DE DADOS):-----
console.log("-----PILHA E FILA (ESTRUTURAS DE DADOS):-----");
let pilha = [];
pilha.push("A");
pilha.push("B");
console.log("10. Pilha pop:", pilha.pop());

let fila = [];
fila.push("A");
fila.push("B");
console.log("10. Fila shift:", fila.shift());
console.log("---------------------------------------------------");

// -----DESESTRUTURAÇÃO:-----
console.log("-----DESESTRUTURAÇÃO:-----");
let coordenadas = [10, 20, 30];
let [x, y, z] = coordenadas;
console.log("11. Desestruturação:", x, y, z);
console.log("---------------------------------------------------");

// -----CÓPIA SEGURA DE ARRAY:-----
console.log("-----CÓPIA SEGURA DE ARRAY:-----");
let original = [1, 2, 3];
let copia = [...original];
copia.push(4);
console.log("12. Original:", original);
console.log("12. Cópia:", copia);
console.log("---------------------------------------------------");

// -----VERIFICAÇÃO DE TIPO:-----
console.log("-----VERIFICAÇÃO DE TIPO:-----");
console.log("13. É array?", Array.isArray(frutas));
console.log("---------------------------------------------------");

// ===== FIM =====