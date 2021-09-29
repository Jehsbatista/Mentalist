var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var Resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  console.log(chute);

  if (chute == numeroSecreto) {
    Resultado.innerHTML = "você acertou!";
  } else if (chute > 10 || chute < 0) {
    Resultado.innerHTML = "Tente novamente, o número deve ser de 1 a 10";
  } else {
    Resultado.innerHTML = "Errou!";
  }
}
