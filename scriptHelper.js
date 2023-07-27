
// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const addDest = document.getElementById("missionTarget");
  addDest.innerHTML = `
     <h2>Mission Destination</h2>
     <ol>
       <li>Name: ${name} </li>
       <li>Diameter:${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons:${moons} </li>
     </ol>
     <img src="${imageUrl}">
     `;
}

function validateInput(testInput) {
  if (testInput === "") {
    
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

//function validateForm() {}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  

 
    if (
      validateInput(pilot) === "Empty" ||
      validateInput(copilot) === "Empty" ||
      validateInput(fuelLevel) === "Empty" ||
      validateInput(cargoLevel) === "Empty"
    ) {
      alert("All fields are required");
      // stop the form submission
      
    } else if (
      validateInput(pilot)=== "Is a Number" ||
      validateInput(copilot) === "Is a Number" ||
      validateInput(fuelLevel) === "Not a Number" ||
      validateInput(cargoLevel) === "Not a Number"
    ) {
      alert("Invalid input!");
    } else {
      if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle ready for launch";
        launchStatus.style.color = "green";
        pilotStatus.innerHTML = `${pilot} is ready for launch`;
        copilotStatus.innerHTML = `${copilot} is ready for launch`;
        fuelStatus.innerHTML="Fuel level high enough for launch"
        cargoStatus.innerHTML = "there is good mass for the shuttle to take off.";
      }
      if (cargoLevel > 10000 && fuelLevel>=10000 ) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = `${pilot} is ready for launch`;
        copilotStatus.innerHTML = `${copilot} is ready for launch`;
        fuelStatus.innerHTML="Fuel level high enough for launch"
        cargoStatus.innerHTML = "there is too much mass for the shuttle to take off.";
        
      }
      "<br>"
      if (fuelLevel < 10000 && cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML="Fuel level too low for launch"
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = `${pilot} is ready for launch`;
        copilotStatus.innerHTML = `${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too high enough for launch.";
      }
      if (cargoLevel <= 10000 && fuelLevel<10000 ) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        pilotStatus.innerHTML = `${pilot} is ready for launch`;
        copilotStatus.innerHTML = `${copilot} is ready for launch`;
        fuelStatus.innerHTML="Fuel level not high enough for launch"
        cargoStatus.innerHTML = "there is good mass for the shuttle to take off.";
      }

      
    }
 
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let num = Math.floor(Math.random() * planets.length);
  return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;