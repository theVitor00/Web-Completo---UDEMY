// Hoisting = içamento. Ato de dar prioridade ou preferência quando usando 'var' para declara variáveis
// Ao usar 'let', gera um erro

console.log("a =", a)
var a = 2
console.log("a =", a)

/*
NA PRÁTICA, ACONTECE DA SEGUINTE FORMA:

var a
console.log("a =", a)
a = 2
console.log("a =", a)

*/