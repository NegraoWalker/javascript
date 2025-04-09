// ===== FUNÇÕES EM JAVASCRIPT - EXEMPLOS PRÁTICOS =====

// -----DECLARAÇÃO DE FUNÇÕES:-----
console.log("-----DECLARAÇÃO DE FUNÇÕES:-----");
// 1. Função tradicional
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}
console.log("1. Área do retângulo:", calcularAreaRetangulo(5, 3)); // 15

// 2. Expressão de função
const calcularIMC = function(peso, altura) {
  return (peso / (altura ** 2)).toFixed(2);
};
console.log("2. IMC calculado:", calcularIMC(70, 1.75)); // "22.86"

// 3. Arrow function
const converterMoeda = (valor, cotacao) => valor * cotacao;
console.log("3. Conversão de USD para BRL:", converterMoeda(50, 5.37)); // 268.5
console.log("---------------------------------------------------");

// -----PARÂMETROS E ARGUMENTOS:-----
console.log("-----PARÂMETROS E ARGUMENTOS:-----");
// 4. Valores padrão
function saudacao(nome = "Visitante") {
  return `Bem-vindo, ${nome}!`;
}
console.log("4. Saudação padrão:", saudacao()); // "Bem-vindo, Visitante!"

// 5. Parâmetros Rest
function somar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}
console.log("5. Soma múltipla:", somar(2, 5, 10, 3)); // 20
console.log("---------------------------------------------------");

// -----RETORNO DE VALORES:-----
console.log("-----RETORNO DE VALORES:-----");
// 6. Retorno condicional
function podeDirigir(idade) {
  return idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
}
console.log("6. Verificação de idade 20:", podeDirigir(20)); // "Pode dirigir"

// 7. Retorno múltiplo (objeto)
function criarUsuario(nome, email) {
  return {
    nome,
    email,
    dataCadastro: new Date().toLocaleDateString()
  };
}
console.log("7. Usuário criado:", criarUsuario("Ana", "ana@email.com"));
console.log("---------------------------------------------------");

// -----FUNÇÕES DE ORDEM SUPERIOR:-----
console.log("-----FUNÇÕES DE ORDEM SUPERIOR:-----");
// 8. Função como parâmetro
function aplicarTaxa(valor, funcaoTaxa) {
  return funcaoTaxa(valor);
}

const taxaBrasil = valor => valor * 1.2;
console.log("8. Valor com taxa:", aplicarTaxa(100, taxaBrasil)); // 120

// 9. Função retornando função
function multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const dobrar = multiplicador(2);
console.log("9. Dobro de 8:", dobrar(8)); // 16
console.log("---------------------------------------------------");

// -----RECURSIVIDADE:-----
console.log("-----RECURSIVIDADE:-----");
// 10. Cálculo fatorial
function fatorial(n) {
  return n <= 1 ? 1 : n * fatorial(n - 1);
}
console.log("10. Fatorial de 5:", fatorial(5)); // 120
console.log("---------------------------------------------------");

// -----CLOSURES:-----
console.log("-----CLOSURES:-----");
// 11. Contador com estado privado
function criarContador() {
  let contagem = 0;
  return {
    incrementar: () => ++contagem,
    getContagem: () => contagem
  };
}

const contador = criarContador();
contador.incrementar();
contador.incrementar();
console.log("11. Contagem atual:", contador.getContagem()); // 2
console.log("---------------------------------------------------");

// -----CALLBACKS ASSÍNCRONOS:-----
console.log("-----CALLBACKS ASSÍNCRONOS:-----");
// 12. Simulação de requisição
function buscarDados(callback) {
  setTimeout(() => {
    callback({ id: 1, nome: "Dados simulados" });
  }, 2000);
}

console.log("12. Buscando dados...");
buscarDados(dados => console.log("   Dados recebidos:", dados));
console.log("---------------------------------------------------");

// -----IIFE (EXPRESSÃO DE FUNÇÃO IMEDIATA):-----
console.log("-----IIFE:-----");
// 13. Criação de escopo isolado
(function() {
  const versao = "1.0.0";
  console.log(`13. Versão do sistema: ${versao}`);
})();
console.log("---------------------------------------------------");

// -----MANIPULAÇÃO DE THIS:-----
console.log("-----MANIPULAÇÃO DE THIS:-----");
// 14. Usando bind
const pessoa = {
  nome: "Carlos",
  saudar: function() {
    return `Olá, eu sou ${this.nome}!`;
  }
};

const saudarCarlos = pessoa.saudar.bind(pessoa);
console.log("14. Saudação vinculada:", saudarCarlos()); // "Olá, eu sou Carlos!"
console.log("---------------------------------------------------");

// -----TRATAMENTO DE ERROS:-----
console.log("-----TRATAMENTO DE ERROS:-----");
// 15. Função com validação
function dividir(a, b) {
  if (b === 0) throw new Error("Divisão por zero!");
  return a / b;
}

try {
  console.log("15. Divisão segura:", dividir(10, 2)); // 5
  dividir(5, 0);
} catch (e) {
  console.log("15. Erro capturado:", e.message); // "Divisão por zero!"
}
console.log("---------------------------------------------------");

// -----FUNÇÕES GERADORAS:-----
console.log("-----FUNÇÕES GERADORAS:-----");
// 16. Sequência de Fibonacci
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const sequencia = fibonacci();
console.log("16. Sequência Fibonacci:");
console.log("   ", sequencia.next().value); // 0
console.log("   ", sequencia.next().value); // 1
console.log("   ", sequencia.next().value); // 1
console.log("   ", sequencia.next().value); // 2
console.log("---------------------------------------------------");

// ===== FIM =====