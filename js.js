document.getElementById("target").addEventListener("click", function() {

  if (!document.getElementById("id")) {
    document.getElementById("pyro").id = "id";
  }

  if (document.getElementById("bolton").className == "placeholder") {
    document.getElementById("bolton").className = "boltonSpin";
  } else {
    document.getElementById("bolton").className = "placeholder";
  }

  if (document.getElementById("wrapper").className == "placeholder") {
    document.getElementById("wrapper").className = "cSpin";
  } else {
    document.getElementById("wrapper").className = "placeholder";
  }

  var myArray = [
"Rémy Sahaguian",
"Thomas Simoni",
"Salomé Juan",
"Gilles Dauguet",
"Bertrand Midot",
"Valentina Llorens",
"Guillaume Thureau",
"David Cruz",
"Marc Vera",
"Ionela Rusu",
"Anca Morar",
"George Brata",
"Andrei Brumboiu"
  ];
  var x = document.getElementById("myAudio");
  var x2 = document.getElementById("myAudio2");
  document.getElementById("myAudio").loop = true;
  x.play();
  var bolton = document.getElementById("bolton");
  var wrapper = document.getElementById("wrapper");
  var startTime = new Date().getTime();
  var interval = setInterval(function() {
    if (new Date().getTime() - startTime > 6000) {
      clearInterval(interval);
      document.getElementById("id").id = "pyro";
      x.pause();
      bolton.className = "placeholder";
      wrapper.className = "placeholder";
      x2.play();
      document.getElementById("target").disabled = false;
      return;
    }
    document.getElementById("container").innerHTML = myArray[[Math.floor(Math.random() * myArray.length)]]; // get the item and increment i to move to the next
    document.getElementById("target").disabled = true;
  }, 50);
});
