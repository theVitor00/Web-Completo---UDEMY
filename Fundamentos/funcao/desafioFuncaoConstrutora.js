function Pessoa (nome) {
    this.nome = function () {
        alguem = this.nome
        return alguem
    }
}

const a = new Pessoa ()
a.alguem('Pedro')
console.log(a)

