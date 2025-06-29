import { useEffect, useState } from "react";
import CardProductoAdmin from "./CardProductoAdmin.jsx";
import ModalConfirmacion from "./ModalConfirmacion.jsx";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../redux/productoSlice";
import { editarProducto } from "../redux/productoSlice";
import { store } from "../redux/store";
import { fetchCategorias } from "../redux/categoriasSlice";
import { createImagen } from "../redux/ImagenesSlice.js";
import { eliminarProducto } from "../redux/productoSlice";

export const ListaProductosAdmin = () => {
  const dispatch = store.dispatch;
  const { items: productos, loading } = useSelector((state) => state.productos);

  const { items: categorias } = useSelector((state) => state.categorias);

  const { accessToken } = useSelector((state) => state.auth);

  const [productoEditar, setProductoEditar] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    dispatch(fetchProductos());

    dispatch(fetchCategorias(accessToken));
  }, [dispatch]);

  function solicitarEliminarProducto(id) {
    setProductoAEliminar(id);
    setModalOpen(true);
  }

  async function eliminarProductoConfirmado() {
    setModalOpen(false);
    if (!productoAEliminar) return;
    await dispatch(
      eliminarProducto({ id: productoAEliminar, token: accessToken })
    );
    setProductoAEliminar(null);
  }

  function FormularioEdicion() {
    const [nombre, setNombre] = useState(productoEditar.nombre);
    const [descripcion, setDescripcion] = useState(productoEditar.descripcion);
    const [cantidad, setCantidad] = useState(productoEditar.cantidad);
    const [categoria, setCategoria] = useState(productoEditar.categoria);
    const [precio, setPrecio] = useState(productoEditar.categoria);
    const [imagenFile, setImagenFile] = useState(null);

    async function handleGuardar(e) {
      e.preventDefault();

      try {
        await dispatch(
          editarProducto({
            productoActualizado: {
              id: productoEditar.id,
              nombre,
              precio: Number(precio),
              descripcion,
              cantidad: Number(cantidad),
              categoria_id: categoria.id,
            },
            token: accessToken,
          })
        );

        if (imagenFile) {
          await dispatch(
            createImagen({
              id: productoEditar.id,
              imagenFile,
              token: accessToken,
            })
          );
        }

        setProductoEditar(null);
        dispatch(fetchProductos());
        toast.success("Producto actualizado correctamente");
      } catch (error) {
        toast.error("Error al actualizar el producto");
      }
    }

    return (
      <form
        onSubmit={handleGuardar}
        className="w-full sm:w-[500px] md:w-[700px] xl:w-[900px] p-10 bg-white rounded-2xl shadow-2xl mx-auto my-12
                            grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h3 className="mb-4 text-2xl font-bold text-center text-lime-800 col-span-1 md:col-span-2">
          Editar Producto
        </h3>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="nombre-input"
          >
            Nombre
          </label>
          <input
            id="nombre-input"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="precio-input"
          >
            Precio
          </label>
          <input
            id="precio-input"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="cantidad-input"
          >
            Stock
          </label>
          <input
            id="cantidad-input"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder="Stock"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="categoria-input"
          >
            Categoría
          </label>
          <select
            id="categoria-input"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            value={categoria.id}
            onChange={(e) => {
              const cat = categorias.find(
                (c) => c.id === Number(e.target.value)
              );
              setCategoria(cat);
            }}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.descripcion}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="descripcion-input"
          >
            Descripción
          </label>
          <textarea
            id="descripcion-input"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition resize-none"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción"
            rows={2}
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="imagen-input"
          >
            Imagen
          </label>
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
            className="text-brown-200  px-6 py-3 rounded font-bold text-lg  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-400 border-solid"></div>
          <span className="ml-4 text-green-400 font-medium">Cargando...</span>
        </div>
      ) : (
        <section className="my-8">
          <h2 className="text-brown-400 text-2xl font-semibold text-center">
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
      )}
    </main>
  );
};
