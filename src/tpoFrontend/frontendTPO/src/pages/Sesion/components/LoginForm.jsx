import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { Link } from "react-router-dom";

const LoginForm = ({ callbackLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Los campos no pueden estar vacíos", {
        position: "top-center",
      });
      return;
    }

    const authDetail = {
      email: email,
      contrasena: password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    };

    const response = await fetch(
      "http://localhost:4002/v1/auth/autenticarse",
      requestOptions
    );
    const data = await response.json();
    if (data.access_token) {
      const datos = jwtDecode(data.access_token);

      const auth = {
        rol: datos["rol"],
        email: datos.sub,
        accessToken: data.access_token,
        logueado: true,
      };

      callbackLogin(auth);

      toast.success("Inicio de sesión exitoso", {
        position: "top-center",
      });

      if (auth.rol === "CLIENTE") {
        navigate("/");
      } else {
        navigate("/admin");
      }
    } else {
      toast.error(data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
          value={email}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
          value={password}
        />
      </div>

      <button
        onClick={handleClick}
        className="w-full text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        Ingresar
      </button>

      <p className="text-sm text-center text-gray-600 mt-4">
        ¿No tenés cuenta?{" "}
        <Link to="/registro" className="text-lime-900 hover:underline">
          Registrate acá
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
