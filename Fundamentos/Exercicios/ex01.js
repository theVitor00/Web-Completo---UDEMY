/*
Crie uma função que dado dos valores (passados como parâmetros) mostre no console a soma, subtração
multiplicação e divisão desses valores
*/

const calculadora = function (num1, num2) {
    soma = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = (num1 / num2).toFixed(2)

    return `Soma = ${soma}, Subtração = ${subtracao}, Multiplicação = ${multiplicacao}, Divisão = ${divisao}`
}

console.log(calculadora(5, 6))