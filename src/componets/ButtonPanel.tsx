import React from 'react';



const ButtonPanel = ( { handleClick }: any ) => {

    let buttonValues: string[] = ["AC", "←", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"3", "2", "1", "+", "0", ".", "="];

    return (
        <div className="button-panel" >
          {buttonValues.map( (value, i)  => (
              <div key={i} className={`button ${ value === "AC" ? "AC" : value === "=" ? "equal" : ""}`}>
                <button  data-value={value} onClick={handleClick} >{value}</button>
              </div>
              
          )
          )}
        </div>
    )
}

export default ButtonPanel;