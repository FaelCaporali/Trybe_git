const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada
// em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. 
//Por que isso ocorre?
// ultimo parametro do css com o atributo transform
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
const aLista = document.getElementsByClassName('container')[0].children;
function addClass(event) {
  // 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  document.querySelector('.tech').classList = "";
  event.target.classList = 'tech';
}
aLista[0].addEventListener('click', addClass);
aLista[1].addEventListener('click', addClass);
aLista[2].addEventListener('click', addClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function lettersChanges(event) {
  document.querySelector('.tech').innerText = event.target.value;
}
input.addEventListener('keyup',lettersChanges);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function redirect(event) {
  window.location.assign('https://faelcaporali.github.io/');
}
myWebpage.addEventListener("click", redirect);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function geraCor () {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
function changeColorOnMouseHover(event) {
  myWebpage.style.color = geraCor();
}

myWebpage.addEventListener('mouseover',changeColorOnMouseHover);
// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.