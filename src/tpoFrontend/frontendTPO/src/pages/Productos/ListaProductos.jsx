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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProductos() {
      setLoading(true);
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
    setLoading(false);
  
  }, [queryParams]);

   if (loading) {
    return <p className="text-lime-950 font-bold">Cargando...</p>;
  }

  return (
    <main>
      <section className=" flex flex-col min-h-screen  bg-brown-100">
        <div className="flex justify-between">
          <span className="text-brown-400   text-3xl font-semibold text-center mx-24 mt-8 ">
            Nuestros Productos:
          </span>
         
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <CardProducto key={producto.id} producto={producto} carrito={carrito} />
            ))
          ) : (
            <p className=" text-brown-400 py-20 px-6 text-center text-5xl trgb(110 177 32) font-bold mb-4">
              No se hallaron resultados para tu búsqueda.
            </p>
          )}
        </div>
      </section>

      {mostrar}
    </main>
  );
};