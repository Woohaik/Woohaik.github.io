export const LANGUAGES = {
    en: "en",
    es: "es",
    fr: "fr"
};

export type ILocals = keyof typeof LANGUAGES;

export const PROJECTS_CATEGORIES = ["All", "Frontend", "Vscode", "npm"] as const;
export type PROJECTS_CATEGORIES_TYPES = typeof PROJECTS_CATEGORIES[number];

export interface IProject {
    categories: PROJECTS_CATEGORIES_TYPES[]
    technologies: string[],
    title: string,
    description: string
}

interface IWorkPlace {
    logoUrl: string,
    name: string
}

export interface IExperiencePeriod {
    role: string,
    period: [Date, Date],
    technologies: string[],
    description: string,
}

export interface IExperience {
    place: IWorkPlace,
    roles: IExperiencePeriod[]
}

export const posibleLocals = {
    role: "role",
    downloadCV: "downloadCV",
    about: "about",
    resume: "resume",
    contact: "contact",
    projects: "projects",
    aboutView: {
        title: "title",
        description: "description"
    },
    projectsView: {
        title: "title",
        projectCategories: {
            All: "All",
            Frontend: "Frontend",
            Vscode: "Vscode",
            npm: "npm"
        },
        projects: [] as IProject[]
    },
    contactView: {
        title: "title"
    },
    resumeView: {
        title: "title",
        places: [] as IExperience[]
    }
};

const enlocal: typeof posibleLocals = {
    role: "Web Developer",
    downloadCV: "Download Resume",
    about: "About me",
    resume: "Resume",
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
        places: [{
            place: {
                name: "La tronca de la mangonera",
                logoUrl: "https://via.placeholder.com/20x200.png"
            },
            roles: [{
                description: "Aca estuvo como perro trabajando",
                period: [new Date(), new Date()],
                role: "Maquetador Web",
                technologies: ["El taipescrí", "SCSS", "AWS", "Tulas"]
            }]
        }]
    }
};

const eslocal: typeof posibleLocals = {
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
        places: [{
            place: {
                name: "La tronca de la mangonera",
                logoUrl: "https://via.placeholder.com/20x200.png"
            },
            roles: [{
                description: "Aca estuvo como perro trabajando",
                period: [new Date(), new Date()],
                role: "Maquetador Web",
                technologies: ["El taipescrí", "SCSS", "AWS", "Tulas"]
            }]
        }]
    }
};

const frlocal: typeof posibleLocals = {
    role: "Développeur Web",
    downloadCV: "Télécharger CV",
    about: "À propos de moi",
    resume: "Résumé",
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
        places: [{
            place: {
                name: "La tronca de la mangonera",
                logoUrl: "https://via.placeholder.com/20x200.png"
            },
            roles: [{
                description: "Aca estuvo como perro trabajando",
                period: [new Date(), new Date()],
                role: "Maquetador Web",
                technologies: ["El taipescrí", "SCSS", "AWS", "Tulas"]
            }]
        }]
    }
};

export {
    enlocal,
    eslocal,
    frlocal
};
