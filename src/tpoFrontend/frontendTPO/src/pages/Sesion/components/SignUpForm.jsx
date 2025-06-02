import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    const authDetail = {
      nombre,
      apellido,
      email,
      contrasena: password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    };

    const response = await fetch(
      "http://localhost:4002/v1/auth/registrarse",
      requestOptions
    );
    const data = await response.json();

    if (data.access_token) {
        toast.success("Registro exitoso");
        navigate("/productos");
    } else {
        toast.error(data.message);
    }
    
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Apellido</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Ingresa tu apellido"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
        />
      </div>

      <button
        onClick={handleClick}
        className="bg-lime-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full"
      >
        Registrarse
      </button>

      <p className="text-sm text-center text-gray-600 mt-4">
        ¿Ya tenés una cuenta?{" "}
        <Link to="/sesion" className="text-lime-900 hover:underline">
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
