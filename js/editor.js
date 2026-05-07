let expr = "";

function addSymbol(s) {
  expr += s;
  updateDisplay();
}

function clearExpr() {
  expr = "";
  updateDisplay();
}

function backspace() {
  expr = expr.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("expression").innerText = expr;
}
