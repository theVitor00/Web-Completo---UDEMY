/*
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo

PLANO   |   AUMENTO
A           10%
B           15%
C           20%

Faça uma função que leia o plano e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use
a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const calculaSalario = function (plano, salAtual) {
    let controle
    let retorno

    if (plano == 'A' || plano == 'a') {
        controle = 1
    } else if (plano == 'B' || plano == 'b') {
        controle = 2
    } else if (plano == 'C' || plano == 'c') {
        controle = 3
    } else {
        controle = null
    }

    switch (controle) {
        case 1:
            retorno = `Salário Atual = ${salAtual.toFixed(2)} | Novo Salário = ${(salAtual + (salAtual * (10 / 100))).toFixed(2)}`
            break
        case 2:
            retorno = `Salário Atual = ${salAtual.toFixed(2)} | Novo Salário = ${(salAtual + (salAtual * (15 / 100))).toFixed(2)}`
            break
        case 3:
            retorno = `Salário Atual = ${salAtual.toFixed(2)} | Novo Salário = ${(salAtual + (salAtual * (20 / 100))).toFixed(2)}`
            break
        default:
            retorno = 'Plano de salário inexistente!'
    }
    return retorno
}

console.log(calculaSalario('a', 100))