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

const teSuffix = "います";

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

const helperVerb = "am ";

const teIruPoliteConfig = {
    formName: "Te-Iru (Polite)",

    definition: 'The polite version of ている, using 〜ています or 〜ております for respectful ongoing or resulting states.',

    meaning: (verbData) => `${Utils.getEnglishINGForm(verbData)} (polite)`,

    sentenceMeaning: (sentence, meaning) => Utils.buildPastSentence(sentence, meaning.slice(0, -9), helperVerb),

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

export default teIruPoliteConfig