import React from 'react';

import Display from './componets/Display';
import ButtonPanel from './componets/ButtonPanel';
import './App.css';

class App extends React.Component {

  state = {
    result: 0,
    calculation: "0"
  }  

  handleClick = (event) => {
    let dataValue = event.target.dataset.value;
    switch(true) {
      case dataValue === "AC": 
        this.setState({
        result: 0,
        input: "0"
      });
      break;
      case (+dataValue >= 0 && +dataValue <= 9): 
        this.setState({
          calculation: this.state.calculation === "0" ?  dataValue : this.state.calculation + dataValue
        });
    }
  }
  render() {
    return (
      <div className="App col">
        <Display result={this.state.result} calculation={this.state.calculation} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
