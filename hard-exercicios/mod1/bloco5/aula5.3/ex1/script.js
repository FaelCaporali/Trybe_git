function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //Exercício 1:
//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês 
//de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário
//e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro 
//estão no array pois representam respectivamente Domingo e Segunda-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . 
//Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . 
//Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . 
//Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.getElementById('days');
for (let i in dezDaysList) {
    let brandNewDay = document.createElement('li');
    brandNewDay.innerText = dezDaysList[i];
    brandNewDay.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31 ) {
        brandNewDay.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 18 || dezDaysList[i] === 25 || dezDaysList[i] === 11 ) {
        brandNewDay.classList.add('friday');
    }
    days.appendChild(brandNewDay);
}

//Exercício 2:
//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente
//um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let but = document.createElement('button');  
function exercicio2(nomeDoButton) {  
    but.innerText = nomeDoButton;
    but.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(but);
}
exercicio2('Feriados');

//Exercício 3:
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" 
//que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado 
//novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function holidayColor (event) {
    let todosOsFeriados = document.querySelectorAll('.holiday');
    for (let i in todosOsFeriados) {
        let analisado = todosOsFeriados[i];
        if(analisado.style.backgroundColor == 0) {
            analisado.style.backgroundColor = 'green';
            analisado.style.color = 'black';
        } else {
            analisado.style.backgroundColor = null ;
            analisado.style.color = "#666";
        }
    }
}
but.addEventListener('click', holidayColor);
// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente 
//um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createSextaButton(nomeDoButao) {
    let sextButton = document.createElement('button');
    sextButton.innerText = nomeDoButao;
    sextButton.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(sextButton);
}
createSextaButton('Sexta-Feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let listaDeSextas = document.getElementsByClassName('friday');
const sextasOriginais = [];
function guardaValor() {
    for (let i in listaDeSextas) {
        sextasOriginais.push(listaDeSextas[i].innerText);
    }
}
guardaValor();
function codifica() {
    for (let i in listaDeSextas) {
        listaDeSextas[i].innerText = "Th4nk'5G0d15Fr1d4y!";
    }
    document.getElementById('btn-friday').innerText = 'Fr1d4y!';
}
function retomaValorDefault () {
    for (let i in listaDeSextas) {
        listaDeSextas[i].innerText = sextasOriginais[i];
    }
    document.getElementById('btn-friday').innerText = 'Sexta-Feira';
}
function handler(event) {
    if (event.target.innerText !== "Fr1d4y!") {
        codifica();
    } else {
        retomaValorDefault();
    }
}
document.getElementById('btn-friday').addEventListener('click', handler);
// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
const dias = document.getElementById('days');
function zoomNoDia(event) {
    if (event.target != dias) {
        event.target.style.transform = 'scale(2)';
    }
}
function saiZoom(event) {
    event.target.style.transform = 'scale(1)';
}
dias.parentElement.addEventListener('mouseover', zoomNoDia);
dias.parentElement.addEventListener('mouseout', saiZoom);
// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function personalTask (tarefa) {
    let createTaskSpan = document.createElement('span');
    createTaskSpan.innerText = tarefa;
    document.querySelector('.my-tasks').appendChild(createTaskSpan);
};
// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function coloredTask (cor) {
    let coloredDiv = document.createElement('div');
    coloredDiv.style.backgroundColor = cor;
    coloredDiv.classList.add('task')
    coloredDiv.addEventListener('click', selectTask)
    document.querySelector('.my-tasks').appendChild(coloredDiv);
};
// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function selectTask(event) {
    if(event.target.classList.length > 1) {
    event.target.classList = 'task';
    }
    else {
    event.target.classList = 'task selected';
    }
}

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function colorToDay (event) {
    if (event.target != dias && event.target.style.color != document.querySelector('.selected').style.backgroundColor) {
        event.target.style.color = document.querySelector('.selected').style.backgroundColor;
        console.log('mudou a cor');
    } else {
        event.target.style.color = 'rgb(119,119,119)';
        console.log('desmudou a cor');
    }
}
   
dias.addEventListener('click', colorToDay);
// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .
document.getElementById('btn-add').addEventListener('click', function(event) {
    let texto = document.getElementById('task-input').value;
    let add = document.createElement('p');
    if (texto.length === 0) {
        alert('Por favor, insira seu compromisso!');
    } else {
        add.innerText = texto;
        document.querySelector('.input-container h3').appendChild(add);
    }
});