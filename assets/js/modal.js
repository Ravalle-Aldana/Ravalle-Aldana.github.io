// modal.js
// Este script gestiona el comportamiento del modal que muestra los detalles de un producto seleccionado. 
// Permite actualizar la visualización del modal con la información del producto y agregar el producto al carrito de compras, almacenando la información en el localStorage del navegador.

// Objeto para almacenar el producto seleccionado
let selectedProduct = {
    id: null,
    nombre: "",
    imagen: "",
    precio: 0.00,
    cantidad: 1 // Inicializar cantidad
};

// Función para mostrar el modal con los detalles del producto
const showModal = (product) => {
    selectedProduct = { ...product, cantidad: 1 }; // Asigna el producto seleccionado y reinicia cantidad a 1
    console.log("Producto seleccionado:", selectedProduct); // Log del producto seleccionado

    // Actualiza el contenido del modal
    document.getElementById("productoModalLabel").innerText = product.nombre;
    document.getElementById("productoImagen").src = product.imagen;
    document.getElementById("productoDescripcion").innerText = product.descripcion || "Sin descripción"; // Texto por defecto si no hay descripción
    document.getElementById("productoPrecio").innerText = `$${product.precio.toFixed(2)}`;

    console.log("Contenido del modal actualizado:"); // Log del contenido actualizado
    console.log("Nombre:", product.nombre);
    console.log("Imagen:", product.imagen);
    console.log("Descripción:", product.descripcion || "Sin descripción");
    console.log("Precio:", product.precio.toFixed(2));

    // Agregar funcionalidad al botón "Agregar al carrito" dentro del modal
    document.getElementById("agregarAlCarritoBtn").addEventListener("click", () => {
        agregarProductoAlCarrito(selectedProduct); // Llama a la función usando el producto seleccionado
    });


    // Muestra el modal
    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
    console.log("Modal mostrado para el producto:", product.nombre); // Log del modal mostrado
};

