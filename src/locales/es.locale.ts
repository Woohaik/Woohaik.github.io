import { IPosibleLocals } from "../utils/types";

export const eslocal: IPosibleLocals = {
    role: "Desarrollador Web",
    downloadCV: "Descargar Curriculum",
    about: "Sobre mi",
    resume: "Curriculum",
    contact: "Contacto",
    projects: "Proyectos",
    aboutView: {
        title: "<span class='text-primary dark:text-lightText'> Sobre</span> Mi",
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
        title: "<span class='text-primary dark:text-lightText'> Contacta</span> Conmigo"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mis</span> Proyectos",
        projectCategories: {
            All: "Todas",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra chat francais OOOOOMG",
                description: "hay bro"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra asdsdfsdf chat francais OOOOOMG",
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
        title: "<span class='text-primary dark:text-lightText'> Mi</span> Experiencia",
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
                        period: [new Date("December 1, 2019"), new Date()], // from december to nowadays
                        role: "Desarrollador Web",
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
                        period: [new Date("September 1, 2018"), new Date("November 30, 2019")], // from december to nowadays
                        role: " Maquetador Web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
