function stripLastCharacter(verb){
    return verb.slice(0, -1);
}

function stripLastTwoCharacters(verb){
    return verb.slice(0, -2);
}

function getLastCharacter(verb){
    return verb.slice(-1);
}

function getLastTwoCharacters(verb){
    return verb.slice(-2);
}

// basic idea -- going to change
function conjugateForm(wordData, conversionMap, formSuffix){
    const verbStem = stripLastCharacter(wordData.kanji);
    const lastCharacter = getLastCharacter(wordData.kanji);
    if(wordData.type === "ichidan"){
        return verbStem + formSuffix
    }else if(wordData.type === "godan"){
        let newEnding = conversionMap[lastCharacter];
        return verbStem + newEnding  + formSuffix
    }else if(wordData.type === "irregular"){
        let lastCharacters = getLastTwoCharacters(wordData.hiragana);
        const conjugatedWord = stripLastTwoCharacters(wordData.kanji);
        if(lastCharacters === "する"){
            return conjugatedWord + "しない" // will need to be set within each form possibly
        }else if(lastCharacters === "くる"){
            return conjugatedWord + "こない" // will need to be set within each form possibly
        }
    }
}



function whatsHappening(wordData, conversionMap, formSuffix){
    const lastCharacter = getLastCharacter(wordData.kanji);
    if(wordData.type === "ichidan"){
        return `Replace ${lastCharacter} in ${wordData.kanji} with ${formSuffix} → `;
    }else if(wordData.type === "godan"){
        let newEnding = conversionMap[lastCharacter];
        return `Replace ${lastCharacter} in ${wordData.kanji} with ${newEnding}, then add ${formSuffix} → `;
    }else if(wordData.type === "irregular"){
        let lastCharacters = (wordData.hiragana).slice(-2); 
        if(lastCharacters === "する"){
          return `Replace ${lastCharacters} in ${wordData.kanji} with しない → `;
        }else if(lastCharacters === "くる"){
          return `Replace ${lastCharacters} in ${wordData.kanji} with こない → `;
        }
    }
}