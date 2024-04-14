import React from 'react';
import 'animate.css';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/16/solid';

import { useLanguage } from './components/lenguageSwitcher';
import { LanguageSwitcher } from './components/lenguageSwitcher';

// Definición de la paleta de colores
const colorPalette = {
  background: 'bg-cream', // Fondo blanco crema
  textPrimary: 'text-red-700', // Color de texto principal (morado chillón)
  textSecondary: 'text-gray-500', // Color de texto secundario (azul suave)
  hover: 'hover:bg-gray-200', // Color de fondo al pasar el mouse (gris más claro)
};

const navigation = [
  { name: 'Home', href: '#home', current: true}, // Marca la página actual como "current"
  { name: 'About', href: '#about' },
  { name: 'Proyects', href: '#proyect'}, 
  { name: 'Contact', href: '#contact' },
];

const { language, changeLanguage } = useLanguage();

const Navbar = () => {
  return (
    <Disclosure as="nav" className={`${colorPalette.background} shadow-lg`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <h2 className={`text-2xl lg:text-4xl font-bold animate__animated animate__zoomIn ${colorPalette.textPrimary}`}>Portfolio</h2>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm lg:text-xl font-medium ${item.current ? colorPalette.textPrimary : colorPalette.textSecondary} ${colorPalette.hover}`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex sm:hidden">
                <Disclosure.Button className={`p-2 rounded-md ${colorPalette.textPrimary} ${colorPalette.hover}`}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <a className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute bg-gray-200 w-full">
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium border-l-red-400 border-l-2 ${item.current ? colorPalette.textPrimary : colorPalette.textSecondary} ${colorPalette.hover}`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
