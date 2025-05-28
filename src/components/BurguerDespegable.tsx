import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonRedirect from '../components/Button'; 

export const BurguerDespegable = () => { 
  const { t } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownNode = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownNode.current && !dropdownNode.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownNode}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-full w-16 h-16 flex items-center justify-center bg-red-800 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-lg transition-all duration-150 ease-in-out cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className="origin-bottom absolute w-64 rounded-md shadow-xl bg-gray-50 p-2 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 mb-2"
          style={{ bottom: '100%', right: '0' }}
        >
          <ButtonRedirect
            text={t('menu.chooseSaga')}    
            route="/sagas"
            onNavigate={closeDropdown}
            className="bg-red-700 text-white px-4 py-3 my-1 rounded-md hover:bg-red-600 cursor-pointer w-full text-center text-base shadow"
          />
          <ButtonRedirect
            text={t('menu.map')}         
            route="/map"
            onNavigate={closeDropdown}
            className="bg-red-700 text-white px-4 py-3 my-1 rounded-md hover:bg-red-600 cursor-pointer w-full text-center text-base shadow"
          />
          <ButtonRedirect
            text={t('menu.optionB')}      
            route="/plans"
            onNavigate={closeDropdown}
            className="bg-red-700 text-white px-4 py-3 my-1 rounded-md hover:bg-red-600 cursor-pointer w-full text-center text-base shadow"
          />
          <ButtonRedirect
            text={t('menu.home')}         
            route="/"
            onNavigate={closeDropdown}
            className="bg-red-700 text-white px-4 py-3 my-1 rounded-md hover:bg-red-600 cursor-pointer w-full text-center text-base shadow"
          />
        </div>
      )}
    </div>
  );
};
