import Taxes from "./modules/taxes.module.js";

const form = document.querySelector(".taxesForm");
const button = document.querySelector(".count");

const salary = document.querySelector(".salary");
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
  Est.innerHTML = yourTaxes.ESt;
});
