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
        conjugated: '行って', 
        whatsHappening: 'Replace く in 行く with って'
    }
}; 

function handleEdgeCase(wordData){
    return edgeCaseMap[wordData.kanji] || null;
}

const suffix = "て";

const kuruType = "き"

const helperVerb = "";

const teConfig = {
    formName: "Te",

    definition: 'A conjugated form used to connect verbs, make requests, or describe ongoing actions. It ends in "て" or "で" depending on the verb.',

    meaning: (verbData) => `${(verbData.meaning).slice(3)} / ${(nlp((verbData.meaning).slice(3)).verbs().toGerund().text()).slice(3)}`, // NOTE: check if last letter is 'e' before adding 'ing'

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence.slice(2), meaning, helperVerb),

    whatsHappening: (wordData) => {
        const edge = handleEdgeCase(wordData);
        return edge ? edge.whatsHappening : Utils.whatsHappeningSpec(wordData, suffix, conversionMap, kuruType);
    },

    conjugate: (wordData) => { 
        const edge = handleEdgeCase(wordData);
        return edge ? edge.conjugated : Utils.conjugateWordSpec(wordData, suffix, conversionMap, kuruType);
    },
}

export default teConfig