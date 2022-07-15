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
        description: "description",
        aboutAnswers: {
            degree: "degree",
            residence: "residence",
            nationality: "nationality",
            movility: "movility",
            coffee: "coffee"
        },
        university: "university",
        age: "age",
        degree: "degree",
        nationality: "nationality",
        residence: "residence",
        movility: "movility",
        coffee: "coffee",
        certificationSubTitle: "certificationSubTitle",
        educationSubTitle: "educationSubTitle",
        languagesSubTitle: "languagesSubTitle"
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
