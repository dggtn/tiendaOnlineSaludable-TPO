
import { Link, useNavigate } from "react-router-dom";


export const DropdownLoggedIn = ({setDropdown}) => {
    const navigate = useNavigate();
    
   


  return (
    <div id="dropdownAvatar" className=" bg-green-700  select-none	absolute top-10 right-0 z-10 w-44 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">

            <li>
                <Link onClick={() => setDropdown(false)} to="/autenticarse" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nuestros productos</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/registrarse" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inicio</Link>
            </li>
        </ul>
    </div>
  )
}