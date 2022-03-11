//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra) {
    let pal = palavra.split("").reverse().join("");
    if(pal === palavra) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
};
palindromo("arara");
palindromo("Rafael");
palindromo("natan");

// 2 //
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .
const arr1 =[2, 4, 0.1, 6, 7, 10, 0, -3];
const arr2 = [2, 3, 100, 6, 0, 7, 10, -50, 1];
function maiorValor(arr) {
    let maiorIndex;
    let maiorValue;
    for (i = 0; i<arr.length; i+=1) {
        if (arr[i]>maiorValue || i===0) {
            maiorIndex = i;
            maiorValue= arr[i];
        } else {}
    }
    return console.log(maiorIndex);
}
maiorValor(arr1);
maiorValor(arr2);

// 3 //
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(arr) {
    let menorIndex;
    let menorValue;
    for (i = 0; i<arr.length; i+=1) {
        if (arr[i]<menorValue || i === 0) {
            menorIndex = i;
            menorValue= arr[i];
        } else {}
    }
    return console.log(menorIndex);
}
menorValor(arr1);
menorValor(arr2);

// // 4 //
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
const arr3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(arr) {
    let maior = arr[0].split("");
    let local = arr[0].split("");
    for (i=0;i<arr.length; i+=1){
        local = arr[i].split("");
        if (local.length>maior.length) {
            maior = local;
        }
    }
    return console.log(maior.join(""));
}
maiorNome(arr3);

// 5 //
//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .
const arr4 =[2, 3, 2, 5, 8, 2, 3]; 
function numRepetido(arr) {
    let contadorGlobal = 0;
    let numeroRepetido = "Não temos números repetidos";
    for (i=0;i<arr.length;i+=1) {
        let contadorLocal = 0;
        for (z = 0;z<arr.length;z+=1){
            if (arr[i] === arr[z]) {
                contadorLocal += 1;
            }
        }
        if (contadorLocal>contadorGlobal) {
            numeroRepetido = arr[i];
            contadorGlobal=contadorLocal;
        }
    }
    return console.log(numeroRepetido);
}
numRepetido(arr4);

// 6 //
// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o 
//somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function numeroMaisAnteriores(n) {
    let resultado = n;
    for (i=n-1;i>0;i-= 1) {
        resultado += i;
    }
    return console.log(resultado);
}
numeroMaisAnteriores(5);

// 7 //
// Crie uma função que receba uma string word e outra string ending . 
//Verifique se a string ending é o final da string word . 
//Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
function verificaFimPalavra (palavra, finalDaPalavra) {
    return console.log(palavra.endsWith(finalDaPalavra));
}
verificaFimPalavra('trybe', 'be');
verificaFimPalavra('joaofernando', 'fernan');
// ou da maneira mais difícil //
function hardVerification(word, ending) {
    let sóFinal = word.slice(word.length-ending.length);
    if(sóFinal===ending){
        return console.log(true);
    } else {
        return console.log(false);
    }
}
hardVerification('trybe', 'be');
hardVerification('joaofernando', 'fernan');