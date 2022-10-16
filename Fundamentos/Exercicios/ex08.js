/* 
Pedro joga N jogos de basquete por temporda. Para saber como está progredindo, ele mantém registro de todas
as pontuações feitas por jogo. Após cada jogo, ele anota no novo valor e confere se o mesmo é maior ou menor que 
seu melhor e que seu pior desempenho.
Dada uma lista String = 'Pontuação1', 'Pontuação2', 'Pontuação3', etc. escreva uma função que ao recebê-la, irá
comparar os valores e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de
pontos e quando fez seu pior jogo. (número do pior jogo).
*/
const resultados = [5, 10, 12, 3, 46, 16, 50, 30]

const retornarAnalise = function (resultados) {
    for (let i = 0; i < resultados.length; i++){
        let controle = 0
        let recordes = 0

        if (resultados[i + 1] > resultados[i] && resultados[i + 1] > controle) {
            this.controle = resultados[i + 1]
            this.recordes++
        }
    }
    return this.controle, this.recordes
}

retornarAnalise(resultados, controle, recordes)