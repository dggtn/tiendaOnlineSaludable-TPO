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
                body: JSON.stringify({ descripcion: nombre }),
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
        <main className="flex-1 flex justify-center items-start min-h-screen bg-white p-10">
            <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">

                <h2 className="text-4xl font-bold text-lime-700 mb-10 text-center">
                    Crear Nueva Categoría
                </h2>

                <div className="mb-8"> 
                    <label
                        htmlFor="nombre"
                        className="block text-md font-semibold text-gray-700 mb-2"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa el nombre de la categoría"
                        className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition"
                        autoComplete="off"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
                >
                    Crear Categoría
                </button>
            </form>
        </main>
    </>
);

}