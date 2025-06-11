import React from 'react'

export default function TrabajaConNosotros() {
  return (
    <div className="text-brown-400 bg-brown-50 font-sans">
      
      <header className="bg-lime-green-900 text-brown-400 p-6">
        <h1 className="text-3xl font-bold">
          TRABAJA CON NOSOTROS
        </h1>
      </header>


      <section className="p-6 space-y-4 bg-brown-50">
        <p>
          tiendaOnlineSaludable reúne hoy más de 700 tiendas ecológicas con un objetivo común: desarrollar la agricultura ecológica con un espíritu de equidad y cooperación. 
          Líder en distribución de alimentos ecológicos, tiendaOnlineSaludable se destaca por sus productos de comercio justo, su amplia variedad de eco-productos y cosméticos.
        </p>
        <p>
          Más que una simple red de comerciantes, tiendaOnlineSaludable quiere influir en las decisiones sociales y compartir su proyecto con otros actores: empleados, consumidores, productores y socios.
        </p>
        <p>
          Para difundir aún más su proyecto a los "consum'actores", tiendaOnlineSaludable busca emprendedores interesados en crear o tomar el control de una tienda, así como comerciantes ecológicos que deseen unirse a nuestra cooperativa.
        </p>
        <p className="font-semibold">
          Si deseas comerciar de una manera diferente, únete a la primera red cooperativa de tiendas ecológicas y justas en Francia.
        </p>
      </section>


      <section className="p-6 bg-green-50">
        <h2 className="text-2xl font-semibold mb-4 text-brown-400  ">3 RAZONES PARA UNIRTE A tiendaOnlineSaludable</h2>
        <ol className="list-decimal list-inside space-y-3  text-brown-400">
          <li>
            <strong>Te conviertes en actor del cambio:</strong> Al crear o asumir tu tienda tiendaOnlineSaludable, te unes a iniciativas que promueven un nuevo modelo de consumo y participas activamente en un proyecto con impacto social.
          </li>
          <li>
            <strong>Diferente al resto:</strong> tiendaOnlineSaludable es ante todo una cooperativa que ha sabido unir su razón de ser con su modelo económico, guiada por un riguroso pliego de condiciones.
          </li>
          <li>
            <strong>Es más que una profesión:</strong> Es un proyecto de vida que requiere pasión, compromiso personal y deseo de compartir con clientes, equipos y socios. También implica hacer brillar lo ecológico a nivel local.
          </li>
        </ol>
      </section>


      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">TIENDAONLINESALUDABLE EN CIFRAS</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>60% de las tiendas creadas dentro de la economía social y solidaria</li>
          <li>330 m² de superficie media por tienda</li>
          <li>2,2 M€ de facturación media en tiendas con más de 2 años</li>
          <li>1,6 mil M€ de facturación total en la red</li>
          <li>7.200 empleados en tiendas</li>
          <li>1.200 empleados en servicios de apoyo a tiendas</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6">
        <h2 className="text-2xl font-semibold mb-4">UN ACOMPAÑAMIENTO ADAPTADO A TU PROYECTO</h2>
        <p className="mb-4">
          Con los consejos y servicios técnicos de nuestro equipo, nunca estarás solo(a). tiendaOnlineSaludable te acompaña en el desarrollo de un concepto de tienda adaptado a tu proyecto, desde la ubicación ideal hasta la apertura y el plan de negocio adecuado.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold">PUNTO DE VENTA</h3>
            <ul className="list-disc list-inside">
              <li>Estudios geomarketing y de mercado</li>
              <li>Diseño del plano de tienda</li>
              <li>Definición del surtido</li>
              <li>Asesoría en precios</li>
              <li>Comunicación</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">INMOBILIARIO</h3>
            <ul className="list-disc list-inside">
              <li>Asistencia en la búsqueda de locales</li>
              <li>Apoyo en negociaciones inmobiliarias</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">LEGAL Y FINANCIERO</h3>
            <ul className="list-disc list-inside">
              <li>Asesoramiento jurídico y laboral</li>
              <li>Asistencia en la creación del plan de negocio</li>
              <li>Ayuda en la búsqueda de financiamiento</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">TÉCNICO</h3>
            <ul className="list-disc list-inside">
              <li>Normas de seguridad, higiene y ecología</li>
              <li>Recomendaciones de equipamiento completo</li>
              <li>Logística con 4 plataformas de distribución</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">FORMACIÓN</h3>
            <ul className="list-disc list-inside">
              <li>20 días de formación teórica</li>
              <li>3 a 6 meses de prácticas en tienda</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-lime-900">¿Te interesa sumarte?</h2>
        <p className="text-lime-900">Envíanos tu CV a <a href="mailto:contacto@tiendaonlinesaludable.com" className="underline text-lime-800">contacto@tiendaonlinesaludable.com</a></p>
      </section>

    </div>
  );
}

