"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 p-4">
                <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                            href="https://www.alp-digital.com/" className="hover:underline"
                            target="_blank">ALP Digital</a>. Tous droits réservés.</span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Politique de confidentialité</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Conditions générales</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Mentions légales</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </section>
        </>
    );
}