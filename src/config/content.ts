export const siteConfig = {
  name: "Someone's Portfolio",
  description: "A showcase of my work and thoughts",
  nav: {
    home: "Home",
    posts: "Posts",
    projects: "Projects",
    about: "About"
  },
  home: {
    greeting: "Hello, I'm Kai.",
    description: "A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.",
    buttons: {
      viewProjects: "View Projects",
      readPosts: "Read Posts"
    }
  },
  projects: {
    title: "My Projects",
    description: "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!",
    backButton: "Back to Home",
    noProjects: "No projects found.",
    items: [
      {
        title: "TempMail.Best",
        description: "Best Temporary Email.",
        href: "#",
        imageUrl: "/assets/images/projects/tempmail.best.png"
      },
      {
        title: "DNS.Surf",
        description: "Querying DNS Resolution Results in Different Regions Worldwide.",
        href: "#!",
        imageUrl: "/assets/images/projects/dns.surf.png"
      },
      {
        title: "HTML.ZONE",
        description: "Web Toolbox.",
        href: "#!",
        imageUrl: "/assets/images/projects/html.zone.png"
      },
      {
        title: "Sink",
        description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
        href: "#!",
        imageUrl: "/assets/images/projects/sink.cool.png"
      },
      {
        title: "BroadcastChannel",
        description: "Turn your Telegram Channel into a MicroBlog.",
        href: "#!",
        imageUrl: "/assets/images/projects/broadcast-channel.png"
      },
      {
        title: "L(O*62).ONG",
        description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
        href: "#!",
        imageUrl: "/assets/images/projects/long.png"
      }
    ]
  },
  posts: {
    title: "My Writing",
    description: "My thoughts and ideas about technology and development.",
    backButton: "Back to Home",
    noPosts: "No posts found matching your search.",
    searchPlaceholder: "Filter posts by title...",
    pagination: {
      previous: "Previous",
      next: "Next"
    },
    items: [
      {
        title: "Run MCP Server in a Docker sandbox",
        description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
        date: "Apr 25, 2025",
        href: "/post/guide-to-running-mcp-server-in-a-sandbox",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 8
      },
      {
        title: "Use Cloudflare Workers to concat audio files",
        description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
        date: "April 19, 2025",
        href: "/post/cloudflare-audio-concat",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 12
      },
      {
        title: "RSS.Beauty - Make Your RSS Beautiful!",
        description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
        date: "Dec 31, 2024",
        href: "/post/rss-beauty",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 6
      },
      {
        title: "Building a Modern Web App with Next.js",
        description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
        date: "Dec 15, 2024",
        href: "/post/nextjs-web-app",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 15
      },
      {
        title: "The Future of Web Development",
        description: "Exploring the latest trends and technologies shaping the future of web development.",
        date: "Dec 1, 2024",
        href: "/post/future-web-dev",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 10
      },
      {
        title: "Mastering TypeScript in 2024",
        description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
        date: "Nov 20, 2024",
        href: "/post/typescript-guide",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 20
      },
      {
        title: "The Art of Clean Code",
        description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
        date: "Nov 10, 2024",
        href: "/post/clean-code",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 12
      },
      {
        title: "Building Scalable APIs with Node.js",
        description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
        date: "Oct 28, 2024",
        href: "/post/nodejs-apis",
        imageUrl: "/assets/images/posts/post2.jpg",
        readingTime: 18
      },
      {
        title: "Getting Started with GraphQL",
        description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
        date: "Oct 15, 2024",
        href: "/post/graphql-intro",
        imageUrl: "/assets/images/posts/post3.jpg",
        readingTime: 14
      },
      {
        title: "The Power of CSS Grid",
        description: "Master CSS Grid layout and create complex, responsive designs with ease.",
        date: "Oct 1, 2024",
        href: "/post/css-grid",
        imageUrl: "/assets/images/posts/post1.jpg",
        readingTime: 9
      }
    ]
  },
  about: {
    title: "About",
    description: "Learn more about me and my journey.",
    backButton: "Back to Home"
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  }
} as const 