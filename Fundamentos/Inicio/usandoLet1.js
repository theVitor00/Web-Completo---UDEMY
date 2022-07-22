/*
Variáveis criadas com 'let' possuem escopo local em blocos de código, função e escopo global, e não são visíveis fora das chaves
*/
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)