function teste1(num) {
    if(num > 7)
        console.log(num)    // sem as chaves delimitando o bloco, somente a primeira sentença pertence ao IF
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {      // Não usar ponto e virgula com as estrutura de controle
    if(num > 7); {          // Elas indicam sentenças de códigos vazias nesse contexto.
        console.log(num)
    }
}

teste2(6)
teste2(8)