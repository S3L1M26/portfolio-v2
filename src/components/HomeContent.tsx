'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { homeConfig } from '@/config/home';
import { useLanguage }from '@/context/LanguageContext';
import { assetPath } from '@/lib/assets';

const LIGHT_BACKGROUND_SVG = assetPath('/assets/images/output.svg');
const DARK_BACKGROUND_SVG = assetPath('/assets/images/output-dark.svg');

// Move theme-related logic to this client component
function ThemeAwareImage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [imageSrc, setImageSrc] = useState(LIGHT_BACKGROUND_SVG);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      setImageSrc(savedTheme === 'dark' ? DARK_BACKGROUND_SVG : LIGHT_BACKGROUND_SVG);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      setImageSrc(DARK_BACKGROUND_SVG);
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
          setImageSrc(isDark ? DARK_BACKGROUND_SVG : LIGHT_BACKGROUND_SVG);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex h-[min(28rem,75vw)] w-full items-center justify-center overflow-hidden rounded-4xl isolate sm:h-[28rem] lg:h-175">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={imageSrc}
          alt="Tech background"
          className="h-[62%] w-auto max-w-[92%] max-h-full object-contain animate-[float_15s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300 origin-center will-change-transform sm:h-[55%]"
          style={{
            animation: 'float 15s ease-in-out infinite',
            display: 'block',
          }}
        />
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: scale(0.95); }
          50% { transform: scale(1); }
          100% { transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}

// Server component version of HomeContent
export default function HomeContent() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-1 items-center -translate-y-5 sm:-translate-y-8 lg:-translate-y-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-4 sm:gap-10 sm:px-6 md:flex-row lg:px-8">
        <div className="w-full min-w-0 text-left md:w-[45%]">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {homeConfig.greeting[language]}
          </h1>
          <p className="mt-3 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
            {homeConfig.description[language]}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {language === 'en' ? 'View About' : 'Sobre mí'}
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {homeConfig.buttons.viewProjects[language]}
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-transparent md:w-[45%]">
          <div className="flex items-center justify-center w-full">
            <ThemeAwareImage />
          </div>
        </div>
      </div>
    </div>
  );
} 