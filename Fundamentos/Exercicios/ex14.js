/* 
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três caso:
Caso maçã, retorne no console "Não vendemos essa fruta aqui". Caso kiwi, retorne "Estamos com escassez de kiwis".
Caso melancia, retorne "Aqui está! São 3 reais o quilo". Teste com essas três opções. Crie também um default, que
retornará uma mensagem de erro no console.
*/

const analisarFruta = function (fruta) {
    let resposta
    let retorno
    if(fruta == 'Maçã' || fruta == 'maçã' || fruta == 'maca') {
        resposta = 1
    } else if (fruta == 'Kiwi' || fruta == 'kiwi') {
        resposta = 2
    } else if (fruta == 'Melancia' || fruta == 'melancia') {
        resposta = 3
    } else {
        resposta = null
    }

    switch (resposta) {
        case 1:
            retorno = 'Não vendemos essa fruta aqui.'
            break
        case 2:
            retorno = 'Estamos com escassez de Kiwi.'
            break
        case 3:
            retorno = 'Aqui está! São 3 reais o quilo!'
            break
        default:
            retorno = 'Produto Inválido!'

    }
    return retorno
}

console.log(analisarFruta('Abacate'))