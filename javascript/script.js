const campoNome = document.getElementById("nomeInput");
const botaoSaudacao = document.getElementById("botaoBemVindo");

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


