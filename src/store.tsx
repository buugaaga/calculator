import { observable } from 'mobx'
import { calculatingDecimal, isNumber } from './core/calculaterCore'

const store = {
  state : {
    result: "",
    calculation: "0"
  }
}
  
function calculate(): string {
  let calc = this.state.calculation;
  if( calc.endsWith("/") || calc.endsWith("*") || calc.endsWith("-") || calc.endsWith("+") || calc.endsWith(".") ) {
    //eslint-disable-next-line
    let ex = eval(calc.slice(0,-1));
    return ex.toString();
  }
  //eslint-disable-next-line
  return eval(calc).toString();
}

function calculateDecimalInput(strInput: string): boolean {
    let arrOfValues = strInput.split(/-|\+|\*|\//);
    if(arrOfValues.length >= 2) return arrOfValues[arrOfValues.length - 1].includes(".");
    return;
  }

function exampleForTest(sentence: string): number {
    // eslint-disable-next-line
    return eval(sentence);
  }

export function handleClick(event) {
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
    case ( isNumber(dataValue) ): 
        this.state.calculation = calc === "0" ?  dataValue : calc + dataValue
      break;
    case (dataValue === "."):
      this.state.calculation = (calc.endsWith("*") || calc.endsWith("/") || calc.endsWith("+") || calc.endsWith("-") || calc.endsWith(".") || this.calculateDecimalInput(calc))  ? calc : calc + dataValue
      break;
    case (dataValue === "*" || dataValue === "+" || dataValue === "/" || dataValue === "-"):
      this.state.calculation = (calc !== "0" && !calc.endsWith("/") && !calc.endsWith("*") && !calc.endsWith("-") && !calc.endsWith("+") && !calc.endsWith(".") ) ? calc + dataValue : calc;
      break;
    
    case (dataValue === "←"):
      this.state.calculation = calc.length !== 1 ? calc.slice(0,-1) : "0";
      break;
  }
}




export default observable(store)