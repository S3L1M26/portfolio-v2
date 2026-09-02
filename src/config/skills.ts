import { assetPath } from '@/lib/assets';

const iconBaseUrl = assetPath('/assets/images/projects/icon/');

export interface svgData {
    url: string;
    color?: string;
    themeColors?: {
        light?: string;
        dark?: string;
    }
}

export const skillsContent = {
    title: {
        en: "Tech Stack & Skills",
        es: "Stack Técnico y Habilidades"
    },
    description: {
        en: "Proficient in a wide range of technologies and programming languages, I have experience in both front-end and back-end development. My skill set includes modern frameworks, libraries, and tools that enable me to build efficient and scalable applications.",
        es: "Competente en una amplia gama de tecnologías y lenguajes de programación, tengo experiencia tanto en desarrollo front-end como back-end. Mi conjunto de habilidades incluye frameworks modernos, bibliotecas y herramientas que me permiten construir aplicaciones eficientes y escalables."
    },
    languages: {
        label: {
            en: "Programming Languages",
            es: "Lenguajes de Programación"
        },
        items: ["JavaScript", "TypeScript", "Python", "PHP"],
        svg: [
            {
                url: `${iconBaseUrl}javascript.svg`,
            },
            {
                url: `${iconBaseUrl}typescript.svg`,
                color: "#007ACC"
            },
            {
                url: `${iconBaseUrl}python.svg`,
            },
            {
                url: `${iconBaseUrl}php.svg`,
            }
        ] as svgData[]
    },
    frontend: {
        label: {
            en: "Frontend Development",
            es: "Desarrollo Frontend"
        },
        items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
        svg: [
            {
                url: `${iconBaseUrl}react.svg`,
                color: "#00D8FF"
            },
            {
                url: `${iconBaseUrl}nextjs.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}tailwind.svg`,
                color: "#44a8b3"
            },
            {
                url: `${iconBaseUrl}html.svg`,
            },
            {
                url: `${iconBaseUrl}css.svg`,
            }
        ] as svgData[]
    },
    backend: {
        label: {
            en: "Backend Development",
            es: "Desarrollo Backend"
        },
        items: ["Node.js", "Express", "Laravel"],
        svg: [
            {
                url: `${iconBaseUrl}nodejs.svg`,
                color: "#8CC84B"
            },
            {
                url: `${iconBaseUrl}express.svg`,
                themeColors: {
                    light: "#000000",
                    dark: "#FFFFFF"
                }
            },
            {
                url: `${iconBaseUrl}laravel.svg`,
                color: "#FF2D20"
            }
        ] as svgData[]
    },
    databases: {
        label: {
            en: "Databases",
            es: "Bases de Datos"
        },
        items: ["MySQL", "PostgreSQL", "MongoDB"],
        svg: [
            {
                url: `${iconBaseUrl}mysql.svg`,
                color: "#00758f"
            },
            {
                url: `${iconBaseUrl}postgresql.svg`,
            },
            {
                url: `${iconBaseUrl}mongodb-2.svg`,
            }
        ] as svgData[]
    },
    cloud: {
        label: {
            en: "Cloud & DevOps",
            es: "Nube y DevOps"
        },
        items: ["Docker", "Azure", "Digital Ocean", "Railway", "Vercel", "CI/CD"],
        svg: [
            {
                url: `${iconBaseUrl}docker.svg`,
                color: "#0080FF"
            },
            {
                url: `${iconBaseUrl}azure.svg`,
            },
            {
                url: `${iconBaseUrl}digital-ocean.svg`,
                color: "#2396ED"
            },
            {
                url: `${iconBaseUrl}railway.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}vercel.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}cicd.svg`,
            }
        ] as svgData[]
    },
    tools: {
        label: {
            en: "Tools",
            es: "Herramientas"
        },
        items: ["Git", "GitHub", "Postman", "Jira", "Bitbucket", "GitLab", "Slack", "Notion", "ChatGPT", "GitHub Copilot"],
        svg: [
            {
                url: `${iconBaseUrl}git.svg`,
            },
            {
                url: `${iconBaseUrl}github.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}postman.svg`,
            },
            {
                url: `${iconBaseUrl}jira.svg`,
            },
            {
                url: `${iconBaseUrl}bitbucket.svg`,
            },
            {
                url: `${iconBaseUrl}gitlab.svg`,
            },
            {
                url: `${iconBaseUrl}slack.svg`,
            },
            {
                url: `${iconBaseUrl}notion.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}chat-gpt.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            },
            {
                url: `${iconBaseUrl}github-copilot.svg`,
                themeColors: {
                    dark: "#FFFFFF",
                }
            }
        ] as svgData[]
    },
    courses: {
        label: {
            en: "Courses & Certifications",
            es: "Cursos y Certificaciones"
        },
        items: [
            {
                title: "The Origins I: HTML",
                platform: "Codédex",
                link: "https://www.credential.net/5b284c6e-34af-4262-abd8-cacb71c59957",
                techLabel: "HTML",
            },
            {
                title: "The Origins II: CSS",
                platform: "Codédex",
                link: "https://www.codedex.io/certificates/51aa4c68-7323-4558-ab83-698c09c9a20b",
                techLabel: "CSS",
            },
            {
                title: "The Origins III: JavaScript",
                platform: "Codédex",
                link: "https://www.credential.net/0916c914-3cd5-4070-9eef-5f3348da8c03#gs.gbl995",
                techLabel: "JavaScript",
            },
            {
                title: "The Legend Of Python",
                platform: "Codédex",
                link: "https://www.credential.net/1cf17ca3-aeaa-4382-9009-c967e885262b",
                techLabel: "Python",
            },
            {
                title: "Framework Valley: React",
                platform: "Codédex",
                link: "https://www.credential.net/1ad1bf6b-71e2-497a-92fe-01c4c913a23b",
                techLabel: "React",
            },
            {
                title: "Learn Node.js",
                platform: "Codecademy",
                link: "https://www.codecademy.com/profiles/S3L1M26/certificates/240305d50b925c17868f1ac7a21a3261",
                techLabel: "Node.js",
            },
            {
                title: "Learn Express.js",
                platform: "Codecademy",
                link: "https://www.codecademy.com/profiles/S3L1M26/certificates/85396dd6e2e850ab34e904243aa464c6",
                techLabel: "Express.js",
            },
            {
                title: "Learn TypeScript",
                platform: "Codecademy",
                link: "https://www.codecademy.com/profiles/S3L1M26/certificates/56fb1e71303e37b643bb1905f31c8a09",
                techLabel: "TypeScript",
            }
        ]
    }
}