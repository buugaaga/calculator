import React from 'react';



const ButtonPanel = ( { handleClick }: any ) => {

    let buttonValues: string[] = ["AC", "←", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"3", "2", "1", "+", "0", ".", "="];

    return (
        <div className="button-panel">
          {buttonValues.map( (value, i)  => (
              <button key={i} data-value={value} onClick={handleClick} className={`button ${value}`}>{value}</button>
          )
          )}
        </div>
    )
}

export default ButtonPanel;