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

export default function RutasProtegidas({ callbackLogin, autenticacion }) {
  return (
      <Routes>
        <Route
          path="/sesion"
          element={<Auth callbackLogin={callbackLogin}></Auth>}
        />

        <Route path="/registro" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute autenticacion={autenticacion}>
              <InicioAdmin autenticacion={autenticacion}></InicioAdmin>
            </ProtectedRoute>
          }
        >
          <Route
            path="usuarios"
            element={
              <ProtectedRoute autenticacion={autenticacion}>
                <TablaUsuarios autenticacion={autenticacion}></TablaUsuarios>
              </ProtectedRoute>
            }
          />
          <Route
            path="productos"
            element={
              <ProtectedRoute autenticacion={autenticacion}>
                <ListaProductosAdmin
                  autenticacion={autenticacion}
                ></ListaProductosAdmin>
              </ProtectedRoute>
            }
          />
          <Route
            path="categorias/nueva"
            element={
              <ProtectedRoute autenticacion={autenticacion}>
                <CrearCategoriaForm
                  autenticacion={autenticacion}
                ></CrearCategoriaForm>
              </ProtectedRoute>
            }
          />

          <Route
            path="productos/nuevo"
            element={
              <ProtectedRoute autenticacion={autenticacion}>
                <CrearProductoForm
                  autenticacion={autenticacion}
                ></CrearProductoForm>
              </ProtectedRoute>
            }
          />

          <Route
            path="categorias"
            element={
              <ProtectedRoute autenticacion={autenticacion}>
                <TablaCategorias autenticacion={autenticacion} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
  );
}
