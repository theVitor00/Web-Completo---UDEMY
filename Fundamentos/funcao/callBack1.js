const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  

/* A função 'forEach' executa chamados de outra função de acordo com os valores
armazenados em uma Array.
No exemplo acima, foi criado uma Array chamada 'frabricantes', logo depois uma função
'imprimir', que iria receber os nomes e os indices nessa array e retornar para o console.
Por fim, no comando final, foi chamada a função 'forEach()' na Array 'fabricantes' usando como
parametro a função 'imprimir()'
*/

fabricantes.forEach(function(a) {
    console.log(a)
})