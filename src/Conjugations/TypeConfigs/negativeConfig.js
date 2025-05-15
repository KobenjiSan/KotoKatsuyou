import * as Utils from '../verbUtils';

const conversionMap =  {"う": "わ", 
                        "つ": "た", 
                        "る": "ら", 
                        "ぶ": "ば", 
                        "む": "ま", 
                        "ぬ": "な", 
                        "く": "か", 
                        "ぐ": "が", 
                        "す": "さ"}
        
const meaningBase = "to not ";                        

const suffix = "ない";

const kuruType = "こ";

const helperVerb = "do ";

const negativeConfig = {
    formName: "Negative",

    definition: "The casual negative form of a verb, typically ending in 〜ない to express that something is not done.",

    meaning: (verbData) => meaningBase + (verbData.meaning).slice(3),

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default negativeConfig