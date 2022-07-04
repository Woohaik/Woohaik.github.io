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

export const posibleLocals = {
    role: "role",
    downloadCV: "downloadCV",
    about: "about",
    resume: "resume",
    contact: "contact",
    projects: "projects",
    aboutView: {
        title: "title"
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
        title: "title"
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
        title: "<span class='text-primary dark:text-lightText'> About</span> Me"
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
        title: "<span class='text-primary dark:text-lightText'> My</span> Experience"
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
        title: "<span class='text-primary dark:text-lightText'> Sobre</span> Mi"
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
        title: "<span class='text-primary dark:text-lightText'> Mi</span> Experiencia"
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
        title: "<span class='text-primary dark:text-lightText'> À propos de</span> Moi"
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
        title: "<span class='text-primary dark:text-lightText'> Mon</span> Expérience"
    }
};

export {
    enlocal,
    eslocal,
    frlocal
};
