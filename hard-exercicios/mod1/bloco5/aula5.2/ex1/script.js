//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM 
//como filho da tag body ;
const titulo = document.createElement('h1');
function adicionaTitulo() {
    titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
    return titulo;
}
document.querySelector('body').appendChild(adicionaTitulo());
//2  Adicione a tag main com a classe main-content como filho da tag body ;
const tag = document.createElement('main');
function tagMain() {
    tag.classList = 'main-content'
    return tag;
}
document.querySelector('body').appendChild(tagMain());
//3 Adicione a tag section com a classe center-content como filho da tag main 
//criada no passo 2;
const sect = document.createElement('section');
function sectionTag () {
    sect.classList = 'center-content';
    return sect;
}
document.querySelector('main').appendChild(sectionTag());
//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
function texto() {
    tagP.innerText = 'Adicionando texto a tagP'
    return tagP;
}
document.querySelector('section').appendChild(texto());
//5 Adicione a tag section com a classe left-content como filho da tag main 
//criada no passo 2;
const sectionleft = document.createElement('section');
function tagSectionLeft () {
    sectionleft.classList = 'left-content';
    return sectionleft;
}
document.querySelector('main').appendChild(tagSectionLeft());
//6 Adicione a tag section com a classe right-content como filho da tag 
//main criada no passo 2;
const sectionRight = document.createElement('section');
function tagSectionRight () {
    sectionRight.classList = 'right-content';
    return sectionRight;
}
document.querySelector('main').appendChild(tagSectionRight());
//7 Adicione uma imagem com src configurado para o valor 
//https://picsum.photos/200 e classe small-image .
//Esse elemento deve ser filho do section criado no passo 5;
const imag = document.createElement('img');
function imagem () {
    imag.src = 'https://picsum.photos/200';
    imag.classList = 'small-image';
    return imag;
}
sectionleft.appendChild(imagem());
//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, 
//ou seja, um , dois , três , ... como valores da lista. 
//Essa lista deve ser filha do section criado no passo 6;
const listaCompleta = document.createElement('ul');
function elementosLista () {    
    const quantidade = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let i in quantidade) {
        let item = document.createElement('li');
        item.innerText = quantidade[i];
        listaCompleta.appendChild(item);
    }
}
sectionRight.appendChild(listaCompleta);
elementosLista();
//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 0; i<3;i+=1) {
    const hagaTres = document.createElement('h3');
    hagaTres.innerText = 'corta a trança Padawan, agora é a guerra dos clones';
    tag.appendChild(hagaTres);
}
//10Adicione a classe title na tag h1 criada;
titulo.classList = 'title';
//11 Adicione a classe description nas 3 tags h3 criadas;
const listaH3 = document.querySelectorAll('h3');
function addClassH3 () {
    for (i in listaH3) {
        listaH3[i].className = 'description';
    }
}
addClassH3();
//12 Remova a section criado no passo 5 (aquele que possui a classe left-content ). 
//Utilize a função .removeChild() ;
document.querySelector('main').removeChild(sectionleft);
//13 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). 
//Dica: para centralizar, basta configurar o margin-right: auto da section ;
sectionRight.style.marginRight = 'auto';
//14 Troque a cor de fundo do elemento pai da section
//criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
sect.parentElement.style.backgroundColor = 'green';
//15 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
for (let i=9; i > 7; i-=1) {
    document.querySelector('ul').children[i].remove();
}
//fim
