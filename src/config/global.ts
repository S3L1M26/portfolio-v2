export const globalConfig = {
  site: {
    name: "Arturo's Portfolio",
    author: "Luis Arturo",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: {
          en: "Home",
          es: "Inicio"
        },
        href: "/"
      },
      {
        title: {
          en: "Projects",
          es: "Proyectos"
        },
        href: "/projects"
      },
      // {
      //   title: {
      //     en: "Posts",
      //     es: "Publicaciones"
      //   },
      //   href: "/posts"
      // },
      {
        title: {
          en: "Skills",
          es: "Habilidades"
        },
        href: "/skills"
      },
      {
        title: {
          en: "About",
          es: "Sobre mí"
        },
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: {
      en: "© 2026 Luis Arturo. All rights reserved.",
      es: "© 2026 Luis Arturo. Todos los derechos reservados."
    },
    social: {
      linkedin: "https://www.linkedin.com/in/luis-l%C3%B3pez-8ba07925a/",
      github: "https://www.github.com/S3L1M26",
      email: "l.narvaezluis26@gmail.com"
    }
  }
} as const; 