// Write your JavaScript code here!
window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
        let planetSelection = pickPlanet(listedPlanets);
        addDestinationInfo(
          document,
          planetSelection.name,
          planetSelection.diameter,
          planetSelection.star,
          planetSelection.distance,
          planetSelection.moons,
          planetSelection.image
        );
        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          const faultyItems = document.getElementById("faultyItems");
          const launchStatus = document.getElementById("launchStatus");
      
          
        let pilot = document.querySelector("input[name=pilotName]").value
        let copilot = document.querySelector("input[name=copilotName]").value
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value
        let cargoLevel = document.querySelector("input[name=cargoMass]").value
        let list = document.getElementById("faultyItems")
  
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });
        
  
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      });
  });
