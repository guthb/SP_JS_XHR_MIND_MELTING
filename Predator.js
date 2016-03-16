var Predator = (function() {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      // create the XHR
      var loader = new XMLHttpRequest();

      //tell the XHR exactly what to do
      loader.open("GET", "carnivores.json");
      loader.send();

      //listen for when the load event is boadcast
      loader.addEventListener("load", executeOnSuccess);
      loader.addEventListener("failed", executeOnFailure);

      //evaluate and on success load the object returned
      function executeOnFailure() {
          alert("Error loading page")
      };
      
      function executeOnSuccess() {
        
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores)
      };
    },

    loadHerbivores: function (callbackToInvoke) {
      // create the XHR
      var loader = new XMLHttpRequest();

      //tell the XHR exactly what to do
      loader.open("GET", "herbivores.json");
      loader.send();

      //listen for when the load event is boadcast
      loader.addEventListener("load", executeOnSuccess);
      loader.addEventListener("failed", executeOnFailure);

      //evaluate and on success load the object returned
      function executeOnFailure() {
          alert("Error loading page")
      };
      
      function executeOnSuccess() {
        
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(herbivores)
      };
    }
  }
})(Predator || {});