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
      break;
    case "step1":
      mainContent.innerHTML += `
        <div class="question">
        <p class="intitule">Le bien immobilier est destiné à la:</p>
            <form> 
                <input type="radio" id="Q1a" name="prestation"></input>
                <label for="Q1a" id="labelQ1a" class="questionBtn">Vente</label>
                <input type="radio" id="Q1b" name="prestation"></input>
                <label for="Q1b" id="labelQ1b" class="questionBtn">Location</label>
            </form>
        </div>`;
      break;
    case "step2":
      mainContent.innerHTML += `
        <div class="question">
        <p class="intitule">Le bien est-il en copropriété ?</p>
            <form> 
                <input type="radio" id="Q2a" name="copropriete"></input>
                <label for="Q2a" id="labelQ2a" class="questionBtn">OUI</label>
                <input type="radio" id="Q2b" name="copropriete"></input>
                <label for="Q2b" id="labelQ2b" class="questionBtn">NON</label>
            </form>
        </div>`;
      break;
    case "step3":
      mainContent.innerHTML += `
        <div class="question">
        <p class="intitule">Quand le logement a t'il été construit ?</p>
        <form> 
                <input type="radio" id="Q3a" name="av1949"></input>
                <label for="Q3a" id="labelQ3a" class="questionBtnQ3">&#8804; 31/12/1948</label>
                <input type="radio" id="Q3b" name="ap1949"></input>
                <label for="Q3b" id="labelQ3b" class="questionBtnQ3"> \> 1949 et <br>\< 07/1997</label><input type="radio" id="Q3c" name="ap1997"></input>
                <label for="Q3c" id="labelQ3c" class="questionBtnQ3">&#8805; 01/07/1997</label>
            </form>
        </div>`;
      break;
    case "step4":
      mainContent.innerHTML += `
        <div class="question">
        <p class="intitule">Le bien a t'il une installation de gaz ?</p>
            <form> 
                <input type="radio" id="Q4a" name="gaz"></input>
                <label for="Q4a" id="labelQ4a" class="questionBtn">OUI</label>
                <input type="radio" id="Q4b" name="noGaz"></input>
                <label for="Q4b" id="labelQ4b" class="questionBtn">NON</label>
            </form>
        </div>
        <div class="question">
        <p class="intitule">L'installation de gaz a + de 15 ans ?</p>
            <form> 
                <input type="radio" id="Q5a" name="gazInf15ans"></input>
                <label for="Q5a" id="labelQ5a" class="questionBtn">OUI</label>
                <input type="radio" id="Q5b" name="gazSup15ans"></input>
                <label for="Q5b" id="labelQ5b" class="questionBtn">NON</label>
            </form>
        </div>`;
      break;
    case "step5":
      mainContent.innerHTML += `
        <div class="question">
        <p class="intitule">L'installation d'électricité a + de 15 ans ?</p>
            <form> 
                <input type="radio" id="Q6a" name="elecInf15ans"></input>
                <label for="Q6a" id="labelQ6a" class="questionBtn">OUI</label>
                <input type="radio" id="Q6b" name="elecSup15ans"></input>
                <label for="Q6b" id="labelQ6b" class="questionBtn">NON</label>
            </form>
        </div>`;
    case "step6":
      mainContent.innerHTML += `
              <div class="question">
              <p class="intitule">Dans quel département se situe le bien ?</p>
                  <form> 
                  </form>
              </div>`;
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
// bouton Commencer / Continuer / FIN
