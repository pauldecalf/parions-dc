"use client";

import Link from "next/link";
import { useModal } from "../contexte/modalContext";
import { useEffect, useState } from "react";

const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
};

export default function Navbar() {
    const { setShowModal } = useModal();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Vérifiez la présence du token uniquement après le montage du composant
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Parions DC</span>
                </a>


                <div className="flex items-center lg:order-2">
                    {isAuthenticated ? (
                        <>
                            <Link href="/" className={"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 bg-primary"}>Administration</Link>
                            <button onClick={logout} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Déconnexion</button>
                        </>
                    ) : (
                        <button onClick={() => setShowModal(true)} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 bg-primary">Connexion</button>
                    )}
                </div>


                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                     id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#accueil"
                               className="block py-2 pr-4 pl-3 text-gray-800 hover:text-primary-700 lg:text-gray-800 lg:hover:text-primary-700 dark:text-white bg-gray-700 rounded-lg">Accueil</a>
                        </li>
                        <li>
                            <a href="#a-propos"
                               className="block py-2 pr-4 pl-3 text-gray-800 hover:text-primary-700 lg:text-gray-800 lg:hover:text-primary-700 dark:text-white hover:bg-gray-700 rounded-lg">A
                                propos</a>
                        </li>
                        <li>
                            <a href="#equipe"
                               className="block py-2 pr-4 pl-3 text-gray-800 hover:text-primary-700 lg:text-gray-800 lg:hover:text-primary-700 dark:text-white hover:bg-gray-700 rounded-lg">Equipe</a>
                        </li>
                        <li>
                            <a href="#contact"
                               className="block py-2 pr-4 pl-3 text-gray-800 hover:text-primary-700 lg:text-gray-800 lg:hover:text-primary-700 dark:text-white hover:bg-gray-700 rounded-lg">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)
    ;
}
