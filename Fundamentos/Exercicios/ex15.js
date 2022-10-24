/* 
Um homem decidiu ir a uma revenda comprar um carro. Ele deseja comprar um carro Hatch, e a revenda possui, além
de carros Hatch, Sedan, Caminhonetes e Motocicletas. Utilizado uma estrutura switch, caso o comprador queira o 
Hatch, retorne "Compra efetuada com sucesso". Nas outras, retorne "Tem certeza que não prefere esse modelo?". 
Caso seja especificado um modelo que não está disponível, retorne "Não trabalhamos com este tipo de automóvel."
*/

const comprarCarro = function (modelo) {
    let controle
    let resposta
    if (modelo == 'Hatch') {
        controle = 1
    } else if (modelo == 'Sedan' || modelo == 'Caminhonete' || modelo == 'Motocicleta') {
        controle = 2
    } else {
        controle = null
    }

    switch (controle) {
        case 1:
            resposta = 'Compra efetuada com sucesso!'
            break
        case 2:
            resposta = 'Tem certeza que não prefere este modelo?'
            break
        default:
            resposta = 'Não trabalhamos com este modelo de automóvel.'
            break
    }
    return resposta
}

console.log(comprarCarro('Caminhao'))