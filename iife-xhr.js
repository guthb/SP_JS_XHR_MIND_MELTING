
function showCarnivores(carnivores) {
  var carnivoresDomTarget = document.getElementById("meatEater");  
  var outputString = `<ul> <h1>Here are your Carnivores:</h1> `;

  for (var i = 0; i < carnivores.carnivores.length; i++) {
      outputString += `<li>${carnivores.carnivores[i].name}` + " is located here: " + `${carnivores.carnivores[i].origin} </li>`
  };
  outputString += `<ul>`;
  carnivoresDomTarget.innerHTML = outputString;

};

function showHerbivores(herbivores) {
  var herbivoresDomTarget = document.getElementById("plantEater");  
  var outputString = `<ul> <h1>Here are your Herbivores:</h1> `;

  for (var i = 0; i < herbivores.herbivores.length; i++) {
      outputString += `<li>${herbivores.herbivores[i].name}` + " is located here: " + `${herbivores.herbivores[i].origin} </li>`
  };
  outputString += `<ul>`;
  herbivoresDomTarget.innerHTML = outputString;

};

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

