import Taxes from "./modules/taxes.module.js";
import MehrwertTaxes from "./modules/mehrwetsteuer.module.js";

const form = document.querySelector(".taxesForm");
const button = document.querySelector(".count");
const result = document.querySelector(".result");
const salary = document.querySelector(".salaryresult");
const status = document.querySelector(".status");
const Est = document.querySelector(".ESt");

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
  Est.innerHTML = `${yourTaxes.ESt} Euros`;

  result.classList.add("active");
});

/**************************************************chooseApp */

const chooseAppSelector = document.querySelector(".chooseAppSelect");
const chooseAppOptions = document.querySelector(".chooseAppOptions");

const taxesApp = document.querySelector(".taxesApp");
const otherTaxesApp = document.querySelector(".taxesApp2");

chooseAppSelector.addEventListener("click", (event) => {
  chooseAppOptions.classList.toggle("active");
});

chooseAppOptions.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("chooseAppOption1") ||
    event.target.classList.contains("chooseAppOption2")
  ) {
    chooseAppSelector.textContent = event.target.innerHTML;
    chooseAppOptions.classList.toggle("active");
    if (event.target.classList.contains("chooseAppOption1")) {
      otherTaxesApp.classList.remove("active");
      taxesApp.classList.add("active");
    }
    if (event.target.classList.contains("chooseAppOption2")) {
      taxesApp.classList.remove("active");
      otherTaxesApp.classList.add("active");
    }
  }
});

console.log(chooseAppSelector.textContent);

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
  console.log(event.target.name, event.target.value);
  data[event.target.name] = event.target.value;
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
