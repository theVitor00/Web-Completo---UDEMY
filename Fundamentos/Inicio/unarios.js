let num1 = 1
let num2 = 2

num1++      // Pós Fixada
console.log(num1)
--num1      // Pré Fixada - possui prioridade
console.log(num1)

console.log(++num1 === num2--)
/*
Neste console.log, são executadas 3 operações, que seguem a seguinte ordem de precedência:
    1 - ++num1 > Essa operação é executada primeiro, pois é pré-fixada e tem prioridade;
    2 - ===    > Essa operação é executada em segundo;
    3 - num--  > Essa Operação é executada por último, porque é pós-fixada e executada com menor prioridade.
*/
console.log(num1 === num2)

// Obs: Manter o código simples. Evitar usar incremento dentro de expressões lógicas