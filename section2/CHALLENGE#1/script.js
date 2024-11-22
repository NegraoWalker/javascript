let massMark, heightMark, massJohn, heightJohn;
let BMIMark, BMIJohn;
let markHigherBMI;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  markHigherBMI = true;
}

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
