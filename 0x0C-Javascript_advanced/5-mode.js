function changeMode(size, weight, transform, background, color) {
  document.body.style.fontSize = size + 'px';
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
}

function main() {
  const spooky = changeMode.bind(null, 9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode.bind(null, 12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode.bind(null, 12, "normal", "lowercase", "white", "black");
  const par = document.createElement('p');
  par.appendChild(document.createTextNode("Welcome Holberton!"))
  document.body.appendChild(par);
  const spookyBtn = document.createElement('button');
  spookyBtn.appendChild(document.createTextNode("Spooky"));
  spookyBtn.onclick = spooky;
  document.body.appendChild(spookyBtn);
  const darkBtn = document.createElement('button');
  darkBtn.appendChild(document.createTextNode("Dark mode"));
  darkBtn.onclick = darkMode;
  document.body.appendChild(darkBtn);
  const screamBtn = document.createElement('button');
  screamBtn.appendChild(document.createTextNode("Scream mode"));
  screamBtn.onclick = screamMode;
  document.body.appendChild(screamBtn);
}

main();
