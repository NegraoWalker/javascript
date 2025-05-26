console.log("=================================================================================================");
// Propriedade length: Retorna o número de caracteres da string
const texto = "JavaScript é incrível!";
console.log("Uso da propriedade length - qtd de caracteres: " + texto.length);

console.log("=================================================================================================");
// Método charAt: Retorna o caractere na posição especificada
console.log("Uso do método charAt - caractere na posição 0: " + texto.charAt(0));

console.log("=================================================================================================");
// Método indexOf: Retorna o índice da primeira ocorrência da substring ou -1 se não encontrada
console.log("Uso do método indexOf - posição de 'Script': " + texto.indexOf("Script"));

console.log("=================================================================================================");
// Método lastIndexOf: Retorna o índice da última ocorrência da substring
console.log("Uso do método lastIndexOf - última posição de 'a': " + texto.lastIndexOf("a"));

console.log("=================================================================================================");
// Método substring: Retorna uma parte da string entre os índices especificados (o índice final não é incluído)
console.log("Uso do método substring - trecho de 4 a 10: " + texto.substring(4, 10));

console.log("=================================================================================================");
// Método slice: Similar ao substring(), mas aceita índices negativos
console.log("Uso do método slice - últimos 9 caracteres: " + texto.slice(-9));

console.log("=================================================================================================");
// Método replace: Substitui a primeira ocorrência de um valor por outro
console.log("Uso do método replace - trocando 'Java' por 'Type': " + texto.replace("Java", "Type"));

console.log("=================================================================================================");
// Método toUpperCase: Converte todos os caracteres para maiúsculas
console.log("Uso do método toUpperCase - texto em maiúsculas: " + texto.toUpperCase());

console.log("=================================================================================================");
// Método toLowerCase: Converte todos os caracteres para minúsculas
console.log("Uso do método toLowerCase - texto em minúsculas: " + texto.toLowerCase());

console.log("=================================================================================================");
// Método trim: Remove espaços em branco do início e do fim da string
const espacos = "  Olá, mundo!  ";
console.log("Uso do método trim - sem espaços extras: " + espacos.trim());

console.log("=================================================================================================");
// Método split: Divide a string em um array de substrings usando o separador informado
console.log("Uso do método split - dividindo a frase em palavras: ", texto.split(" "));

console.log("=================================================================================================");
// Método includes: Retorna true se a string contiver o valor especificado
console.log("Uso do método includes - contém 'incrível'?: " + texto.includes("incrível"));

console.log("=================================================================================================");
// Método startsWith: Verifica se a string começa com o valor especificado
console.log("Uso do método startsWith - começa com 'Java'?: " + texto.startsWith("Java"));

console.log("=================================================================================================");
// Método endsWith: Verifica se a string termina com o valor especificado
console.log("Uso do método endsWith - termina com 'incrível!'?: " + texto.endsWith("incrível!"));

console.log("=================================================================================================");
// Método repeat: Retorna uma nova string com o conteúdo repetido o número de vezes especificado
console.log("Uso do método repeat - repetindo 'Oi!' 3 vezes: " + "Oi! ".repeat(3));

console.log("=================================================================================================");
// Método padStart: Preenche o início da string até atingir o tamanho desejado
console.log("Uso do método padStart - preenchendo '42' com zeros: " + "42".padStart(5, "0"));

console.log("=================================================================================================");
// Método padEnd: Preenche o fim da string até atingir o tamanho desejado
console.log("Uso do método padEnd - preenchendo '42' com espaços: " + "42".padEnd(5, " "));
