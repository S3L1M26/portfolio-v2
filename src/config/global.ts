export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
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
      linkedin: "#",
      github: "https://www.github.com/S3L1M26",
      email: "l.narvaezluis26@gmail.com"
    }
  }
} as const; 