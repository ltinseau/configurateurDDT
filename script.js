let index = 0;
let tableauChecked = [];

function navHeadBandDisplay() {
  const formHeadBand = document.getElementById("formHeadBand");
  const navStep = [];

  for (i = 0; i <= 7; i++) {
    formHeadBand.innerHTML += `<input type="radio" id="step${i}" name="steps"></input>
  <label for="step${i}" id="label${i}" class="labels">étape ${i}</label>`;
    navStep[i] = document.getElementById(`label${i}`);
    if (i == 0) {
      navStep[i].classList.add("firstLabel");
      navStep[i].textContent = "Accueil";
    } else if (i == 7) {
      navStep[i].classList.add("lastLabel");
      navStep[i].textContent = "Résultat";
    } else {
      navStep[i].classList.add("otherLabel");
    }
  }
  console.log("affichage du bandeau de navigation OK");
}

function NavListener() {
  for (i = 0; i <= 7; ++i) {
    let navTag;
    // let toto = "label" + i;
    navTag = document.getElementById("label" + i);
    // console.log(navTag);
    navTag.addEventListener("click", (e) => {
      console.log(e.target.id);
      stepDisplay(e.target.id);
      index = e.target.id.replace("label", "");
      toto = "radio" + index;
      console.log(toto);
    });
  }
}

function stepDisplay(selecLabel) {
  // on crée une fonction avec en entrée le label
  // Mise à jour de la NavBar
  const activeLabel = selecLabel;
  const activeRadio = activeLabel.replace("label", "step");
  let activeLabelHtml = document.getElementById(activeLabel);
  //   console.log(activeLabelHtml); //labelN
  let activeRadioHtml = document.getElementById(activeRadio);
  //   console.log(activeRadioHtml); //stepN
  const mainContent = document.querySelector(".mainContent");
  index = eval(activeRadio.replace("step", ""));
  console.log("index = " + index);

  // applique la classe labelActive au label actif (selectLabel)
  for (i = 0; i <= 7; i++) {
    let labelHtml = document.getElementById("label" + i);
    i == index
      ? labelHtml.classList.add("labelActive")
      : labelHtml.classList.remove("labelActive");
  }

  // => affiche l'information ou le formulaire
  switch (activeRadio) {
    case "step0":
      mainContent.innerHTML = `
        <h3>De quels diagnostics avez vous besoin ?</h3>
        <p>
            Pour le savoir, laissez vous guider en répondant à ces quelques questions...
        </p>`;
  }

  // valide le formulaire avec un bouton "suivant" à cocher
}

function validation() {
  const validationButton = document.getElementById("validationBtn");
  validationButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("-----validation------");
    console.log("avant stepDisplay : " + index);
    stepDisplay("label" + eval(++index));
    console.log("après stepDisplay : " + index);
  });
}

window.addEventListener("load", () => {
  navHeadBandDisplay();
  NavListener();
  stepDisplay("label0");
  validation();
});

// prévoir gardefou qui fait qu'on ne peut pas valider une étape si on a pas fait toutes les étapes précédentes.
// colorer en vert les labels quand ils ont été renseignés et validés (après contrôle sauf si contrôle par la validation de l'étape)
