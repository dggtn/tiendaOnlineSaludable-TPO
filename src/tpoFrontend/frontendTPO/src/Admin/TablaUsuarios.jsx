import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarios } from "../redux/usuariosSlice";
import { store } from "../redux/store";
import CardUsuario from "./CardUsuario";

export default function TablaUsuarios() {
  const dispatch = useDispatch();
  const { items: usuarios, loading } = useSelector((state) => state.usuarios);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUsuarios(accessToken));
   
  }, []);

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
              {!loading && usuarios.length > 0 &&
                usuarios.map((usuario) => <CardUsuario usuario={usuario} />)}
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
