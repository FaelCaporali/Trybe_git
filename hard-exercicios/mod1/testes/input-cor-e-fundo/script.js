
function chamaValorDaCor() {
    return document.querySelector('input').value;
}
function mudaCor() {
    document.querySelector('main').style.backgroundColor = chamaValorDaCor();
}
document.querySelector('input').addEventListener('input',mudaCor);