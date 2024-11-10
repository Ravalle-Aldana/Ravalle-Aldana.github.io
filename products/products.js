const productos = [
    {
        id: 1,
        nombre: "Taladro Inalámbrico",
        categoria: "Herramientas Eléctricas",
        marca: "dewalt",
        precio: 29000,
        descripcion: "Taladro inalámbrico de alta potencia con batería de larga duración, ideal para perforaciones en materiales como madera, metal y plástico.",
        imagen: "/assets/img/products/taladro.webp",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Sierra Circular",
        categoria: "Herramientas Eléctricas",
        marca: "makita",
        precio: 26000,
        descripcion: "Sierra circular potente de 1400W, diseñada para cortes precisos y seguros en diversos tipos de madera.",
        imagen: "/assets/img/products/sierra_circular.webp",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Juego de Destornilladores",
        categoria: "Herramientas de Mano",
        precio: 3500,
        descripcion: "Juego de 24 destornilladores con punta magnética, ideales para trabajos en distintos tipos de tornillos.",
        imagen: "/assets/img/products/destornilladores.webp",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Martillo de Mano",
        categoria: "Herramientas de Mano",
        marca: "stanley",
        precio: 5000,
        descripcion: "Martillo de 16 oz, ideal para trabajos de carpintería.",
        imagen: "/assets/img/products/martillo.webp",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Cemento Portland",
        categoria: "Materiales de Construcción",
        precio: 1400,
        descripcion: "Saco de 50 kg de cemento Portland, ideal para obras de construcción.",
        imagen: "/assets/img/products/cemento.webp",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Bloques de Hormigón",
        categoria: "Materiales de Construcción",
        precio: 250,
        descripcion: "Bloques de hormigón de 20x40x20 cm, para construcción de muros.",
        imagen: "/assets/img/products/bloques_hormigon.webp",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "Pintura Acrílica",
        categoria: "Pinturas",
        precio: 3300,
        descripcion: "Pintura acrílica de alta calidad, 1 litro.",
        imagen: "/assets/img/products/pintura_acrilica.webp",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Brochas y Rodillos",
        categoria: "Pinturas",
        precio: 1900,
        descripcion: "Juego de brochas y rodillos para pintura.",
        imagen: "/assets/img/products/brochas_rodillos.webp",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "Juego de Tornillos",
        categoria: "Tornillería",
        precio: 2500,
        descripcion: "Juego de tornillos de diferentes tamaños y tipos.",
        imagen: "/assets/img/products/tornillos.webp",
        cantidad: 1
    },
    {
        id: 10,
        nombre: "Tuercas y Arandelas",
        categoria: "Tornillería",
        precio: 1200,
        descripcion: "Set de tuercas y arandelas, ideal para diversos proyectos.",
        imagen: "/assets/img/products/tuercas_arandelas.webp",
        cantidad: 1
    },
    {
        id: 11,
        nombre: "Tuberías de PVC",
        categoria: "Fontanería",
        precio: 250,
        descripcion: "Tuberías de PVC de 3 metros, ideales para instalaciones de fontanería en sistemas de agua potable y desagüe.",
        imagen: "/assets/img/products/tuberias_pvc.webp",
        cantidad: 1
    },
    {
        id: 12,
        nombre: "Grifo de Lavabo",
        categoria: "Fontanería",
        precio: 5000,
        descripcion: "Grifo de lavabo con sistema de ahorro de agua, elegante y eficiente para el uso diario.",
        imagen: "/assets/img/products/grifo_lavabo.webp",
        cantidad: 1
    },
    {
        id: 13,
        nombre: "Cable Eléctrico",
        categoria: "Electricidad",
        precio: 200,
        descripcion: "Cable eléctrico de 50 metros, ideal para instalaciones eléctricas en casas, oficinas o industrias.",
        imagen: "/assets/img/products/cable_electrico.webp",
        cantidad: 1
    },
    {
        id: 14,
        nombre: "Tomas de Corriente",
        categoria: "Electricidad",
        precio: 600,
        descripcion: "Juego de tomas de corriente, fáciles de instalar y resistentes para proyectos eléctricos.",
        imagen: "/assets/img/products/tomas_corriente.webp",
        cantidad: 1
    },
    {
        id: 15,
        nombre: "Pegamento Multiuso",
        categoria: "Adhesivos",
        precio: 500,
        descripcion: "Pegamento multiuso de 250 ml, ideal para pegar madera, plástico, cerámica y más.",
        imagen: "/assets/img/products/pegamento_multiuso.webp",
        cantidad: 1
    },
    {
        id: 16,
        nombre: "Cinta Adhesiva",
        categoria: "Adhesivos",
        precio: 300,
        descripcion: "Cinta adhesiva de 50 metros, ideal para reparaciones en el hogar y proyectos de oficina.",
        imagen: "/assets/img/products/cinta_adhesiva.webp",
        cantidad: 1
    },
    {
        id: 17,
        nombre: "Escuadra de Carpintero",
        categoria: "Herramientas de Mano",
        precio: 850,
        descripcion: "Escuadra de carpintero de 12 pulgadas, perfecta para medir y hacer cortes a 90 grados.",
        imagen: "/assets/img/products/esquadra.webp",
        cantidad: 1
    },
    {
        id: 18,
        nombre: "Nivel de Burbuja",
        categoria: "Herramientas de Mano",
        precio: 1100,
        descripcion: "Nivel de burbuja de 24 pulgadas para trabajos de construcción, instalación de estanterías y más.",
        imagen: "/assets/img/products/nivel_burbuja.webp",
        cantidad: 1
    },
    {
        id: 19,
        nombre: "Pinceles para Pintura",
        categoria: "Pinturas",
        precio: 1000,
        descripcion: "Juego de pinceles de diferentes tamaños, ideales para pintar detalles finos o superficies grandes.",
        imagen: "/assets/img/products/pinceles.webp",
        cantidad: 1
    },
    {
        id: 20,
        nombre: "Sellador de Silicona",
        categoria: "Adhesivos",
        precio: 650,
        descripcion: "Sellador de silicona de 300 ml, ideal para sellar juntas y grietas en baños, ventanas y más.",
        imagen: "/assets/img/products/sellador.webp",
        cantidad: 1
    },
    {
        id: 21,
        nombre: "Clavadora",
        categoria: "Herramientas Eléctricas",
        marca: "makita",
        precio: 3500,
        descripcion: "Clavadora eléctrica de alta potencia, ideal para clavar tachuelas y clavos en proyectos de carpintería y tapicería.",
        imagen: "/assets/img/products/clavadora.webp",
        cantidad: 1
    },
    {
        id: 22,
        nombre: "Cepillo Eléctrico",
        categoria: "Herramientas Eléctricas",
        marca: "makita",
        precio: 4500,
        descripcion: "Cepillo eléctrico para alisar y nivelar superficies de madera con facilidad y precisión.",
        imagen: "/assets/img/products/cepillo.webp",
        cantidad: 1
    },
    {
        id: 23,
        nombre: "Sierra de Arco",
        categoria: "Herramientas de Mano",
        marca: "black_decker",
        precio: 2200,
        descripcion: "Sierra de arco resistente, ideal para cortar madera, metal y plástico en proyectos pequeños y medianos.",
        imagen: "/assets/img/products/arco_sierra.webp",
        cantidad: 1
    },
    {
        id: 24,
        nombre: "Tornillos de Acero",
        categoria: "Tornillería",
        precio: 1500,
        descripcion: "Juego de tornillos de acero inoxidable, con diferentes tamaños para todo tipo de ensamblaje y reparaciones.",
        imagen: "/assets/img/products/tornillo.webp",
        cantidad: 1
    },
    {
        id: 25,
        nombre: "Amoladora Inalámbrica",
        categoria: "Herramientas Eléctricas",
        marca: "bosch",
        precio: 6500,
        descripcion: "Amoladora inalámbrica, perfecta para cortar, lijar y pulir superficies metálicas y de piedra con facilidad.",
        imagen: "/assets/img/products/amoladora_inalambrica.webp",
        cantidad: 1
    },
    {
        id: 26,
        nombre: "Pela Cables",
        categoria: "Herramientas Eléctricas",
        marca: "stanley",
        precio: 2800,
        descripcion: "Pela cables de alta calidad, ideal para trabajos de instalación eléctrica y desaislado de cables de diversos grosores.",
        imagen: "/assets/img/products/pela_cables.webp",
        cantidad: 1
    },
    {
        id: 27,
        nombre: "Nivel Óptico",
        categoria: "Herramientas de Mano",
        marca: "bosch",
        precio: 10000,
        descripcion: "Nivel óptico de alta precisión, ideal para medir alturas y realizar trabajos de nivelación en construcción.",
        imagen: "/assets/img/products/nivel_optico.webp",
        cantidad: 1
    },
    {
        id: 28,
        nombre: "Sierra de Calar",
        categoria: "Herramientas Eléctricas",
        marca: "dremel",
        precio: 4900,
        descripcion: "Sierra de calar eléctrica, perfecta para realizar cortes curvos y rectos en madera, metal y plásticos.",
        imagen: "/assets/img/products/sierra_calar.webp",
        cantidad: 1
    },
    {
        id: 29,
        nombre: "Llaves Allen",
        categoria: "Herramientas de Mano",
        marca: "black_decker",
        precio: 2200,
        descripcion: "Juego de llaves Allen de diferentes tamaños, ideales para apretar tornillos de cabeza hexagonal en maquinaria y muebles.",
        imagen: "/assets/img/products/llaves_allen.webp",
        cantidad: 1
    },
    {
        id: 30,
        nombre: "Pistola de Calor",
        categoria: "Herramientas Eléctricas",
        marca: "dewalt",
        precio: 5500,
        descripcion: "Pistola de calor para tareas de decapado, despegue de pinturas, soldadura y trabajos de reparación de materiales plásticos.",
        imagen: "/assets/img/products/pistola_calor.webp",
        cantidad: 1
    },
    {
        id: 31,
        nombre: "Perfil de Aluminio",
        categoria: "Materiales de Construcción",
        precio: 3000,
        descripcion: "Perfil de aluminio extruido de alta resistencia, ideal para marcos, estructuras y proyectos de construcción ligera.",
        imagen: "/assets/img/products/perfil.webp",
        cantidad: 1
    },
    {
        id: 32,
        nombre: "Grabadora Eléctrica",
        categoria: "Herramientas Eléctricas",
        marca: "dremel",
        precio: 4000,
        descripcion: "Grabadora eléctrica para realizar detalles y grabados en madera, metal, vidrio y otros materiales.",
        imagen: "/assets/img/products/grabadora.webp",
        cantidad: 1
    },
    {
        id: 33,
        nombre: "Llave de Luz",
        categoria: "Electricidad",
        precio: 650,
        descripcion: "Llave de luz de alta calidad, diseñada para instalaciones eléctricas en hogares y oficinas, fácil de instalar.",
        imagen: "/assets/img/products/llave_de_luz.webp",
        cantidad: 1
    },
    {
        id: 34,
        nombre: "Destornillador",
        categoria: "Herramientas de Mano",
        marca: "black_decker",
        precio: 1200,
        descripcion: "Destornillador ergonómico de alta resistencia, ideal para trabajos de precisión en electrónica, mecánica y reparaciones domésticas.",
        imagen: "/assets/img/products/destornillador.webp",
        cantidad: 1
    },
    {
        id: 35,
        nombre: "Maletín Transportador",
        categoria: "Herramientas de Mano",
        marca: "bosch",
        precio: 3200,
        descripcion: "Maletín robusto y resistente para el transporte seguro de herramientas, con compartimientos ajustables para diferentes tamaños.",
        imagen: "/assets/img/products/maletin.webp",
        cantidad: 1
    },
    {
        id: 36,
        nombre: "Alicate",
        categoria: "Herramientas de Mano",
        marca: "stanley",
        precio: 2200,
        descripcion: "Alicate multifuncional de alta resistencia, ideal para cortar, doblar y sujetar cables y alambres de diversos grosores.",
        imagen: "/assets/img/products/alicate.webp",
        cantidad: 1
    },
    {
        id: 37,
        nombre: "Dremel",
        categoria: "Herramientas Eléctricas",
        marca: "dremel",
        precio: 4800,
        descripcion: "Herramienta rotativa Dremel, ideal para pulir, lijar, grabar y cortar en una variedad de materiales como metal, madera y plástico.",
        imagen: "/assets/img/products/dremel.webp",
        cantidad: 1
    },
    {
        id: 38,
        nombre: "Codo de PVC",
        categoria: "Fontanería",
        precio: 450,
        descripcion: "Codo de PVC de 90 grados, ideal para redirigir las tuberías en sistemas de fontanería doméstica e industrial.",
        imagen: "/assets/img/products/codo.webp",
        cantidad: 1
    },
    {
        id: 39,
        nombre: "Amoladora",
        categoria: "Herramientas Eléctricas",
        marca: "dewalt",
        precio: 8500,
        descripcion: "Amoladora de alto rendimiento Dewalt, ideal para cortar, pulir y desbastar materiales como metal, piedra, cerámica y hormigón. Cuenta con un potente motor y un diseño ergonómico para mayor comodidad en el uso prolongado. Perfecta para trabajos de construcción, mantenimiento industrial y reparaciones domésticas.",
        imagen: "/assets/img/products/amoladora.webp",
        cantidad: 1
    }
];

