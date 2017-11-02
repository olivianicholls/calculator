// FIND MAX NUMBER IN ARRAY
let myArray = [1, 2, 3, 4, 5];

function myMax() {
  return Math.max.apply(Math, myArray);
};

console.log(myMax(myArray));

//FIND VOWEL COUNT (DOESNT WORK IF NO VOWELS!)
let sentence = 'hello world';
function vowel_count(sentence) {
  return sentence.match(/[aeiou]/gi).length;
}

console.log(vowel_count(sentence));

//REVERSE A STRING
function reverse(sentence) {
  return sentence.split('').reverse().join('');
}

console.log(reverse('hellloooooo'));

//ADD
function add() {
  return a + b;
}

//SUBTRACT
function subtract() {
  return a - b;
}

//MULTIPLY
function multiply() {
  return a * b;
}

//DIVIDE
function add() {
  return a / b;
}

//GRID
$(document).ready(function() {

function createGrid(x) {
  $('.container').append("<div class='table'></div>");
  for (let i = 0; i < x; i++) {
    $('.table').append("<div class='box'><span class='number'>0</span></div>");
  }
}
function createButtons(y) {
$('.wrapper').append("<div class='buttons'></div>");
  for (let j = 0; j < y; j++) {
    $('.buttons').append("<div class='button'></div>");
  }
}
createGrid(9);
createButtons(6);

$(".box").each(function(i) {
    let number = $(this).find(".number").text(++i);
});

$(".number").click(function() {
let result = $(this).clone('.number');
$('.results').append(result);
});
});
