//Definição do objeto
const prod1 = {};  
//Adicionando produtos ao objeto
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1["Desconto Legal"] = 0.40; // evitar atributos com espaço

console.log(prod1);

//Outra maneira de definir objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

/*
{
    //Isso é um JSON
    '{nome: "Camisa Polo", preco: "79.90"}'
}
*/

console.log(prod2);