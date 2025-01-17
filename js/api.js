//definimos la url de la api
const API_URL = "http://localhost:3000/products";

//funcion asincrona que obtiene los productos de la api
async function getProducts() {
  try {
    //solicitud GET al endpoint
    const conexion = await fetch(API_URL);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
  } catch (error) {
    console.error("Fetch Error", error);
  }
}

async function crearProducto(name, image, price) {
  const conexion = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      image: image,
      price: price,
    }),
  });

  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

export const conexionAPI = {
  getProducts,
  crearProducto,
};
