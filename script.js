/*
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
*/

$(document).ready(function() {
  //
  var consoleLine = "<p class=\"console-line\"></p>";
  //
  console = {
    log: function(text) {
      $("#console-log").append($(consoleLine).html(text));
    }
  };

  let arrNum = [];
  let numberString = '';
  let numberInt;
  let operator = [];
  let totaldiv = $('#results');
  let result = 0;
  totaldiv.text('0');

  $(".number").click(function() {
    numberString += $(this).text();
    totaldiv.text(numberString);
    numberInt = parseFloat(numberString, 10);
  });

  $(".operator").not('#clear', '#clearall').click(function() {
    operator = $(this).text();
    totaldiv.text(numberString + '' + operator);
    arrNum.push(numberInt);
    numberString = '';
  });

  $('#clear').click(function() {
    numberString = '';
    numberInt = 0;
    totaldiv.text(arrNum[0] + '' + operator);
  });

  $('#clearall').click(function() {
    numberString = '';
    numberInt = 0;
    arrNum = [];
    totaldiv.text('0');
  });

  $('#equals').click(function() {
    arrNum.push(numberInt);
    let n1 = arrNum[0];
    let n2 = arrNum[1];

    switch (operator) {
      case '+':
        result = n1 + n2;
        result.toString(10);
        break;
      case '-':
        result = n1 - n2;
        result.toString(10);
        break;
      case '/':
        result = n1 / n2;
        result.toString(10);
        break;
      case '*':
        result = n1 * n2;
        result.toString(10);
        break;
    }
    totaldiv.text(result);
  });
});
