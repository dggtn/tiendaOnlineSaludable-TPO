import React from 'react';

export default function Politicas() {
  return (
    <main className="bg-green-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="px-8 pb-12 text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Condiciones Generales de Venta y Uso del Sitio
            </h1>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              TiendaOnlineSaludable
            </p>
          </div>

        <div className="px-8 flex flex-col gap-8">


          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                1
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Presentación del Sitio y Nuestro Servicio
              </h3>
            </div>
            <div className="space-y-4 text-green-800 text-base leading-relaxed">
              <p>
                El sitio web{' '}
                <a
                  href="https://www.tiendaonlinesaludable.com"
                  className="text-green-700 hover:underline"
                >
                  www.tiendaonlinesaludable.com
                </a>{' '}
                (en adelante, "el Sitio") ofrece:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Un espacio informativo sobre TiendaOnlineSaludable: su historia, valores, organización, ofertas de empleo y novedades.</li>
                <li>Un espacio de comercio electrónico para hacer pedidos online con retiro en tienda (Click & Collect) o entrega a domicilio.</li>
              </ul>
              <p>
                Al realizar un pedido, la compra se realiza directamente con una de nuestras tiendas asociadas, a través de su propia página. Toda relación contractual es entre usted y dicha tienda.
              </p>
            </div>
          </article>


          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                2
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Definiciones
              </h3>
            </div>
            <div className="space-y-4 text-green-800 text-base leading-relaxed">
              <p>
                En estas CGV/CGU, “Usted”, “Usuario” o “Cliente” hace referencia al consumidor del Sitio. “Nosotros”, “Su Tienda TiendaOnlineSaludable” o “Vendedor” se refiere a la tienda donde realiza el pedido.
              </p>
              <p>
                “Nuestro Sitio” es www.tiendaonlinesaludable.com y sus páginas asociadas. “Sitio Web de su Tienda” es el espacio de venta online de su tienda, accesible desde el Sitio.
              </p>
            </div>
          </article>

  
          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                3
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Objeto
              </h3>
            </div>
            <p className="text-green-800 text-base leading-relaxed">
              Estas condiciones regulan el uso del Sitio y los Servicios disponibles, y definen la relación contractual entre usted y su tienda TiendaOnlineSaludable en la compra de productos o servicios.
            </p>
          </article>

  
          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                4
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Aceptación de los Servicios
              </h3>
            </div>
            <div className="space-y-4 text-green-800 text-base leading-relaxed">
              <p>
                Al usar nuestros Servicios, declara ser mayor de edad y actuar como consumidor, no como profesional.
              </p>
              <p>
                Para comprar, debe tener al menos 18 años y capacidad legal. Antes de cada pedido, debe aceptar:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Estas Condiciones Generales (CGV/CGU)</li>
                <li>Las Condiciones Particulares de su Tienda (precios, servicios, etc.)</li>
              </ul>
              <p>
                En caso de conflicto, prevalecen las condiciones particulares. Nos reservamos el derecho de modificarlas sin previo aviso. La versión aplicable será la vigente al confirmar su pedido.
              </p>
            </div>
          </article>

        </div>
      </div>
    </main>
  );
}