/* 
TRADUÇÃO DA FUNÇÃO

A função 'resultado' vai receber o parâmetro 'nota' e analisá-lo
Se nota for maior ou igual a 7 (nota >= 7), irá retornar 'Aprovado';
Caso não seja, irá retornar 'Reprovado'.

O Operador Ternário é uma versão reduzida da estrutura if/else
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))