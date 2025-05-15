import * as Utils from '../verbUtils';

const conversionMap =  {"う": "った", 
                        "つ": "った", 
                        "る": "った", 
                        "ぶ": "んだ", 
                        "む": "んだ", 
                        "ぬ": "んだ", 
                        "く": "いた", 
                        "ぐ": "いだ", 
                        "す": "した"};

const edgeCaseMap = {'行く': {conjugated: '行った', whatsHappening: 'Replace く in 行く with った'}}; //possibly have a tool tip for why this is different

function handleEdgeCase(wordData){
    return edgeCaseMap[wordData.kanji] || null;
}

const suffix = "た";

const kuruType = "き";

const helperVerb = "";

const pastConfig = {
    formName: "Past",

    definition: "The informal past tense of a verb, often ending in 〜た or 〜だ depending on the verb group.",

    meaning: (verbData) => Utils.getPastMeaning(verbData),

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => {
        const edge = handleEdgeCase(wordData);
        return edge ? edge.whatsHappening : Utils.whatsHappeningSpec(wordData, suffix, conversionMap, kuruType);
    },

    conjugate: (wordData) => { 
        const edge = handleEdgeCase(wordData);
        return edge ? edge.conjugated : Utils.conjugateWordSpec(wordData, suffix, conversionMap, kuruType);
    },
}

export default pastConfig