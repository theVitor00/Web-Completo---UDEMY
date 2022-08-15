const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/*
Neste ultimo exemplo, o método 'Bind' faz a ligação entre entre o método 'falar' do objeto 'pessoa',
com a constante 'falarDePessoa' criado posteriormente, chamando assim a função 'falar()'
*/