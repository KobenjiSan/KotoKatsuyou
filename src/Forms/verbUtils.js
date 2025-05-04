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

export function conjugateIchidan(wordData, formSuffix){
    return stripLastCharacter(wordData.kanji) + formSuffix;
}

export function whatsHappeningIchidan(wordData, formSuffix){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${formSuffix} → `;
}

// NOTE: edge cases should be managed in configs.
export function conjugateGodan(wordData, conversionMap, formSuffix){
    return stripLastCharacter(wordData.kanji) + conversionMap[getLastCharacter(wordData.kanji)] + formSuffix;
}

// certain special forms dont need the form suffix as it is already added in the map 
export function conjugateGodanSpec(wordData, conversionMap){
    return stripLastCharacter(wordData.kanji) + conversionMap[getLastCharacter(wordData.kanji)];
}

export function whatsHappeningGodan(wordData, conversionMap, formSuffix){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${conversionMap[getLastCharacter(wordData.kanji)]}, then add ${formSuffix} → `;
}

// certain special forms dont need the form suffix as it is already added in the map 
export function whatsHappeningGodanSpec(wordData, conversionMap){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${conversionMap[getLastCharacter(wordData.kanji)]} → `;
}

export function conjugateIrregular(wordData, kuruType, formSuffix){
    const lastCharacters = getLastTwoCharacters(wordData.hiragana);
    if(lastCharacters === "する"){
        return stripLastTwoCharacters(wordData.kanji) + "し" + formSuffix;
    }else if(lastCharacters === "くる"){
        return stripLastTwoCharacters(wordData.kanji) + kuruType + formSuffix;
    }else{
        console.error(`ERROR in verbUtils.js/conjugateIrregular - ${wordData.hiragana} is listed as irregular`);
        return null;
    }
}

export function whatsHappeningIrregular(wordData, kuruType, formSuffix){
    const lastCharacters = getLastTwoCharacters(wordData.hiragana);
    if(lastCharacters === "する"){
        return `Replace ${lastCharacters} in ${wordData.kanji} with し${formSuffix} → `;
    }else if(lastCharacters === "くる"){
        return `Replace ${lastCharacters} in ${wordData.kanji} with ${kuruType}${formSuffix} → `;
    }
}

export function buildSentence(sentence, meaning, helperVerb){
    return (sentence).replace("[verb]", helperVerb + meaning.slice(3));
}

export function buildPastSentence(sentence, meaning, helperVerb){
    return (sentence).replace("[verb]", helperVerb + meaning);
}

export function conjugateWord(wordData, formSuffix, conversionMap, kuruType){
    switch(wordData.type){
        case "ichidan":
            return conjugateIchidan(wordData, formSuffix);
        case "godan":
            return conjugateGodan(wordData, conversionMap, formSuffix);
        case "irregular":
            return conjugateIrregular(wordData, kuruType, formSuffix);
    }
}

// certain special forms dont need the form suffix as it is already added in the map 
export function conjugateWordSpec(wordData, formSuffix, conversionMap, kuruType){
    switch(wordData.type){
        case "ichidan":
            return conjugateIchidan(wordData, formSuffix);
        case "godan":
            return conjugateGodanSpec(wordData, conversionMap);
        case "irregular":
            return conjugateIrregular(wordData, kuruType, formSuffix);
    }
}

export function whatsHappening(wordData, formSuffix, conversionMap, kuruType){
    switch(wordData.type){
        case "ichidan":
            return whatsHappeningIchidan(wordData, formSuffix);
        case "godan":
            return whatsHappeningGodan(wordData, conversionMap, formSuffix);
        case "irregular":
            return whatsHappeningIrregular(wordData, kuruType, formSuffix);
    }
}

// certain special forms dont need the form suffix as it is already added in the map 
export function whatsHappeningSpec(wordData, formSuffix, conversionMap, kuruType){
    switch(wordData.type){
        case "ichidan":
            return whatsHappeningIchidan(wordData, formSuffix);
        case "godan":
            return whatsHappeningGodanSpec(wordData, conversionMap);
        case "irregular":
            return whatsHappeningIrregular(wordData, kuruType, formSuffix);
    }
}