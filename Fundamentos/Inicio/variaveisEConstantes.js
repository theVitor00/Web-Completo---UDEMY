var a = 3; 
let b = 4;
/*
> Ao se declarar uma variável usando 'var', ela pode ser declarada novamente
> Ao se declara uma variável usando'let', ela não pode ser declarada novamente, mas seu valor pode ser alterado
em uma nova atribuição.
*/
var a = 30;
b = 40;

console.log(a, b);

const c = 5;
/*
constantes não podem ter seus valores alterados. Ao se colocar
c = 10 uma vez q ela já tenha sido alterada, irá gerar um erro.
É recomendável o uso de constantes caso seu valo não sofra mudança ao longo do código
*/
console.log(c);