//Para String:
String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"

// Usando .toString() (não funciona para null/undefined)
(123).toString();   // "123"
false.toString();   // "false"

//Para Number:
Number("123");      // 123
Number("12.5");     // 12.5
Number(true);       // 1
Number(false);      // 0
Number("");         // 0 (string vazia)
Number("123abc");   // NaN (Not a Number)
Number(null);       // 0 
Number(undefined);  // NaN

// parseInt e parseFloat (extraem números de strings)
parseInt("123abc");    // 123
parseFloat("12.5px");  // 12.5

//Para Boolean:
Boolean("texto");   // true
Boolean("");        // false (string vazia)
Boolean(0);         // false
Boolean(10);        // true
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false

// Equivalente com !!
!!"texto";          // true
!!0;                // false