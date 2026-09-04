'use client';

import Link from "next/link";
import Image from "next/image";
import { projectsConfig } from '@/config/projects';
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsContent() {
  const { language } = useLanguage();

  return (
    <section className="relative z-20 mx-auto mt-32 mb-12 w-full max-w-5xl px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {projectsConfig.title[language]}
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          {projectsConfig.description[language]}
        </p>
      </div>

      <div className="z-50 grid w-full grid-cols-1 my-8 gap-6 md:grid-cols-2">
        {projectsConfig.items.map((project, index) => (
          <article
            key={index}
            className="group relative flex min-h-0 flex-col items-stretch rounded-2xl p-5 duration-300 ease-out sm:min-h-120 sm:p-7"
          >
            <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
            <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <span className="relative z-30 flex min-h-0 flex-1 w-full flex-col gap-5 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 sm:min-h-106 sm:gap-6">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex min-h-0 flex-1 w-full flex-col gap-5 sm:min-h-106 sm:gap-6">
                <span className="relative -mx-5 -mt-5 block aspect-video w-[calc(100%+2.5rem)] shrink-0 overflow-hidden rounded-t-2xl sm:-mx-7 sm:-mt-7 sm:h-68 sm:aspect-auto sm:w-[calc(100%+3.5rem)]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title[language]}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                    className="object-cover"
                  />
                </span>
                <span className="block min-w-0 w-full px-1 py-2">
                  <span className="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    <span>{project.title[language]}</span>
                    <svg
                      className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                      viewBox="0 0 13 15"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" strokeWidth="2.4">
                          <g>
                            <polyline className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                            <line className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="block whitespace-normal wrap-break-word text-sm text-neutral-600 dark:text-neutral-400">
                    {project.description[language]}
                  </span>
                  <span className="flex gap-2 mt-2">
                    {project.stackSvg.map((url: string) => (
                      <img
                        key={url}
                        src={url}
                        alt="tech icon"
                        className="w-6 h-6 brightness-0 dark:brightness-100" // Increased size from w-5 h-5 to w-6 h-6
                      />
                    ))}
                  </span>
                </span>
              </a>
              {project.repo && (project.repo as string) !== '#!' && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-1 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>{language === 'en' ? 'View repository' : 'Ver repositorio'}</span>
                </a>
              )}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
} 