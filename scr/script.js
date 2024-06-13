if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Геолокация не поддерживается.");
}

function showPosition(position) {
  let result = countryCoder.iso1A2Code([position.coords.longitude, position.coords.latitude]);

  console.log(result);

  if (result == "PL") {
    price = 20;
    document.querySelector(".country").innerHTML = "Plan for Poland";
  } else if (r.country == "LT") {
    price = 15;
    document.querySelector(".country").innerHTML = "Plan for Lithuania";
  }
  document.querySelector(".number").innerHTML = price;
  document.querySelector("#total span").innerHTML = price * 1;
}

document.querySelector("#main button").addEventListener("click", () => {
  document.querySelector(".popupWrapper").style.display = "flex";
  document.querySelector(".bg").style.display = "block";

  document.querySelector(".bg").addEventListener("click", () => {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".popupWrapper").style.display = "none";
  });
});
