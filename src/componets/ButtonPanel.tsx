import React from 'react'
import { buttonValues, buttonId } from '../constants'

const ButtonPanel = ({ handleClick }: any) => {

  return (
    <div className="button-panel">
      {buttonValues.map((value, i) => (
        <div key={i} className={buttonId[i]}>
          <button id={buttonId[i]} data-value={value} onClick={handleClick}>
            {value}
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonPanel
