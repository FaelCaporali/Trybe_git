// let arr = ['', '', '', 't', 'e']
// console.log(arr);
// for (let i = arr.length - 1; i >= 0; i-=1) {
//     if (arr[i] === '') {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

function teste(arrText) {
for (let i = arrText.length - 1; i >= 0; i -= 1) {
    if (arrText[i] === '' || arrText[i] === ' ') {
     arrText.splice(i);
    }
  }
  return arrText;
}
console.log(teste([' ', '', '', ' ']));