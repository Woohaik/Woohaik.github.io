import { LANGUAGES, POSIBLE_LOCALS, PROJECTS_CATEGORIES } from "./constants";

export type ILocals = keyof typeof LANGUAGES;

export type PROJECTS_CATEGORIES_TYPES = typeof PROJECTS_CATEGORIES[number];

export type IPosibleLocals = typeof POSIBLE_LOCALS;

export interface IProject {
    categories: PROJECTS_CATEGORIES_TYPES[]
    technologies: string[],
    title: string,
    description: string
}

export interface IWorkPlace {
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
