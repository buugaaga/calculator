import React from 'react';

type DisplayProps = { 
  result?: string;
  calculation?: string;  
}

const Display = ({ result = "" , calculation = "0"}: DisplayProps) => {

  return (
    <div className="display"  >
      <p className="result display-value" id="display">{result ? result : calculation}</p>
      {/* <p className="calculation display-value" >{calculation}</p> */}
    </div>
  )
}


export default Display;