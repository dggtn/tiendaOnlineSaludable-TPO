import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function checkOut({ setCheckOut, carrito }) {
  const { accessToken } = useSelector((state) => state.auth);
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    tarjeta: "",
    mes: "",
    anio: "",
    codigo: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formularioValido()) {
      const items = carrito.productos.map((item) => {
        return { cantidad: item.cantidad, id: item.producto.id };
      });

      const pedido = {
        items: items,
      };

      try {
        const respuesta = await fetch("http://localhost:4002/pedidos/comprar", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pedido),
        });

        if (respuesta.ok) {
          toast.success("Compra realizada con éxito", {
            position: "top-center",
            autoClose: 2000,
          });

          setTimeout(() => {
            carrito.vaciar();
            setCheckOut(false);
            navigate("/productos");
          }, 2200);
        }
      } catch (error) {
        toast.error("Ocurrió un error procesando el pago. " + error, {
      position: 'top-center',
    });
      }
    }
  };

  function formularioValido() {
    let valido =
      formulario.nombre !== "" &&
      formulario.email !== "" &&
      formulario.tarjeta !== "" &&
      formulario.mes !== "" &&
      formulario.anio !== "" &&
      formulario.codigo !== "";

      if (!valido) {
        toast.error("Completar el formulario", {
      position: 'top-center',
    });
      }
    return valido;
  }

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-brown-100 bg-opacity-50"></div>
      <div
        id="authentication-modal"
        tabIndex={-1}
        className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-brown-100 rounded-lg shadow">
            <button
              onClick={() => setCheckOut(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-lime-700"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl  lime-gray-900 text-green-600 font-bold">
                <i className="bi bi-credit-card mr-2"></i>Sólo aceptamos pago
                con tarjeta
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-green-600 "
                  >
                    Nombre:
                  </label>
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, nombre: e.target.value })
                    }
                    value={formulario.nombre}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-green-600"
                  >
                    Email:
                  </label>
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, email: e.target.value })
                    }
                    value={formulario.email}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium  text-green-600 "
                  >
                    # Tarjeta:
                  </label>
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, tarjeta: e.target.value })
                    }
                    value={formulario.tarjeta}
                    type="number"
                    name="card"
                    id="card"
                    className="bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="code"
                    className="   text-green-600 block mb-2 text-sm font-medium "
                  >
                    Fecha expiración:
                  </label>
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, mes: e.target.value })
                    }
                    value={formulario.mes}
                    type="number"
                    name="month"
                    id="month"
                    className="inline-block   w-20 bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, anio: e.target.value })
                    }
                    value={formulario.anio}
                    type="number"
                    name="year"
                    id="year"
                    className=" w-20 ml-3 bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-green-600 dark:text-gray-300 gap-3"
                  >
                    Código de seguridad:
                  </label>
                  <input
                    onChange={(e) =>
                      setFormulario({ ...formulario, codigo: e.target.value })
                    }
                    value={formulario.codigo}
                    type="number"
                    name="code"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-green-600 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-lime-700"
                  />
                </div>
                <p className="mb-4 text-2xl font-semibold text-green-600 text-center">
                  Total: $ {carrito.calcularTotal()}
                </p>
                <button
                  type="submit"
                  className="w-full text-brown-200 font-bold  bg-green-600 hover:bg-lime-800  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>PAGAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
