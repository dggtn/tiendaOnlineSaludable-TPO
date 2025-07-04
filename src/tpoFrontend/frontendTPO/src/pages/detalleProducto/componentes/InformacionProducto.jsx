import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function InformacionProducto({
  producto,
  cantidad,
  setCantidad,
  agregarAlCarrito,
}) {

   const { items } = useSelector((state) => state.carrito);


  const incrementar = () => {
    
    let itemEnCarrito = items.find(item => item.producto.id === producto.id)
    const cantidadEnCarrito = itemEnCarrito === undefined ? 0 : itemEnCarrito.cantidad

    const maximo = producto.cantidad - cantidadEnCarrito;
    if (cantidad < maximo) {
      setCantidad((valor) => valor + 1);
    } else {
      toast.info(`Solo hay ${maximo} unidades disponibles.`, {
        position: "top-center",
      });
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad((valor) => valor - 1);
    }
  };

  return (
    <section className="flex flex-col justify-start text-[16px] sm:text-[18px] md:text-[20px] min-w-full sm:min-w-[300px] md:min-w-[400px] max-w-full sm:max-w-xl px-2 sm:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-brown-400 mb-4 sm:mb-6">
        {producto.nombre}
      </h1>

      <p className="text-2xl sm:text-3xl font-semibold text-brown-400  mb-3 sm:mb-4">
        ${producto.precio}
      </p>

      <p className="mb-6 sm:mb-8 text-brown-400 leading-relaxed">
        {producto.descripcion}
      </p>

      <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <button
          onClick={decrementar}
          className="hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800  bg-green-600 font-bold text-white  text-brown-white rounded-lg px-6 py-3 sm:px-8 sm:py-4  transition"
          aria-label="Disminuir cantidad"
        >
          -
        </button>

        <span className="w-16 sm:w-[260px] py-3 sm:py-4 text-xl sm:text-2xl font-bold rounded-lg text-center bg-green-200 text-brown-400">
          {cantidad}
        </span>

        <button
          onClick={incrementar}
          className="hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 bg-green-600 text-white font-bold rounded-lg px-6 py-3 sm:px-8 sm:py-4 transition"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      {producto.cantidad > 0 ? (
        <button
          onClick={agregarAlCarrito}
              className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        >
          Agregar al carrito
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-400 text-white font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl cursor-not-allowed"
        >
          No hay stock disponible
        </button>
      )}
    </section>
  );
}
