const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);                // como está fora do comprimento da Array, o computador retorna "undefined".

valores[4] = 10;                        // adiciona o valor 10 no índice 4
console.log(valores);
console.log(valores.length)             // retorna o comprimento da Array

//Uma Array pode receber diferentes tipos de dados em JS através da função 'push()', apesar de não ser recomendável
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//Uma Array pode ter o último índice exibido através da função 'pop()'. Esse índice é excluído da Array.
console.log(valores.pop());

// 'delete' exclui o indice indicado, deixando ele vazio
delete valores[0];
console.log(valores);

console.log(typeof valores)