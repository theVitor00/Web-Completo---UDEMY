/*
CLOSURE - Esopo criado quando uma função é declarada.
Esse escopo permite à função acessar e manipular variáveis externas à função
*/

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())