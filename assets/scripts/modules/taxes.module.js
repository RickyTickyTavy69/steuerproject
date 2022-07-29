export default class Taxes {
  constructor(options) {
    this.status = options.status === "0" ? false : true;
    this.salary = Number(options.salary);
    this.zve = this.status ? this.salary / 2 : this.salary;
    this.est = 0;
    this.ESt = 0;
    this.taxes = {};
  }

  count() {
    console.log("status", this.status);
    console.log(`zve ist ${this.zve}`);

    if (Number(this.zve) > 9744 && Number(this.zve) <= 14753) {
      let y = (Number(this.zve) - 9744) / 10000;
      this.est = Math.floor((995.21 * y + 1400) * y);
    } else if (Number(this.zve) > 14753 && Number(this.zve) <= 57918) {
      let z = (Number(this.zve) - 14753) / 10000;
      this.est = Math.floor((208.85 * z + 2397) * z + 950.96);
    } else if (Number(this.zve) > 57918 && Number(this.zve) <= 274612) {
      this.est = Math.floor(0.42 * Number(this.zve) - 9136.63);
    } else if (Number(this.zve) > 274612) {
      this.est = Math.floor(0.45 * Number(this.zve) - 17374.99);
    }

    this.ESt = this.status ? this.est * 2 : this.est;

    console.log(`deine Steuer sind ${this.ESt} Euro`);
  }
}

/***
 *  Fälle :
 *
 * zve => zu versteuerndes Einkommen
 *
 * 1) Alleinstehende Person, => zve = salary. (Grundtarif);
 *
 * 2) Zwei Leute, => zve = gemeinsames Einkommen / 2;
 *
 *---------->Berechnung von Steuern<--------------------
 *
 * Fall 1:
 *
 * zvE <= 9744 Euro
 *
 *
 *
 */
