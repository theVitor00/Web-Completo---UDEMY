/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const entregarNotas = function (valor) {
    const notas = [100, 50, 10, 5, 1]
    let retorno

    for(let i = 0; i < notas.length; i++) {
        if (valor == notas[i] && valor % notas[i] == 0) {
            retorno = notas[i]
        } else if (valor % notas[i] != 0) {
            while (valor % notas[i] != 0) {
                
            }
        }
    }
    return retorno
}

console.log(entregarNotas(10))