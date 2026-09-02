'use client';

import Image from "next/image";
import { aboutConfig } from "@/config/about";
import { useLanguage } from "@/context/LanguageContext";
import { assetPath } from "@/lib/assets";

export default function AboutContent() {
  const { language } = useLanguage();

  return (
    <section className="relative z-20 mx-auto mt-28 mb-12 w-full max-w-5xl px-4 sm:mt-32 sm:px-6 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <div className="flex min-w-0 flex-col gap-10 md:flex-row md:gap-10 lg:gap-12">
          <div className="flex min-w-0 w-full flex-col md:w-1/2">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
              {aboutConfig.title[language]}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {aboutConfig.description[language]}
            </p>
            <div className="mt-10 lg:mt-[1cm] flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                  {skill[language]}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 w-full flex-col items-center md:w-1/2 md:items-end md:pt-0">
            <div className="relative aspect-square w-full max-w-72 sm:max-w-80 md:max-w-76">
              <Image
                src={assetPath('/assets/images/about/coder.jpg')}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Connect Section */}
            <div className="mt-3 w-full max-w-72 sm:max-w-80 md:max-w-76">
              <h2 className="mb-1 text-2xl font-bold dark:text-neutral-200">{aboutConfig.connect.title[language]}</h2>
              <div className="py-1">
                <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                  {(() => {
                    const text = aboutConfig.connect.description[language];
                    const [beforeLinkedin, afterLinkedin] = text.split('LinkedIn');
                    const [beforeEmail, afterEmail] = (afterLinkedin ?? '').split('email');

                    return (
                      <span>
                        {beforeLinkedin}
                        <a href={aboutConfig.connect.links.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                          LinkedIn
                        </a>
                        {beforeEmail}
                        <a href={aboutConfig.connect.links.email.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                          email
                        </a>
                        {afterEmail}
                      </span>
                    );
                  })()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:gap-12">

        {/* Experience Section */}
        <div className="flex-1">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.experience.title[language]}
          </h2>
          <div className="py-8 sm:py-10">
            {aboutConfig.experience.items.map((item, index) => (
              <div key={index} className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex min-w-0 flex-col justify-start pl-8 sm:pl-12">
                  <div className="absolute top-0 left-0 z-40 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950 sm:h-14 sm:w-14">
                    <svg className="h-6 w-6 text-neutral-700 dark:text-neutral-300 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{item.period[language]}</p>
                  <h3 className="my-1 wrap-break text-lg font-bold dark:text-neutral-100">{item.role[language]}</h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">{item.company[language]}</p>
                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">{item.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="flex-1 md:pl-8">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.education.title[language]}
          </h2>
          <div className="py-8 sm:py-10">
            {aboutConfig.education.items.map((item, index) => (
              <div key={index} className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex min-w-0 flex-col justify-start pl-8 sm:pl-12">
                  <div className="absolute top-0 left-0 z-40 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950 sm:h-14 sm:w-14">
                    <img
                      src={assetPath('/assets/images/college-svgrepo-com.svg')}
                      alt="Education"
                      className="mx-auto my-auto h-5 w-5 object-contain dark:brightness-0 dark:invert sm:h-7 sm:w-7"
                    />
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{item.period[language]}</p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{item.grade[language]}</h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">{item.school[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 