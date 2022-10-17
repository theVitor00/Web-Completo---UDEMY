/* 
Pedro joga N jogos de basquete por temporda. Para saber como está progredindo, ele mantém registro de todas
as pontuações feitas por jogo. Após cada jogo, ele anota no novo valor e confere se o mesmo é maior ou menor que 
seu melhor e que seu pior desempenho.
Dada uma lista String = 'Pontuação1', 'Pontuação2', 'Pontuação3', etc. escreva uma função que ao recebê-la, irá
comparar os valores e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de
pontos e quando fez seu pior jogo. (número do pior jogo).
*/
const lista = [51, 10, 12, 3, 46, 16, 50, 30]

const retornarAnalise = function (resultados) {
  const resFinal = []

  for (let i = 1; i < resultados.length; i++) {
    if (resultados[i + 1] > resultados[i]) {
        let controle = resultados[i + 1]
    }    
    for (i = 1; i < resultados.length; i++) {
        if (resultados[i + 1] > this.controle) {
            resFinal.push(resultados[i + 1])
        } else {
            resFinal.push(this.controle)
        }
    }
    return resFinal
    }
}

console.log(retornarAnalise(lista))