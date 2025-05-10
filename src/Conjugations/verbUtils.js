/**
 * Handles utility functions used by each conjugation form
 */

import nlp from 'compromise';

/**
 * removes the last character from a string
 * @param {string} verb 
 * @returns string (ex: 食べる → 食べ)
 */
function stripLastCharacter(verb){
    return verb.slice(0, -1);
}

/**
 * removes the last 2 characters from a string
 * @param {string} verb 
 * @returns string (ex: 食べる → 食)
 */
function stripLastTwoCharacters(verb){
    return verb.slice(0, -2);
}

/**
 * returns the last character from a string
 * @param {string} verb 
 * @returns string (ex: 食べる → る)
 */
function getLastCharacter(verb){
    return verb.slice(-1);
}

/**
 * returns the last 2 characters from a string
 * @param {string} verb 
 * @returns string (ex: 食べる → べる)
 */
function getLastTwoCharacters(verb){
    return verb.slice(-2);
}

/**
 * transforms a string based on Ichidan conjugation logic
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @returns string (ex: (食べる, て) → 食べて)
 */
export function conjugateIchidan(wordData, formSuffix){
    return stripLastCharacter(wordData.kanji) + formSuffix;
}

/**
 * explains (in words) how an Ichidan verb transforms 
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @returns string explanation sentence
 */
export function whatsHappeningIchidan(wordData, formSuffix){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${formSuffix}`;
}

/**
 * transforms a string based on Godan conjugation logic
 * NOTE: edge cases are managed in config files. 
 * @param {object} wordData 
 * @param {map} conversionMap 
 * @param {string} formSuffix 
 * @returns string (ex: (遊ぶ, (ぶ: び), ます) → 遊びます)
 */
export function conjugateGodan(wordData, conversionMap, formSuffix){
    return stripLastCharacter(wordData.kanji) + conversionMap[getLastCharacter(wordData.kanji)] + formSuffix;
}

/**
 * transforms a string based on Godan conjugation logic
 * (certain special forms dont need the form suffix as it is already added in the map) 
 * @param {object} wordData 
 * @param {map} conversionMap 
 * @returns string (ex: (遊ぶ, (ぶ: んで)) → 遊んで)
 */
export function conjugateGodanSpec(wordData, conversionMap){
    return stripLastCharacter(wordData.kanji) + conversionMap[getLastCharacter(wordData.kanji)];
}

/**
 * explains (in words) how a Godan verb transforms 
 * NOTE: edge cases are managed in config files. 
 * @param {object} wordData 
 * @param {map} conversionMap 
 * @param {string} formSuffix 
 * @returns string explanation sentence
 */
export function whatsHappeningGodan(wordData, conversionMap, formSuffix){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${conversionMap[getLastCharacter(wordData.kanji)]}, then add ${formSuffix}`;
}

/**
 * explains (in words) how a Godan verb transforms
 * (certain special forms dont need the form suffix as it is already added in the map) 
 * @param {object} wordData 
 * @param {map} conversionMap 
 * @returns string explanation sentence
 */
export function whatsHappeningGodanSpec(wordData, conversionMap){
    return `Replace ${getLastCharacter(wordData.kanji)} in ${wordData.kanji} with ${conversionMap[getLastCharacter(wordData.kanji)]}`;
}

/**
 * transforms a string based on Irregular conjugation logic 
 * @param {object} wordData 
 * @param {string} kuruType 'く' can be 'き' or 'こ' depending on form
 * @param {string} formSuffix 
 * @returns string (ex: (くる, き, ます) → きます)
 */
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

/**
 * explains (in words) how an Irregular verb transforms
 * @param {object} wordData 
 * @param {string} kuruType 'く' can be 'き' or 'こ' depending on form
 * @param {string} formSuffix 
 * @returns string explanation sentence
 */
