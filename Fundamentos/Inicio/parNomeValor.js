// Par nome/valor
const saudacao = 'Opa'       // contexto lexico 1

function exec() {
    const saudacao = 'Fala'  // contexto lexico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua das Cabras',
        numero: 23
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)