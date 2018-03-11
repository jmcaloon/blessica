var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let words = text.split(" ");

          for (let x = 0; x < words.length; x++){
            let word = words[x];
            let blacklist = ['session', 'sessions', 'jess', 'jesse'];
            if (word.match("ess(?!en)(?!ex)(?!ica)(?!fully)(?!ure)(?!or)(?!on)(?!a)(?!y)(?!p)(?!ional)(?!ie)(?!ible)(?!ively)(?!ibility)") && word.indexOf("-") === -1 && blacklist.indexOf(word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) === -1 ){
              let idx = word.lastIndexOf("ess") + 3;
              let newWord = [word.slice(0,idx), "ica", word.slice(idx)].join('');

              if (newWord.lastIndexOf("icaions") !== -1){
                let idx = newWord.lastIndexOf("icaions") + 3;
                newWord = newWord.slice(0,idx) + "s";
              }

              else if (newWord.lastIndexOf("icaes") !== -1 ){
                let idx = newWord.lastIndexOf("icaes") + 3;
                newWord = newWord.slice(0,idx) + "s";
              }

              else if (newWord.lastIndexOf("icaings") !== -1){
                let idx = newWord.lastIndexOf("icaings") + 3;
                newWord = newWord.slice(0,idx) + "s";
              }

              idx = newWord.lastIndexOf("ica")+3;
              let end = newWord.slice(idx).replace(/[a-r&&t-z]/g, "");
              newWord = newWord.slice(0,idx) + end;

              words[x] = newWord;
            }
          }
          let newText = words.join(" ");
          element.replaceChild(document.createTextNode(newText), node);
        }
    }
}
