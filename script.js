$(document).ready(function() {

  let arrNum = [];
  let numberString = '';
  let numberInt;
  let operatorArr = [];
  let operator = '';
  let totaldiv = $('#results');
  let result = 0;
  totaldiv.text('0');

  // Button click animation
  $('.num-btn').on('click', function() {
    $(this).animate({'top': '2px'}, 60);
    $(this).animate({'top': '0'}, 60);
  });
  $('.operand').on('click', function() {
    $(this).animate({'top': '2px'}, 60);
    $(this).animate({'top': '0'}, 60);
  });

  // Get button text and make into number
  $(".number").click(function() {
    numberString += $(this).text();
    totaldiv.text(numberString);
    numberInt = parseFloat(numberString);
  });

  // Get operator text
  $(".operator").not('#clear', '#clearall').click(function() {
    operator = $(this).text();
    totaldiv.text(numberString + '' + operator);
    arrNum.push(numberInt) // push number to array
    numberString = ''; // clear for next number
    operatorArr.push(operator);
  });

  // Clear last number
  $('#clear').click(function() {
    numberString = '';
    numberInt = 0;
    totaldiv.text(arrNum[0] + '' + operator);
  });

  // Clear all numbers and operators
  $('#clearall').click(function() {
    numberString = '';
    numberInt = 0;
    arrNum = [];
    result = '';
    totaldiv.text('0');
  });

  // Calctulation functions
  $('#equals').click(function() {
    arrNum.push(numberInt);
    let n1 = arrNum[0];
    let n2 = arrNum[1];

    switch (operatorArr[0]) {
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
      // Allow user to continue calculation with result
      arrNum = [];
      operatorArr = [];
      numberString = result
      numberInt = parseFloat(result);
    });
});
