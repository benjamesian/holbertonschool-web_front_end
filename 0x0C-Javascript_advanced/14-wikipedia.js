function createElement(data) {
  const par = document.createElement('p');
  par.appendChild(document.createTextNode(data));
  document.body.appendChild(par);
}

function queryWikipedia(callback) {
  const oreq = new XMLHttpRequest();
  oreq.addEventListener("load", function() {callback(this.responseText)});
  oreq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
  oreq.send();
}

queryWikipedia(createElement);
