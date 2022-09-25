console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([2, 4, 6, 8, 10].first())
console.log(['Alpha', 'Beta', 'Gama', 'Delta'].first())