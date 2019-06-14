console.log("hello pup");

function findAPup() {
  document.addEventListener("click", function() {
    document.getElementById("fetchButton").innerHTML = "Generating Doggo...";

    const rarePupper = "https://dog.ceo/api/breeds/image/random";
    var puppyPic = document.getElementById("pupPic");
    var pastPups = document.getElementById("pastPups");

    const newPup = axios
      .get(rarePupper)
      .then(data => {
        puppyPic.src = data.data.message;
      })
      .then(data => {
        document.getElementById("fetchButton").innerHTML = "Good Boyee, More?";
      })
      .catch(err => console.log(err));

    console.log("meet" + newPup);
  });
}
