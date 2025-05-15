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
        
const meaningBase = "did not ";                        

const suffix = "ませんでした";

const kuruType = "き";

const helperVerb = "did ";

const pastNegativePoliteConfig = {
    formName: "Past Negative (Polite)",

    definition: "The polite past negative verb form ending in 〜ませんでした, expressing respectfully that something wasn't done.",

    meaning: (verbData) => `${meaningBase}${(verbData.meaning).slice(3)} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning.slice(0, -9), helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default pastNegativePoliteConfig