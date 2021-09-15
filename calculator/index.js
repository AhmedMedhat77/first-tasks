if (isNaN(x) || isNaN(y)) {
  function calc() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var o = document.getElementById("o").value;

    switch (o) {
      case "+":
        document.getElementById("res").innerHTML = x + y;
        break;
      case "-":
        document.getElementById("res").innerHTML = x - y;
        break;
      case "*":
        document.getElementById("res").innerHTML = x * y;
        break;
      case "/":
        document.getElementById("res").innerHTML = x / y;
        break;
    }
  }
} else {
  document.getElementById("res").innerHTML = "ERROR";
}
