//Como variável criado com 'let' só pode ser vista dentro do escopo local, o comando 'console.log(i)' fora das chaves gera um erro
for(let i = 0; i < 10; i++) {
    console.log(i)
}
//console.log("i =", i)