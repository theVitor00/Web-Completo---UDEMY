// Variáveis declardas com 'var' são "visíveis" fora do bloco de código. Escopo global
{
    {
        {
            {
                var sera = 'Será????'
            }
        }
    }  
}
console.log(sera)  

// Variaveis declaradas com 'var' dentro de uma função só é visível dentro da função. Escopo local 
function teste () {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) --- Tentar acessar uma variável de função fora dela irá resultar em erro

// VARIÁVEIS CRIADAS FORA DE FUNÇÕES SÃO CONSIDERADAS VARIÁVEIS GLOBAIS
// Uso de muitas variáveis globais devem ser evitadas em javascript