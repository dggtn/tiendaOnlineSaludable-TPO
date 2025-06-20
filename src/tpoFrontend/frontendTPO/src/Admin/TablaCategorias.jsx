import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorias } from "../redux/categoriasSlice";
import { store } from "../redux/store";

export default function TablaCategorias() {
  const dispatch = store.dispatch;
  const { items: categorias, loading } = useSelector((state) => state.categorias);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCategorias(accessToken));
  }, [dispatch]);

  return (
    <main className="flex-grow p-8 flex justify-center">
      <div className="w-full max-w-5xl dark:bg-gray-800 shadow-md overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-400 border-solid"></div>
            <span className="ml-4 text-green-400 font-medium">Cargando...</span>
          </div>
        ) : (
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
        )}
      </div>
    </main>
  );
}
