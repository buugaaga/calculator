import React from 'react'
import Display from './componets/Display'
import ButtonPanel from './componets/ButtonPanel'
import { calculate } from './core/calculaterCore'
import { validate } from './core/validate'
import { convert } from './core/convert'
import './App.css'

const App = () => {
  const [result, setResult] = React.useState('')
  const [formula, setFormula] = React.useState('0')

  const handleClick = (e) => {
    let valueOfButton = e.target.dataset.value
    if(validate(formula, valueOfButton)) {
      if(valueOfButton === '=') {
        setResult(calculate(formula))
      } else {
        setResult('')
        setFormula(convert(formula, valueOfButton))
      }
    }
  }
  console.log(formula)
  return (
    <div className="App col">
      <Display result={result} calculation={formula} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  )
}

export default App
