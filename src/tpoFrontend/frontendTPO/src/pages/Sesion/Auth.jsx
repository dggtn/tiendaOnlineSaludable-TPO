import LoginForm from "./components/LoginForm";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4 ">
      <div className="bg-brown-200 p-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brown-500">Iniciar Sesión</h1>
          <p className="text-brown-500 mt-2">Ingresá a tu cuenta para continuar</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Auth;

