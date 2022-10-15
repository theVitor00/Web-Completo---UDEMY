/* 
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore
uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parametros:
"aX²", "bX" e "c", de tal modo que na equação 3X² - 5x + 12 os valores seriam respectivamente 3, -5 e 12.
Como retorno deve ser passao um vetor que tem 2 valores, um para cada resultado possível, mesmo que os resultados
sejam iguais. Caso o Delta seja negativo, retorne ao invés do vetor, uma string com a frase:
"Delta é negativo".
*/

const bhaskara = function (a, b, c) {  
    let delta = Math.pow(b, 2) - (4 * a * c)
    if (delta < 0) {
        console.log('Delta é Negativo.')
    } else {
        const resultado = []
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        resultado.push(x1)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        resultado.push(x2)

        console.log('Os valores de X\' e X\'\' são respectivamente', resultado)       
    }
}

bhaskara(1, -14, 49)