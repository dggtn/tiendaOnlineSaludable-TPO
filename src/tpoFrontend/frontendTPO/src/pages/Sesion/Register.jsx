import SignUpForm from "./components/SignUpForm";

const Register = ({ callbackLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 mt-2">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-lime-900">Registro</h1>
          <p className="text-lime-900 mt-2">Completá el siguiente formulario para crear tu cuenta</p>
        </div>

        <SignUpForm callbackLogin={callbackLogin} />
      </div>
    </div>
  );
};

export default Register;

