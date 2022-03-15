// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(arr) {
  return arr.split(" ");
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ", " + arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let maior;
  let contagem = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (i === 0 || arr[i] > maior) {
      maior = arr[i];
    }
  }
  for (z = 0; z < arr.length; z += 1) {
    if (maior === arr[z]) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
//  let distOne = cat1 - mouse;
//  if (distOne < 0) {
//    distOne *= -1;
//  }
let distanceOne = Math.abs(cat1 - mouse);
//  let distTwo = cat2 - mouse;
//  if (distOne < 0) {
//    distOne *= -1;
//  }
let distanceTwo = Math.abs(cat2 - mouse);
  if (distanceOne === distanceTwo) {
    return "os gatos trombam e o rato foge";
  } else if (distanceOne > distanceTwo) {
    return "cat2";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzBug = [];
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      fizzBug.push("fizzBuzz");
    } else if (arr[i] % 5 !== 0 && arr[i] % 3 === 0) {
      fizzBug.push("fizz");
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
      fizzBug.push("buzz");
    } else {
      fizzBug.push("bug!");
    }
  }
  return fizzBug;
}

// Desafio 9
function encode(str) {
  let coder = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  for (i = 0; i < arr.length; i += 1) {
    for (z = 0; z < coder.length; z += 1) {
      if (arr[i] == coder[z]) {
        arr[i] = z + 1;
      }
    }
  }
  return arr.join("");
}

function decode(str) {
  let coder = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  for (i = 0; i < arr.length; i += 1) {
    for (z = 0; z < coder.length; z += 1) {
      if (arr[i] == z + 1) {
        arr[i] = coder[z];
      }
    }
  }
  return arr.join("");
}

// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return "Vazio!";
  } else {
    let lista = [];
    for (tech of list.sort()) {
      lista.push({ tech, name });
    }
    return lista;
  }
}

// bonus //

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length === 11) {
    let check = true;
    let contGlobal = false;
    for (val of arr) {
      if (contGlobal === true || val > 9 || val < 0) {
        check = false;
        break;
      } else {
        let contLocal = 0;
        for (val2 of arr) {
          if (val === val2) {
            contLocal += 1;
          }
          if (contLocal >= 3) {
            contGlobal = true;
            break;
          }
        }
      }
    }
    if (check === true) {
      return (
        "(" +
        arr[0] +
        arr[1] +
        ") " +
        arr[2] +
        arr[3] +
        arr[4] +
        arr[5] +
        arr[6] +
        "-" +
        arr[7] +
        arr[8] +
        arr[9] +
        arr[10]
      );
    } else {
      return "não é possível gerar um número de telefone com esses valores";
    }
  } else {
    return "Array com tamanho incorreto.";
  }
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (
    lineA < Math.abs(lineB - lineC) ||
    lineB < Math.abs(lineA - lineC) ||
    lineC < Math.abs(lineB - lineA)
  ) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(str) {
  let arr = str.match(/\d+/g);
  let contagem = 0;
  for (char of arr) {
    contagem += Number(char);
  }
  if (contagem > 1) {
    return contagem + " copos de água";
  } else {
    return contagem + " copo de água";
  }
}
