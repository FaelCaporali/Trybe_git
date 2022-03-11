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