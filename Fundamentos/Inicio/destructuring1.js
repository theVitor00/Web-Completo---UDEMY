// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// O  Operador Destructuring traz para fora atributos de um objeto, e é representada pelas chaves antes da atribuição
// Exemplo: let { atributosAseremRetirados } = nomeDoObjeto

const { nome, idade } = pessoa        // --- Usando os mesmos nomes de atributo fora do objeto
console.log(nome, idade)

const { nome: n, idade: i, } = pessoa // --- Atribuindo novos nos atributos fora do objeto
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // --- Chamando atributos inexistentes no objeto
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa // --- Chamando objetos dentro de objetos
console.log(logradouro, numero, cep)