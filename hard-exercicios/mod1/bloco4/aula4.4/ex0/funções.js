// funções //
// transformar códigos do dia 4.1 em funções

// 4.1.1

//const myName = "Rafael";
//const birthCity = "Belo Horizonte";
//console.log(myName);
//console.log(birthCity);
//let birthYear = 2030;
//console.log(birthYear);
//birthYear = 1990;
//console.log(birthYear)

function imprimeDados(myName, birthCity, birthYear) {
    return console.log("O usuário ", myName," nasceu em ",birthCity," no ano de ", birthYear);
}
imprimeDados("Rafael","Belo Horizonte", 1990);

//4.1.2

//let patientId = 50;
//let isEnrolled = true;
//const patientInfo = {
//  firstName: 'Ana',
//  lastName: 'Santos',
//};
//const patientEmail = 'ana@email.com';
//console.log(typeof patientId);
//console.log(typeof isEnrolled);
//console.log(typeof patientInfo);
//console.log(typeof patientEmail);
//console.log(typeof patientAge);
let pacientes = {
    'anaSantos': {
        patientId: 50,
        firstName: 'Ana',
        lastName: 'Santos',
        patientEmail: 'ana@email.com',
        isEnrolled: true,
    },
    'seuJoca': {
        patientId: 50,
        firstName: 'Seu',
        lastName: 'Joca',
        patientEmail: 'joca@email.com',
        isEnrolled: false,
    },
}
//const base = 5;
//let height = 8;
//const area = base * height;
//console.log (area);
//const perimeter = base * 2 + height * 2;
//console.log (perimeter);



// 4.1.3
const nota = 59;
if (nota >= 80) {
    console.log("parabéns, você foi aprovado!");
}
else if (nota >= 60) {
    console.log("Você está em nossa lista de espera");
}
else {
    console.log ("Você foi reprovado");
}
//4.1.4
const currentHour = 15;
let message = "" ;
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4) {
    message = "Hmmm, cheiro de café recém passado";
}
else {
    message = "Tô dormindo";
}
console.log(message);
//4.1.5
let nota = 80;

switch (nota) {
    case nota>=80:
        console.log("parabéns, você foi aprovado!");
        break;
    
    case nota >= 60:
        console.log("Você está em nossa lista de espera");
        break;

    case nota < 60:
        console.log("Você foi reprovado");
        break;

    default:
        console.log("não se aplica");
}
// resolução //