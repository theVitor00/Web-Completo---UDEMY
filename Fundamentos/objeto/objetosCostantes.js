// pessoa -> 123 -> (...)
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)