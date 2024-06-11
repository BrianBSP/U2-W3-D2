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
let users = [];
form.onsubmit = (event) => {
  event.preventDefault();

  const user = new Utente(nome.value);
  users.push(user);

  generaLista(user);
  console.log(users);

  form.reset();
};
