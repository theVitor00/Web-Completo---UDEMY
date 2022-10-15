/* 
Lidar com números em JavaScript pode dar uma dor de cabeça. Você já viu o que acontece quando faz o seguinte
comando no console: console.log(0.1 + 0.2); O resultdado será 0.30000000000000004. Outra coisa importante de se
observar, é o fato que o ponto é utilizado no lugar da vírgula, e vice-versa. Com isso, vamos fazer um exercício
simples para mostrar o dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba
um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)

*/

const aprox = function (valor) {
    return 'R$' + valor.toFixed(2).replace('.', ',')
}

console.log(aprox(0.30000000000000004))