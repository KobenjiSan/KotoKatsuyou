import * as Utils from '../verbUtils';

const conversionMap =  {"う": "い", 
                        "つ": "ち", 
                        "る": "り", 
                        "ぶ": "び", 
                        "む": "み", 
                        "ぬ": "に", 
                        "く": "き", 
                        "ぐ": "ぎ", 
                        "す": "し"} 
        
const meaningBase = "to not ";                        

const suffix = "ません";

const kuruType = "き";

const helperVerb = "do ";

const negativePoliteConfig = {
    formName: "Negative (Polite)",

    definition: "The polite negative verb form ending in 〜ません, used to respectfully say something is not done.",

    meaning: (verbData) => `${meaningBase}${(verbData.meaning).slice(3)} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning.slice(0, -9), helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default negativePoliteConfig