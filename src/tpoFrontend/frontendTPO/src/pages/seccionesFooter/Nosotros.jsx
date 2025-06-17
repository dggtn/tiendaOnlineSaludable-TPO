import { Banner1 } from '../Inicio/components/Banner1';
import React from 'react';

function TiendaOnlineSaludable() {
  return (
    <div className="bg-white text-brown-800 font-sans">
      <header className="bg-brown-400 text-white p-6">
        <h1 className="text-3xl font-bold">Bienvenidos a tiendaOnlineSaludable</h1>
        <p className="mt-2 text-lg">
          Desarrollando la agricultura ecológica con equidad y cooperación.
        </p>
      </header>

      <section className="p-8 bg-brown-100 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 text-brown-700">
            <div className="bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                Nuestra red de tiendas tiendaOnlineSaludable tiene como objetivo desarrollar la agricultura ecológica con un espíritu de equidad y cooperación.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                En colaboración con agrupaciones de productores, creamos cadenas de suministro justas basadas en el respeto de exigentes criterios sociales y ecológicos.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                Nos comprometemos con la transparencia de nuestras actividades y la trazabilidad de nuestros abastecimientos.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                Presentes en los órganos profesionales del sector, velamos por la calidad de la agricultura ecológica.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                Nuestras tiendas tiendaOnlineSaludable son espacios de intercambio y concienciación para un consumo responsable.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-brown-100 p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-brown-600">
                  Los 5 pilares de nuestros compromisos
                </h2>
                
                <div className="grid gap-6">
                  {/* Cada pilar como una card con borde lateral y número en círculo */}
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brown-400">
                    <div className="flex items-start gap-4">
                      {/* Número dentro de círculo */}
                      <div className="w-8 h-8 bg-brown-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown-600 mb-3">
                          100% ecológico
                        </h3>
                        <p className="text-brown-700 leading-relaxed">
                          Todos nuestros productos están certificados como Agricultura Ecológica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brown-400">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brown-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown-600 mb-3">
                          Local
                        </h3>
                        <p className="text-brown-700 leading-relaxed">
                          Ayudamos a productores locales y reducimos la huella ecológica.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brown-400">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brown-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown-600 mb-3">
                          0% transporte aéreo
                        </h3>
                        <p className="text-brown-700 leading-relaxed">
                          Priorizamos el origen más cercano para minimizar el impacto ambiental.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brown-400">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brown-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown-600 mb-3">
                          Comercio justo
                        </h3>
                        <p className="text-brown-700 leading-relaxed">
                          Garantizamos precios justos y condiciones dignas para todos los productores.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-brown-400">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brown-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown-600 mb-3">
                          Transparencia total
                        </h3>
                        <p className="text-brown-700 leading-relaxed">
                          Trazabilidad completa de origen y procesos de todos nuestros productos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


    </div>
  );
}

export default TiendaOnlineSaludable;