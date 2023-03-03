import { useState } from 'react';
import './App.css';
import Background from './Background';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <Background />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
