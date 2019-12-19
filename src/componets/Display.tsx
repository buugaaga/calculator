import * as React from 'react';

type DisplayProps = { 
  result?: number;
  calculation?: string;  
}

const Display = ({ result = 0 , calculation = "0"}: DisplayProps) => {

  return (
    <div className="display">
      <div className="result display-value">{result}</div>
      <div className="calculation display-value">{calculation}</div>
    </div>
  )
}


export default Display;