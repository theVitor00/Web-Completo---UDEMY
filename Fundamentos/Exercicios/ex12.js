/* 
Faça um algoritmo que calcule o fatorial de um número.
*/

const calculaFatorial = function (num) {
    let fatorial = 1
    let controle = num
    for (let i = num; i >= 1; i--) {
        fatorial = fatorial * controle
        controle -= 1
    }
    return `${num}! = ${fatorial}`
}

console.log(calculaFatorial(5))