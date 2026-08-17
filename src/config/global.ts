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
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Luis Arturo. All rights reserved ",
    social: {
      linkedin: "https://www.linkedin.com/in/luis-l%C3%B3pez-8ba07925a/",
      github: "https://www.github.com/S3L1M26",
      email: "l.narvaezluis26@gmail.com"
    }
  }
} as const; 