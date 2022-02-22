function navHeadBandDisplay() {
  const formHeadBand = document.getElementById("formHeadBand");
  const navStep = [];

  for (i = 0; i <= 7; i++) {
    formHeadBand.innerHTML += `<input type="radio" id="step${i}" name="steps"></input>
  <label for="step${i}" id="label${i}" class="labels">étape ${i}</label>`;
    navStep[i] = document.getElementById(`label${i}`);
    if (i == 0) {
      navStep[i].classList.add("firstLabel");
      navStep[i].textContent = "Introduction";
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
    let toto = "label" + i;
    navTag = document.getElementById(toto);
    // console.log(navTag);
    navTag.addEventListener("click", (e) => {
      console.log(e.target.id);
      return e.target.id;
    });
  }
}

window.addEventListener("load", () => {
  navHeadBandDisplay();
  NavListener();
});
