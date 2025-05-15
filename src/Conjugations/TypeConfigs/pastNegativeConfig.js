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
        
const meaningBase = "did not ";                        

const suffix = "なかった";

const kuruType = "こ";

const helperVerb = "did ";

const pastNegativeConfig = {
    formName: "Past Negative",

    definition: "The casual past negative form ending in 〜なかった, used to say something was not done.",

    meaning: (verbData) => meaningBase + (verbData.meaning).slice(3),

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default pastNegativeConfig