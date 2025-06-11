import { useEffect, useState, useTransition } from "react";
import CardProducto from "./componentes/CardProducto";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../redux/productoSlice";
import { store } from "../../redux/store";

export const ListaProductos = ({ carrito }) => {
  const { id } = useParams();
  const [mostrar, setMostrar] = useState(false);
  const location = useLocation();
  const [queryParams] = useSearchParams();
 
  const dispatch = store.dispatch;
  const { items: productos, loading } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  return (
    <main>
      <section className=" flex flex-col min-h-screen  bg-brown-100">
        {loading ? (
          <p className="text-lime-950 font-bold">Cargando...</p>
        ) : (
          <>
            <div className="flex justify-between">
              <span className="text-brown-400   text-3xl font-semibold text-center mx-24 mt-8 drop-shadow-lg">
                Nuestros Productos:
              </span>
            </div>
            <div className=" flex flex-wrap justify-center lg:flex-row">
              {productos.length > 0 ? (
                productos.map((productos) => (
                  <CardProducto
                    key={productos.id}
                    producto={productos}
                    carrito={carrito}
                  />
                ))
              ) : (
                <p className="drop-shadow-lg text-brown-400 py-20 px-6 text-center text-5xl trgb(110 177 32) font-bold mb-4">
                  No se hallaron resultados para tu búsqueda.
                </p>
              )}
            </div>
          </>
        )}
      </section>

      {mostrar}
    </main>
  );
};
