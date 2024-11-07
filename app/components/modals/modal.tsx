"use client";

import { useState, useEffect, useRef } from "react";
import { useModal } from "@/app/contexte/modalContext";

export default function Modal() {
    const { setShowModal } = useModal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const modalRef = useRef(null); // Référence pour le conteneur de la modal

    const close = () => {
        setShowModal(false);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // Stocker le token

                // Redirection sur une page
                window.location.href = "/";

                close(); // Ferme la modal après une connexion réussie
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error("Erreur de connexion:", error);
            setErrorMessage("Une erreur s'est produite, veuillez réessayer.");
        }
    };

    useEffect(() => {
        // Fermer la modal si clic en dehors de celle-ci
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            id="authentication-modal"
            aria-hidden="true"
            className="max-h-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bg-black bg-opacity-50 flex"
        >
            <div className="relative p-4 w-full max-w-md" ref={modalRef}>
                <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Connexion à Parions DC
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={close} // Appel de la fonction close au clic
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                ></path>
                            </svg>
                            <span className="sr-only">Fermer le modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Votre email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="nom@entreprise.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Votre mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Se souvenir de moi
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Mot de passe oublié ?
                            </a>
                        </div>
                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Se connecter à votre compte
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Pas encore inscrit ?{" "}
                            <a
                                href="#"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Créer un compte
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
