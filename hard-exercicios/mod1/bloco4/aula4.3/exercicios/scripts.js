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
let n = 5;
if (n<1) {
    console.log("Insira um número inteiro maior que 0!")
} else {
    let quadradoDeAsteríscos = [];
    for (let i = 0; i<n; i+=1) {
        for (let z=0; z<n; z+=1){
            quadradoDeAsteríscos.push("*");
        }
        quadradoDeAsteríscos.push("\n");
    }
    console.log(quadradoDeAsteríscos.join(""));
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
//retângulo com 5 asteriscos de base.
let n =5;
if (n<1) {
    console.log("Insira um número inteiro maior que 0!")
} else {
    let quadradoDeAsteríscos = [];
    for (let i = 0; i<=n; i+=1) {
        for (let z = 0;z<i;z+=1){
            quadradoDeAsteríscos.push("*");
        }
        quadradoDeAsteríscos.push("\n");
    }
    console.log(quadradoDeAsteríscos.join(""));
}

//3- Agora inverta o lado do triângulo.

let n =5;
if (n<1) {
    console.log("Insira um número inteiro maior que 0!")
} else {
    let quadradoDeAsteríscos = [];
    for (let i = 0; i<=n; i+=1) {
        for (let z = n;z>0;z-=1){
            if (z>i){
                quadradoDeAsteríscos.push("");
            }else {
                quadradoDeAsteríscos.push("*");
            }        }
        quadradoDeAsteríscos.push("\n");
    }
    console.log(quadradoDeAsteríscos.join(""));
}

//4- Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
if (n<1) {
    console.log("Insira um número inteiro maior que 0!")
} else {
    let quadradoDeAsteríscos = [];
    for (let i = 1; i<=n; i+=1) {
        if(i%2!=0){
            for (let z=1; z<=n; z+=1){
                if(z<=(n-i)/2 || z>i+((n-i)/2)) {
                    quadradoDeAsteríscos.push(" ");
                } else {
                    quadradoDeAsteríscos.push("*");
                }
            }
            quadradoDeAsteríscos.push("\n");
        }else {
            quadradoDeAsteríscos.push("\n");
        }
    }
    console.log(quadradoDeAsteríscos.join(""));
}

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar

let n = 7;
if (n<1 || n%2===0) {
    console.log("Insira um número inteiro, ímpar e maior que 0!")
} else {
    let quadradoDeAsteríscos = [];
    for (let i = 1; i<=n; i+=1) {
        if(i%2!=0){
            if(i==n) {
                for (let x =0; x<n; x+=1){
                    quadradoDeAsteríscos.push("*");
                }
            } else {            
                for (let z=1; z<=n; z+=1){
                    if(z==((n-i)/2)+1 || z==i+((n-i)/2)) {
                        quadradoDeAsteríscos.push("*");
                    } else {
                        quadradoDeAsteríscos.push(" ");
                    }
                }
                quadradoDeAsteríscos.push("\n");
            }
        }else {
            quadradoDeAsteríscos.push("\n");
        }
    }
    console.log(quadradoDeAsteríscos.join(""));
}

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
//Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados 
//em algum lugar.

let num = 653;
let primo = false;
if (num === 1) {
    primo = false;
} else if (num ===2) {
    primo = true;
} else if (num<=0) {
    console.log("Insira um número positivo maior que 0")
} else {
    for (let i =num-1;i>1;i-=1){
        if (num%i!=0) {
            primo = true;
        } else {
            primo=false;
            break;
        }
    }
}
console.log("Afirmar que o número ",num," é primo, é uma afirmação ",primo);