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

const suffix = "ます";

const kuruType = "き";

const helperVerb = "";

const politeConfig = {
    formName: "Polite",

    definition: "A more formal verb form ending in 〜ます, used in respectful or unfamiliar situations.",

    meaning: (verbData) => `${verbData.meaning} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning.slice(0, -9), helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default politeConfig