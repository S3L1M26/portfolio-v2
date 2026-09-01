'use client';

import { skillsContent } from '@/config/skills';
import { useLanguage } from "@/context/LanguageContext";
import TechIcon from './TechIcon';

export default function SkillsContent() {
    const { language } = useLanguage();

    const categories = [
      skillsContent.languages,
      skillsContent.frontend,
      skillsContent.backend,
      skillsContent.databases,
      skillsContent.cloud,
      skillsContent.tools,
    ];

    return (
        <section className="relative z-20 mx-auto mt-32 mb-12 w-full max-w-5xl px-7 lg:px-0">
          {/* Header */}
          <div className="relative z-20 w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
              {skillsContent.title[language]}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {skillsContent.description[language]}
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-12 space-y-10">
            {categories.map((category, index) => (
              <div key={index} className="space-y-4">
                {/* Category Title */}
                <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 pl-3 border-l-2 border-neutral-300 dark:border-neutral-700">
                  {category.label[language]}
                </h3>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-800/80 rounded-xl border border-neutral-200 dark:border-neutral-700/60 hover:border-neutral-300 dark:hover:border-neutral-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {/* SVG container */}
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-700/50 text-neutral-800 dark:text-neutral-200 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <TechIcon 
                          iconData={category.svg[techIndex]} 
                          name={tech} 
                        />
                      </div>

                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Courses & Certifications Section */}
          <div className="mt-20">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 pl-3 border-l-2 border-neutral-300 dark:border-neutral-700 mb-6">
              {skillsContent.courses.label[language]}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsContent.courses.items.map((course, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-between p-5 duration-300 ease-out group rounded-2xl"
                >
                  {/* Capa Frontal Superior (Hover) */}
                  <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950 pointer-events-none"></span>

                  {/* Capa Trasera / Base Estática */}
                  <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>

                  {/* Contenido Interactivo */}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-30 flex flex-col justify-between h-full duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                          {course.platform}
                        </span>
                        
                        <svg
                          className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                        {course.title}
                      </h4>

                      {/* Etiqueta de tecnología minimalista */}
                      {course.techLabel && (
                        <div className="mt-2 flex items-center gap-1.5">
                          <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium tracking-wide rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50">
                            {course.techLabel}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                      <span>{language === 'en' ? 'Credential' : 'Certificado'}</span>
                      <span className="font-medium group-hover:underline">
                        {language === 'en' ? 'View certificate' : 'Ver certificado'} &rarr;
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}