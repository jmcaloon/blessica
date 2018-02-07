var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            // if (text === "Stress"){
            //   console.log(text.substr(text.length-3));
            // }
            if (text.substr(text.length-3) === "ess"){
              var newText = text.concat("ica");
            }

            if (newText !== undefined && newText !== text){
              element.replaceChild(document.createTextNode(newText), node);

            }
        }
    }
}
