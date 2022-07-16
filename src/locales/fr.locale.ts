import { IPosibleLocals } from "../utils/types";

export const frlocal: IPosibleLocals = {
    locale: "fr-FR",
    role: "Développeur Web",
    downloadCV: "Télécharger CV",
    about: "À propos de moi",
    resume: "Résumé",
    techs: "Technologies",
    month: "mois",
    year: "année",
    months: "mois",
    years: "années",
    projects: "Projets",
    aboutView: {
        conect: "Connectez",
        contact: "Contact",
        title: "<span class='text-primary dark:text-lightText'> À propos de</span> Moi",
        description:
            `
            <p>
                Passionné par les nouvelles technologies, expérience
                dans la construction d'applications web full-stack,
                conception d'architectures cloud, microservices,
                travail avec des conteneurs et des technologies serverless.
                Expérience de travail avec les méthodologies SCRUM et KANBAN.
            <p>
            <br/>
            </p>
                Autonomie, travail en équipe et adaptation au changement,
                recherche de nouveaux défis, résolution de problèmes,
                apprentissage et amélioration continue, intérêt particulier
                porté à l'accroissement des connaissances et des compétences
                en matière de cloud.
            </p>
        `,
        aboutAnswers: {
            degree: "Ing. informatique",
            residence: "Santander, Espagne",
            nationality: "Salvadorien",
            movility: "Disponible",
            coffee: "Oui"
        },
        age: "Âge",
        university: "UNIVERSITÉ EUROPÉENNE DE L'ATLANTIQUE",
        degree: "Diplôme",
        nationality: "Nationalité",
        residence: "Résidence",
        movility: "Mobilité",
        phone: "Portable",
        coffee: "Café",
        certificationSubTitle: "Certifications",
        educationSubTitle: "Éducation",
        languagesSubTitle: "Langues"
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
        places: [
            {
                place: {
                    name: "UNIVERSITÉ EUROPÉENNE DE L'ATLANTIQUE",
                    logoUrl: "logo_uneatlantico.svg"
                },
                roles: [
                    {
                        description:
                            `
                                <ul>
                                    <li>
                                        Analyse et développement de composants web et SPA en reactjs et vuejs.
                                    </li>
                                    <li>
                                        Analyse, conception et développement d'APIs REST avec Node.js
                                    </li>
                                    <li>
                                        Conception de l'architecture de projets web et de microservices natifs du cloud.
                                    </li>
                                    <li>
                                        Automatisation des tâches.
                                    </li>
                                    <li>
                                        Conteneurisation des applications et environnements de développement avec Docker et Docker Compose.
                                    </li>
                                </ul>
                            `,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Développeur Web",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Nuxt", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                                <ul>
                                    <li>
                                        Création d'éléments et de pages Web à partir de prototypes,
                                        application de styles à partir de prototypes, application de styles
                                        réactifs et l'interactivité.
                                    </li>
                                </ul>
                            `,
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: "Créateur de site web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
