const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Função callback q passamos para um forEach só recebe 3 parametros: nome, indice e aray
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)