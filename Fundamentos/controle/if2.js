function teste1(num) {
    if(num > 7)
        console.log(num)    // sem as chaves delimitando o bloco, somente a primeira sentença pertence ao IF
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)