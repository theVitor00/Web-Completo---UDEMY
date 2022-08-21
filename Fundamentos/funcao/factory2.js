function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2599.50))
console.log(criarProduto('iPad', 1700.00))