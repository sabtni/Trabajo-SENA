let pedidos = [];
        let categorias = {
            "Exclusivas": [
                { nombre: "Natillas", precio: 10900, descripcion: "Suave crema artesanal de vainilla con un toque de canela y limón, coronada con galletas María tradicionales.", imagen: "" },
                { nombre: "Salteado de espaguetis de calabacín con gambas", precio: 40000, descripcion: "Deliciosos espaguetis de calabacín salteados con colas de langostino, ajo y guindilla, acompañados de un huevo escalfado", imagen: "" },
                { nombre: "Risotto de berenjenas, jamón y habas", precio: 35000, descripcion: "Risotto cremoso con jamón serrano y habas frescas, acompañado de crujiente de berenjena y parmesano rallado.", imagen: "" },
                { nombre: "Bacalao confitado con berberechos y alcachofas", precio: 46000, descripcion: "Suave bacalao confitado en aceite de oliva, acompañado de berberechos y alcachofas en una deliciosa salsa pil-pil con un toque de vino blanco y perejil", imagen: "" },
                { nombre: "Arroz con Verduras", precio: 3000, descripcion: "Paella de verduras con arroz redondo, judías verdes, espárragos, pimiento y alcachofas, realzada con un toque de ñora y ajo.", imagen: "" },
                { nombre: "Rape con ragout de verduras y manitas de cerdo", precio: 26000, descripcion: "Rape a la plancha con ragout de verduras y manitas de cerdo, acompañado de calabacín, berenjena, setas y espárragos, con un toque de jugo de carne y aceite de oliva.", imagen: "" },
                { nombre: "Crema de coliflor", precio: 30000, descripcion: "Suave y cremosa crema de coliflor con un toque de curry, servida con un huevo escalfado y huevas de pescado para un contraste de texturas y sabores únicos.", imagen: "" },
                { nombre: "Arroz de ibéricos al horno", precio: 38000, descripcion: "Arroz meloso con secreto y chorizo ibérico, acompañado de setas, habas y ajetes, realzado con hierbas aromáticas para un sabor intenso y delicioso.", imagen: "" },
                { nombre: "Ossobuco a la milanesa", precio: 30000, descripcion: "Clásico ossobuco a la milanesa, cocinado lentamente con verduras, vino blanco y hierbas arClásico ossobuco a la milanesa, cocinado lentamente con verduras, vino blanco y hierbas aromáticas, acompañado de una fresca gremolata y arroz al azafrán.omáticas, acompañado de una fresca gremolata y arroz al azafrán.", imagen: "" },
            ],
            "Diario": [
                { nombre: "Arroz Chino", precio: 18000, descripcion: "Arroz frito con vegetales y pollo", imagen: "https://source.unsplash.com/200x150/?fried-rice" },
                { nombre: "Natillas", precio: 10900, descripcion: "Suave crema artesanal de vainilla con un toque de canela y limón, coronada con galletas María tradicionales.", imagen: "" },
                { nombre: "Salteado de espaguetis de calabacín con gambas", precio: 40000, descripcion: "Deliciosos espaguetis de calabacín salteados con colas de langostino, ajo y guindilla, acompañados de un huevo escalfado", imagen: "" },
                { nombre: "Natillas", precio: 10900, descripcion: "Suave crema artesanal de vainilla con un toque de canela y limón, coronada con galletas María tradicionales.", imagen: "" },
                { nombre: "Salteado de espaguetis de calabacín con gambas", precio: 40000, descripcion: "Deliciosos espaguetis de calabacín salteados con colas de langostino, ajo y guindilla, acompañados de un huevo escalfado", imagen: "" },
                { nombre: "Pollo Agridulce", precio: 22000, descripcion: "Pollo en salsa agridulce con ajonjolí", imagen: "https://source.unsplash.com/200x150/?sweet-sour-chicken" },
            ]
        };

        function cargarMenu(categoria) {
            let menu = document.getElementById("menu");
            menu.innerHTML = "";
            categorias[categoria].forEach((p, index) => {
                menu.innerHTML += `
                    <div class='p-4 border rounded-lg bg-gray-50 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1'>
                        <img src='${p.imagen}' class='w-full rounded-lg mb-2' alt='${p.nombre}'>
                        <h3 class='font-bold text-lg text-gray-800'>${p.nombre}</h3>
                        <p class='text-sm text-gray-600'>${p.descripcion}</p>
                        <p class='font-bold text-lg text-orange-500'>$${p.precio}</p>
                        <button onclick="agregarPedido('${categoria}', ${index})" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg mt-2 font-bold w-full">➕ Agregar</button>
                    </div>`;
            });
        }

        function agregarPedido(categoria, index) {
            let producto = categorias[categoria][index];
            let pedidoExistente = pedidos.find(p => p.nombre === producto.nombre);
            if (pedidoExistente) {
                pedidoExistente.cantidad++;
            } else {
                pedidos.push({ ...producto, cantidad: 1 });
            }
            actualizarCarrito();
        }

        function actualizarCarrito() {
            document.getElementById("cantidad-total").innerText = pedidos.reduce((acc, p) => acc + p.cantidad, 0);
        }

        function verCarrito() {
            let mensaje = "Pedido actual:\n";
            pedidos.forEach(p => {
                mensaje += `${p.cantidad}x ${p.nombre} - $${p.precio * p.cantidad}\n`;
            });
            alert(mensaje || "El carrito está vacío");
        }

        function irAPago() {
            if (pedidos.length === 0) {
                alert("No tienes productos en tu pedido.");
                return;
            }
            localStorage.setItem("pedido", JSON.stringify(pedidos));
            window.location.href = "pago.html";
        }

        cargarMenu('rapida');