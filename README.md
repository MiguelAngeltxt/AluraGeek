# AluraGeek Challenge

Este proyecto es una tienda virtual para la venta de productos bajo el nombre **AluraGeek**. Fue desarrollado como parte de un desafío para practicar habilidades de desarrollo frontend y diseño responsivo.

## Características Principales

- **Visualización de productos:**
  - Los productos existentes se muestran en una sección de tarjetas dinámicas generadas con JavaScript.
  - Cada tarjeta incluye una imagen del producto, el nombre y el precio.

- **Formulario para agregar productos:**
  - El formulario permite añadir nuevos productos proporcionando un nombre, precio y URL de la imagen.
  - Incluye validación básica y botones de enviar y limpiar.

- **Interactividad dinámica:**
  - Se emplea JavaScript para manejar eventos y manipular el DOM.
  - Las operaciones como crear y mostrar productos están centralizadas en módulos.

## Estructura del Proyecto

### Archivos Principales

- **HTML:**
  - `index.html`: El archivo principal que define la estructura de la página web.

- **CSS:**
  - `index.css`: El archivo de estilos asociado, ubicado en la carpeta `css`.

- **JavaScript:**
  - `mostrarProductos.js`: Gestiona la visualización dinámica de los productos.
  - `crearProducto.js`: Maneja la lógica para agregar nuevos productos al sistema.

- **Recursos estáticos:**
  - Imágenes del logo y productos en la carpeta `images`.

### Estructura HTML

- **Header:**
  - Contiene el logo de la tienda.

- **Main:**
  - Se divide en dos secciones principales:
    1. **Sección de productos:** Muestra las tarjetas dinámicas generadas a partir de datos.
    2. **Formulario de productos:** Permite añadir nuevos productos.

- **Footer:**
  - Incluye el logo y los créditos del desarrollador.

### Dependencias y Funcionalidades

- **JavaScript Módulos:**
  - Uso de `type="module"` para cargar archivos JS.
  - Los módulos están diseñados para interactuar con la estructura HTML mediante selectores de datos (`data-*`).

- **Responsividad:**
  - El diseño está optimizado para pantallas móviles hasta 768 píxeles.

## Cómo Usar el Proyecto

1. **Configuración Inicial:**
   - Clonar el repositorio del proyecto.
   - Asegurarse de tener un servidor local para cargar correctamente los módulos de JavaScript.

2. **Agregar Productos:**
   - Completar los campos del formulario con nombre, precio y URL de la imagen.
   - Hacer clic en "Enviar" para añadir el producto.

3. **Visualizar Productos:**
   - Los productos agregados se mostrarán dinámicamente en la sección correspondiente.

## Requisitos Técnicos

- Navegador moderno compatible con ES6 y `module`.
- Servidor local (opcional para ciertas funcionalidades).

## Créditos

- **Desarrollador:** Miguel Falcon
- **Desafío:** Alura Latam - 2024

---

Este proyecto es una práctica para mejorar habilidades en HTML, CSS y JavaScript, enfocándose en la interacción dinámica y la organización modular del código.

