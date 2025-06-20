import "./tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Rutas } from "./Rutas/Todas";
import { useState } from "react";
import RutasProtegidas from "./Rutas/RutasProtegidas";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Rutas />
        <RutasProtegidas
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


