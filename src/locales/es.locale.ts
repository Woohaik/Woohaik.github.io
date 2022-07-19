import { IPosibleLocals } from "../utils/types";

export const eslocal: IPosibleLocals = {
    locale: "es-ES",
    role: "Desarrollador Web",
    downloadCV: "Descargar Curriculum",
    about: "Sobre mi",
    resume: "Curriculum",
    techs: "Tecnologias",
    month: "mes",
    year: "año",
    months: "meses",
    years: "años",
    projects: "Proyectos",
    aboutView: {
        fullDegree: "Grado en Ingeniería Informática",
        conect: "Conecta Conmigo",
        contact: "Contacto",
        title: "<span class='text-primary dark:text-lightText'> Sobre</span> Mi",
        description:
            `
            <p>
                Apasionado de las nuevas tecnologías
                con experiencia construyendo
                aplicación web full-stack, diseñando
                arquitecturas cloud, microservicios,
                trabajo con contenedores y tecnologias
                serverless. Experiencia trabajando con
                metodologías SCRUM y KANBAN.
            </p>
            <br/>
            <p>
                Autonomía, trabajo en equipo y
                adaptación al cambio, en busca de
                nuevos retos, resolución de problemas,
                aprendizaje y mejora continua, especial
                interés enfocado a incremento de
                conocimientos y habilidades cloud.
            </p>
        `,
        aboutAnswers: {
            degree: "Ing. Informática",
            residence: "Santander, España",
            nationality: "Salvadoreño",
            movility: "Disponible",
            coffee: "Si"
        },
        university: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
        age: "Edad",
        degree: "Titulación",
        nationality: "Nacionalidad",
        residence: "Residencia",
        movility: "Movilidad",
        coffee: "Café",
        certificationSubTitle: "Certificaciones",
        phone: "Móvil",
        educationSubTitle: "Educación",
        languagesSubTitle: "Idiomas"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mis</span> Proyectos",
        deploy: "Despliegue",
        repository: "Repositorio",
        projectCategories: {
            All: "Todas",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [
            {
                categories: ["Vscode"],
                technologies: ["Typescript", "CSS"],
                title: "vscode-rickroll",
                img: "vscode-rickroll.gif",
                description: `
                <img src="https://vsmarketplacebadge.apphb.com/installs/woohaik.vscode-rickroll.svg?style=flat-square" /> 
                `,
                deployment: "https://marketplace.visualstudio.com/items?itemName=Woohaik.vscode-rickroll",
                repository: "https://github.com/Woohaik/vscode-rickroll"
            },

            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "S3", "Cloudfront"],
                title: "Sort Algorithme Visualizer",
                img: "sort-algo-visualizer.webp",
                description: "hay bro",
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Clon web residencia Uneatlantico",
                img: "residencia-clone.webp",
                description: "hay bro",
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Tabla de Composición Nutricional",
                img: "tabla-nutricional.webp",
                description: "hay bro",
                deployment: "https://composicionnutricional.com"
            },
            {
                categories: ["npm"],
                technologies: ["Typescript", "npm"],
                title: "tbin-tree",
                img: "npm-logo.webp",
                description: `
                    <img src="https://badgen.net/npm/dt/tbin-tree"/>
                `,
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Página web Colegio Bill Gates",
                img: "bill-gates-school.webp",
                description: "hay bro",
                deployment: "https://djeo5ux2imymg.cloudfront.net"
            },
            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "SCSS", "Tailwindcss"],
                title: "Portafolio",
                img: "portafolio.webp",
                description: "hay bro",
                deployment: "https://cantinalamexicana.es/nosotros/"
            },

            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Javascript", "CSS", "HTML"],
                title: "Juego de Memoria de Cartas",
                img: "card-memory-game.webp",
                description: "hay bro",
                deployment: "https://d1ozgsa565oy1f.cloudfront.net",
                repository: "https://github.com/Woohaik/card-memory-game"
            },

            {
                categories: ["Frontend", "npm"],
                technologies: ["Reactjs", "Typescript", "GitHubActions", "npm"],
                title: "react-date-range-divider",
                img: "npm-logo.webp",
                description: `
                    <img src="https://badgen.net/npm/dt/react-date-range-divider" />
                `,
                deployment: "https://www.npmjs.com/package/react-date-range-divider"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "Heroku", "SCSS"],
                title: "Supra Kat",
                img: "supra-kat.webp",
                description: "hay bro",
                deployment: "https://supra-kat.herokuapp.com",
                repository: "https://github.com/Woohaik/supra-kat"
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
                                    Análisis, Diseño y desarrollo de APIs REST con Node.js.
                                </li>
                                <li>
                                    Diseño de arquitectura de proyectos web y microservicios cloud native.
                                </li>
                                <li>
                                    Automatización de tareas.
                                </li>
                                <li>
                                    Contenerización de aplicación y entornos de desarrollo con Docker y Docker Compose.
                                </li>
                            </ul>
                        `,
                        period: ["December 1, 2019", "now"], // from december to nowadays
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
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: " Maquetador Web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
