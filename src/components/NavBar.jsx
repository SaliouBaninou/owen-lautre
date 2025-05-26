import { useState } from "react";
import CrossIcon from "../assets/CrossIcon";
import BurgerIcon from "../assets/BurgerIcon";
import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!isOpen);

    const {logout} = useAuth()

    return (
        <>
            {/* Bouton de toggle */}
            <div className="fixed top-5 right-5 md:right-20 z-40 md:top-20" onClick={toggleMenu}>
                <div className={`h-8 w-8 cursor-pointer ${!isOpen ? '' : 'hidden'}`}>
                    <BurgerIcon />
                </div>
                <div className={`h-8 w-8 cursor-pointer ${isOpen ? '' : 'hidden'}`}>
                    <CrossIcon />
                </div>
            </div>

            {/* Menu avec animation verticale */}
            <div className={`fixed top-0 left-0 z-30 w-full p-4 md:p-10 md:pl-20 md:pr-20 bg-white transition-transform duration-500 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <div className="relative">
                    <h2 className="text-2xl font-bold text-gray-400">Owen & Cathia</h2>
                </div>
                <div>
                    <h2 className="font-medium text-6xl mt-6 mb-6">Menu</h2>
                    <ul>
                        <li><NavLink className="text-2xl text-gray-500" to="/">Accueil</NavLink></li>
                        <li><NavLink className="text-2xl text-gray-500" to="/album">Album</NavLink></li>
                        <li><NavLink className="text-2xl text-gray-500" to="/add">Ajouter</NavLink></li>
                        <li><button className="text-2xl text-gray-500"  onClick={()=>logout()}>Déconnexion</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
