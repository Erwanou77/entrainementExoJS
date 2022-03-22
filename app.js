/*************************************************************************
 *
 * Au click affichage text ou password ainsi que compteur
 *
 *************************************************************************/

let clickh1 = document.getElementById("click");
let inputPass = document.getElementById("test");

clickh1.addEventListener("click", () => {
  if (inputPass.getAttribute("type") === "password") {
    inputPass.setAttribute("type", "text");
    clickh1.style.textDecoration = "none";
  } else {
    inputPass.setAttribute("type", "password");
    clickh1.style.textDecoration = "line-through";
  }
});

/*************************************************************************
 *
 * Compteur de click
 *
 *************************************************************************/

let click = document.getElementById("appui");
let newElt = document.querySelector(".flex span");
let i = 1;

click.addEventListener("click", () => {
  newElt.textContent = i++;
});

/*************************************************************************
 *
 * Input récupération de données
 *
 *************************************************************************/

let zText = document.getElementById("name");
let zSelect = document.getElementById("gender");
let zCoord = document.getElementById("result");

zText.addEventListener("input", (event) => {
  document.getElementById("res-name").textContent = event.target.value;
});

zSelect.addEventListener("change", (event) => {
  const genre = document.querySelector("#res-gender");
  zSelect.value === ""
    ? (genre.textContent = "Aucun genre")
    : (genre.textContent = `${event.target.value}`);
});

zCoord.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  document.getElementById("mouse-x").textContent = x;
  document.getElementById("mouse-y").textContent = y;
});

/*************************************************************************
 *
 * API Recup DATA
 *
 *************************************************************************/

let btn = document.getElementById("ask-hello");

const askHello = () => {
  fetch("https://mockbin.com/request?greetings=salut")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      document.getElementById("hello-result").innerText =
        value.queryString.greetings;
    })
    .catch((err) => {
      console.log(err);
    });
};
btn.addEventListener("click", askHello);
