$(document).ready(function() {

  let arrNum = [];
  let numberString = '';
  let numberInt;
  let operator = [];
  let totaldiv = $('#results');
  let result = 0;
  totaldiv.text('0');

  $('.num-btn').on('click', function() {
    $(this).animate({'top': '2px'}, 60);
    $(this).animate({'top': '0'}, 60);
  });
  $('.operand').on('click', function() {
    $(this).animate({'top': '2px'}, 60);
    $(this).animate({'top': '0'}, 60);
  });
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
