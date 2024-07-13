'use client';

import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">My Apps</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex md:space-x-4">
          <li>
            <Link href="/" className="text-white">Vod movies list</Link>
          </li>
          <li>
            <Link href="/studentsList" className="text-white">Students list</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="mt-4 md:hidden">
          <li>
            <Link href="/" className="block text-white py-2">Vod movies list</Link>
          </li>
          <li>
            <Link href="/studentsList" className="block text-white py-2">Students list</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
