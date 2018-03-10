var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let words = text.split(" ");
          for (let i = 0; i < words.length; i++){
            let word = words[i];
            let blacklist = ['session', 'sessions', 'jess', 'jesse'];
            if (word.match("ess(?!en)(?!ex)(?!ica)(?!fully)(?!ure)(?!or)(?!on)(?!a)(?!y)(?!p)(?!ional)(?!ie)(?!ible)(?!ively)(?!ibility)") && !word.includes("\'") && !word.includes("\"") && blacklist.indexOf(word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) === -1 ){
              let newWord = "";

              let hasPunc = false;
              let punc = "";

              if (word.match("[.,\/#!$|%\^&\*;:{}=\-_`\"~()”]$")){
                hasPunc = true;
                punc = word.slice(-1);
                word = word.slice(0,-1);
              }

              if (word.slice(-2) === "es"){
                newWord = word.slice(0,-2) + "icas";
              }
              else if (word.slice(-2) === "ed"){
                newWord = word.slice(0,-2) + "ica";
              }
              else if (word.slice(-4) === "ions"){
                newWord = word.slice(0,-4) + "ica"
              }
              else if (word.slice(-3) === "ion" || word.slice(-3) === "ive"|| word.slice(-3) === "ing" || word.slice(-3) === "ful" ){
                newWord = word.slice(0,-3) + "ica";
              }
              else if (word.slice(-4) === "ings"){
                newWord = word.slice(0,-4) + "icas";
              }
              else if (word.slice(-1) === "e"){ //for words like "finesse"
                newWord = word.slice(0,-1) + "ica";
              }
              else{
                newWord = word.concat("ica");
              }

              if (hasPunc){
                newWord = newWord.concat(punc);
              }
              words[i] = newWord;
            }
          }
          let newText = words.join(" ");
          element.replaceChild(document.createTextNode(newText), node);
        }
    }
}
