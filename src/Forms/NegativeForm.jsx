import { useState , useEffect } from 'react';
import styles from './Form.module.css'

function NegativeForm(props){

    const conversionMap = {"う": "あ", 
                           "つ": "た", 
                           "る": "ら", 
                           "ぶ": "ば", 
                           "む": "み", 
                           "ぬ": "な", 
                           "く": "か", 
                           "ぐ": "が", 
                           "す": "さ"};

    const formName = "Negative";
    const definition = "A conjugation that changes a verb's meaning from doing something to not doing it.";
    const meaning = props.data.meaning ? "to not " + (props.data.meaning).slice(3) : null;
    const [isShowingBox, setIsShowingBox] = useState(false);
    const [whatsHappening, setWhatsHappening] = useState("");

    const exampleMeaning = props.data.exampleMeaning && props.data.meaning ? (props.data.exampleMeaning).replace("[verb]", "do " + (meaning).slice(3)) : null;

    function handleShowBoxToggle(){
        setIsShowingBox(!isShowingBox);
    }

    // Sets 'What's Happening?' only when props.data is changed
        useEffect(() => {
            if(props.data.type === "ichidan"){
                let lastCharacter = (props.data.kanji).slice(-1);
                setWhatsHappening(`Replace ${lastCharacter} in ${props.data.kanji} with ない → `);
            }else if(props.data.type === "godan"){
                let lastCharacter = (props.data.kanji).slice(-1);
                let newEnding = conversionMap[lastCharacter];
                setWhatsHappening(`Replace ${lastCharacter} in ${props.data.kanji} with ${newEnding}, then add ない → `);
            }else if(props.data.type === "irregular"){
                let lastCharacters = (props.data.hiragana).slice(-2); 
                if(lastCharacters === "する"){
                    setWhatsHappening(`Replace ${lastCharacters} in ${props.data.kanji} with しない → `);
                }else if(lastCharacters === "くる"){
                    setWhatsHappening(`Replace ${lastCharacters} in ${props.data.kanji} with こない → `);
                }
            }
        }, [props.data]);

    function conjugateWord(){
        if(props.data.type === "ichidan"){
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            return conjugatedWord + "ない"
        }else if(props.data.type === "godan"){
            let lastCharacter = (props.data.kanji).slice(-1);
            const conjugatedWord = (props.data.kanji).slice(0, -1); 
            let newEnding = conversionMap[lastCharacter];
            return conjugatedWord + newEnding  + "ない"
        }else if(props.data.type === "irregular"){
            let lastCharacters = (props.data.hiragana).slice(-2);
            const conjugatedWord = (props.data.kanji).slice(0, -2); 
            if(lastCharacters === "する"){
                return conjugatedWord + "しない"
            }else if(lastCharacters === "くる"){
                return conjugatedWord + "こない"
            }
        }
    }
    
    return(
        <div>
            <div className={styles.formBox}>
                <p className={styles.type}>{formName}</p>
                <p className={styles.word}>{conjugateWord()}</p>
            <button 
                onClick={handleShowBoxToggle} 
                className={isShowingBox ? styles.buttonDown : styles.buttonUp}>
                    {'>'}
            </button>
            </div>
            <div className={isShowingBox ? styles.infoBoxShowing : styles.infoBoxHidden}>
                <b>{formName}</b>: {definition}
                <br/><br/>
                <b>What's Happening? </b> {whatsHappening} {conjugateWord()}
                <br /><br />
                <b>Meaning:</b> {meaning}
                <br/><br/>
                <b>Example Sentence:</b> {props.data.exampleTemplate}{conjugateWord()} [ {exampleMeaning} ]
            </div>
        </div>
    );
}
export default NegativeForm