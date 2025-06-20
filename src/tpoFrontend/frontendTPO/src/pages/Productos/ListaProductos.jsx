import { useEffect, useState, useTransition } from "react";
import CardProducto from "./componentes/CardProducto";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../redux/productoSlice";
import { store } from "../../redux/store";

export const ListaProductos = () => {
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
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-400 border-solid"></div>
            <span className="ml-4 text-green-400 font-medium">Cargando...</span>
          </div>
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
