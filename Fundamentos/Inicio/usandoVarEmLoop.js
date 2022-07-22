// Quando dentro de um laço, ao acessar uma variável declarada com var fora dele irá resultar no valor que quebrou a repetição

for(var i = 0; i < 10; i++) {
    console.log(i)
}
console.log("i = ", i)

/*
Como a condição especifica i < 10, o valor 10 resultará na quebra do laço.
Assim sento, ao acessar a variável 'i' fora do laço obterá como resultado esse 10
*/