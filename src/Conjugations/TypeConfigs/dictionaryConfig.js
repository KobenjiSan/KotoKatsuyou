import * as Utils from '../verbUtils';
       
const helperVerb = "";

const dictionaryConfig = {
    formName: "Dictionary",

    definition: "The base form of a verb used in dictionaries, casual speech, and with certain grammar patterns.",

    meaning: (verbData) => verbData.meaning,

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => `No change: ${wordData.kanji}`,

    conjugate: (wordData) => wordData.kanji,
}

export default dictionaryConfig