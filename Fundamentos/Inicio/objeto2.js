console.log(typeof Object)        //Função
console.log(typeof new Object)    //Objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES20 15 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)

// new é usado para instanciar uma função como objeto