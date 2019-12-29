import React from 'react';



const ButtonPanel = ( { handleClick }: any ) => {

    let buttonValues: string[] = ["AC", "←", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"3", "2", "1", "+", "0", ".", "="];
    let buttonId: string[] = ["clear", "del", "divide", "seven", "eight", "nine", "multiply", "four", "five", "six", "subtract", "three", "two", "one", "add", "zero", "decimal", "equals"];

    return (
        <div className="button-panel" >
          {buttonValues.map( (value, i)  => (
              <div key={i} className={ buttonId[i] }>
                <button id={ buttonId[i] } data-value={value} onClick={handleClick} >{value}</button>
              </div>
          )
          )}
        </div>
    )
}

export default ButtonPanel;