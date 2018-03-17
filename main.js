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
            let blacklist = ['session', 'sessions', 'jess'];
            if (word.match("ess(?!e$)(?!e[.,\/#!$%\^&\*;:{}=\-_`~()]$)(?!ee$)(?!ee[.,\/#!$%\^&\*;:{}=\-_`~()]$)(?!en)(?!ex)(?!ica)(?!fully)(?!ure)(?!or)(?!on)(?!a)(?!y)(?!p)(?!ional)(?!ie)(?!ible)(?!ively)(?!ibility)(?!ment)") && blacklist.indexOf(word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) === -1 ){
              console.log(word);
              let lst = word.split(/(?=[^a-z])/ig); //need to split word on punctuation in case of hyphens or URLs
              for (var y = 0; y < lst.length; y++){
                let subWord = lst[y];
                if (subWord.match("ess")){
                  let idx = subWord.lastIndexOf("ess") + 3;
                  let newWord = [subWord.slice(0,idx), "ica", subWord.slice(idx)].join('');
                  if (newWord.lastIndexOf("icaions") !== -1){
                    idx = newWord.lastIndexOf("icaions") + 3;
                    newWord = newWord.slice(0,idx) + "s";
                  }

                  else if (newWord.lastIndexOf("icaes") !== -1 ){
                    idx = newWord.lastIndexOf("icaes") + 3;
                    newWord = newWord.slice(0,idx) + "s";
                  }

                  else if (newWord.lastIndexOf("icaings") !== -1){
                    idx = newWord.lastIndexOf("icaings") + 3;
                    newWord = newWord.slice(0,idx) + "s";
                  }

                  idx = newWord.lastIndexOf("ica")+3;
                  let end = newWord.slice(idx).replace(/[a-r&&t-z]/g, ""); //replace any letter that isn't s (keep plural)
                  newWord = newWord.slice(0,idx) + end;
                  lst[y]  = newWord;
                }
              }
              newWord = lst.join("");
              words[x] = newWord;
            }
          }
          let newText = words.join(" ");
          element.replaceChild(document.createTextNode(newText), node);
        }
    }
}
