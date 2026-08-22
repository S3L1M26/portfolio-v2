'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button 
            onClick={toggleLanguage}
            className="relative z-30 flex items-center gap-1.5 ml-3 sm:ml-4 px-2 py-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 ease-out rounded-md focus:outline-none"
            aria-label="Toggle Language"
        >
            <svg
                className="w-4 h-4 fill-current opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2.1l1.1-3h4.6l1.1 3H23L18.5 10zm-2.62 7l1.62-4.41L19.12 17h-3.24z" />
            </svg>

            <span>{language === 'en' ? 'English' : 'Español'}</span>
        </button>
    );
}