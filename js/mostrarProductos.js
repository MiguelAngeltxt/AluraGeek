import { conexionAPI } from "./api.js";

const lista = document.querySelector("[data-lista]");

function crearCard(name, image, price) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="product__card">
        <img
            class="card__image"
            src="${image}"
            alt="Producto 1"
        />
        <div class="card__info card-container--info">
            <p class="card__name">${name}</p>
            <div class="card__value card-container--value">
                <p class="card__price">$ ${price}</p>
                <button
                  class="card__trash-icon"
                  aria-label="Eliminar producto"
                >
                  <img
                    src="./images/Vector.png"git
                    alt="Eliminar producto"
                  />
                </button>
            </div>
        </div>
    </div>`;

  return card;
}

async function getProducts() {
  try {
    const listAPI = await conexionAPI.getProducts();
    listAPI.forEach((card) =>
      lista.appendChild(crearCard(card.name, card.image, card.price))
    );
  } catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

getProducts();
