import { IPosibleLocals } from "../utils/types";

export const enlocal: IPosibleLocals = {
    locale: "en-US",
    role: "Web Developer",
    downloadCV: "Download Resume",
    about: "About me",
    resume: "Resume",
    month: "month",
    year: "year",
    months: "months",
    years: "years",
    contact: "Contact",
    projects: "Projects",
    aboutView: {
        title: "<span class='text-primary dark:text-lightText'> About</span> Me",
        description:
            `
                Apasionado de las nuevas tecnologías
                con experiencia construyendo
                aplicación web full-stack, diseñando
                arquitecturas cloud, microservicios,
                trabajo con contenedores y tecnologias
                serverless. Experiencia trabajando con
                metodologías SCRUM y KANBAN.
                Autonomía, trabajo en equipo y
                adaptación al cambio, en busca de
                nuevos retos, resolución de problemas,
                aprendizaje y mejora continua, especial
                interés enfocado a incremento de
                conocimientos y habilidades cloud.
        `
    },
    contactView: {
        title: "<span class='text-primary dark:text-lightText'> Contact</span> Me"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> My</span> Projects",
        projectCategories: {
            All: "All",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra chat francais",
                description: "hay bro"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra asdsdfsdf chat francais",
                description: "hayxd  bro"
            },
            {
                categories: ["npm"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "tbin-tree",
                description: "Aca va el tbin bro"
            },
            {
                categories: ["Frontend", "Vscode"],
                technologies: ["Vuejs", "mangote", "SCSS"],
                title: "La revolucion industrial omg b",
                description: "hay bro"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> My</span> Experience",
        places: [
            {
                place: {
                    name: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
                    logoUrl: "logo_uneatlantico.svg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Análisis y Desarrollo de componentes web y SPA en reactjs y vuejs.
                                </li>
                                <li>
                                    Análisis, Diseño y desarrollo de APIs REST con Node.js
                                </li>
                                <li>
                                    Diseño de arquitectura de proyectos web y microservicios cloud native.
                                </li>
                                <li>
                                    Automatización de tareas.
                                </li>
                                <li>
                                    Contenerización de aplicación y entornos de desarrollo con Docker y Docker Compose
                                </li>
                            </ul>`,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Web Developer",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Nuxt", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Maquetación de elementos y paginas Web a
                                    partir de prototipos, aplicación de estilos
                                    responsivos e interactividad.
                                </li>
                            </ul>
                        `,
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: "Web Builder",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
