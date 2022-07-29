import Taxes from "./modules/taxes.module.js";

const form = document.querySelector(".taxesForm");
const button = document.querySelector(".count");

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

  yourTaxes.count();
});
