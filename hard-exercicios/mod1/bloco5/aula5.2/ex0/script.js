//1 
let onde = document.getElementById('elementoOndeVoceEsta');
//2
onde.parentElement.style.color = 'green';
//3
document.getElementById('primeiroFilhoDoFilho').innerText = 'adicionando texto para item 3';
//4
document.getElementById('pai').firstChild;
//5
onde.firstChild;
//6
onde.nextSibling;
//7
onde.nextElementSibling;
//8
document.getElementById('pai').children[2];
//9
function cria(){
var primeiraCriacao = document.createElement('section');
primeiraCriacao.innerText = 'Quando a gente acha que é jedi, descobre que não passa de um stormTrooper...';
return primeiraCriacao;
}
function povoa (id){
document.querySelector(id).appendChild(cria());
}
povoa('#pai');
// 10
povoa('#elementoOndeVoceEsta');
// 11
povoa('#primeiroFilhoDoFilho');
//12
document.querySelector('#primeiroFilhoDoFilho section').parentElement.parentElement.parentElement.children[2];
//13
//Remova todos os elementos filhos de paiDoPai
// exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
document.querySelector('#primeiroFilho').remove();
document.querySelector('#primeiroFilhoDoFilho').removeChild(document.querySelector('#primeiroFilhoDoFilho').children[0]);
onde.removeChild(onde.children[1]);
onde.removeChild(onde.children[1]);
onde.parentElement.removeChild(onde.parentElement.children[1]);
onde.parentElement.removeChild(onde.parentElement.children[1]);
onde.parentElement.removeChild(onde.parentElement.children[1]);
// ultimas 3 linhas podem ser uma função percorrendo com o for;