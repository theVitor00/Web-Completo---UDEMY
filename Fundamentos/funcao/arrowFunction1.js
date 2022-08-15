let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return está implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' // Possui um parâmetro
console.log(ola())