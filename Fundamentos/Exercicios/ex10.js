/* 
Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 retorne true ou false.
*/

const verificaDivisao = function (num) {
    let resultado = 0
    if (num.toFixed(0) % 3 == 0) {
        resultado = true
    } else {
        resultado = false
    }
    return `O número ${num} é divisível por Três: ${resultado}`
}

console.log(verificaDivisao(23))

