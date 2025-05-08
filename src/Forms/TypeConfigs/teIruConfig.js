import nlp from 'compromise';
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

const edgeCaseMap = { //possibly have a tool tip for why these are different
    '行く': {
        conjugated: '行っている', 
        whatsHappening: 'Replace く in 行く with っている'
    }
}; 

function handleEdgeCase(wordData){
    return edgeCaseMap[wordData.kanji] || null;
}

const suffix = "て";

const teSuffix = "いる"

const kuruType = "き"

const helperVerb = "am ";

const teIruConfig = {
    formName: "Te-Iru",

    definition: 'A conjugated form used to show that an action is currently happening or that a state caused by an action still continues',

    meaning: (verbData) => Utils.getEnglishINGForm(verbData),

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => {
        const edge = handleEdgeCase(wordData);
        return edge ? edge.whatsHappening : (`${Utils.whatsHappeningSpec(wordData, suffix, conversionMap, kuruType)}${teSuffix}`);
    },

    conjugate: (wordData) => { 
        const edge = handleEdgeCase(wordData);
        const statement = edge ? edge.conjugated : Utils.conjugateWordSpec(wordData, suffix, conversionMap, kuruType) + teSuffix;
        return statement == `${undefined}いる` ? null : statement;
    },
}

export default teIruConfig