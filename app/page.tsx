// page.tsx
"use client";

import Modal from "./components/modals/modal";
import { useModal } from "./contexte/modalContext";

export default function Home() {
  const { showModal } = useModal();

  return (
      <div className="h-full w-full flex flex-col ">
        <section className="bg-white flex flex-col" id="accueil">
          <h1 className="block text-4xl font-bold italic mx-auto my-10 sm:text-6xl sm:ml-20 sm:my-20">Parie,
            joue,<br/><span className="text-primary">gagne</span>... ou pas !</h1>

          <div className="flex justify-center items-center flex-col gap-10 mb-20 mx-auto lg:flex-row lg:mx-5">
            <div
                className="w-[70%] lg:w-[30%] h-full flex flex-col justify-start items-center gap-8 shadow-lg rounded-lg bg-grey text-black">
              <div className="flex justify-center p-10">
                <svg className="h-20 w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                      d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                </svg>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">Inscris-toi !</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Inscris-toi pour pouvoir parier et
                  gagner de l'argent.</p>
              </div>
            </div>
            <div
                className="w-[70%] lg:w-[30%] h-full flex flex-col justify-start items-center gap-8 shadow-lg rounded-lg p-8 bg-fade text-black">
              <div className="flex justify-center p-10">
                <svg className="h-20 w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                      d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"></path>
                </svg>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Fais ton choix</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fais ton choix parmi les différents
                  paris proposés.</p>
              </div>
            </div>
            <div
                className="w-[70%] lg:w-[30%] h-full flex flex-col justify-start items-center gap-8 shadow-lg rounded-lg bg-grey text-black">
              <div className="flex justify-center p-10">
                <svg className="h-20 w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Valide ton pari</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Valide ton pari et attends le
                  résultat.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 text-white flex flex-col py-10 gap-5 lg:gap-10 " id="a-propos">
          <h2 className="block text-4xl font-bold italic mx-auto sm:mx-10">Qui sommes-nous ?</h2>
          <p className="block  font-normal lg:text-2xl mx-5 sm:mx-14 md:mx-24 lg:mx-32">
            <strong>Parions-DC</strong> est une plateforme de paris en ligne qui vous permet de parier sur des
            événements tel que l'absence de pluie à Paris le 14 juillet 2024, la victoire de l'équipe de France à la
            coupe du monde 2026, ou encore la réélection de Donald Trump en 2024.
            <br/> <br/>
            Vous pouvez parier sur des événements sportifs, politiques, culturels, ou encore sur des événements du
            quotidien, tel que la météo, la circulation, ou encore l'eventualité de voir Jules arriver à l'heure.
            <br/> <br/>
            Nous ne sommes pas un site de paris en ligne, mais une plateforme de divertissement qui vous permet de
            parier sur des événements du quotidien.
          </p>
        </section>

        <section className="py-10 flex flex-col gap-5 lg:gap-10" id="equipe">
          <h2 className=" text-4xl font-bold italic mx-auto sm:mx-10 ">Notre équipe</h2>
          <p className="  font-normal mx-5 sm:mx-14 md:mx-24 lg:mx-32 lg:text-2xl ">Elle est composée des développeurs
            les plus chauds de ta région 💕😘</p>

          <div className="flex flex-col justify-center items-center gap-5 mb-20 mx-5 md:flex-row lg:gap-10">
            <div
                className="w-[70%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button">
                  <span className="sr-only">Open dropdown</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                       viewBox="0 0 16 3">
                    <path
                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
                  </svg>
                </button>
                <div id="dropdown"
                     className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                        Data</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img className="h-24 aspect-auto mb-3 rounded-full shadow-lg" src="/img/arnaud.jpg"
                     alt="image d'arnaud"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Arnaud BEAULIEU</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">CEO / Développeur Fullstack</span>
                <div className="flex mt-4 md:mt-6">
                  <a href="#"
                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</a>
                </div>
              </div>
            </div>

            <div
                className="w-[70%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button">
                  <span className="sr-only">Open dropdown</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                       viewBox="0 0 16 3">
                    <path
                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
                  </svg>
                </button>
                <div id="dropdown"
                     className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                        Data</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img className="h-24 aspect-auto mb-3 rounded-full shadow-lg" src="/img/loris.jpg"
                     alt="image de loris"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Loris PLANTÉ</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">CEO / Développeur Frontend</span>
                <div className="flex mt-4 md:mt-6">
                  <a href="#"
                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</a>
                </div>
              </div>
            </div>

            <div
                className="w-[70%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button">
                  <span className="sr-only">Open dropdown</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                       viewBox="0 0 16 3">
                    <path
                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
                  </svg>
                </button>
                <div id="dropdown"
                     className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                        Data</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img className="h-24 aspect-auto mb-3 rounded-full shadow-lg" src="/img/paul.webp" alt="image paul"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Paul DECALF</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">CEO / Employé polyvalent</span>
                <div className="flex mt-4 md:mt-6">
                  <a href="#"
                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white dark:bg-gray-900" id="contact">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nous
              contacter</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Vous avez
              une question ou une suggestion ? N&#39;hésitez pas à nous contacter.</p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre
                  adresse email</label>
                <input type="email" id="email"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                       placeholder="petiteluciole@outlook.fr" />
              </div>
              <div>
                <label htmlFor="subject"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                <input type="text" id="subject"
                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                       placeholder="Sujet de votre message" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                <textarea id="message"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Comment pouvons-nous vous aider ?" ></textarea>
              </div>
              <button type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-primary">Envoyer
              </button>
            </form>
          </div>

        </section>

        {showModal && <Modal/>}




      </div>
  );
}
