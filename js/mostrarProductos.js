// Importamos las funciones que necesitamos desde el archivo api.js
import { conexionAPI } from "./api.js";

// Seleccionamos el contenedor donde vamos a mostrar las cards de productos
const lista = document.querySelector("[data-lista]");

// Función que crea una tarjeta de producto en HTML
function crearCard(id, name, image, price) {
  // Creamos un nuevo elemento div para la card
  const card = document.createElement("div");
  // Añadimos una clase a la card para estilizarla
  card.classList.add("card");
  // Le damos el HTML de la card (con los datos del producto)
  card.innerHTML = `<div class="product__card" data-id="${id}">
        <img
            class="card__image"
            src="${image}"
            alt="Producto"
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

  // Encontramos el botón de eliminar dentro de la card
  const botonEliminar = card.querySelector(".card__trash-icon");
  // Añadimos un evento al botón para eliminar el producto cuando se haga clic
  botonEliminar.addEventListener("click", () => eliminarProducto(id, card));

  // Retornamos la card creada
  return card;
}

// Función asincrona para obtener los productos desde la API y mostrarlos
async function getProducts() {
  try {
    // Obtenemos la lista de productos desde la API
    const listAPI = await conexionAPI.getProducts();
    // Recorremos cada producto y lo mostramos en el contenedor
    listAPI.forEach((card) =>
      lista.appendChild(crearCard(card.id, card.name, card.image, card.price))
    );
  } catch (error) {
    // Si ocurre un error, lo mostramos en la consola
    console.error("Error al obtener los productos", error);
  }
}

// Función asincrona para eliminar un producto de la API y del DOM
async function eliminarProducto(id, card) {
  try {
    // Llamamos a la función eliminarProducto para eliminar el producto de la API
    const idEliminado = await conexionAPI.eliminarProducto(id);
    if (idEliminado) {
      // Si el producto fue eliminado correctamente, eliminamos la card del DOM
      lista.removeChild(card);
    }
  } catch (error) {
    // Si ocurre un error, lo mostramos en la consola
    console.error("Error al eliminar el producto", error);
  }
}

// Llamamos a la función para cargar los productos cuando se cargue la página
getProducts();
