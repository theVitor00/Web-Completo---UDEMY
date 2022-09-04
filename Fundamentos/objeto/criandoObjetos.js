// usando a notação literal
const obj = {}
console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2.999, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Monalisa', 4300.5, 0)
const f2 = criarFuncionario('Pablo', 1300, 0)
const f3 = criarFuncionario('Shirley', 2300, 1)

console.log(f1.nome, "-", f1.getSalario())
console.log(f2.nome, "-", f2.getSalario())
console.log(f3.nome, "-", f3.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Monalisa'
console.log(filha)

// Uma função famosa que retorna Objetos...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)