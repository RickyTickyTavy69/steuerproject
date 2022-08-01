export default class MehrwertTaxes {
  constructor(options) {
    this.nettobrutto = options.nettobrutto === "0" ? false : true;
    this.percent = Number(options.percent);
    this.money = Number(options.money);
    this.taxes = {};
    this.result = null;
    this.taxedMoney = null;
  }

  count() {
    if (this.nettobrutto === false) {
      console.log("from brutto");
      this.taxedMoney = this.money * this.percent;
      this.result = this.money - this.money * this.percent;
    }

    if (this.nettobrutto === true) {
      console.log("from netto");
      console.log("this percent", this.percent);
      if (this.percent === 0.07) {
        this.result = this.money * 1.07;
      } else {
        this.result = this.money * 1.19;
      }
      this.taxedMoney = this.result * this.percent;
    }

    return {
      result: this.result,
      percent: this.percent,
      taxedMoney: this.taxedMoney,
    };
  }
}
