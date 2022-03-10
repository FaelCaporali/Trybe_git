let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ex1 // 
for (let i=0; i< numbers.length; i +=1) {
    console.log (numbers[i]);
}
// ex2 //
let sum = 0;
for (i=0; i<numbers.length; i+=1) {
    sum = sum + numbers[i];
}
console.log(sum);
// ex3 //
console.log(sum/numbers.length);
// ex4 //
if ((sum/sum.length)<= 20) {
    console.log("Número menor que 20");
}
else {
    console.log("Número maior que 20");
}
// ex5 //
let maior;
for (i =0; i<numbers.length; i+=1) {
    if (numbers[i] < maior) {
        maior = maior;
    }
    else {
        maior = numbers[i];
    }
}
console.log(maior);
// ex6 //
let impares = 0;
for (i=0; i<numbers.length;i+=1) {
    if (numbers[i]%2 != 0) {
        impares = impares +1;
    }
    else {
        impares = impares;
    }
}
if (impares != 0) {
    console.log("temos " + impares + " números ímpares");
}
else {
    console.log("Nenhum valor ímpar encontrado!");
}
// ex7 //
let menor; // let menor = numbers[0], pois se numbers=1, não acha numero menor...
for (i =0; i<numbers.length; i+=1) {
    if (numbers[i] > menor) {
        menor = menor;
    }
    else {
        menor = numbers[i];
    }
}
console.log(menor);
// ex8 //
let exoito = [ ];
for (i = 0; i<25; i+=1) {
   exoito.push(i+1);
}
console.log(exoito);
// ex9 //
let divdois = []; // console.log pode estar dentro for e sem criar nova lista.
for (i=0; i<exoito.length; i +=1) {
    divdois.push(exoito[i]/2);
}
console.log(divdois);
// bonus //
// b1 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i=0;i<numbers.length;i+=1) {
    for(let index = 0; index < i-1; index+=1) {
        if (numbers[i] < numbers[index]) {
            let troca = [numbers[index], numbers[i]];
            numbers[index] = troca[1];
            numbers[i] = troca[0];
        }
    }
}
console.log(numbers);
// b2 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i=0;i<numbers.length;i+=1) {
    for(let index = 0; index < i-1; index+=1) {
        if (numbers[i] > numbers[index]) {
            let troca = [numbers[index], numbers[i]];
            numbers[index] = troca[1];
            numbers[i] = troca[0];
        }
    }
}
console.log(numbers);
// b3 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult =[];
for (i=0;i<numbers.length;i+=1) {
    if (i == numbers.length-1) {
        mult.push(numbers[i]*2);
    }
    else {
        mult.push(numbers[i]*numbers[i+1]);
    }
}
console.log(mult);