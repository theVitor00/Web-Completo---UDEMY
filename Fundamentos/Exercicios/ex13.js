/* 
Crie um programa que exibe se um dia é útil, fim de semana ou dia inválido dado o nome referente ao dia. Considere
que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura switch
*/

const analisarDia = function (dia) {
    let resposta
    switch (dia) {
        case 1:
        case 7:
            resposta = 'Fim de Semana!'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            resposta = 'Dia Útil!'
            break
        default:
            resposta = 'Dia Inválido!'
            break
    }
    return resposta
}

console.log(analisarDia(55))