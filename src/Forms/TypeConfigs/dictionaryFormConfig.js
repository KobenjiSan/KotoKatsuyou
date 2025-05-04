import * as Utils from '../verbUtils';
       
const helperVerb = "";

const dictionaryFormConfig = {
    formName: "Dictionary C",

    definition: "The plain, unconjugated form of a Japanese verb used in casual speech, writing, and to build other conjugations",

    meaning: (verbMeaning) => verbMeaning,

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => `No change: ${wordData.kanji} → `,

    conjugate: (wordData) => wordData.kanji,
}

export default dictionaryFormConfig