export function whatsHappeningIrregular(wordData, kuruType, formSuffix){
    const lastCharacters = getLastTwoCharacters(wordData.hiragana);
    if(lastCharacters === "する"){
        return `Replace ${lastCharacters} in ${wordData.kanji} with し${formSuffix}`;
    }else if(lastCharacters === "くる"){
        return `Replace ${lastCharacters} in ${wordData.kanji} with ${kuruType}${formSuffix}`;
    }
}

/**
 * builds a sentence from an inputted template using a verb and helper verb (if needed)
 * takes infinitive form so it strips the first 3 characters
 * @param {string} sentence (ex: 'I [verb] an apple')
 * @param {string} meaning verb meaning (ex: 'to eat') 
 * @param {string} helperVerb (ex: '')
 * @returns string (('I [verb] an apple', 'to eat', '') → I eat an apple)
 */
export function buildSentence(sentence, meaning, helperVerb){
    return (sentence).replace("[verb]", helperVerb + meaning.slice(3));
}

/**
 * builds a sentence from an inputted template using a verb and helper verb (if needed)
 * does not take infinitive form so it does not strip the first 3 characters
 * @param {string} sentence (ex: 'I [verb] an apple')
 * @param {string} meaning verb meaning (ex: 'eating') 
 * @param {string} helperVerb (ex: 'am')
 * @returns string (('I [verb] an apple', 'eating', 'am') → I am eating an apple)
 */
export function buildPastSentence(sentence, meaning, helperVerb){
    return (sentence).replace("[verb]", helperVerb + meaning);
}

/**
 * routes verbs to be conjugated properly based on type
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @param {map} conversionMap 
 * @param {string} kuruType 
 * @returns conjugated verb
 */
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

/**
 * routes verbs to be conjugated properly based on type
 * (certain special forms dont need the form suffix in Godan logic as it is already added in the map)
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @param {map} conversionMap 
 * @param {string} kuruType 
 * @returns conjugated verb
 */
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

/**
 * routes verbs to get proper explanations based on type
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @param {map} conversionMap 
 * @param {string} kuruType 
 * @returns string explanation
 */
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


/**
 * routes verbs to get proper explanations based on type
 * (certain special forms dont need the form suffix as it is already added in the map)
 * @param {object} wordData 
 * @param {string} formSuffix 
 * @param {map} conversionMap 
 * @param {string} kuruType 
 * @returns string explanation
 */
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

/**
 * uses compromise nlp to get past tense meaning of a verb
 * also handles edge cases where no data is returned
 * @param {object} wordData 
 * @returns past tense meaning of an English verb
 */
export function getPastMeaning(wordData){
    const pastMeaning = nlp((wordData.meaning).slice(3)).verbs().toPastTense().text();
    if(pastMeaning === "" || pastMeaning === (wordData.meaning).slice(3)){
        return "did " + (wordData.meaning).slice(3);
    }else{
        return pastMeaning;
    }
}

// map of overrides that arent caught when returning ing forms
const cvcOverrides = {
  cut: 'cutting'
};

/**
 * Uses Compromise NLP to generate the gerund (–ing) form of a verb,
 * including logic for edge cases like 'cut' → 'cutting' or 'lie' → 'lying'.
 * @param {object} wordData 
 * @returns gerund of an English verb
 */
export function getEnglishINGForm(wordData){
    const meaning = (wordData.meaning).slice(3);
    const ingForm = (nlp(meaning).verbs().toGerund().text()).slice(3);
    if(ingForm === '' || ingForm === (wordData.meaning).slice(3)){
        if(meaning.endsWith('ie')){
            return stripLastTwoCharacters(meaning) + 'ying';
        }else if(meaning.endsWith('ee')){
            return meaning + 'ing';
        }else if(meaning.endsWith('e')){
            return stripLastCharacter(meaning) + 'ing';
        }else if(meaning.endsWith('c')){
            return meaning + 'king';
        }else if(cvcOverrides[meaning]){
            return cvcOverrides[meaning];
        }else{
            return meaning + 'ing';
        }
    }else{
        return ingForm;
    }
}