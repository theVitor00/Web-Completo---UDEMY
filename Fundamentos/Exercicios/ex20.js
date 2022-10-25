/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const entregarNotas = function (valor) {
    let retorno
    let controle
    if (valor % 5 == 0 || valor == 1) {
        retorno = `1 nota de R$${valor.toFixed(2)}`
    } else if (valor % 5 != 0 && valor != 1) {
        controle = valor - (valor % 5)
        retorno = controle
    }
    return retorno
}

console.log(entregarNotas(11))