import React from 'react'

type DisplayProps = {
  result?: string
  calculation?: string
}

const Display = ({ result = '', calculation }: DisplayProps) => {
  return (
    <div className="display">
      <p className="result display-value" id="display">
        {result || calculation}
      </p>
    </div>
  )
}

export default Display
