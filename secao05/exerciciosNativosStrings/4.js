let string1 = "cadeira, mesa, sofá, armário";
let array1 = string1.split(", ");
array1 = array1.filter((produto) => produto !== "sofá");

console.log(array1);
