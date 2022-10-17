/* 
Construa uma função para um sistema de uma instituição que possui a seguinte política de classificação: todo 
aluno recebe nota de 0 a 100. Alunos abaixo de 40 são reprovados. As notas possuem a seguinte regra de
arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar essa nota para
o próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na
reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser
abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a
nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

const avaliarNota = function (nota) {
    let resultado = ''
    this.nota = nota
    if (nota < 0 || nota > 100) {
        this.resultado = 'Nota Inválida!'
    } else if (nota < 38) {
        this.resultado = 'Aluno Reprovado!'
    } else if (nota >= 38 && nota < 40) {
        this.nota = 40
        this.resultado = 'Aluno Aprovado por aproximação!'
    } else if (nota >= 40) {
        if (nota % 5 < 3) {
            this.nota = nota - (nota % 5)
        } else if (nota % 5 > 7) {
            this.nota = nota + (nota % 5)
        }
        this.resultado = 'Aluno Aprovado!' 
    }
    return `Nota: ${this.nota}, Resultado: ${this.resultado}`
}

console.log(avaliarNota(88))