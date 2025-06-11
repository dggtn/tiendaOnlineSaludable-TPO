import { Banner1 } from '../Inicio/components/Banner1';
import React from 'react';

function TiendaOnlineSaludable() {
  return (
    <div className="bg-white tex-tlime-800 font-sans">
      <header className="bg-brown-400 text-white p-6">
        <h1 className="text-3xl font-bold">Bienvenidos a tiendaOnlineSaludable</h1>
        <p className="mt-2 text-lg">
          Desarrollando la agricultura ecológica con equidad y cooperación.
        </p>
      </header>
      <section className="p-6 bg-brown-100 ">
        <p className="mb-4 text-brown-400">
          Nuestra red de tiendas tiendaOnlineSaludable tiene como objetivo desarrollar la agricultura ecológica con un espíritu de equidad y cooperación.
        </p>
        <p className="mb-4 text-brown-400">
          En colaboración con agrupaciones de productores, creamos cadenas de suministro justas basadas en el respeto de exigentes criterios sociales y ecológicos.
        </p>
        <p className="mb-4 text-brown-400">
          Nos comprometemos con la transparencia de nuestras actividades y la trazabilidad de nuestros abastecimientos.
        </p>
        <p className="mb-4 text-brown-400">
          Presentes en los órganos profesionales del sector, velamos por la calidad de la agricultura ecológica.
        </p>
        <p className="mb-4 text-brown-400">
          Nuestras tiendas tiendaOnlineSaludable son espacios de intercambio y concienciación para un consumo responsable.
        </p>
      </section>

     
      <section className="bg-brown-100 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-brown-500">Los 5 pilares de los compromisos de tiendaOnlineSaludable</h2>
        <ul className="list-disc list-inside space-y-2 text-brown-500">
          <li><strong className='text-brown-400'>100% ecológico:</strong> <p className="mb-4 text-brown-400">Todos nuestros productos están certificados como Agricultura Ecológica </p></li>
          <li><strong  className='text-brown-400' >Local:</strong> <p className="mb-4 text-brown-400">Ayudamos a productores locales y reducimos la huella ecológica.</p></li>
          <li><strong  className='text-brown-400'>0% transporte aéreo:</strong><p className="mb-4 text-brown-400"> Priorizamos el origen más cercano para minimizar el impacto ambiental.</p></li>
        </ul>
      </section>
      {/* <Banner1/> */}
    </div>
  );
}

export default TiendaOnlineSaludable;