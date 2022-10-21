/* 
As regras para o cálculo dos anos bissextos são as seguintes:
- De 4 em 4 anos o ano é bissexto;
- De 100 em 100 anos o ano não é bissexto;
- De 400 em 400 anos o ano é bissexto;
- Prevalecem as últimas regras sobre as primeiras.

Partindo daí, elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando true ou false
*/

const isBissexto = function (ano) {
    let resposta

    if (ano % 400 == 0) {
        resposta = true
    } else if (ano % 100 == 0) {
        resposta = false
    } else if (ano % 4 == 0) {
        resposta = true
    } else {
        resposta = false
    }

    return `O Ano de ${ano} é Bissexto: ${resposta}`
}

console.log(isBissexto(1401))