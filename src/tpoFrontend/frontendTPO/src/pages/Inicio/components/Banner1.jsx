import { Link } from "react-router-dom";

export const Banner1 = () => {
  return (
    <section className="drop-shadow-lg flex flex-col lg:flex-row bg-brown-100 text-brown-400  items-center px-4 ">
      <div className="drop-shadow-lg text my-5">
        <h1 className="drop-shadow-lg text-5xl trgb(110 177 32) font-bold bg-center mb-20 ">
          Con tu compra ayudas al medio ambiente
        </h1>
        <p className="drop-shadow-lg text-2xl my-7 px-1 rgb(110 177 32) mb-10 animate-pulse">
          Tienda online saludable es la tienda #1 de productos sanos en
          Argentina.
        </p>
        <Link
          to="/productos"
          type="button"
          className=" drop-shadow-lg before:selection: text-brown-200 font-extrabold  rounded-lg text-base px-5 py-3 mr-2  bg-green-600 hover:text-green-700 "
        >
          Ver productos
        </Link>
      </div>
      <div className="drop-shadow-lg visual my-5 lg:max-w-xl">
        <img
          className="drop-shadow-lg rounded-lg max-h-full"
          src="/imagenHome.webp"
          alt="especias"
        />
      </div>
    </section>
  );
};
