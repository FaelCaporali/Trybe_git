function clickouMenu () {
    document.querySelector('img').style.visibility = 'hidden';
    document.querySelector('ul').style.visibility = 'visible';
}
function saiuDoSanduba() {
    document.querySelector('img').style.visibility = 'visible';
    document.querySelector('ul').style.visibility = 'hidden';
}
document.querySelector('img').addEventListener('hover',clickouMenu);
dicument.querySelector('ul').addEventListener('mouseout',saiuDoSanduba);