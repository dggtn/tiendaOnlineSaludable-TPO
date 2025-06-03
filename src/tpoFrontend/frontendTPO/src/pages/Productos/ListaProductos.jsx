import { useEffect, useState, useTransition } from "react";
import CardProducto from "./componentes/CardProducto";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const ListaProductos = ({carrito}) => {
  const { id } = useParams();
  const [mostrar, setMostrar] = useState(false);
  const [productos, setProductos] = useState([]);
  const [imagen, setImagen] = useState([]);
  const location = useLocation();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    async function fetchProductos() {
      const response = await fetch(`http://localhost:4002/productos`);
      const data = await response.json();
      const filtro = queryParams.get("buscar");
      const categoria = queryParams.get("categoria");
      let productos = data;

      if (filtro != undefined && filtro !== "") {
        productos = data.filter((producto) =>
          producto.nombre.toUpperCase().includes(filtro.toUpperCase())
        );
      } else if (categoria != undefined && categoria !== "") {
        productos = data.filter((producto) =>
          producto.categoria.toUpperCase().includes(categoria.toUpperCase())
        );
      }

      setProductos(productos);
    }
    fetchProductos();
  }, []);

  return (
    <main>
      <section className=" flex flex-col min-h-screen my-5">
        <div className="my-5 flex justify-between">
          <span className="text-lime-900   text-2xl font-semibold text-center dark:text-lime-900 ">
            Nuestros Productos
          </span>
         
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <CardProducto key={producto.id} producto={producto} carrito={carrito} />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No se hallaron resultados para tu búsqueda.
            </p>
          )}
        </div>
      </section>

      {mostrar}
    </main>
  );
};
