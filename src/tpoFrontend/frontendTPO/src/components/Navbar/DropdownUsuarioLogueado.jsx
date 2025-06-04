export const DropdownUsuarioLogueado = ({ setDropdown, onLogout }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onLogout();
    setDropdown(false);
  };

  return (
    <div 
      className="absolute right-0 top-full z-50 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={handleClick}
        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Cerrar sesión
      </button>
    </div>
  );
};