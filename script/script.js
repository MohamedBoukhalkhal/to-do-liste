const ajout = document.getElementById("ajout")
const tacklist = document.getElementById("tacklist")
const display = document.getElementById("display")
console.log(display);
console.log(tacklist);
const toggle = document.getElementById("toggle")

function add(){
    console.log("Le bouton Ajouter fonctionne");
    let text = display.value

    if(text === "")
    {
        alert("Voueiller saisi votre tache")
        return
    }

    let btnGauche = document.createElement("button");
    btnGauche.textContent = "✓";
    btnGauche.classList.add("btn-check");
    btnGauche.addEventListener("click", function () {
        li.style.textDecoration ="line-through";
        li.style.color = "gray";
    });

    let btnDroite = document.createElement("button");
    btnDroite.textContent = "🗑️";
    btnDroite.classList.add("btn-delete");
    btnDroite.addEventListener("click", function () {
        li.remove();
    });

    let li = document.createElement("li")
    li.appendChild (btnGauche)
    li.append(" "+text+" ")
    li.appendChild (btnDroite)
    tacklist.appendChild(li)
    display.value=""
   

}
display.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        add();
    }
});



function afficher() {
    tacklist.style.display = "block";
}

function masquer() {
    tacklist.style.display = "none";
}

