/* 
Elabore duas funções que recebam três parâmetros: Capital Inicial, Taxa de Juros e Tempo de Aplicação. A primeira
função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor
da aplicação sob o regime de juros compostos
*/

const jurosSimples = function (capInicial, txJuros, tmpAplicacao) {
    let montanteFinal = (capInicial + ((txJuros / 100) * capInicial) * tmpAplicacao)
    return `${capInicial}R$ numa taxa de ${txJuros}% a.d. gera um total de ${montanteFinal}R$ em ${tmpAplicacao} dias.`
}

console.log('--- JUROS SIMPLES ---')
console.log(jurosSimples(100, 5, 10), '\n')

const jurosCompostos = function (capInicial, txJuros, tmpAplicacao) {
    let montanteFinal = capInicial * (( 1 + (txJuros / 100) ) ** tmpAplicacao)
    return `${capInicial}R$ numa taxa de ${txJuros}% a.d. gera um total de ${montanteFinal.toFixed(2)}R$ em ${tmpAplicacao} dias.`

}

console.log('--- JUROS COMPOSTOS ---')
console.log(jurosCompostos(100, 5, 10), '\n')