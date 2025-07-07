/*let pessoa = {
  nome: "Paul",
  idade: "18",
  genero: "masculino",
  habilidades: ["presciência", "ver o futuro", "domina a Voz"]
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.genero);
console.log(pessoa.habilidades);
*/

// Exemplo de objetos e funções (anônimas e arrow)

let pessoa = {
  nome: "Paul",
  idade: "18",
  genero: "masculinolino",
  habilidades: ["presciência", "ver o futuro", "domínio a Voz"],
  saudacao: function () {
    return `Olá meu noome é ${this.nome} e eu tenho ${this.idade} anos.`;
  },
  adicionarHabilidade: function (habilidade) {
    this.habilidades.push(habilidade);
  },
  listarHabilidades: () => {
    console.log("Minhas habilidades são: " + pessoa.habilidades.join(", "));
  }
};

console.log(pessoa.saudacao());
pessoa.adicionarHabilidade(("Dominação de Vermes"));
pessoa.listarHabilidades();


