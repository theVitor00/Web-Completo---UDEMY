/* como 'var' gera uma variável de escopo global, blocos de código não impedem acesso ao valor armazenado, 
   permitindo a mudança em qualquer parte do código 
*/

var numero = 1
{
    var numero = 2
    console.log('dentro = ', + numero)
}
console.log('fora = ', + numero)