let price;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Геолокация не поддерживается.");
}

function showPosition(position) {
  let result = countryCoder.iso1A2Code([
    position.coords.longitude,
    position.coords.latitude,
  ]);

  if (result == "PL") {
    price = 20;
    document.querySelector(".country").innerHTML = "Plan for Poland";
  } else if (result == "LT") {
    price = 15;
    document.querySelector(".country").innerHTML = "Plan for Lithuania";
  }
  document.querySelector(".number").innerHTML = price;
  document.querySelector("#total span").innerHTML = price * 1;
}

const buttonSubmit = document.querySelector(".popupWrapper form button#submit");
const popupWrapper = document.querySelector(".popupWrapper");

// для теста
// price = 20;
// document.querySelector(".country").innerHTML = "Plan for Poland";
// document.querySelector(".number").innerHTML = price;
// document.querySelector("#total span").innerHTML = price * 1;

document.querySelector("#main button").addEventListener("click", () => {
  popupWrapper.style.display = "flex";

  const hidePopup = function () {
    popupWrapper.style.display = "none";
  };

  document.querySelector(".popupWrapper").addEventListener("click", () => {
    popupWrapper.style.display = "none";
  });

  document
    .querySelector(".popupWrapper .popup")
    .addEventListener("click", (e) => {
      e.stopImmediatePropagation();
    });

  document
    .querySelector(".popupWrapper button#buy")
    .addEventListener("click", hidePopup);

  document
    .querySelector(".popupWrapper .box .close")
    .addEventListener("click", hidePopup);
});

$(document).on(".popupWrapper form input", function (ev) {
  const validNum = [];
  for (let i = 1; i < 13; i++) {
    validNum.push(i);
  }

  buttonSubmit.disabled = !validNum.includes(+$(ev.target).val());
});

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".popupWrapper #total span").innerHTML =
    document.querySelector(".popupWrapper form input").value * price;
});
