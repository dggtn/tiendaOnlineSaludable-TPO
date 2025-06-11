import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorias } from "../redux/categoriasSlice";

export default function TablaCategorias({ autenticacion }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);


 const CategoriasLista = () => {
    const dispatch = useDispatch(); ///despacho acciones desde componente,componente es de react y acciones de redux desde react-redux se creo este hook
    //dispatch envia acciones al Store
    const {
      items: categorias,
      loading,
      error,
    } = useSelector((state) => state.categorias);
    
    useEffect(() => {
      dispatch(fetchCategorias());
    }, [dispatch]);

    if (loading) return <p className="text-lime-950 font-bold">Cargando...</p>;
    if (error)
      return (
        <p className="text-lime-950 font-bold">
          Error al cargar productos{error}...
        </p>
      );
   
  };


  return (
    <main className="flex-grow  p-8 flex justify-center">
      <div className="w-full max-w-5xl dark:bg-gray-800 shadow-md overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto">
          <table className="w-full text-left text-brown-400 dark:text-gray-300 text-sm">
            <thead className="bg-green-400 dark:bg-green-400 text-white uppercase tracking-wide font-semibold sticky top-0">
              <tr>
                <th className="px-6 py-3 text-brown-400">ID</th>
                <th className="px-6 py-3 text-brown-400">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {categorias.length > 0 &&
                categorias.map((categoria) => (
                  <tr
                    key={categoria.id}
                    className="border-b border-brown-200 dark:border-brown-700 bg-brown-100"
                  >
                    <td className="px-6 py-3">{categoria.id}</td>
                    <td className="px-6 py-3">{categoria.descripcion}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {categorias.length === 0 && (
            <p className="text-center py-8 text-gray-500 italic">
              No hay categorías.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
