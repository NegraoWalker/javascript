const string = "cadeira, mesa, sofá, armário";
const produtos = string.split(",");
produtos.splice(2, 1);
console.log(produtos);