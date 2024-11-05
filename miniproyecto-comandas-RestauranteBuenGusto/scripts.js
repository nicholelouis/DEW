$(document).ready(function() {
    $.getJSON('productos.json', function(data) {
        const productosSeleccionados = {}; 
        
        const subMenus = {
            bebidas: `
                <button class="item" data-type="Refrescos">Refrescos</button>
                <button class="item" data-type="Calientes">Calientes</button>
                <button class="item" data-type="Alcohólicas">Alcohólicas</button>`,
            "primer-plato": `
                <button class="item" data-type="Sopa">Sopa</button>
                <button class="item" data-type="Ensalada">Ensalada</button>`,
            "segundo-plato": `
                <button class="item" data-type="Carne">Carne</button>
                <button class="item" data-type="Pescado">Pescado</button>
                <button class="item" data-type="Vegetariano">Vegetariano</button>`,
            postres: `
                <button class="item" data-type="Frutas">Fruta</button>
                <button class="item" data-type="Dulces">Dulces</button>`
        };



        $('.menu-btn').on('click', function() {
            const category = $(this).data('category');
            $('.sub-menu').html(subMenus[category]);
            $('.product-list').empty();
        });

        function mostrarProductos(type) {
            $('.product-list').empty();
            if (data[type]) {
                data[type].forEach((item) => {
                    $('.product-list').append(`
                        <div class="producto">
                            <p>${item.nombre}</p>
                            <span id="cantidad-${(item.nombre).replace(/\s+/g, '')}" class="cantidad">0</span>
                            <button class="decrementar" data-nombre="${(item.nombre).replace(/\s+/g, '')}">-</button>
                            <button class="incrementar" data-nombre="${(item.nombre).replace(/\s+/g, '')}">+</button>
                        </div>
                    `);
                });
            }
        }

        $('.sub-menu').on('click', '.item', function() {
            const type = $(this).data('type');
            mostrarProductos(type);
        });

        $('.product-list').on('click', '.incrementar', function() {
            const nombreProducto = $(this).data('nombre');
            if (!productosSeleccionados[nombreProducto]) {
                productosSeleccionados[nombreProducto] = 0;
            }
            productosSeleccionados[nombreProducto]++;
            actualizarCantidadVisual(nombreProducto);
            actualizarListaSeleccionados();
        });

        $('.product-list').on('click', '.decrementar', function() {
            const nombreProducto = $(this).data('nombre');
            if (productosSeleccionados[nombreProducto] > 0) {
                productosSeleccionados[nombreProducto]--;
                actualizarCantidadVisual(nombreProducto);
                actualizarListaSeleccionados();
            }
        });

        function actualizarCantidadVisual(nombreProducto) {
            $(`#cantidad-${(nombreProducto)}`).text(productosSeleccionados[nombreProducto]);
        }

        function actualizarListaSeleccionados() {
            $('#productos-seleccionados').empty();
            for (const [producto, cantidad] of Object.entries(productosSeleccionados)) {
                if (cantidad > 0) {
                    $('#productos-seleccionados').append(`<li>${producto}: ${cantidad}</li>`);
                }
            }
        }

        $('#enviarComanda').on('click', function() {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut(); 
            
            for (const producto in productosSeleccionados) {
                productosSeleccionados[producto] = 0;
                actualizarCantidadVisual(producto);
            }
            actualizarListaSeleccionados(); 
        });
    });
});