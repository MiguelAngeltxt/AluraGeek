// Definimos la URL de la API donde están los productos
const API_URL = "http://localhost:3000/products";

// Función asincrona para obtener los productos desde la API
async function getProducts() {
  try {
    // Realizamos una solicitud GET al endpoint de la API
    const conexion = await fetch(API_URL);
    // Convertimos la respuesta de la API a formato JSON
    const conexionConvertida = await conexion.json();
    // Retornamos los productos obtenidos
    return conexionConvertida;
  } catch (error) {
    // Si ocurre un error, lo mostramos en la consola
    console.error("Fetch Error", error);
  }
}

// Función asincrona para crear un producto en la API
async function crearProducto(name, image, price) {
  // Realizamos una solicitud POST a la API para agregar un nuevo producto
  const conexion = await fetch(API_URL, {
    method: "POST", // Indicamos que es un POST (para crear)
    headers: {
      "Content-Type": "application/json", // Indicamos que los datos son JSON
    },
    body: JSON.stringify({
      // El cuerpo de la solicitud contiene los datos del producto en formato JSON
      name: name,
      image: image,
      price: price,
    }),
  });

  // Convertimos la respuesta de la API en formato JSON
  const conexionConvertida = await conexion.json();
  // Retornamos el producto creado
  return conexionConvertida;
}

// Función asincrona para eliminar un producto en la API
async function eliminarProducto(id) {
  try {
    // Realizamos una solicitud DELETE a la API para eliminar un producto por su ID
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE", // Indicamos que es una solicitud DELETE (para eliminar)
    });

    // Si la respuesta no es exitosa, lanzamos un error
    if (!response.ok) {
      throw new Error("Error al eliminar el producto");
    }

    // Retornamos el ID del producto eliminado
    return id;
  } catch (error) {
    // Si ocurre un error, lo mostramos en la consola
    console.error("Error al eliminar el producto", error);
  }
}

// Exportamos las funciones para que puedan ser utilizadas en otros archivos
export const conexionAPI = {
  getProducts,
  crearProducto,
  eliminarProducto, // Añadimos la función eliminarProducto a la exportación
};
