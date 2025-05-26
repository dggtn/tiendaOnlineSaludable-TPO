import React from "react";

export default function Licencia() {
  return (
    <section className="px-4 md:px-12 py-10 bg-white text-gray-800">
      <h2 className="text-lime-900 font-bold text-3xl md:text-4xl mb-8">
        Licencia de Uso del Sitio TiendaOnlineSaludable
      </h2>

      {/* Artículo 1 */}
      <article className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-loose mb-8">
        <h3 className="text-xl font-semibold text-lime-800 mb-4">
          1. Propiedad intelectual
        </h3>
        <p className="mb-4">
          Todo el contenido presente en el sitio{" "}
          <strong>TiendaOnlineSaludable</strong> (incluyendo textos, imágenes,
          logotipos, íconos, gráficos, código fuente y diseño) está protegido
          por derechos de autor y otras leyes de propiedad intelectual.
        </p>
        <p>
          La titularidad de estos derechos pertenece exclusivamente a
          TiendaOnlineSaludable o a sus proveedores, salvo que se indique lo
          contrario.
        </p>
      </article>

      {/* Artículo 2 */}
      <article className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-loose mb-8">
        <h3 className="text-xl font-semibold text-lime-800 mb-4">
          2. Licencia limitada de uso
        </h3>
        <p className="mb-4">
          Se concede al usuario una licencia no exclusiva, intransferible y
          limitada para acceder y utilizar el sitio y sus servicios únicamente
          con fines personales y no comerciales.
        </p>
        <p>
          Esta licencia no incluye el uso del sitio o su contenido para reventa,
          recopilación de datos, uso automatizado (bots, scrapers) o cualquier
          uso que pueda dañar a TiendaOnlineSaludable o a terceros.
        </p>
      </article>

      {/* Artículo 3 */}
      <article className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-loose mb-8">
        <h3 className="text-xl font-semibold text-lime-800 mb-4">
          3. Restricciones
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            No está permitido reproducir, duplicar, copiar, vender o explotar
            ninguna parte del sitio sin consentimiento expreso por escrito.
          </li>
          <li>
            No puede modificar, descompilar ni realizar ingeniería inversa sobre
            ningún software utilizado en el sitio.
          </li>
          <li>
            Se prohíbe el uso del sitio con fines ilícitos o no autorizados.
          </li>
        </ul>
        <p>
          El incumplimiento de estas condiciones podrá dar lugar a la
          cancelación inmediata del acceso al sitio, sin perjuicio de posibles
          acciones legales.
        </p>
      </article>

      <article>
        <p>
          Le recomendamos revisar esta sección periódicamente para estar
          informado sobre cualquier cambio.
        </p>
      </article>
    </section>
  );
}
