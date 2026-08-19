export const projectsConfig = {
  title: "Featured Work & Projects",
  description: "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "MentorMatch",
      description: "A platform designed for computer science students where they can connect with graduates from different IT areas, recommended according to their interests, to receive mentorship and professional guidance through Zoom video calls or chat.",
      href: "https://s3l1m26.github.io/MentorMatch-Demo/",
      repo: "https://github.com/S3L1M26/MentorMatch-Demo",
      imageUrl: "/assets/images/projects/mentor_match.png"
    },
    {
      title: "Banubot, Educational Robot",
      description: "A project from Andrés Bello University developed in Software Engineering II that combines educational robotics with web technology to help children with special educational needs improve their reading comprehension.",
      href: "https://facultades.unab.cl/ingenieria/carrera/ingenieria-en-computacion-e-informatica/",
      repo: "https://github.com/UNAB-ISW2/lectobot",
      imageUrl: "/assets/images/projects/banubot.png"
    },
    {
      title: "Engine File Media",
      description: "A freelance project developed for a client, consisting of an editorial magazine e-commerce platform with a blog/journal expansion planned for future growth.",
      href: "#!",
      repo: "#!",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const; 