'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <section className="relative z-20 mt-auto text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 pointer-events-auto">
      <div className="container mx-auto flex min-h-10 max-w-7xl flex-col items-center justify-center px-7 py-4 sm:min-h-12.5 sm:flex-row sm:py-3">
        <Link href="/" className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          {globalConfig.footer.copyright[language]} <br />
          {language === 'en' ? 'Distributed by' : 'Distribuido por'} <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-semibold">ThemeWagon</a>
        </p>
        <span className="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href={globalConfig.footer.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white pointer-events-auto">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.369 4.266 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127ZM7.119 20.452H3.556V9h3.563v11.452Z" />
            </svg>
          </a>
          <a href={globalConfig.footer.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white pointer-events-auto">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href={`mailto:${globalConfig.footer.social.email}`} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white pointer-events-auto">
            <span className="sr-only">Email</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </span>
      </div>
    </section>
  );
} 