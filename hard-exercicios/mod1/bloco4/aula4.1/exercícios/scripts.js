// ex1 //
const a = 1;
const b = 0.1;
const c = 1;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log("Adição" + "" + "=" + adicao);
console.log("Subtração" + "" + "=" + subtracao);
console.log("Multiplicação" + "" + "=" + multiplicacao);
console.log("Divisão" + "" + "=" + divisao);
console.log("Módulo" + "" + "=" + modulo);

// ex2 //
if (a>b) {
    console.log("Número A");
}
else if (a<b) {
    console.log("Número B");
}
else {
    console.log("Nem maior, nem menor");
}

//ex3//

if (a > b && a > c) {
    console.log("Número A");
}
else if (b > a && b > c) {
    console.log("Número B");
}
else if (c > b && c > a) {
    console.log("Número C");
}
else if (a == b || a == c) {
    switch (a) {
        case b:
            console.log("Números A e B tem o mesmo valor máximo!")
            break;
        case c:
            console.log("Números A e C tem o mesmo valor máximo!")
            break;
    }
}
else if (b == c) {
    switch (b) {
        case c:
            console.log("Números B e C tem o mesmo valor máximo!")
    }
}
else {
    console.log("Não foi possível comparar os números, verifique a digitação e se os dados inseridos são numéricos.");
}

// ex4 //

if (a > 0) {
    console.log("Positve");
}
else if (a < 0) {
    console.log("negative");
}
else if (a == 0) {
    console.log("Zero")
    //quando coloco === na condição, ele ira buscar igualdade numérica, como realizo isso com o operador maior ou menor? //
}
else {
    console.log("O dado não é numérico")
}

// ex5 //

if (a > 0 && b > 0 && c > 0) {
    console.log(a+b+c == 180)
}
else {
    console.log("Erro")
}

// ex6 //
let peca = "ToRre";

switch (peca.toLowerCase()) {
    case "peao":
        console.log("1.Anda somente uma casa para frente" +"\n"+ "2.Toma peça somente na diagonal");
        break;
    case "torre":
        console.log("Anda livremente em linhas e colunas.");
        break;
    case "cavalo":
        console.log("Anda em 'L', ou seja, duas casas a frente e uma a lateral, ou duas casas a lateral e uma a frente.");
        break;
    case bispo:
        console.log("Anda livremente pelas diagonais.");
        break;
    case rainha:
        console.log("Anda livremente pelas colunas, linhas e diagonais. Pense nela como a união do bispo e torre");
        break;
    case rei:
        console.log("Anda apenas uma casa em colunas, linhas e diagonais. Pense no rei como uma rainha de muletas, o que ele de fato é =P");
        break;
    default:
        console.log("Essa peça não existe, talvez você esteja jogando damas...")
}

// ex7 //

let nota = 92;

if (nota>=90 && nota <= 100) {
    console.log("A");
}
else if (nota <90 && nota >=80) {
    console.log("B");
}
else if (nota <80 && nota >=70) {
    console.log("C");
}
else if (nota < 70 && nota >= 60) {
    console.log("D");
}
else if (nota < 60 && nota >= 50) {
    console.log("E");
}
else if (nota <50 && nota >= 0) {
    console.log("F");
}
else {
    console.log("Erro, sua nota está abaixo de 0 ou acima de 100. Busque nosso time para debugar sua nota.")
}

// ex 8 //

console.log((a%2==0 || b%2 == 0 || c%2==0));

// ex9 // 

console.log ((a%2 != 0 ||b % 2 != 0 || c%2 != 0));

// ex10 //

let pv = 250;
let custo = 100;

if ((pv - custo - 0.2*custo) >= 0){
    console.log("Lucro =" + "" +(pv - custo - 0.2*custo));
}
else {
    console.log("Você está tomando prejuízo!")
}

// ex 11 //

let bruto = 1300.00;

let inss;
let ir;

if (bruto < 1556.94) {
    inss = 0.08*bruto;
}
else if (bruto >= 1556.95 && bruto < 2594.92) {
    inss = 0.09 * bruto;
}
else if (bruto >= 2594.93 && bruto < 5189.82) {
    inss = 0.11 * bruto;
}
else if (bruto > 5189) {
    inss = 570.88
}
else {
    console.log("Erro no cálculo do INSS")
}


if ((bruto-inss) < 1903.98){
    ir=0;
}
else if ((bruto-inss) >= 1903.99 && (bruto-inss) < 2826.65) {
    ir = (0.075*(bruto-inss)) - 142.8
}
else if ((bruto-inss) >= 2826.66 && (bruto-inss) < 3751.05) {
    ir = (0.15*(bruto-inss)) - 354.8;
}
else if ((bruto-inss) >= 3751.06 && (bruto-inss) < 4664.68) {
    ir = (0.225*(bruto-inss)) - 636.13;
}
else if ((bruto-inss) >4664.69) {
    ir = (0.275*(bruto-inss)) - 869.36
}
else {
    console.log("Erro no cálculo do Imposto de Renda.")
}

console.log(bruto - ir - inss)

// fim //