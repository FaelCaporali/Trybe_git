let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  // 1 //
  console.log("Bem vinda, ",info.personagem);
  // 2 //
  info.recorrente = "sim";
  console.log(info);
  // 3 //
  for (let chaves in info) {
      console.log(chaves);
  }
  // 4 //
  for (let chaves in info) {
      console.log(info[chaves]);
  }
  // 5 //
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim",
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "sim",
};
for (let i in info2){
    console.log (info[i]," e ", info2[i]);
}

// para adiante //
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// 6 //

console.log("O livro favorito de ",leitor.nome," ",leitor.sobrenome," se chama ",leitor.livrosFavoritos[0].titulo);

  // 7 //

leitor.livrosFavoritos.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});

// 8 //

console.log(leitor.nome, " tem ",leitor.livrosFavoritos.length," livros favoritos.");