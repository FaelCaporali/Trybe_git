function clickouMenu () {
    document.querySelector('img').style.visibility = 'hidden';
    document.querySelector('div').style.visibility = 'visible';
}
function saiuDoSanduba() {
    document.querySelector('img').style.visibility = 'visible';
    document.querySelector('div').style.visibility = 'hidden';
}
document.querySelector('img').addEventListener('click',clickouMenu);
document.querySelector('div').addEventListener('mouseout',saiuDoSanduba);