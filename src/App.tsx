import React from 'react';

import Display from './componets/Display';
import ButtonPanel from './componets/ButtonPanel';
import './App.css';

const App: React.FC = () => {

  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <div className="App">
      <h1>hi babay</h1>
      <Display />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
}

export default App;
