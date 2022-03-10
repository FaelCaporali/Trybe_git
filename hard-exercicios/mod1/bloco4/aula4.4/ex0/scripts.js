//1//
// transformar os itens comentados como um só objeto
//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };
let player = {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden: 2,
        silver:3,
    }
}
// 2 //
console.log("A jogadora", player.name,"",player.lastName," tem ",player.age," anos de idade.")

// 3 //
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// 4 //
console.log ("A jogadora ", player.name," foi eleita a melhor do mundo ",player.bestInTheWorld.length," vezes.");

// 5 //
console.log("A jogadora ", player.name," possui", player.medals.golden," medalhas de ouro e ",player.medals.silver," medalhas de prata.");

//for-in for-of//

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

// 1 //
for (let key in names) {
    console.log("Olá ",names[key],"!");
}
// 2 //
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let key in car) {
    console.log(key,": ",car[key]);
}