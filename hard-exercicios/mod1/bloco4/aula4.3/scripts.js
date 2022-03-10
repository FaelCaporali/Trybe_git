// ex1 //
let numInicial = 10;
let result = numInicial;
for (let i = numInicial; i>0; i-=1) {
    if (i-1 == 0) {
        result = result;
    }
    else {
        result *= (i-1);
    }
}
console.log(result);
// ex2 //
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra 
//"banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por 
//outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = "banana";
let letras =[];
let final = "";
for (let i = 0; i<palavra.length;i+=1) {
    letras.unshift(palavra[i]);
}
for (let i =0; i<palavra.length;i+=1) {
    final += letras[i];
}
console.log(final);

// ex3 //
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0]; 
for (let i =0; i<array.length;i+=1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    } else {}
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    } else {}
}
console.log("A maior palavra é ", maiorPalavra,". Já a menor palavra é ", menorPalavra);

// ex4 //
// Um número primo é aquele divisível apenas por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;
for (let i=50; i>0; i-=1){
    for (let z = (i-1); z>1;z-=1){
        if (i%z !== 0) {
            maiorPrimo = i;
        } else {
            maiorPrimo = 0;
            break;
        }
    }
    if (maiorPrimo !== 0) {
        break;
    }
}
console.log(maiorPrimo);
// bonus //
// 1- Agora vamos trabalhar com algumas formas geométricas! 
//Faça um programa que, dado um valor n qualquer, seja n > 1 , 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
//n = 5
//*****
//*****
//*****
//*****
//*****

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
//retângulo com 5 asteriscos de base.

//3- Agora inverta o lado do triângulo.

//4- Depois, faça uma pirâmide com n asteriscos de base:

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
//Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados 
//em algum lugar.