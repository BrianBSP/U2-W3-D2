const form = document.querySelector("form");
const nome = document.getElementById("yourName");
/* creo la classe */
class Utente {
  constructor(tuoNome) {
    this.user = tuoNome;
  }
}
/* genero una lista che stampi i nomi in una lista */
const generaLista = (utente) => {
  const listaNomi = document.querySelector("#lista-nomi > ul");

  const elementoLista = document.createElement("li");
  elementoLista.classList.add("list-group-item");
  elementoLista.innerText = utente.user;

  listaNomi.appendChild(elementoLista);
};

/* genera allert */
const generaAllert = () => {
  const container = document.querySelector(".contain-alert");
  const allert = document.createElement("div");
  allert.classList.add("alert", "alert-danger");
  allert.style.marginBlock = "10px";
  allert.innerText = "Nessun nome nella lista. Aggiungi nomi";
  container.appendChild(allert);
};

/* creo un evento al button save */
let users = [];
form.onsubmit = (event) => {
  event.preventDefault();

  const allert = document.querySelector(".alert");
  if (allert) {
    allert.remove();
  }

  const user = new Utente(nome.value);
  users.push(user);

  localStorage.setItem("lista-memory", JSON.stringify(users));

  generaLista(user);

  form.reset();
};
/* elimina nome dalla lista */
const removeName = () => {
  const nomiSalvati = JSON.parse(localStorage.getItem("lista-memory"));
  nomiSalvati.pop();
  users = nomiSalvati;
  localStorage.setItem("lista-memory", JSON.stringify(users));
  const listaNomi = document.querySelector("#lista-nomi > ul");
  listaNomi.innerHTML = "";
  nomiSalvati.forEach((obj) => generaLista(obj));
  if (nomiSalvati.length === 0) generaAllert();
};

const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click", (event) => {
  removeName();
});

window.addEventListener("DOMContentLoaded", () => {
  const nomiDaStorage = localStorage.getItem("lista-memory");
  if (nomiDaStorage) {
    const nomiArray = JSON.parse(nomiDaStorage);
    users = nomiArray;

    users.forEach((user) => generaLista(user));
  } else {
    generaAllert();
  }
});
let counter = 0;
let counts = [];
const increment = () => {
  counter++;
  counts.push(counter);
};

const incrementAndLog = () => {
  increment();
  console.log(counter);
};

setInterval(() => {
  incrementAndLog();
  sessionStorage.setItem("count", JSON.stringify(counts));
}, 1000);
