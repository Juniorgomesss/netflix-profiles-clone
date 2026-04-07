"use client"; 

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
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
    <header className="fixed top-0 z-50 w-full flex items-center justify-between px-4 py-5 md:px-12 transition-all duration-300 bg-linear-to-b from-black/80 to-transparent text-white">
      
      <div className="flex items-center gap-10">
        <h1 className="text-red-600 text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer">
          NETFLIX
        </h1>
        <nav className="hidden md:flex gap-5 text-sm font-light">
          <Link href="/home" className="font-medium cursor-default">Início</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Séries</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Filmes</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Bombando</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Minha Lista</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4 md:gap-6 text-sm font-light">
        <svg className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="hidden md:block cursor-pointer hover:text-gray-300 transition">Infantil</span>
        <svg className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        
        <button
          onClick={toggleTheme}
          className="text-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform bg-transparent border-none outline-none"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        
        <div className="w-8 h-8 rounded bg-gray-500 cursor-pointer overflow-hidden border border-transparent hover:border-white transition shrink-0">
            <img src="/assets/users/perfil-1.jpg" alt="Perfil ativo" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};