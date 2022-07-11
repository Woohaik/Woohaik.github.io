import { IPosibleLocals } from "../utils/types";

export const frlocal: IPosibleLocals = {
    locale: "fr-FR",
    role: "Développeur Web",
    downloadCV: "Télécharger CV",
    about: "À propos de moi",
    resume: "Résumé",
    month: "mois",
    year: "année",
    months: "mois",
    years: "années",
    contact: "Contact",
    projects: "Projets",
    aboutView: {
        title: "<span class='text-primary dark:text-lightText'> À propos de</span> Moi",
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
        title: "<span class='text-primary dark:text-lightText'> Contact avec</span> Moi"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mes</span> Projets",
        projectCategories: {
            All: "Toutes",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra chat francais ",
                description: "hay bro"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra asdsdfsdf chat francais ",
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
                title: "La revolucion industrial fue xd",
                description: "hay bro"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> Mon</span> Expérience",
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
                                </ul>
                            `,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Développeur Web",
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
                        role: "Créateur de site web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
