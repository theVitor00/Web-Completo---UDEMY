//Função que recebe dados e não retorna nada
function imprimirSoma(a, b) {
    console.log(a +b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Como um dos parâmetros está undefined, o resultado será 'Not a Number', ou simplesmente NaN
imprimirSoma(2, 10, 5, 6, 7) // Se existir vários parâmetros, ela só irá executar os paraâmetros definidos na função
imprimirSoma() //Sem dados, o resultado também será NaN

// Função que recebe dados e dá um retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
soma()
console.log(soma(2))