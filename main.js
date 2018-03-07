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
            let rgx = new RegExp('(?!essence)(?!essional)ess');
            //let rgx = new RegExp('ess(?:es|ed|ion)?');
            if (rgx.test(word)){
              let newWord = "";

              let rgx2 = new RegExp('[.,\/#!$|%\^&\*;:{}=\-_`~()]$');
              let hasPunc = false;
              let punc = "";

              if (rgx2.test(word)){
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
              else if (word.slice(-1) === "e"){ //for words like "finesse"
                newWord = word.slice(0,-1) + "ica";
              }
              else if (word.slice(-3) === "ion" || word.slice(-3) === "ive"|| word.slice(-3) === "ing"){
                newWord = word.slice(0,-3) + "ica";
              }
              else if (word.slice(-4) === "ings"){
                newWord = word.slice(0,-4) + "icas";
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
