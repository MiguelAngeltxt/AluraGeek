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

//agregar el metodo DELETE
async function eliminarProducto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el producto");
    }

    return id; // Retorna el id del producto eliminado
  } catch (error) {
    console.error("Error al eliminar el producto", error);
  }
}

export const conexionAPI = {
  getProducts,
  crearProducto,
  eliminarProducto, // Añadido a la exportación
};