// Función para obtener el parámetro de la URL
function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const valor = urlParams.get(param);
    console.log(`Parámetro obtenido: ${param} = ${valor}`); // Log del parámetro
    return valor;
}

// Función para cargar los productos en la página
function cargarProductos(marca) {
    console.log(`Cargando productos... Marca seleccionada: ${marca}`); // Log de inicio de carga
    const contenedor = document.createElement('div');
    contenedor.classList.add('row');

    // Obtener el parámetro de categoría
    const categoriaSeleccionada = obtenerParametro('categoria');
    console.log(`Categoría seleccionada: ${categoriaSeleccionada}`); // Log de categoría seleccionada

    // Filtrar productos por marca y por categoría si se proporciona
    const productosFiltrados = productos.filter(producto => {
        const coincideMarca = marca ? producto.marca === marca : true;
        const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        console.log(`Filtrando producto: ${producto.nombre}, Coincide marca: ${coincideMarca}, Coincide categoría: ${coincideCategoria}`); // Log de filtrado
        return coincideMarca && coincideCategoria;
    });

    console.log(`Productos filtrados: ${productosFiltrados.length}`); // Log de productos filtrados
    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("card-style", "col-md-4", "mb-4");

        productoDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    
                    <button class="btn btn-primary" onclick="mostrarProducto('${producto.nombre}', '${producto.descripcion}', '${producto.imagen}', ${producto.precio})">Ver detalles</button>

                    <button class="btn btn-success ms-2" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
                </div>
            </div>
        `;

        contenedor.appendChild(productoDiv);
    });

    document.querySelector(".container.my-5").appendChild(contenedor);
    console.log("Productos cargados en el contenedor."); // Log de productos cargados
}

// Función para agregar el producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    // Obtener el carrito actual de localStorage o inicializarlo vacío
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(p => p.id === idProducto);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar el contador
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        producto.cantidad = 1;
        carrito.push(producto);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(`Producto agregado al carrito: ${producto.nombre}`); // Log del producto agregado
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Función para mostrar detalles del producto en un modal
function mostrarProducto(titulo, descripcion, imagen, precio) {
    console.log(`Mostrando producto: ${titulo}`); // Log del producto que se está mostrando
    // Cambiar el contenido del modal dinámicamente
    document.getElementById('productoModalLabel').innerText = titulo;
    document.getElementById('productoDescripcion').innerText = descripcion;
    document.getElementById('productoImagen').src = imagen;
    document.getElementById('productoPrecio').innerText = `Precio: $${precio.toFixed(2)}`;

    // Mostrar el modal
    var productoModal = new bootstrap.Modal(document.getElementById('productoModal'));
    productoModal.show();
    console.log("Modal mostrado."); // Log de modal mostrado
}

// Al cargar la página, obtener la marca y cargar productos
window.onload = function () {
    const marcaSeleccionada = obtenerParametro('marca');
    console.log(`Marca seleccionada al cargar la página: ${marcaSeleccionada}`); // Log de marca seleccionada
    cargarProductos(marcaSeleccionada);
};

// Puedes usar esta lista para mostrar productos en tu página web.
console.log("Lista de productos:", productos); // Log de la lista de productos
