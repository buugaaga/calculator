import React from 'react';
import { observer } from 'mobx-react';

import store from './store';
import Display from './componets/Display';
import ButtonPanel from './componets/ButtonPanel';
import './App.css';



class App extends React.Component {
 

  
  render() {
    
    console.log(store)
    return (
      <div className="App col">
        <Display  result={store.state.result} calculation={store.state.calculation} />
        <ButtonPanel  handleClick={store.handleClick} />
      </div>
    );
  }
}

export default observer(App);
