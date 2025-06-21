import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategorias } from "../redux/categoriasSlice";
import { CreateProductos, fetchProductos } from "../redux/productoSlice";
import { store } from "../redux/store";

export default function CrearProductoForm() {
  const dispatch = store.dispatch;
  const { items: categorias, loading } = useSelector(
    (state) => state.categorias
  );
  const { accessToken } = useSelector((state) => state.auth);

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    dispatch(fetchCategorias(accessToken));
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim()) {
      toast.warn(
        "Por favor, completá todos los campos antes de crear el producto.",
        {
          position: "top-center",
        }
      );
    } else {
      
      const argumentos = {
        newProducto: {
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad,
            precio: precio,
            categoria: { id: categoria },
          },
          accessToken: accessToken
        }

        dispatch(
          CreateProductos(argumentos)
        );

        toast.success("Producto creado con éxito.", {
          position: "top-center",
        });
        
        setNombre(""),
          setDescripcion(""),
          setCantidad(""),
          setCantidad(""),
          setPrecio(""),
          setCategoria("");

      //   if (response.ok) {
      //     toast.success("Producto creado con éxito.", {
      //       position: "top-center",
      //     });
      //   } else {
      //     toast.error("Error: No se pudo crear el producto.", {
      //       position: "top-center",
      //     });
      //   }
      // } catch (error) {
      //   toast.error("Error de conexión con el servidor.", {
      //     position: "top-center",
      //   });
      // }
    }
  }

    return (
      <>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[500px] md:w-[700px] xl:w-[900px] p-10 bg-white rounded-2xl shadow-2xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <h3 className="mb-4 text-2xl font-bold text-center text-lime-800 col-span-1 md:col-span-2">
            Crear nuevo producto
          </h3>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="nombre-input">
              Nombre
            </label>
            <input
              type="text"
              id="nombre-input"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="precio-input">
              Precio
            </label>
            <input
              id="precio-input"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="cantidad-input">
              Cantidad
            </label>
            <input
              id="cantidad-input"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="categoria-input">
              Elige una categoria:{" "}
            </label>
            <select
              onChange={(e) => setCategoria(e.target.value)}
              id="countries"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
            >
              <option selected>Categorias</option>
              {categorias.length > 0 &&
                categorias.map((categoria) => (
                  <option value={categoria.id}>{categoria.descripcion}</option>
                ))}
            </select>
          </div>
        

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="descripcion-input">
              Descripcion
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center md:col-span-2 mt-6">
            <button
              type="submit"
              className="text-brown-200 px-6 py-3 rounded font-bold text-lg bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              Crear
            </button>
          </div>
        </form>
      </>
    );
  }
