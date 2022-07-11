import { IExperience, IProject } from "./types";

export const LANGUAGES = {
    en: "en",
    es: "es",
    fr: "fr"
};

export const PROJECTS_CATEGORIES = ["All", "Frontend", "Vscode", "npm"] as const;

export const POSIBLE_LOCALS = {
    locale: "locale",
    role: "role",
    downloadCV: "downloadCV",
    about: "about",
    year: "year",
    years: "years",
    month: "month",
    months: "months",
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
