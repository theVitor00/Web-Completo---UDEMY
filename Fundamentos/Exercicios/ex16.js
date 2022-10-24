/* 
Utilizando a estutura Switch, faça um progama que simule uma calculadora básica. O programa recebe como parametros
dois valores numéricos e uma string referente à operação e realize com os valores numéricos na ordem em que foram
inseridos. Por exemplo calculadora(2 '+' 3). A função efetuará a soma de 2 e 3. Os sinais das operações são '+',
'-', '*', '/'. Crie um caso Default para operações inválidas.
*/

const calculadora = function (num1, operacao, num2) {
    let op
    let retorno
    
    if (operacao == '+') {
        op = 1
    } else if (operacao == '-') {
        op = 2
    } else if (operacao == '*') {
        op = 3
    } else if (operacao == '/') {
        op = 4
    } else {
        op = null
    }

    switch (op) {
        case 1:
            retorno = `${num1} + ${num2} = ${num1 + num2}`
            break
        case 2:
            retorno = `${num1} - ${num2} = ${num1 - num2}`
            break
        case 3:
            retorno = `${num1} x ${num2} = ${num1 * num2}`
            break
        case 4:
            retorno = `${num1} % ${num2} = ${num1 / num2}`
            break
        default:
            retorno = 'Operação Invalida!'
            break
    }
    return retorno
}

console.log(calculadora(2, '*', 3))