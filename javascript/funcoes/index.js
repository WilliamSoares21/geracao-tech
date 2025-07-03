function preencherData(tag, limite) {
  for (i = 1; i < limite; i++) {
    tag.innerHTML += `<option>${i}</option>`;
  }
}

const diaSelect = document.getElementById("dia");
const mesSelect = document.getElementById("mes");

// Call preencherData for days (assuming up to 31)
preencherData(diaSelect, 31);

// Call preencherData for months (up to 12)
preencherData(mesSelect, 13);
