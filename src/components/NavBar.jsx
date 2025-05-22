import { useState } from "react";
import CrossIcon from "../assets/CrossIcon";
import BurgerIcon from "../assets/BurgerIcon";
import { NavLink } from "react-router";

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!isOpen);

    return (
        <>
            {/* Bouton de toggle */}
            <div className="fixed right-20 z-40 top-20" onClick={toggleMenu}>
                <div className={`h-8 w-8 cursor-pointer ${!isOpen ? '' : 'hidden'}`}>
                    <BurgerIcon />
                </div>
                <div className={`h-8 w-8 cursor-pointer ${isOpen ? '' : 'hidden'}`}>
                    <CrossIcon />
                </div>
            </div>

            {/* Menu avec animation verticale */}
            <div className={`fixed top-0 left-0 z-30 w-full p-10 pl-20 pr-20 bg-white transition-transform duration-500 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <div className="relative">
                    <h2 className="text-3xl font-bold text-gray-400">Owen & Cathia</h2>
                </div>
                <div>
                    <h2 className="font-medium text-6xl mt-6 mb-6">Menu</h2>
                    <ul>
                        <li><NavLink className="text-2xl text-gray-500" to="/">Accueil</NavLink></li>
                        <li><NavLink className="text-2xl text-gray-500" to="/album">Album</NavLink></li>
                        <li><NavLink className="text-2xl text-gray-500" to="/add">Ajouter</NavLink></li>
                        <li><NavLink className="text-2xl text-gray-500" to="/logout">Déconnexion</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
