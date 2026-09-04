import banubotImg from '../../public/assets/images/projects/banubot.webp';
import efmImg from '../../public/assets/images/projects/efm.webp';
import mentorMatchImg from '../../public/assets/images/projects/mentor_match.webp';
import { assetPath } from '@/lib/assets';

const iconBaseUrl = assetPath('/assets/images/projects/icon/');

export const projectsConfig = {
  title: {
    en: "Featured Work & Projects",
    es: "Proyectos Destacados"
  },
  description: {
    en: "Explore my projects across web development, educational technology, robotics, and e-commerce, including platforms that connect students with mentors, support reading comprehension, and help businesses grow online.",
    es: "Explora mis proyectos en desarrollo web, tecnología educativa, robótica y comercio electrónico, incluyendo plataformas que conectan a estudiantes con mentores, apoyan la comprensión lectora y ayudan a los negocios a crecer en línea."
  },
  backButton: {
    en: "Back to Home",
    es: "Volver a Inicio"
  },
  noProjects: {
    en: "No projects found.",
    es: "No se encontraron proyectos."
  },
  items: [
    {
      title: {
        en: "MentorMatch, Mentorship Platform",
        es: "MentorMatch, Plataforma de Mentoría"
      },
      description: {
        en: "A platform designed for computer science students where they can connect with graduates from different IT areas, recommended according to their interests, to receive mentorship and professional guidance through Zoom video calls or chat.",
        es: "Una plataforma diseñada para estudiantes de informática donde pueden conectarse con graduados de diferentes áreas de TI, recomendados según sus intereses, para recibir mentoría y orientación profesional a través de videollamadas o chat en Zoom."
      },
      href: "https://s3l1m26.github.io/MentorMatch-Demo/",
      repo: "https://github.com/S3L1M26/MentorMatch-Demo",
      imageUrl: mentorMatchImg,
      stackSvg: [`${iconBaseUrl}laravel.svg`, `${iconBaseUrl}react.svg`, `${iconBaseUrl}tailwind.svg`, `${iconBaseUrl}mysql.svg`, `${iconBaseUrl}docker.svg`, `${iconBaseUrl}digital-ocean.svg`, `${iconBaseUrl}zoom.svg`]
    },
    {
      title: {
        en: "Banubot, Educational Robot",
        es: "Banubot, Robot Educativo"
      },
      description: {
        en: "A project from Andrés Bello University developed in Software Engineering II that combines educational robotics with web technology to help children with special educational needs improve their reading comprehension.",
        es: "Un proyecto de la Universidad Andrés Bello desarrollado en Ingeniería de Software II que combina robótica educativa con tecnología web para ayudar a niños con necesidades educativas especiales a mejorar su comprensión lectora."
      },
      href: "https://facultades.unab.cl/ingenieria/carrera/ingenieria-en-computacion-e-informatica/",
      repo: "https://github.com/UNAB-ISW2/lectobot",
      imageUrl: banubotImg,
      stackSvg: [`${iconBaseUrl}arduino.svg`, `${iconBaseUrl}fastapi.svg`, `${iconBaseUrl}mongodb.svg`, `${iconBaseUrl}react.svg`, `${iconBaseUrl}nodejs.svg`, `${iconBaseUrl}docker.svg`, `${iconBaseUrl}bluetooth.svg`]
    },
    {
      title: {
        en: "Engine File Media",
        es: "Engine File Media"
      },
      description: {
        en: "A freelance project developed for a client, consisting of an editorial magazine e-commerce platform with a blog/journal expansion planned for future growth.",
        es: "Un proyecto freelance desarrollado para un cliente, que consiste en una plataforma de comercio electrónico para una revista editorial automotríz con una expansión de blog/revista planificada para el crecimiento futuro."
      },
      href: "https://github.com/Engine-File-Media/front-engine-file-media",
      repo: "https://github.com/Engine-File-Media/front-engine-file-media",
      imageUrl: efmImg,
      stackSvg: [`${iconBaseUrl}nodejs.svg`, `${iconBaseUrl}express.svg`, `${iconBaseUrl}typescript.svg`, `${iconBaseUrl}react.svg`, `${iconBaseUrl}tailwind.svg`, `${iconBaseUrl}mongodb.svg`, `${iconBaseUrl}paypal.svg`, `${iconBaseUrl}lulu.svg`]

    }
  ]
} as const; 