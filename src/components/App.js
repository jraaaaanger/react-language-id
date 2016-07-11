import React from 'react';
import InputBox from './InputBox';

const App = props => {
  return (
    <div>
      <h1>What Language is This?</h1>
      <p className="sponsor">Powered by Google Translate&trade;</p>
      <InputBox />
    </div>
  )
}

export default App;
