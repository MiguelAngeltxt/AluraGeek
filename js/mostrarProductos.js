import { conexionAPI } from "./api.js";

const lista = document.querySelector("[data-lista]");

function crearCard(id, name, image, price) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="product__card" data-id="${id}">
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
                    src="./images/Vector.png"
                    alt="Eliminar producto"
                  />
                </button>
            </div>
        </div>
    </div>`;

  // Agregar evento de eliminación
  const botonEliminar = card.querySelector(".card__trash-icon");
  botonEliminar.addEventListener("click", () => eliminarProducto(id, card));

  return card;
}

async function getProducts() {
  try {
    const listAPI = await conexionAPI.getProducts();
    listAPI.forEach((card) =>
      lista.appendChild(crearCard(card.id, card.name, card.image, card.price))
    );
  } catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

async function eliminarProducto(id, card) {
  try {
    const idEliminado = await conexionAPI.eliminarProducto(id);
    if (idEliminado) {
      lista.removeChild(card); // Elimina la card del DOM
    }
  } catch (error) {
    console.error("Error al eliminar el producto", error);
  }
}

getProducts();
