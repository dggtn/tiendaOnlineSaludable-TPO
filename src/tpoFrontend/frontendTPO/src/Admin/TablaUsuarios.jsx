import React, { useEffect, useState } from "react";
import CardUsuario from "./CardUsuario";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarios } from "../redux/usuariosSlice";


export default function TablaUsuarios({ autenticacion }) {
 
   const UusuariosLista = () => {
    const dispatch = useDispatch(); ///despacho acciones desde componente,componente es de react y acciones de redux desde react-redux se creo este hook
    //dispatch envia acciones al Store
    const {
      items: productos,
      loading,
      error,
    } = useSelector((state) => state.usuarios);
    
    useEffect(() => {
      dispatch(fetchUsuarios());
    }, [dispatch]);

    if (loading) return <p className="text-lime-950 font-bold">Cargando...</p>;
    if (error)
      return (
        <p className="text-lime-950 font-bold">
          Error al cargar usuarios{error}...
        </p>
      );
    //las acciones se ejecutan en el componente
  };


  return (
    <main className="flex-grow  p-8 flex justify-center">
      <div className="w-full max-w-5xl rounded-lg shadow-md overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto">
          <table className="w-full text-left text-gray-700 dark:text-gray-300 text-sm ">
            <thead className="bg-green-400 dark:bg-green-400 text-brown-400 uppercase tracking-wide font-semibold sticky top-0 shadow-md">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Apellido</th>
                <th className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length > 0 &&
                usuarios.map((usuario) => (
                  <CardUsuario usuario={usuario} />
                ))}
            </tbody>
          </table>
          {usuarios.length === 0 && (
            <p className="text-center py-8 text-gray-500 italic">
              No hay usuarios registrados.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
