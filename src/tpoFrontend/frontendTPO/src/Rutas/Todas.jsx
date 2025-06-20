import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import DetalleProducto from "../pages/detalleProducto/DetalleProducto";
import { ListaProductos } from "../pages/Productos/ListaProductos";
import Tiendas from "../pages/seccionesFooter/Tiendas";
import Blog from "../pages/seccionesFooter/Blog";
import Terminos from "../pages/seccionesFooter/Terminos";
import Licencia from "../pages/seccionesFooter/Licencia";
import Politicas from "../pages/seccionesFooter/Politicas";
import Nosotros from "../pages/seccionesFooter/Nosotros";
import TrabajaConNosotros from "../pages/seccionesFooter/TrabajaConNosotros";
import FormularioContacto from "../pages/seccionesFooter/FormularioContacto";
import Carrito from "../pages/carrito/Carrito";
import { ProtectedRoute } from "./ProtectedRoute";
import Contactanos from "../pages/seccionesFooter/Contactanos";

export const Rutas = ({ carrito }) => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<ListaProductos carrito={carrito} />} />
      <Route path="/productos/:id" element={<DetalleProducto carrito={carrito} />} />
      <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
      <Route path="/tiendas" element={<Tiendas />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/condiciones" element={<Terminos />} />
      <Route path="/licencia" element={<Licencia />} />
      <Route path="/politicaPrivacidad" element={<Politicas />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route
        path="/carrito"
        element={
          <ProtectedRoute>
            <Carrito carrito={carrito} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
