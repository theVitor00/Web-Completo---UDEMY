let valor // Variável não inicializada
console.log(valor) // retorna undefined

valor = null // Ausência de valor ou endrereçamento de memória
console.log(valor) // Retorna nulo

//Valores nulos ou undefined não sofrem alterações através de funcções, como por exemplo,  .toString(), portanto retorenam erro

const produto = {}
console.log(produto.preco) // Retorna undefined, já que o Atributo não foi definido
console.log(produto)       // Retorna as chaves vazias, já que nenhum atributo foi definido

produto.preco = 3.50
console.log(produto)       // Como aqui foi definido um atributo e seu valor, já retorna o conteúdo do objeto

produto.preco = undefined  // Não é uma boa prática atribuir valor undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null        // Sem preço
console.log(!!produto.preco)
console.log(produto)