import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function PoliteForm(props){

    const conversionMap = {"う": "い", 
                           "つ": "ち", 
                           "る": "り", 
                           "ぶ": "び", 
                           "む": "み", 
                           "ぬ": "に", 
                           "く": "き", 
                           "ぐ": "ぎ", 
                           "す": "し"};

    const formName = "Polite";
    const definition = "A conjugated form of a Japanese verb used to show respect or formality, typically ending in 〜ます (masu).";
    const [isShowingBox, setIsShowingBox] = useState(false);
    const [whatsHappening, setWhatsHappening] = useState("");

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    useEffect(() => {
        if(props.data.type === "ichidan"){
            let lastCharacter = (props.data.kanji).slice(-1);
            setWhatsHappening(`Replace ${lastCharacter} in ${props.data.kanji} with ます → `);
        }else if(props.data.type === "godan"){
            let lastCharacter = (props.data.kanji).slice(-1);
            let newEnding = conversionMap[lastCharacter];
            setWhatsHappening(`Replace ${lastCharacter} in ${props.data.kanji} with ${newEnding}, then add ます → `);
        }else if(props.data.type === "irregular"){
            let lastCharacters = (props.data.hiragana).slice(-2); 
            if(lastCharacters === "する"){
                setWhatsHappening(`Replace ${lastCharacters} in ${props.data.kanji} with します → `);
            }else if(lastCharacters === "くる"){
                setWhatsHappening(`Replace ${lastCharacters} in ${props.data.kanji} with きます → `);
            }
        }
    }, [props.data]);

    function conjugateWord(){
        if(props.data.type === "ichidan"){
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            return conjugatedWord + "ます";
        }else if(props.data.type === "godan"){
            let lastCharacter = (props.data.kanji).slice(-1);
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            let newEnding = conversionMap[lastCharacter];
            return conjugatedWord + newEnding  + "ます";
        }else if(props.data.type === "irregular"){
            let lastCharacters = (props.data.hiragana).slice(-2);
            const conjugatedWord = (props.data.kanji).slice(0, -2); 
            if(lastCharacters === "する"){
                return conjugatedWord + "します"
            }else if(lastCharacters === "くる"){
                return conjugatedWord + "きます"
            }
        }
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{conjugateWord()}</p>
                <button onClick={handleShowBoxToggle}>˅</button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b> - {definition}
                <br/><br/>
                <b>What's Happening? - </b> {whatsHappening} {conjugateWord()}
                <br /><br />
                <b>Meaning:</b> {props.data.meaning} (politely)
                <br/><br/>
                <b>Example Sentence:</b> 
            </div>
        </div>
    );
}
export default PoliteForm