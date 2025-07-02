const campoNome = document.getElementById("nomeInput");
const botaoSaudacao = document.getElementById("botaoBemVindo");
const boasVindas = document.getElementById("boasVindas");
function saudarUsuario() {
  const nomeUser = campoNome.value;

  console.log("Nome inserido: ", nomeUser);
  if (nomeUser) {
    alert(`Olá ${nomeUser}!`);
  } else {
    alert(`Por favor, digite o seu nome.`);
  }
  campoNome.value = '';
}

botaoSaudacao.addEventListener("click", saudarUsuario);

document.addEventListener("DOMContentLoaded", function () {
  const operacaoSelect = document.getElementById("operacaoSelect");
  const n1 = document.getElementById("num1");
  const n2 = document.getElementById("num2");
  const calcularBtn = document.getElementById("calcularBtn");
  const resultadoCalculadora = document.getElementById("resultadoCalculadora")

  calcularBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const valor1 = n1.value;
    const valor2 = n2.value;
    const valorOperacao = operacaoSelect.value;

    realizarCalculo(valor1, valor2, valorOperacao);
  });

  function realizarCalculo(n1, n2, operacao) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Apenas Números por gentileza");
      resultadoCalculadora.innerText = "Por favor, insira números válidos.";
      return;
    }

    let resultado;

    switch (operacao) {
      case 'soma':
        resultado = num1 + num2;
        console.log(resultado);
        alert(`A soma de ${num1} + ${num2} é ${resultado}`);
        break;
      case 'subtracao':
        resultado = num1 - num2; alert(`A subtração de ${num1} - ${num2} é ${resultado}`);
        console.log(resultado);
        break;
      case 'divisao':
        resultado = num1 / num2; alert(`A divisão de ${num1} / ${num2} é ${resultado}`);
        console.log(resultado);
        break;
      case 'mutiplicacao':
        resultado = num1 * num2; alert(`A mutiplicação de ${num1} * ${num2} é ${resultado}`);
        console.log(resultado);
        break;
      default:
        console.log("Houve algum problema, tente novamente");
    }
    resultadoCalculadora.innerText = resultado;
    console.log(resultado);
  }

});


