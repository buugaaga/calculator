import { observable, decorate, computed } from 'mobx';

class Store {
  state = {
    result: 0,
    calculation: "0"
  }
  
  get calculate() {
    //eslint-disable-next-line
    return eval(this.state.calculation.slice())
  }

  handleClick = (event) => {
    let dataValue = event.target.dataset.value;
    switch(true) {
      case dataValue === "AC": 
        this.state.result = 0;
        this.state.calculation = "0";
        break;
      case dataValue === "=":
        this.state.result = this.calculate;
        this.state.calculation = "0";
        break;
      case (+dataValue >= 0 && +dataValue <= 9 ): 
          this.state.calculation = this.state.calculation === "0" ?  dataValue : this.state.calculation + dataValue
        break;
      case (dataValue === "."):
          this.state.calculation = (this.state.calculation.endsWith("*" || "-" || "+" || "/")) ? this.state.calculation : this.state.calculation + dataValue
        break;
      case (dataValue === "*" || dataValue === "-" || dataValue === "+" || dataValue === "/"):
        console.log("product")
        this.state.calculation = this.state.calculation + dataValue
        break;
      case (dataValue === "←"):
        this.state.calculation = this.state.calculation.length !== 1 ? this.state.calculation.slice(0,-1) : "0";
        break;
    }
  }
} 

decorate(Store, {
  state: observable,
  calculate: computed
})

export default new Store();