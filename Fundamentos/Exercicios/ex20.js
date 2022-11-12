/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const entregarNotas = function (valor) {
    let total = valor
    let cedula = 100
    let notas = 0

    while (total != 0) {
        total -= cedula
        notas += 1

        if (total < cedula) {
            console.log(`${notas} notas de R$${cedula}`)
            notas = 0
            cedula = 50
        } else if (cedula == 50) {
            notas = 0
            cedula = 10
        } else if (cedula == 5){
            notas = 0
            cedula = 1
        }
    }
}

console.log(entregarNotas(345))