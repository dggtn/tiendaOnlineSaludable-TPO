import "./tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Rutas } from "./Rutas/Todas";
import { useState } from "react";
import RutasProtegidas from "./Rutas/RutasProtegidas";
import { BrowserRouter } from "react-router-dom";

let itemCarrito = {
  cantidad:0,
  producto:{}
}

let carritoInicial = {
  productos: [],
  agregar: function(cantidad, producto) {

    let itemEnCarrito = this.productos.find(item => item.producto.id === producto.id)
    if (itemEnCarrito !== undefined) {
      itemEnCarrito.cantidad += cantidad
    } else {
      this.productos.push({cantidad: cantidad, producto: producto})
    }

     this.cuandoSeAgregaUnProducto()
  },
  cuandoSeAgregaUnProducto: function (){},
  cuandoSeEliminaUnProducto: function (){},
  calcularTotal: function() {
    const total = this.productos.reduce((acumulado, item) => {
      return acumulado + (item.producto.precio * item.cantidad)
    }, 0)
    return total
  },
  eliminarPorId: function(id) {
    this.productos = this.productos.filter(item => item.producto.id !== id);
    this.cuandoSeEliminaUnProducto()  
  },
  tieneItems: function() {
    return this.productos.length > 0
  },
  obtenerCantidadSeleccionada: function(idProducto) {
    let itemEnCarrito = this.productos.find(item => item.producto.id === idProducto)
    return itemEnCarrito === undefined ? 0 : itemEnCarrito.cantidad
  },
  vaciar: function(){
    this.productos = []
  }
};

function App() {
  const [autenticacion, setAutenticacion] = useState({
    logueado: false,
    rol: "",
    email: "",
    accessToken: "",
  });
  const [carrito, setCarrito] = useState(carritoInicial)

  carrito.cuandoSeAgregaUnProducto = productoAgregado
  carrito.cuandoSeEliminaUnProducto = productoEliminado

  const alHacerLogin = (auth) => {
    setAutenticacion(auth);
  };

  function productoAgregado() {
    setCarrito({...carrito})
  }

    function productoEliminado() {
      setCarrito({...carrito})
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Rutas autenticacion={autenticacion} carrito={carrito} />
        <RutasProtegidas
          autenticacion={autenticacion}
          callbackLogin={alHacerLogin}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


