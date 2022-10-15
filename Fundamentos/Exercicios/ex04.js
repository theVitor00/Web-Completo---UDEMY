/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão desses dois valores.
*/

const divisao = function (dividendo, divisor) {
    let div = dividendo / divisor
    let mod = dividendo % divisor

    return `O resultado da divisão é ${div}, com resto ${mod}`
}

console.log(divisao(5, 2))