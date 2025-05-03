export default {
    formName: "Negative",

    definition: "A conjugation that changes a verb's meaning from doing something to not doing it.",

    conversionMap: {"う": "あ", 
                    "つ": "た", 
                    "る": "ら", 
                    "ぶ": "ば", 
                    "む": "み", 
                    "ぬ": "な", 
                    "く": "か", 
                    "ぐ": "が", 
                    "す": "さ"},

    meaningBase: "to not ",

    suffix: "ない",

    whatsHappening: (wordData, conversionMap) => {
      if(wordData.type === "ichidan"){
          let lastCharacter = (wordData.kanji).slice(-1);
          return `Replace ${lastCharacter} in ${wordData.kanji} with ない → `;
      }else if(wordData.type === "godan"){
          let lastCharacter = (wordData.kanji).slice(-1);
          let newEnding = conversionMap[lastCharacter];
          return `Replace ${lastCharacter} in ${wordData.kanji} with ${newEnding}, then add ない → `;
      }else if(wordData.type === "irregular"){
          let lastCharacters = (wordData.hiragana).slice(-2); 
          if(lastCharacters === "する"){
            return `Replace ${lastCharacters} in ${wordData.kanji} with しない → `;
          }else if(lastCharacters === "くる"){
            return `Replace ${lastCharacters} in ${wordData.kanji} with こない → `;
          }
      }},

    conjugate: (wordData, conversionMap) => {
      if(wordData.type === "ichidan"){
          const conjugatedWord = (wordData.kanji).slice(0, -1); 
          return conjugatedWord + "ない"
      }else if(wordData.type === "godan"){
          let lastCharacter = (wordData.kanji).slice(-1);
          const conjugatedWord = (wordData.kanji).slice(0, -1); 
          let newEnding = conversionMap[lastCharacter];
          return conjugatedWord + newEnding  + "ない"
      }else if(wordData.type === "irregular"){
          let lastCharacters = (wordData.hiragana).slice(-2);
          const conjugatedWord = (wordData.kanji).slice(0, -2); 
          if(lastCharacters === "する"){
              return conjugatedWord + "しない"
          }else if(lastCharacters === "くる"){
              return conjugatedWord + "こない"
          }
      }
    },
  }