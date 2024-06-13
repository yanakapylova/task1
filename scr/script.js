document.querySelector("#main button").addEventListener("click", () => {
  document.querySelector(".popupWrapper").style.display = "flex";
  document.querySelector(".bg").style.display = "block";

  console.log("bg");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("location").innerHTML =
        "Геолокация не поддерживается.";
    }

//   fetch("http://ipinfo.io/json")
//     .then((r) => r.json())
//     .then((r) => {
//       console.log(r);
//       let price;
//       if (r.country == "PL") {
//         price = 20;
//         document.querySelector(".country").innerHTML = "Plan for Poland";
//       } else if (r.country == "LT") {
//         price = 15;
//         document.querySelector(".country").innerHTML = "Plan for Lithuania";
//       }
//       document.querySelector(".number").innerHTML = price;
//       document.querySelector("#total span").innerHTML = price * 1;
//     });

  function showPosition(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

    // var lat = 52.2288;
    // var lon = 20.98446;

    var result = countryCoder.iso1A2Code([lat, lon]);
    console.log(result);
    document.getElementById("#total").innerHTML =
      "Широта: " + lat + "<br>Долгота: " + lon;
  }

  document.querySelector(".bg").addEventListener("click", () => {
    console.log("bg");
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".popupWrapper").style.display = "none";
  });
});
