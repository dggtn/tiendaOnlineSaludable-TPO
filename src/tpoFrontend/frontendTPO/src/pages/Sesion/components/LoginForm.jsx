import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Los campos no pueden estar vacíos");
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
    data.access_token ? navigate("/productos") : toast.error(data.message);
}

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

      <button onClick={handleClick} className="bg-lime-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full">
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;
