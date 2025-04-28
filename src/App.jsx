import './App.css'
import Input from './Input/Input.jsx'
import Output from './Output/Output.jsx'
import { useState } from 'react';

function App() {

  const [word, setWord] = useState("");

  function onSubmitWord(input){
    setWord(input);
    console.log(word);
  }

  return (
    <div className="mainContent">
      <Input callback={onSubmitWord}/> {/*using callback prop get word*/}
      <Output word={word}/> {/*send word to output as prop*/}
    </div>
  )
}

export default App
