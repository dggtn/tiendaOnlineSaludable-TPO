import React from "react";

export default function Contactanos() {
  return (
    <main className="bg-green-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">

        <div className="px-8 pt-3 pb-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Contáctanos
          </h1>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            ¿Tienes alguna consulta, sugerencia o necesitas ayuda? ¡Estamos para ayudarte!
          </p>
        </div>

        <div className="px-8 flex flex-col gap-8">

          <div className="space-y-8">

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">
                Información de contacto
              </h2>
              <div className="space-y-4">
                <div className="p-3 bg-brown-50 rounded-xl">
                  <span className="font-semibold text-green-800">Email:</span>
                  <p className="text-gray-700">contacto@tiendaonlinesaludable.com</p>
                </div>
                <div className="p-3 bg-brown-50 rounded-xl">
                  <span className="font-semibold text-green-800">Teléfono:</span>
                  <p className="text-gray-700">+54 11 1234-5678</p>
                </div>
                <div className="p-3 bg-brown-50 rounded-xl">
                  <span className="font-semibold text-green-800">Dirección:</span>
                  <p className="text-gray-700">Av. Rivarola 123, CABA, Argentina</p>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Horario de atención
              </h2>
              <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600">
                <p className="text-gray-800 font-medium">Lunes a Viernes de 9:00 a 18:00 hs</p>
              </div>
            </div>
          </div>


          <div className="space-y-8">

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">
                Redes sociales
              </h2>
              <div className="space-y-4">
                <div className="p-3 bg-brown-50 rounded-xl">
                  <span className="font-semibold text-green-800">Instagram:</span>
                  <p className="text-gray-700">@tiendaonline</p>
                </div>
                <div className="p-3 bg-brown-50 rounded-xl">
                  <span className="font-semibold text-green-800">Facebook:</span>
                  <p className="text-gray-700">/tiendaonline</p>
                </div>
              </div>
            </div>


            <div className="bg-green-100 rounded-2xl p-6 shadow-lg border border-green-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  ¡Estamos aquí para ayudarte!
                </h3>
                <p className="text-gray-700">
                  Nuestro equipo está comprometido en brindarte la mejor atención y resolver todas tus dudas sobre productos saludables.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}