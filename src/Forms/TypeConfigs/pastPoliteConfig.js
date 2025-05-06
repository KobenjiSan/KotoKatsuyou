import nlp from 'compromise';
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

const kuruType = "き"

const helperVerb = "";

const pastPoliteConfig = {
    formName: "Past (Polite)",

    definition: "A conjugation that changes a verb's meaning from doing something to having done it.",

    meaning: (verbData) => `${nlp((verbData.meaning).slice(3)).verbs().toPastTense().text()} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning.slice(0, -9), helperVerb),

    whatsHappening: (wordData) => Utils.whatsHappening(wordData, suffix, conversionMap, kuruType),

    conjugate: (wordData) => Utils.conjugateWord(wordData, suffix, conversionMap, kuruType),
}

export default pastPoliteConfig