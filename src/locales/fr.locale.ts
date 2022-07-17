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
                categories: ["Vscode"],
                technologies: ["Typescript", "CSS"],
                title: "vscode-rickroll",
                img: "vscode-rickroll.gif",
                description: "hayxd  bro",
                deployment: "https://marketplace.visualstudio.com/items?itemName=Woohaik.vscode-rickroll",
                repository: "https://github.com/Woohaik/vscode-rickroll"
            },

            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "S3", "Cloudfront"],
                title: "Sort Algorithme Visualizer",
                img: "sort-algo-visualizer.png",
                description: "hay bro",
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Uneatlantico's Residence Web Clone",
                img: "residencia-clone.png",
                description: "hay bro",
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Tabla de Composición Nutricional",
                img: "tabla-nutricional.png",
                description: "hay bro",
                deployment: "https://composicionnutricional.com"
            },
            {
                categories: ["npm"],
                technologies: ["Typescript", "npm"],
                title: "tbin-tree",
                img: "npm-logo.png",
                description: "Aca va el tbin bro",
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Bill Gates Scholl Web Page",
                img: "bill-gates-school.png",
                description: "hay bro",
                deployment: "https://djeo5ux2imymg.cloudfront.net"
            },
            {
                categories: ["Frontend"],
                technologies: ["Wordpress", "Php", "JQuery", "CSS"],
                title: "Cantina La Mexicana Web Page",
                img: "cantina.png",
                description: "hay bro",
                deployment: "https://cantinalamexicana.es/nosotros/"
            },

            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Javascript", "CSS", "HTML"],
                title: "Card Memory Game",
                img: "card-memory-game.png",
                description: "hay bro",
                deployment: "https://d1ozgsa565oy1f.cloudfront.net",
                repository: "https://github.com/Woohaik/card-memory-game"
            },

            {
                categories: ["Frontend", "npm"],
                technologies: ["Reactjs", "Typescript", "GitHubActions", "npm"],
                title: "react-date-range-divider",
                img: "npm-logo.png",
                description: "hay bro",
                deployment: "https://www.npmjs.com/package/react-date-range-divider"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "Heroku", "SCSS"],
                title: "Supra Kat",
                img: "supra-kat.png",
                description: "hay bro",
                deployment: "https://supra-kat.herokuapp.com",
                repository: "https://github.com/Woohaik/supra-kat"
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
