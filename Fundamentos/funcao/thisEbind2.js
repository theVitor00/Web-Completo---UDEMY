function Pessoa () {
    this.idade = 0

    const self = this       // Ao associar o self a uma constante, ele já não varia de acordo com quem chama
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa