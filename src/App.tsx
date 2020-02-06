import React from 'react';

// import store, { handleClick } from './store';
import Display from './componets/Display';
import ButtonPanel from './componets/ButtonPanel';
import './App.css';


const App = () => {
  
  const [ result, setResult ] = React.useState('')
  const [ formula, setFormula ] = React.useState('0')

  const handleClick = (e) => {
    let valueOfButton = e.target.dataset.value
    setFormula(formula + valueOfButton)
  }

  return (
    <div className="App col">
    <Display  result={result} calculation={formula} />
    <ButtonPanel  handleClick={handleClick} />
    </div>
  ) 
}

export default App;
