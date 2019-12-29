import { observable, decorate, computed } from 'mobx';

class Store {
  state = {
    result: "",
    calculation: "0"
  }
  
  get calculate(): string {
    let calc = this.state.calculation;
    if( calc.endsWith("/") || calc.endsWith("*") || calc.endsWith("-") || calc.endsWith("+") || calc.endsWith(".") ) {
      //eslint-disable-next-line
      let ex = eval(calc.slice(0,-1));
      return ex.toString();
    }
    
    //eslint-disable-next-line
    return eval(calc).toString();
  }
  exampleForTest = (sentence: string): number => {
    // eslint-disable-next-line
    return eval(sentence);
  }

  handleClick = (event) => {
    let dataValue = event.target.dataset.value;
    let calc = this.state.calculation;
    if (this.state.result && dataValue) this.state.result = "";
    switch(true) {
      case dataValue === "AC": 
        this.state.result = "";
        this.state.calculation = "0";
        break;
      case dataValue === "=":
        this.state.result = this.calculate;
        this.state.calculation = "0";
        break;
      case (+dataValue >= 0 && +dataValue <= 9 ): 
          this.state.calculation = calc === "0" ?  dataValue : calc + dataValue
        break;
      case (dataValue === "."):
        this.state.calculation = (calc.endsWith("*") || calc.endsWith("/") || calc.endsWith("+") || calc.endsWith("-") || calc.endsWith(".") || calc.includes("."))  ? calc : calc + dataValue
        break;
      case (dataValue === "*" || dataValue === "+" || dataValue === "/" || dataValue === "-"):
        this.state.calculation = (calc !== "0" && !calc.endsWith("/") && !calc.endsWith("*") && !calc.endsWith("-") && !calc.endsWith("+") && !calc.endsWith(".") ) ? calc + dataValue : calc;
        break;
     
      case (dataValue === "←"):
        this.state.calculation = calc.length !== 1 ? calc.slice(0,-1) : "0";
        break;
    }
  }
} 

decorate(Store, {
  state: observable,
  calculate: computed
})

export default new Store();