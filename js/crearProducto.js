// Importamos las funciones que necesitamos desde el archivo api.js
import { conexionAPI } from "./api.js";

// Seleccionamos el formulario donde se van a ingresar los datos del producto
const formulario = document.querySelector("[data-formulario]");

// Función asincrona que se ejecuta cuando se envía el formulario
async function crearProducto(evento) {
  // Evitamos que el formulario se envíe de forma tradicional (recargando la página)
  evento.preventDefault();
  // Obtenemos los valores de los campos del formulario
  const nombre = formulario.querySelector("[data-nombre]").value;
  const imagen = formulario.querySelector("[data-imagen]").value;
  const precio = formulario.querySelector("[data-precio]").value;

  // Llamamos a la función para crear el producto en la API
  await conexionAPI.crearProducto(nombre, imagen, precio);
}

// Añadimos un evento al formulario para que cuando se envíe, se ejecute la función
formulario.addEventListener("submit", (evento) => crearProducto(evento));
