function navHeadBandDisplay() {
  const formHeadBand = document.getElementById("formHeadBand");
  const navButtons = document.getElementsByClassName("labels");
  const navStep = [];
  const radioStep = [];

  //let tab = [0, 0, 0, 1, 0, 0, 0, 0];

  for (i = 0; i <= 7; i++) {
    formHeadBand.innerHTML += `<input type="radio" id="step${i}" name="steps"></input>
  <label for="step${i}" id="label${i}" class="labels">étape ${i}</label>`;
    navStep[i] = document.getElementById(`label${i}`);
    // console.log("navStep" + i + " = " + navStep[i]);
    radioStep[i] = document.getElementById(`step${i}`);
    // console.log("radioStep" + i + " = " + radioStep[i]);

    if (i == 0) {
      navStep[i].classList.add("firstLabel");
      navStep[i].textContent = "Introduction";
    } else if (i == 7) {
      navStep[i].classList.add("lastLabel");
      navStep[i].textContent = "Résultat";
    } else {
      navStep[i].classList.add("otherLabel");
    }
    console.log(formHeadBand);
    console.log(navButtons[0]);
  }

  formHeadBand.addEventListener("click", (e) => {
    let toto = e.target.id;
    console.log(toto);
  });
}

window.addEventListener("load", () => {
  navHeadBandDisplay();
});
