// function declaration - são carregadas antes da linha onde elas são escritas e podem ser chamadas
function soma (x, y) {
    return x + y
}

// function expression - só podem ser chamadas depois da declaração, já q não são pré carregadas
const sub = function (x, y) {
    return x - y
}

// named function expression - mesmo caso da function expression
const mult = function mult (x, y) {
    return x * y
}