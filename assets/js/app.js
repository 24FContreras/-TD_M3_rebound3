console.log("🟢 Connected!");

const actividadesSelect = document.querySelector("#actividades");
const photocard = document.querySelector("#photocard");
const infocard = document.querySelector("#infocard");

actividadesSelect.addEventListener("change", function (e) {
  if (e.target.value == "1") {
    photocard.querySelector("img").src = "assets/img/volcan-villarrica.jpg";
    photocard.querySelector(".card-title").textContent = "trekking";
    photocard.querySelector(".fw-light").textContent = "Volcán Villarica";
    infocard.querySelector(".info-text").textContent =
      "Modalidad de excursionisto que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.";
  }

  if (e.target.value == "2") {
    photocard.querySelector("img").src = "assets/img/lago-cochrane.jpg";
    photocard.querySelector(".card-title").textContent = "Natación";
    photocard.querySelector(".fw-light").textContent = "Lago Cochrane";
    infocard.querySelector(".info-text").textContent =
      "Deporte o ejercicio que consiste en nadar: en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.";
  }

  if (e.target.value == "3") {
    photocard.querySelector("img").src = "assets/img/ferry.jpg";
    photocard.querySelector(".card-title").textContent = "Ferry";
    photocard.querySelector(".fw-light").textContent = "Lago Llanquihue";
    infocard.querySelector(".info-text").textContent =
      "Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.";
  }
});

photocard.addEventListener("mouseover", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 1;
  photocard.querySelector(".card-img-overlay").style.transition =
    "opacity .3s ease";
});

photocard.addEventListener("mouseleave", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 0;
});
