import React, { useEffect, useState } from "react";

export default function TablaCategorias({ autenticacion }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(autenticacion);

  useEffect(() => {
    async function fetchCategorias() {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4002/categorias`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + autenticacion.accessToken,
          },
        }
      );
      const data = await response.json();
      setCategorias(data.content);
      setLoading(false);
    }
    fetchCategorias();
  }, []);

if (loading) {
  return (
    <p className="text-lime-950 font-bold text-center my-10">
      Cargando...
    </p>
  );
}

  return (
    <main className="flex-grow  p-8 flex justify-center">
      <div className="w-full max-w-5xl dark:bg-gray-800 shadow-md overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto">
          <table className="w-full text-left text-gray-700 dark:text-gray-300 text-sm">
            <thead className="bg-lime-600 dark:bg-lime-700 text-white uppercase tracking-wide font-semibold sticky top-0">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {categorias.length > 0 &&
                categorias.map((categoria) => (
                  <tr
                    key={categoria.id}
                    className="border-b border-gray-200 dark:border-gray-700"
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
