import { useState } from "react";
import SideBar from "./SideBar";
import { toast } from "react-toastify";


export default function FormularioCrearCategoriaAdmin({ autenticacion }) {
    const [nombre, setNombre] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        if (!nombre.trim()) {
            toast.warn("Por favor, completá el campo.", {
      position: 'top-center',
    });
            return;
        }

        try {
            const response = await fetch("http://localhost:4002/categorias", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + autenticacion.accessToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre }),
            });

            if (response.ok) {
                toast.success("Categoría creada con éxito.", {
      position: 'top-center',
    });
                setNombre("");
                
            } else {
                const data = await response.json();
                toast.error("Error: No se pudo crear la categoría.", {
      position: 'top-center',
    });
            }
        } catch (error) {
            toast.error("Error de conexión con el servidor.", {
      position: 'top-center',
    });
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-brown-200 mt-16 mb-80 rounded shadow">
            <h2 className="text-2xl mt-4 font-semibold mb-4 text-brown-400">Crear Nueva Categoría</h2>

            <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-brown-400 ">
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>

            <button
                type="submit"
        className="  text-brown-200 font-extrabold  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 bg-green-600 hover:text-green-700 "
            >
                Crear
            </button>
        </form>
        </>
    );
}
