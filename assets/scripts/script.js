import Taxes from "./modules/taxes.module.js";
import MehrwertTaxes from "./modules/mehrwetsteuer.module.js";

const form = document.querySelector(".taxesForm");
const button = document.querySelector(".count");
const result = document.querySelector(".result");
const salary = document.querySelector(".salaryresult");
const status = document.querySelector(".status");
const Est = document.querySelector(".ESt");
const statusMarried = document.querySelector(".statusMarried");
const statusNotMarried = document.querySelector(".statusNotMarried");
const button2 = document.querySelector(".getTaxes");

const dings = {
  salary: null,
  status: "0",
};

form.addEventListener("input", (event) => {
  dings[event.target.name] = event.target.value;
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("data", dings);

  let yourTaxes = new Taxes(dings);

  console.log("your taxes", yourTaxes);

  let taxesObj = yourTaxes.count();
  salary.innerHTML = yourTaxes.salary;
  status.innerHTML = yourTaxes.status ? "verheiratet" : "unverheiratet";
  Est.innerHTML = `${yourTaxes.ESt} Euro`;

  result.classList.add("active");
});

/*********************************************************Klicken des Buttons Count*************************/

button.addEventListener("mousedown", () => {
  button.classList.add("mousedown");
});

button.addEventListener("mouseup", () => {
  button.classList.remove("mousedown");
});

/**********************************************************RadioInputs*************************************/

statusMarried.addEventListener("click", () => {
  statusNotMarried.classList.remove("active");
  statusMarried.classList.add("active");
})

statusNotMarried.addEventListener("click", () => {
  statusMarried.classList.remove("active");
  statusNotMarried.classList.add("active");
})

/**************************************************chooseApp */

const appChooseButtons = document.querySelector(".appChoose_buttons");


const taxesApp = document.querySelector(".taxesApp");
const otherTaxesApp = document.querySelector(".taxesApp2");


appChooseButtons.addEventListener("click", (event) => {
  if ( event.target.classList.contains("option") ) {
    event.target.classList.add("active");

    if (event.target.classList.contains("einkommen")) {
      appChooseButtons.children[0].classList.remove("active");
      otherTaxesApp.classList.remove("active");
      taxesApp.classList.add("active");
    }
    if (event.target.classList.contains("mehrwert")) {
      appChooseButtons.children[1].classList.remove("active");
      taxesApp.classList.remove("active");
      otherTaxesApp.classList.add("active");
    }
  }
});


/************************************************taxesApp2 */

let data = {
  nettobrutto: "0",
  percent: "0.07",
  money: null,
};

const form2 = document.querySelector(".taxesForm2");
const getTaxesButton = document.querySelector(".getTaxes");

const taxedMoney = document.querySelector(".taxedMoney");
const taxedMoneyResult = document.querySelector(".resultTaxedMoney");

form2.addEventListener("input", (event) => {
  console.log(event.target, event.target.value);
  data[event.target.name] = event.target.value;
  event.target.classList.add("active");
});

getTaxesButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("data object", data);
  let yourTaxesObj = new MehrwertTaxes(data);
  let resultObj = yourTaxesObj.count();
  console.log("result Object", resultObj);
  taxedMoney.innerHTML = resultObj.taxedMoney.toFixed(2) + " Euro";
  taxedMoneyResult.innerHTML = resultObj.result.toFixed(2) + " Euro";
});

/**********************************************Input Buttons*****************************************/

const fromNetto = document.querySelector("label.fromNetto");
fromNetto.addEventListener("click", () => {
  fromBrutto.classList.remove("active");
  fromNetto.classList.add("active");
})

const fromBrutto = document.querySelector("label.fromBrutto");
fromBrutto.addEventListener("click", () => {
  fromNetto.classList.remove("active");
  fromBrutto.classList.add("active");
})

const for17 = document.querySelector(".for17");
for17.addEventListener("click", () => {
  for19.classList.remove("active");
  for17.classList.add("active");
})

const for19 = document.querySelector(".for19");
for19.addEventListener("click", () => {
  for17.classList.remove("active");
  for19.classList.add("active");
})

/**************************************************button Get Taxes****************************************/

button2.addEventListener("mousedown", () => {
  button2.classList.add("mousedown");
});

button2.addEventListener("mouseup", () => {
  button2.classList.remove("mousedown");
});
