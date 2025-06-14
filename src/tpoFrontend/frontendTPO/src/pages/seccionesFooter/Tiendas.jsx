import React from "react";

export default function Tiendas() {
  return (
    <div className="bg-green-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        
        <section className="flex flex-col lg:flex-row text-green-900 items-center mb-16 bg-white/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text my-5 flex-1 lg:pr-8">
            <h1 className="text-5xl text-green-900 font-bold mb-3 hover:text-green-700 transition-colors duration-300">
              Tienda Zona Norte
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <h6 className="text-3xl text-green-800 font-semibold">
                Av. Rivarola 123
              </h6>
            </div>
            <p className="text-green-700 text-lg mt-4 opacity-80">
              Nuestra primera sucursal, ubicada en el corazón de la zona norte
            </p>
          </div>
          <div className="visual my-5 lg:max-w-xl flex-1">
            <div className="relative group">
              <img
                className="rounded-xl w-full h-80 object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                src="/tienda1.jpg"
                alt="Tienda Zona Norte"
              />
              <div className="absolute inset-0 bg-green-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row-reverse text-green-900 items-center bg-white/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="text my-5 flex-1 lg:pl-8 lg:text-right">
            <h1 className="text-5xl text-green-900 font-bold mb-3 hover:text-green-700 transition-colors duration-300">
              Tienda Zona Sur
            </h1>
            <div className="flex items-center gap-2 mb-4 lg:justify-end">
              <div className="w-2 h-2 bg-green-600 rounded-full lg:order-2"></div>
              <h6 className="text-3xl text-green-800 font-semibold">
                Av. del Pino 333
              </h6>
            </div>
            <p className="text-green-700 text-lg mt-4 opacity-80">
              Nuestra segunda sucursal, sirviendo a toda la zona sur de la ciudad
            </p>
          </div>
          <div className="visual my-5 lg:max-w-xl flex-1">
            <div className="relative group">
              <img
                className="rounded-xl w-full h-80 object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                src="/tienda2.jpg"
                alt="Tienda Zona Sur"
              />
              <div className="absolute inset-0 bg-green-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}