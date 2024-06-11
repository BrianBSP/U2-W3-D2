const form = document.querySelector("form");
const nome = document.getElementById("yourName");
/* creo la classe */
class Utente {
  constructor(tuoNome) {
    this.user = tuoNome;
  }
}
/* genero una lista che stampi i nomi in una lista */
const generaLista = (utenti) => {
  const listaNomi = document.getElementById("lista-nomi");
  const lista = document.createElement("ul");
  lista.style.listStyle = "none";
  lista.style.marginBlock = "10px";
  const elementiLista = document.createElement("li");
  elementiLista.innerHTML = `${utenti.user}`;

  listaNomi.appendChild(lista);
  lista.appendChild(elementiLista);
};

/* funzione cancella */

/* genera allert */
const generaAllert = () => {
  const container = document.querySelector(".container");
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

const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click", (event) => {
  event.preventDefault();
  const nomiSalvati = JSON.parse(localStorage.getItem("lista-memory"));
  nomiSalvati.pop();
  console.log(nomiSalvati);
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
