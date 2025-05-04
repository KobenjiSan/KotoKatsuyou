import * as Utils from '../verbUtils';

const conversionMap =  {"う": "あ", 
                        "つ": "た", 
                        "る": "ら", 
                        "ぶ": "ば", 
                        "む": "み", 
                        "ぬ": "な", 
                        "く": "か", 
                        "ぐ": "が", 
                        "す": "さ"}
        
const meaningBase = "to not ";                        

const suffix = "ない";

const kuruType = "こ"

const helperVerb = "do ";

const negativeFormConfig = {
    formName: "Negative C",

    definition: "A conjugation that changes a verb's meaning from doing something to not doing it.",

    meaning: (verbMeaning) => meaningBase + verbMeaning.slice(3),

    sentenceMeaning: (sentence, meaning) => Utils.buildSentence(sentence, meaning, helperVerb),

    whatsHappening: (wordData) => {
      switch(wordData.type){
        case "ichidan":
          return Utils.whatsHappeningIchidan(wordData, suffix);
        case "godan":
          return Utils.whatsHappeningGodan(wordData, conversionMap, suffix);
        case "irregular":
          return Utils.whatsHappeningIrregular(wordData, kuruType, suffix);
      }
    },

    conjugate: (wordData) => {
      switch(wordData.type){
        case "ichidan":
          return Utils.conjugateIchidan(wordData, suffix);
        case "godan":
          return Utils.conjugateGodan(wordData, conversionMap, suffix);
        case "irregular":
          return Utils.conjugateIrregular(wordData, kuruType, suffix);
      }
    },
}

export default negativeFormConfig