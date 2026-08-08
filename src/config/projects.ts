export const projectsConfig = {
  title: "Our Projects",
  description: "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "Project One",
      description: "A brief description of your first project. Explain what it does and what technologies you used.",
      href: "#!",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "Project Two",
      description: "Describe your second project here. Highlight the key features and your role in development.",
      href: "#!",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "Project Three",
      description: "Share details about your third project. What problems did it solve? What was the outcome?",
      href: "#!",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const; 