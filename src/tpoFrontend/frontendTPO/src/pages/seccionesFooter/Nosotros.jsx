import { Banner1 } from '../Inicio/components/Banner1';
import React from 'react';

function TiendaOnlineSaludable() {
  return (
    <div className="bg-white tex-tlime-800 font-sans">
      <header className="bg-lime-900 text-white p-6">
        <h1 className="text-3xl font-bold">Bienvenidos a tiendaOnlineSaludable</h1>
        <p className="mt-2 text-lg">
          Desarrollando la agricultura ecológica con equidad y cooperación.
        </p>
      </header>
      <section className="p-6">
        <p className="mb-4">
          Nuestra red de tiendas tiendaOnlineSaludable tiene como objetivo desarrollar la agricultura ecológica con un espíritu de equidad y cooperación.
        </p>
        <p className="mb-4">
          En colaboración con agrupaciones de productores, creamos cadenas de suministro justas basadas en el respeto de exigentes criterios sociales y ecológicos.
        </p>
        <p className="mb-4">
          Nos comprometemos con la transparencia de nuestras actividades y la trazabilidad de nuestros abastecimientos.
        </p>
        <p className="mb-4">
          Presentes en los órganos profesionales del sector, velamos por la calidad de la agricultura ecológica.
        </p>
        <p>
          Nuestras tiendas tiendaOnlineSaludable son espacios de intercambio y concienciación para un consumo responsable.
        </p>
      </section>

     
      <section className="bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4">Los 5 pilares de los compromisos de tiendaOnlineSaludable</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>100% ecológico:</strong> Todos nuestros productos están certificados como Agricultura Ecológica (AB).</li>
          <li><strong>Local:</strong> Ayudamos a productores locales y reducimos la huella ecológica.</li>
          <li><strong>100% de temporada:</strong> Vivimos al ritmo sabroso de las cuatro estaciones.</li>
          <li><strong>0% OGM:</strong> Rechazamos los cultivos genéticamente modificados.</li>
          <li><strong>0% transporte aéreo:</strong> Priorizamos el origen más cercano para minimizar el impacto ambiental.</li>
        </ul>
      </section>
      {/* <Banner1/> */}
    </div>
  );
}

export default TiendaOnlineSaludable;