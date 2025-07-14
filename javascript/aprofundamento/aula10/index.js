/* cep.onkeyup = () => {
  if (cep.value.length == 8) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then(resposta => resposta.json())
      .then(resposta2 => {
        rua.value = resposta2.logradouro;
        bairro.value = resposta2.bairro;
        cidade.value = resposta2.localidade;
        estado.value = resposta2.uf;
      })
      .finally(() => {
        alert("Processo Efetuado");
      })
  }
}*/

const regioesSelect = document.getElementById("regioes");
const estadosSelect = document.getElementById("estados");
const cidadesSelect = document.getElementById("cidades");

function buscarRegioes() {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(res => res.json())
    .then(res => {
      res.map(regiao => {
        regioesSelect.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
      });

      buscarEstados();
    })
    .catch(error => console.error("Erro ao buscar regiões:", error));
}

function buscarEstados() {
  estadosSelect.innerHTML = ""; // Limpa os estados anteriores
  cidadesSelect.innerHTML = ""; // Limpa as cidades quando os estados mudam

  if (regioesSelect.value) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioesSelect.value}/estados`)
      .then(res => res.json())
      .then(res => {
        res.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordena os estados
        res.map(estado => {
          estadosSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        });

        buscarCidades();
      })
      .catch(error => console.error("Erro ao buscar estados:", error));
  }
}

function buscarCidades() {
  cidadesSelect.innerHTML = "";

  if (estadosSelect.value) { // Verifica se um estado foi selecionado

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadosSelect.value}/municipios`)
      .then(res => res.json())
      .then(res => {
        res.sort((a, b) => a.nome.localeCompare(b.nome)); //Ordena as cidades
        res.map(cidade => {
          cidadesSelect.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
        });
      })
      .catch(error => console.error("Erro ao buscar cidades:", error));
  }
}

// Inicia o processo buscando as regiões
buscarRegioes();

// Listener para chamar buscarCidades() quando o estado mudar
estadosSelect.addEventListener("change", buscarCidades);
