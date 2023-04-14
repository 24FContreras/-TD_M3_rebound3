console.log("🟢 Connected!");

const actividades = [
  {
    id: 1,
    name: "trekking",
    location: "Volcán Villarica",
    description:
      "Modalidad de excursionisto que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.",
    img: "assets/img/volcan-villarrica.jpg",
  },
  {
    id: 2,
    name: "Natación",
    location: "Lago Cochrane",
    description:
      "Deporte o ejercicio que consiste en nadar: en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.",
    img: "assets/img/lago-cochrane.jpg",
  },
  {
    id: 3,
    name: "ferry",
    location: "Lago Llanquihue",
    description:
      "Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.",
    img: "assets/img/ferry.jpg",
  },
];

const actividadesSelect = document.querySelector("#actividades");
const photocard = document.querySelector("#photocard");
const infocard = document.querySelector("#infocard");

actividadesSelect.addEventListener("change", function (e) {
  const actividad = actividades.find(
    (actividad) => actividad.id == e.target.value
  );

  photocard.querySelector("img").src = actividad.img;
  photocard.querySelector(".card-title").textContent = actividad.name;
  photocard.querySelector(".fw-light").textContent = actividad.location;
  infocard.querySelector(".info-text").textContent = actividad.description;
});

photocard.addEventListener("mouseover", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 1;
  photocard.querySelector(".card-img-overlay").style.transition =
    "opacity .3s ease";
});

photocard.addEventListener("mouseleave", function () {
  photocard.querySelector(".card-img-overlay").style.opacity = 0;
});
