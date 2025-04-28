import './App.css'
import Input from './Input/Input.jsx'
import Output from './Output/Output.jsx'
import { useState } from 'react';

function App() {

  const [verbData, setVerbData] = useState({});

  let verbCache = [];

  /**
   * Handles submission of a new verb.
   * 
   * Checks local cache for verb,
   * if not found fetches from database.
   * 
   * @param {string} input - Japanese word entered by user (hiragana)
   */
  function handleWordSubmission(input){
    if(verbCache.find(verb => verb.hiragana === input)){
      setVerbData(verbCache.find(verb => verb.hiragana === input)); 
    }else{
      fetch("./verbs.json")
        .then(response => response.json())
        .then(values => values.forEach(value => {
          if(value.hiragana === input){
            const tempData = {"hiragana": value.hiragana,
                              "kanji": value.kanji,
                              "meaning": value.meaning,
                              "type": value.type};
            verbCache.push(tempData);
            setVerbData(tempData);
          }
        }))
        .catch(error => console.log(error)); // make this say input not found or something
    }
  }

  return (
    <div className="mainContent">
      <Input callback={handleWordSubmission}/> {/*using callback prop get word*/}
      <Output verbData={verbData}/> {/*send verb data to output as prop*/}
    </div>
  )
}

export default App
