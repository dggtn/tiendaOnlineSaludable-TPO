import React from "react";

export default function Tiendas() {
  return (
    <div className="bg-green-100">
      <section className="ml-5 flex flex-col lg:flex-row text-green-900 items-center ">
        <div className="text my-5">
          <h1 className="text-5xl text-green-900 font-bold">
            Tienda Zona Norte
          </h1>
          <h6 className="text-3xl text-green-900 font-bold" >Av. Rivarola 123</h6>  
         
        </div>
        <div className="visual my-5 lg:max-w-xl">
          <img
            className="rounded-lg max-h-full shadow-lg"
            src="/tienda1.jpg"
            alt="especias"
          />
        </div>
      </section>

      <section className="ml-12 flex flex-col lg:flex-row text-green-900 items-center ">
        <div className="text my-5">
          <h1 className="text-5xl text-green-900 font-bold">Tienda Zona Sur</h1>
          <h6 className="text-3xl text-green-900 font-bold" >Av. del Pino 333</h6>
         
        </div>
        <div className="visual my-5 lg:max-w-xl">
          <img
            className="rounded-lg max-h-full shadow-lg"
            src="/tienda2.jpg"
            alt="especias"
          />
        </div>
      </section>
    </div>
  );
}
