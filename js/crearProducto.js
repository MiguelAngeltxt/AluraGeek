import { conexionAPI } from "./api.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
  evento.preventDefault();
  const nombre = formulario.querySelector("[data-nombre]").value;
  const imagen = formulario.querySelector("[data-imagen]").value;
  const precio = formulario.querySelector("[data-precio]").value;

  await conexionAPI.crearProducto(nombre, imagen, precio);
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));
