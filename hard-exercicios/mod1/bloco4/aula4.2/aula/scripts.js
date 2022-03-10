// array //
// ex1 //

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// ex2 //

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// ex3 //

menu.push("Contato");
console.log(menu);

// for //
// ex1 //
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (i =0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}

// for of //
// ex1 //
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let ex of names) {
    console.log(ex);
}