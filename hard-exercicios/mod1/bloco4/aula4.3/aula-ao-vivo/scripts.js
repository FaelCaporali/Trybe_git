// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
let soma = 0;
for (let i = 50; i<=100; i += 1) {
    soma += i;
}
console.log(soma);
// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
let divtres = 0;
for (let z = 1; z<=125; z += 1) {
    if(z%3===0) {
        divtres += 1;
    } else {
        divtres=divtres
    }
}
if (divtres === 50) {
    console.log("Essa é a mensagem secreta");
} else {
    console.log("Temos ",divtres," números divisíveis por três.")
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
let possibilidades = ["pedra", "papel", "tesoura"];
let playum = possibilidades[Math.floor((Math.random()*3))];
let playdois = possibilidades[Math.floor((Math.random()*3))];
let resultado;
console.log("Jogador 1 selecionou: ",playum,"\n","Jogador 2 selecionou: ", playdois)
if (playum == possibilidades[2] && playdois==possibilidades[1]) {
    resultado = 1;
} else if (playum == possibilidades[0] && playdois==possibilidades[1]) {
    resultado = 2;
} else if (playum == possibilidades[0] && playdois==possibilidades[2]) {
    resultado = 1;
} else if (playum == possibilidades[1] && playdois==possibilidades[0]) {
    resultado = 1;
} else if (playum == possibilidades[1] && playdois==possibilidades[2]) {
    resultado = 2;
} else if (playum == possibilidades[2] && playdois==possibilidades[0]) {
    resultado = 2;
} else { resultado = 3;
}

if (resultado == 1) {
    console.log("Jogador 1 vence!")
} else if (resultado==2) {
    console.log("Jogador 2 vence!")
} else {
    console.log("Empate!")
}
// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor
// de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
let pessoa = ["Fulano", "Beltrano", "Ciclano"]
let idade = [ 11, 18, 19];

for (let p=0; p<pessoa.length; p +=1) {
    if (idade[p]>=18){
        console.log("A pessoa ", pessoa[p],"é maior de idade");
    }
    else {
        console.log("A pessoa ", pessoa[p],"não é maior de idade");
    }
}
// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
let pessoas = ["Marcella", "Carlos", "Camila", "joão"];
let idades = [22, 35, 09, 67];
let comparado;
let nome;
for (let index = 0; index < idades.length; index += 1) {
    if (comparado == undefined ) {
        comparado = idades[index];
        nome = pessoas[index];
    }else if (comparado >= idades[index]) {
        comparado = idades[index];
        nome = pessoas[index];
    } else {}
}
console.log(nome , " é a pessoa mais nova");