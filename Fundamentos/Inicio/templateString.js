// Concatenação regular
const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
console.log(concatenacao);

// Concatenação por Template String com quebra de linha
const template = `
    Olá 
    ${nome}!`
console.log(template);

//Concatenação por Template String sem quebra de linha
const template2 = `Olá ${nome}!`;
console.log(template2);

// Expressões matemáticas dentro de Template String
console.log(`1 + 1 = ${1 + 1}`)

// Funções com Template String
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`);

/*
Template Strings são delimitadas por acento crase, ou backchick(?) e as variáveis são chamadas por ${variável}
*/