export const DropdownUsuarioLogueado = ({ setDropdown, onLogout }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onLogout();
    setDropdown(false);
  };

  return (
    <div 
      className="absolute right-0 top-full z-50 w-48 bg-green-500 rounded-md shadow-lg "
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={handleClick}
        className="block w-full px-4 py-2 text-left text-brown-400 hover:bg-green-500 dark:text-green-200 dark:hover:bg-green-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
};