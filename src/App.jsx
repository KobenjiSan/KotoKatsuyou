import './App.css'
import Header from './Header/Header.jsx'
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
                              "pastMeaning": value.pastMeaning,
                              "type": value.type,
                              "exampleTemplate": value.exampleTemplate,
                              "exampleMeaning": value.exampleMeaning};
            verbCache.push(tempData);
            setVerbData(tempData);
          }
        }))
        .catch(error => console.log(error)); // make this say input not found or something
    }
  }

  return (
    <div className="mainContent">
      <Header/>
      <Input callback={handleWordSubmission}/> {/*using callback prop get word*/}
      <Output verbData={verbData}/> {/*send verb data to output as prop*/}
    </div>
  )
}

export default App
