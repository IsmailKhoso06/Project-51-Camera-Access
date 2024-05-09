function clearResult() {
  document.getElementById('result').value = '';
}

function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function calculate() {
  const result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
}
