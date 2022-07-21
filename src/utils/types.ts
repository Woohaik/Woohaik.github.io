import { LANGUAGES, POSIBLE_LOCALS, PROJECTS_CATEGORIES, SCREEN_SIZES } from "./constants";

export type ILocals = keyof typeof LANGUAGES;

export type PROJECTS_CATEGORIES_TYPES = typeof PROJECTS_CATEGORIES[number];

export type IPosibleLocals = typeof POSIBLE_LOCALS;

export interface IProject {
    categories: PROJECTS_CATEGORIES_TYPES[]
    technologies: string[],
    title: string,
    repository?: string,
    img?: string,
    deployment: string,
    description: string
}

export interface IWorkPlace {
    logoUrl: string,
    name: string
}

export interface IExperiencePeriod {
    role: string,
    period: [string, (string)],
    technologies: string[],
    description: string,
}

export interface IExperience {
    place: IWorkPlace,
    roles: IExperiencePeriod[]
}

export type ScreenSizeType = keyof typeof SCREEN_SIZES;

export type ResponsiveOptions = { [key in keyof typeof SCREEN_SIZES]: number | string }; // eslint-disable-line