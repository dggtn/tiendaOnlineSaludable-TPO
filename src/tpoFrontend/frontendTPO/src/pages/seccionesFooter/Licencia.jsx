import React from "react";

export default function Licencia() {
  return (
    <main className="bg-green-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="px-8 pb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Licencia de Uso del Sitio
          </h1>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            TiendaOnlineSaludable
          </p>
        </div>

        <div className="px-8 flex flex-col gap-8">

          {/* Artículo 1 */}
          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                1
              </div>
              <h2 className="text-2xl font-semibold text-green-800">
                Propiedad intelectual
              </h2>
            </div>
            <div className="space-y-4 text-green-800 text-base leading-relaxed">
              <p>
                Todo el contenido presente en el sitio{" "}
                <strong className="text-green-800">TiendaOnlineSaludable</strong> (textos, imágenes,
                logos, íconos, gráficos, código y diseño) está protegido
                por derechos de autor y otras leyes de propiedad intelectual.
              </p>
              <p>
                La titularidad de estos derechos pertenece exclusivamente a
                TiendaOnlineSaludable o a sus proveedores, salvo que se indique lo
                contrario.
              </p>
            </div>
          </article>

          {/* Artículo 2 */}
          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                2
              </div>
              <h2 className="text-2xl font-semibold text-green-800">
                Licencia limitada de uso
              </h2>
            </div>
            <div className="space-y-4 text-green-800 text-base leading-relaxed">
              <p>
                Se concede al usuario una licencia no exclusiva, intransferible y
                limitada para acceder y utilizar el sitio y sus servicios sólo
                con fines personales y no comerciales.
              </p>
              <p>
                Esta licencia no incluye el uso del sitio o su contenido para reventa,
                recopilación de datos, uso automatizado (bots, scrapers) o cualquier
                uso que pueda dañar a TiendaOnlineSaludable o a terceros.
              </p>
            </div>
          </article>

          {/* Artículo 3 */}
          <article className="bg-green-50 rounded-2xl p-8 shadow-md border border-green-200 mb-10 max-w-full mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                3
              </div>
              <h2 className="text-2xl font-semibold text-green-800">
                Restricciones
              </h2>
            </div>
            <div className="space-y-6 text-green-800 text-base leading-relaxed">

              <div className="space-y-4">
                <div className="bg-green-100 p-5 rounded-xl border-l-4 border-green-400 flex items-start">
                  <p>
                    No está permitido reproducir, duplicar, copiar, vender o explotar
                    ninguna parte del sitio sin consentimiento expreso por escrito.
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-xl border-l-4 border-green-400 flex items-start">
                  <p>
                    No puede modificar, descompilar ni realizar ingeniería inversa sobre
                    ningún software utilizado en el sitio.
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-xl border-l-4 border-green-400 flex items-start">
                  <p>
                    Se prohíbe el uso del sitio con fines ilícitos o no autorizados.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-400 border-2 border-dashed">
                <p className="font-semibold text-gray-700">
                  El incumplimiento de estas condiciones podrá dar lugar a la
                  cancelación inmediata del acceso al sitio, sin perjuicio de posibles
                  acciones legales.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-green-100 rounded-2xl p-6 shadow-md border border-green-300 text-center">
            <p className="text-green-800 font-semibold">
              Le recomendamos revisar esta sección periódicamente para estar
              informado sobre cualquier cambio.
            </p>
          </article>

        </div>
      </div>
    </main>
  );
}
