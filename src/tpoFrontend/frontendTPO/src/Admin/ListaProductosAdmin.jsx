import { useEffect, useState } from "react";
import CardProductoAdmin from "./CardProductoAdmin.jsx";
import ModalConfirmacion from "./ModalConfirmacion.jsx";


export const ListaProductosAdmin = ({ autenticacion }) => {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null); 
    const [modalOpen, setModalOpen] = useState(false);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    useEffect(() => {
        async function fetchProductos() {
            const response = await fetch("http://localhost:4002/productos");
            const data = await response.json();
            setProductos(data);
        }
        fetchProductos();
    }, []);

    function solicitarEliminarProducto(id) {
        setProductoAEliminar(id);
        setModalOpen(true);
    }

    async function eliminarProductoConfirmado() {
        setModalOpen(false);
        if (!productoAEliminar) return;
        await fetch(`http://localhost:4002/productos/${productoAEliminar}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + autenticacion.accessToken,
            },
        });
        setProductoAEliminar(null);
        const response = await fetch("http://localhost:4002/productos");
        const data = await response.json();
        setProductos(data);
    }

    function FormularioEdicion() {
        const [nombre, setNombre] = useState(productoEditar.nombre);
        const [precio, setPrecio] = useState(productoEditar.precio);
        const [descripcion, setDescripcion] = useState(productoEditar.descripcion);
        const [cantidad, setCantidad] = useState(productoEditar.cantidad);
        const [categoria, setCategoria] = useState(productoEditar.categoria);
        const [categorias, setCategorias] = useState([]);
        const [imagenFile, setImagenFile] = useState(null);

        useEffect(() => {
            async function fetchCategorias() {
                const response = await fetch("http://localhost:4002/categorias");
                const data = await response.json();
                setCategorias(data.content || data); // Ajusta según tu backend
            }
            fetchCategorias();
        }, []);

        async function handleGuardar(e) {
            e.preventDefault();
            await fetch(`http://localhost:4002/productos/${productoEditar.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + autenticacion.accessToken,
                },
                body: JSON.stringify({
                    id: productoEditar.id,
                    nombre,
                    precio,
                    descripcion,
                    cantidad,
                    categoria_id: categoria.id, 
                }),
            });

            if (imagenFile) {
            const formData = new FormData();
            formData.append("file", imagenFile);
            formData.append("productoId", productoEditar.id);

            await fetch(`http://localhost:4002/productos/${productoEditar.id}/imagen`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + autenticacion.accessToken,
                },
                body: formData,
            });
        }

            setProductoEditar(null);
            const response = await fetch("http://localhost:4002/productos");
            const data = await response.json();
            setProductos(data);
        }

                return (
            <form 
                onSubmit={handleGuardar} 
                className="w-full sm:w-[500px] md:w-[700px] xl:w-[900px] p-10 bg-white rounded-2xl shadow-2xl mx-auto my-12
                            grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <h3 className="mb-4 text-2xl font-bold text-center text-lime-800 col-span-1 md:col-span-2">
                    Editar Producto
                </h3>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="nombre-input">Nombre</label>
                    <input
                        id="nombre-input"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre"
                        required
                    />

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="precio-input">Precio</label>
                    <input
                        id="precio-input"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                        type="number"
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                        placeholder="Precio"
                        required
                    />

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="cantidad-input">Stock</label>
                    <input
                        id="cantidad-input"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                        type="number"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                        placeholder="Stock"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="categoria-input">Categoría</label>
                    <select
                        id="categoria-input"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                        value={categoria.id}
                        onChange={e => {
                            const cat = categorias.find(c => c.id === Number(e.target.value));
                            setCategoria(cat);
                        }}
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.descripcion}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="descripcion-input">Descripción</label>
                    <textarea
                        id="descripcion-input"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition resize-none"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                        placeholder="Descripción"
                        rows={2}
                        required
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="mb-1 font-semibold text-gray-700" htmlFor="imagen-input">Imagen</label>
                    <input
                        id="imagen-input"
                        type="file"
                        accept="image/*"
                        className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
                        onChange={(e) => setImagenFile(e.target.files[0])}
                    />
                </div>
                
                <div className="flex justify-center gap-6 md:col-span-2 mt-6">
                    <button 
                    type="submit" 
                    className="bg-lime-600 text-white px-6 py-3 rounded font-bold text-lg hover:bg-lime-700 transition"
                    >
                    Guardar
                    </button>

                    <button 
                    type="button" 
                    onClick={() => setProductoEditar(null)} 
                    className="bg-gray-400 text-white px-6 py-3 rounded font-bold text-lg hover:bg-gray-500 transition"
                    >
                    Cancelar
                    </button>
                </div>
            </form>
        );
    }
    return (
        <main>
            <ModalConfirmacion
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={eliminarProductoConfirmado}
                mensaje="¿Está seguro que desea eliminar el producto?"
            />
            <section className="my-5">
                <h2 className="text-lime-900 text-2xl font-semibold text-center dark:text-lime-900">
                    Catálogo de Productos
                </h2>
                {productoEditar ? (
                    <>
                        <FormularioEdicion />
                        <div className="flex flex-wrap justify-center lg:flex-row mt-6">
                            <CardProductoAdmin
                                key={productoEditar.id}
                                producto={productoEditar}
                                onEliminar={solicitarEliminarProducto}
                                onEditar={() => setProductoEditar(productoEditar)}
                            />
                        </div>
                    </>
                ) : (
                    <div className="flex flex-wrap justify-center lg:flex-row mt-6">
                        {productos.length > 0 ? (
                            productos.map((producto) => (
                                <CardProductoAdmin
                                    key={producto.id}
                                    producto={producto}
                                    onEliminar={solicitarEliminarProducto}
                                    onEditar={() => setProductoEditar(producto)}
                                />
                            ))
                        ) : (
                            <p>No hay productos para mostrar.</p>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
};