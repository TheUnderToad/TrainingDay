var name = prompt("Please enter your name");
var nameElements = document.getElementsByClassName("name");
var greetingElement = document.getElementById("greeting");

if(name === "" || name === null) {
  name = "Stupid Squib";
  greetingElement.innerText = "Stop that you, " + name + "!";
} else {
  greetingElement.innerText = "You're a Wizard, " + name; + "!"
}

for(var i=0; i<nameElements.length; i++) {
  nameElements[i].innerText = name;
}
