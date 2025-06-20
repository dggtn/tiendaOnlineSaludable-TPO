import InicioAdmin from "../admin/InicioAdmin";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Sesion/Auth";
import TablaUsuarios from "../admin/TablaUsuarios";
import { ProtectedRoute } from "./ProtectedRoute";
import { ListaProductosAdmin } from "../admin/ListaProductosAdmin";
import CrearCategoriaForm from "../admin/CrearCategoriaForm";
import CrearProductoForm from "../admin/CrearProductoForm";
import TablaCategorias from "../admin/TablaCategorias";

import Register from "../pages/Sesion/Register";

export default function RutasProtegidas() {
  return (
    <Routes>
      <Route path="/sesion" element={<Auth></Auth>} />

      <Route
        path="/registro"
        element={<Register />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <InicioAdmin></InicioAdmin>
          </ProtectedRoute>
        }
      >
        <Route
          path="usuarios"
          element={
            <ProtectedRoute>
              <TablaUsuarios></TablaUsuarios>
            </ProtectedRoute>
          }
        />
        <Route
          path="productos"
          element={
            <ProtectedRoute>
              <ListaProductosAdmin></ListaProductosAdmin>
            </ProtectedRoute>
          }
        />
        <Route
          path="categorias/nueva"
          element={
            <ProtectedRoute>
              <CrearCategoriaForm></CrearCategoriaForm>
            </ProtectedRoute>
          }
        />

        <Route
          path="productos/nuevo"
          element={
            <ProtectedRoute>
              <CrearProductoForm></CrearProductoForm>
            </ProtectedRoute>
          }
        />

        <Route
          path="categorias"
          element={
            <ProtectedRoute>
              <TablaCategorias />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
