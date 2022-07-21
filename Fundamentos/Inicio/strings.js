const escola = "Cod3r";

console.log(escola.charAt(4)); // --- charAt percorre a string e retona o caractere no índice apontado entre parentesis
console.log(escola.charAt(5)); // --- Caso o índice esteja fora do comprimento da String, o console retorna vazio ao invés de um erro
console.log(escola.charCodeAt(3)); // --- Exibe o valor unicode na tabela ASCII do caracter no índice apontado
console.log(escola.indexOf('3')) // --- Busca e retorna o indice do valor exibido entre parentesis, caso ele exista
console.log(escola.substring(1)); // --- Exibe a string a partir do índice indicado entre parenteses
console.log(escola.substring(0, 3)) // --- Exibe a string no intervalo indicado no índice
console.log("Escola ".concat(escola).concat("!")); // --- concatena cadeias de strings armazenadas em literais ou variáveis
console.log(escola.replace(3, "e")); // --- Substitui o caractere na posição indicada pelo caractere entre aspas
console.log(escola.replace(/\w/g, "e")) // --- regex. pesquisar a respeito. 
console.log("Ana,Maria,Pedro,Monalisa".split(",")); // --- Separa a string em Arrays a partir de uma referência entre parentesis