import React from "react";

export default function Contactanos() {
  return (
    <main className="max-w-2xl mx-auto p-8 bg-white rounded shadow mt-10 mb-10">
      <h1 className="text-3xl font-bold text-lime-900 mb-4">Contáctanos</h1>
      <p className="mb-4 text-gray-700">
        ¿Tienes alguna consulta, sugerencia o necesitas ayuda? ¡Estamos para ayudarte!
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-lime-800 mb-2">Información de contacto</h2>
        <ul className="text-gray-800">
          <li><span className="font-semibold">Email:</span> contacto@tiendaonlinesaludable.com</li>
          <li><span className="font-semibold">Teléfono:</span> +54 11 1234-5678</li>
          <li><span className="font-semibold">Dirección:</span> Av. Rivarola 123, CABA, Argentina</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-lime-800 mb-2">Horario de atención</h2>
        <p>Lunes a Viernes de 9:00 a 18:00 hs</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-lime-800 mb-2">Redes sociales</h2>
        <ul className="text-gray-800">
          <li><span className="font-semibold">Instagram:</span> @tiendaonline</li>
          <li><span className="font-semibold">Facebook:</span> /tiendaonline</li>
        </ul>
      </div>
    </main>
  );
}
