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
let sect = document.createElement('section');
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
    let quantidade = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
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
    let hagaTres = document.createElement('h3');
    hagaTres.innerText = 'corta a trança Padawan, agora é a guerra dos clones';
    tag.appendChild(hagaTres);
}