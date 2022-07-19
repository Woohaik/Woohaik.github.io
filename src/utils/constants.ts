import { IExperience, IProject } from "./types";

export const LANGUAGES = {
    en: "en",
    es: "es",
    fr: "fr"
};

export const PROJECTS_CATEGORIES = ["All", "Frontend", "Vscode", "npm"] as const;

export const MY_EMAIL = "wilfredo.hernandez.ar@gmail.com";
export const MY_PHONE_NUMBER = "+34 656 374 207";

export const POSIBLE_LOCALS = {
    locale: "locale",
    role: "role",
    downloadCV: "downloadCV",
    about: "about",
    year: "year",
    techs: "techs",
    years: "years",
    month: "month",
    months: "months",
    resume: "resume",
    projects: "projects",
    aboutView: {
        fullDegree: "fullDegree",
        degree: "degree",
        title: "title",
        description: "description",
        conect: "conect",
        aboutAnswers: {
            degree: "degree",
            residence: "residence",
            nationality: "nationality",
            movility: "movility",
            coffee: "coffee"
        },
        university: "university",
        age: "age",
        nationality: "nationality",
        residence: "residence",
        movility: "movility",
        contact: "contact",
        phone: "phone",
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
    resumeView: {
        title: "title",
        places: [] as IExperience[]
    }
};

export const MY_CERTIFICATIONS = [
    {
        imageUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
        title: "AWS Solutions Architect Associate",
        link: "https://www.credly.com/badges/477fc37d-73d2-4384-9ede-f3770ef2e4ac/public_url"
    },
    {
        imageUrl: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
        title: "AWS SysOps Administrator Associate",
        link: "https://www.credly.com/badges/5bedfbed-8052-405c-94e8-a862cefaabe9?source=linked_in_profile"
    },
    {
        imageUrl: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",

        title: "AWS Developer Associate",
        link: "https://www.credly.com/badges/54aafad6-2a9f-41ee-8551-dda1128044d6?source=linked_in_profile"
    },
    {
        imageUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
        title: "AWS Cloud Practitioner",
        link: "https://www.credly.com/badges/894de035-d6c4-43c7-a531-23be48732b27/public_url"
    }
];

export const SCREEN_SIZES = {
    mobile: 426,
    tablet: 767,
    laptop: 1025,
    default: 10000000,
    largeLaptop: 1600
};
