/* O cardápio de uma lanchonete é o seguinte:

CÓDIGO      DESCRIÇÃO DO PRODUTO             PREÇO
100           Cachorro Quente                R$ 3,00
200           Hambúrguer Simples             R$ 4,00
300             Cheeseburguer                R$ 5,50
400                 Bauru                    R$ 7,50
500             Refrigerante                 R$ 3,50
600                  Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

console.log('CÓDIGO     DESCRIÇÃO DO PRODUTO       PREÇO\n')
console.log('100           Cachorro Quente        R$3,00')
console.log('200          Hambúrguer Simples      R$4,00')
console.log('300            Cheeseburguer         R$5,50')
console.log('400                Bauru             R$7,50')
console.log('500             Refrigerante         R$3,50')
console.log('600                 Suco             R$2,80')
console.log('___________________________________________\n')

const escolherProduto = function (cod, qtd) {
    let retorno
    switch (cod) {
        case 100:
            retorno = `${qtd} x CACHORRO QUENTE = R$${(qtd * 3.00).toFixed(2)}`
            break
        case 200:
            retorno = `${qtd} x HAMBÚRGUER SIMPLES = R$${(qtd * 4.00).toFixed(2)}`
            break
        case 300:
            retorno = `${qtd} x CHEESEBURGUER = R$${(qtd * 5.50).toFixed(2)}`
            break
        case 400:
            retorno = `${qtd} x BAURU = R$${(qtd * 7.50).toFixed(2)}`
            break
        case 500:
            retorno = `${qtd} x REFRIGERANTE = R$${(qtd * 3.50).toFixed(2)}`
            break
        case 600:
            retorno = `${qtd} x SUCO = R$${(qtd * 2.80).toFixed(2)}`
            break
        default:
            retorno = `Código ${cod} não cadastrado!`
    }
    return retorno
}

console.log(escolherProduto(700, 3))