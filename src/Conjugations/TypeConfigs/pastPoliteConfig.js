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

const suffix = "ました";

const kuruType = "き";

const helperVerb = "";

const pastPoliteConfig = {
    formName: "Past (Polite)",

    definition: "The polite past tense verb form ending in 〜ました, used in respectful conversation.",

    meaning: (verbData) => `${Utils.getPastMeaning(verbData)} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning.slice(0, -9), helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default pastPoliteConfig