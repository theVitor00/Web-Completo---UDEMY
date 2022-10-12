const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no fim da Array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no índice zero da Array
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // primeiro numero indica o indice onde será adicionado. 
console.log(pilotos)

//remover
pilotos.splice(3, 1) // o segundo numero indica quantos elementos seráo removidos a partir do índice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera uma nova Array a partir do índice indicado entre parentesis
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gera uma nova Array a partir do índice até o segundo numero indicado -1
console.log(algunsPilotos2)