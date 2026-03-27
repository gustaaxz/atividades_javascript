const prompt = require('prompt-sync')();

function contarVogais(str) {
    let contador = 0;
    const vogais = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    
    return contador;
}

let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto));
