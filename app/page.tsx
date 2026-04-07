"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link"; 

const profiles = [
  { name: 'Gustavo', img: '/assets/users/perfil-1.jpg', alt: 'Avatar gótico' },
  { name: 'Thiago', img: '/assets/users/perfil-2.jpg', alt: 'Boné azul' },
  { name: 'Thamiris', img: '/assets/users/perfil-3.jpg', alt: 'Mulher sorrindo' },
  { name: 'Vini', img: '/assets/users/perfil-4.jpg', alt: 'Sapo simpático' },
];

export default function ProfileSelection() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') !== 'light';
    }
    return true; // Padrão Dark
  });

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-[#f5f5f5] text-[#222] dark:bg-[#141414] dark:text-white py-12">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-3xl cursor-pointer hover:scale-110 transition-transform bg-transparent border-none"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-wide text-center px-4">
        Quem está assistindo?
      </h1>

      <section className="w-full max-w-3xl px-4">
        <nav>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-6 md:gap-8 list-none p-0 m-0">
            {profiles.map((profile, index) => (
              <li key={index}>
                <Link href="/home" className="group flex flex-col items-center decoration-none outline-none">
                  <figure className="flex flex-col items-center m-0">
                    <img
                      src={profile.img}
                      alt={profile.alt}
                      className="w-28 h-28 md:w-32px md:h-32px rounded-lg object-cover mb-2 border-2 border-transparent group-hover:border-[#222] dark:group-hover:border-white transition-all duration-200"
                    />
                    <figcaption className=" text-lg md:text-xl font-medium tracking-wide text-gray-500 group-hover:text-[#222] dark:group-hover:text-white transition-colors duration-200 ">
                      {profile.name}
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
};