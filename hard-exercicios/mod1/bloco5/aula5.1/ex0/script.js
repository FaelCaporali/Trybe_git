document.querySelector('header').style.backgroundColor = 'green';
let doisUrgentes = document.getElementsByClassName('emergency-tasks');
function fundoUrgentes (color) {
    for (i=0;i<doisUrgentes.length; i+=1) {
        doisUrgentes[i].style.backgroundColor = color;
    }
}
fundoUrgentes('red');
let tituloUrgentes = document.querySelectorAll('.emergency-tasks h3');
function backgroundTitulo(color) {
    for (i=0;i<tituloUrgentes.length; i+=1) {
        tituloUrgentes[i].style.backgroundColor = color;
    }
}
backgroundTitulo('black');
let naoUrgente = document.getElementsByClassName('no-emergency-tasks');
function fundoNaoUrgente(color) {
    naoUrgente[0].style.backgroundColor = color;
}
fundoNaoUrgente('green');
let tituloNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
function fundoTituloNaoUrgente(color) {
    for (let i = 0; i < tituloNaoUrgente.length;i+=1) {
        tituloNaoUrgente[i].style.backgroundColor = color;
    }
}
fundoTituloNaoUrgente('yellow');