/* 
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho dos seus lados:
Equilátero: Os três lados são iguais; Isósceles: Dois lados iguais; Escaleno: todos os lados diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne a sua classificação quanto
ao tamanho dos seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/

const triangulo = function (a, b, c) {
    if (a == b && a == c) {
        console.log('Triângulo Equilátero.')
    } else if (a == b || b == c) {
        console.log('Triângulo Isósceles.')
    } else {
        console.log('Triângulo Escaleno.')
    }
    
}

triangulo(2, 4, 3)
