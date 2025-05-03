import './App.css'
import Header from './Header/Header.jsx'
import Input from './Input/Input.jsx'
import Output from './Output/Output.jsx'
import ErrorMessage from './Error/ErrorMessage.jsx'
import { useState } from 'react';

function App() {

  const [verbData, setVerbData] = useState({});
  const [verbCache, setVerbCache] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  /**
   * Handles submission of a new verb.
   * 
   * Checks local cache for verb,
   * if not found fetches from database.
   * 
   * @param {string} input - Japanese word entered by user (hiragana)
   */
  function handleWordSubmission(input){
    const regCheck = /^[\u3040-\u30FF\u4E00-\u9FFF\uFF66-\uFF9D]+$/;
    if(!regCheck.test(input)){
      setIsError(true);
      setErrorMessage("Please only input Japanese characters");
    }else{
      if(verbCache.find(verb => verb.hiragana === input || verb.kanji === input)){
        // console.log("pulled from cache");
        setVerbData(verbCache.find(verb => verb.hiragana === input || verb.kanji === input)); 
        setIsError(false);
      }else{
        // console.log("fetching from API");
        // fetch('/api/test')
        //   .then(response => response.json())
        //   .then(value => console.log(value.message));
        fetch(`/api/katsuyou/verb/${input}`)
          .then(response => {
            if(!response.ok){
              setIsError(true); 
              return response.json().then(err => {
                throw new Error(err.error || "Unknown Error");
              });
            }
            setIsError(false);
            return response.json();
          }).then(value => {
              const tempData = {"hiragana": value.hiragana,
                                "kanji": value.kanji,
                                "meaning": value.meaning,
                                "pastMeaning": value.pastMeaning,
                                "type": value.type,
                                "jpSentenceHead": value.exampleTemplate,
                                "engSentence": value.exampleMeaning};
              setVerbCache(prev => [...prev, tempData]);
              setVerbData(tempData);
          })
          .catch(error => {
            console.log(error.message);
            setErrorMessage(error.message);
          }); // make this say input not found or something
      }
    }
  }

  return (
    <div className="mainContent">
      <Header/>
      <Input callback={handleWordSubmission}/> {/*using callback prop get word*/}
      <ErrorMessage errorMsg={errorMessage} isError={isError}/>
      <Output verbData={verbData}/> {/*send verb data to output as prop*/}
    </div>
  )
}

export default App
