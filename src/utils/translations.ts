export const LANGUAGES = {
    en: "en",
    es: "es",
    fr: "fr"
};

export type ILocals = keyof typeof LANGUAGES;

export const posibleLocals = {
    role: "role",
    downloadCV: "downloadCV",
    about: "about",
    resume: "resume",
    contact: "contact",
    projects: "projects",
    aboutMe: {
        about: "<span className='text-red-700'> About</span> Me"
    }
};

const enlocal: typeof posibleLocals = {
    role: "Web Developer",
    downloadCV: "Download Resume",
    about: "About me",
    resume: "Resume",
    contact: "Contact",
    projects: "Projects",
    aboutMe: {
        about: "<span class='text-primary'> About</span> Me"
    }

};

const eslocal: typeof posibleLocals = {
    role: "Desarrollador Web",
    downloadCV: "Descargar Curriculum",
    about: "Sobre mi",
    resume: "Curriculum",
    contact: "Contacto",
    projects: "Proyectos",
    aboutMe: {
        about: "<span class='text-primary'> Sobre</span> Mi"
    }
};

const frlocal: typeof posibleLocals = {
    role: "Développeur Web",
    downloadCV: "Télécharger CV",
    about: "À propos de moi",
    resume: "Résumé",
    contact: "Contact",
    projects: "Projects",
    aboutMe: {
        about: "<span class='text-primary dark:text-lightText'> À propos de</span> Moi"
    }
};

export {
    enlocal,
    eslocal,
    frlocal
};
