console.log(7/0);               // --- Divisão por Zero retorna "Infinity"
console.log(typeof Infinity);
console.log("10" / 2);          // --- String numéricas são convertidas automaticamente durante operações
console.log("3" + 2);           // --- A string tem preferência na operação, e o compilador concatena
console.log("3" - 2);           // --- Subtração não faz sentido na operação com strings, então é realizada a operação numérica    
console.log("Show!" * 2);       // --- Retorna "Not a Number", ou simplesmente NaN
console.log(typeof NaN);
console.log(0.1 + 0.7);         // --- Soma bugada. Pesquisar a respeito
//console.log(10.toString()) - retorna um erro
console.log((10.345).toFixed(2))
