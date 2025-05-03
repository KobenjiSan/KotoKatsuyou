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
                        
const suffix = "ない";

const kuruType = "こ"

const negativeFormConfig = {
    formName: "Negative",

    definition: "A conjugation that changes a verb's meaning from doing something to not doing it.",

    meaningBase: "to not ",

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