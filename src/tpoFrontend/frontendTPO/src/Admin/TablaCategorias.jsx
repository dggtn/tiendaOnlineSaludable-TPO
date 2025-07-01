import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorias, updateCategoria } from "../redux/categoriasSlice";
import { store } from "../redux/store";

export default function TablaCategorias() {
  const dispatch = store.dispatch;

  // @ts-ignore
  const categoriasState = useSelector((state) => state.categorias);
  // @ts-ignore
  const authState = useSelector((state) => state.auth);
  const categorias = categoriasState.items || [];
  const loading = categoriasState.loading;
  const accessToken = authState && authState.accessToken;
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState("");

  useEffect(() => {
    dispatch(fetchCategorias(accessToken));
  }, [dispatch]);

  const handleEdit = (categoria) => {
    setEditId(categoria.id);
    setEditNombre(categoria.descripcion);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditNombre("");
  };

  const handleSave = (id) => {
    if (editNombre.trim() !== "") {
      dispatch(updateCategoria({ id, descripcion: editNombre, token: accessToken }))
        .then(() => {
          dispatch(fetchCategorias(accessToken));
        });
      setEditId(null);
      setEditNombre("");
    }
  };

  return (
    <main className="flex-grow p-8 flex justify-center">
      <div className="w-full max-w-5xl  shadow-md dark:bg-gray-800 overflow-x-auto">
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
                  <th className="px-6 py-3 text-brown-400">Acciones</th>
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
                      <td className="px-6 py-3">
                        {editId === categoria.id ? (
                          <input
                            type="text"
                            value={editNombre}
                            onChange={(e) => setEditNombre(e.target.value)}
                            className="border rounded px-2 py-1"
                          />
                        ) : (
                          categoria.descripcion
                        )}
                      </td>
                      <td className="px-6 py-3">
                        {editId === categoria.id ? (
                          <>
                            <button
                              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                              onClick={() => handleSave(categoria.id)}
                            >
                              Guardar
                            </button>
                            <button
                              className="bg-gray-400 text-white px-2 py-1 rounded"
                              onClick={handleCancel}
                            >
                              Cancelar
                            </button>
                          </>
                        ) : (
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => handleEdit(categoria)}
                          >
                            Editar
                          </button>
                        )}
                      </td>
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
