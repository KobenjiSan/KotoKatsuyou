import * as Utils from '../verbUtils';

const conversionMap =  {"う": "って", 
                        "つ": "って", 
                        "る": "って", 
                        "ぶ": "んで", 
                        "む": "んで", 
                        "ぬ": "んで", 
                        "く": "いて", 
                        "ぐ": "いで", 
                        "す": "して"};

const teSuffix = "はいけない";

const edgeCaseMap = { //possibly have a tool tip for why these are different
    '行く': {
        conjugated: `行って${teSuffix}`, 
        whatsHappening: `Replace く in 行く with って${teSuffix}`
    }
}; 

function handleEdgeCase(wordData){
    return edgeCaseMap[wordData.kanji] || null;
}

const suffix = "て";

const kuruType = "き";

const helperVerb = "";

const teWaIkenaiConfig = {
    formName: "Te-Wa-Ikenai",

    definition: 'A prohibition form using て-form + はいけない to say that something must not be done.',

    meaning: (verbData) => `must not ${verbData.meaning.slice(3)}`,

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => {
        const edge = handleEdgeCase(wordData);
        return edge ? edge.whatsHappening : (`${Utils.whatsHappeningSpec(wordData, suffix, conversionMap, kuruType)}${teSuffix}`);
    },

    conjugate: (wordData) => { 
        const edge = handleEdgeCase(wordData);
        const statement = edge ? edge.conjugated : Utils.conjugateWordSpec(wordData, suffix, conversionMap, kuruType) + teSuffix;
        return statement == undefined + teSuffix ? null : statement;
    },
}

export default teWaIkenaiConfig