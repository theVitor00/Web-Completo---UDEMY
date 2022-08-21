function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // Chamando a função diretamente
console.log(produto.getPreco()) // chamando a partir de um objeto

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // chamando por call, é possivel modificar os parametros
console.log(getPreco.apply(carro, [0.19, '$'])) // chamando por apply, os parametros são modificados num array