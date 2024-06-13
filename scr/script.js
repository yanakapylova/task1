if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Геолокация не поддерживается.");
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

  //   var lat = 52.2288;
  //   var lon = 20.98446;

  let result = countryCoder.iso1A2Code([lon, lat]);

  console.log(result);

  //   grid = codegrid.CodeGrid();
  //   grid.getCode(lat, lon, (error, code) => {
  //     console.log(code);

  //   });
}

document.querySelector("#main button").addEventListener("click", () => {
  document.querySelector(".popupWrapper").style.display = "flex";
  document.querySelector(".bg").style.display = "block";

  console.log("bg");

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

  document.querySelector(".bg").addEventListener("click", () => {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".popupWrapper").style.display = "none";
  });
});
