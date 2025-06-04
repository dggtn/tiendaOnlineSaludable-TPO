import React from "react";

export default function Tiendas() {
  return (
    <>
      <section className="flex flex-col lg:flex-row text-lime-900 items-center ">
        <div className="text my-5">
          <h1 className="text-5xl text-lime-900 font-bold">
            Tienda Zona norte
          </h1>
          <p className="text-2xl my-7 px-1 text-lime-900">
            Primera dietética natural fundada en 1980{" "}
          </p>
        </div>
        <div className="visual my-5 lg:max-w-xl">
          <img
            className="rounded-lg max-h-full"
            src="/tienda1.jpg"
            alt="especias"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row text-lime-900 items-center ">
        <div className="text my-5">
          <h1 className="text-5xl text-lime-900 font-bold">Tienda Zona Sur</h1>
          <p className="text-2xl my-7 px-1 text-lime-900">
            Segunda dietética natural fundada en 1980{" "}
          </p>
        </div>
        <div className="visual my-5 lg:max-w-xl">
          <img
            className="rounded-lg max-h-full"
            src="/tienda2.jpg"
            alt="especias"
          />
        </div>
      </section>
    </>
  );
}
