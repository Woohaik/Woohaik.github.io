import { IPosibleLocals } from "../utils/types";

export const enlocal: IPosibleLocals = {
    locale: "en-US",
    role: "Web Developer",
    downloadCV: "Download Resume",
    about: "About me",
    resume: "Resume",
    month: "month",
    techs: "Technologies",
    year: "year",
    months: "months",
    years: "years",

    projects: "Projects",
    aboutView: {
        fullDegree: "Degree in Computer Engineering",
        conect: "Conect With Me",
        contact: "Contact",
        title: "<span class='text-primary dark:text-lightText'> About</span> Me",
        description:
            `
            <p>
                Passionate about new technologies with experience
                building full-stack web applications, designing
                cloud architectures, microservices, working with
                containers and serverless technologies.
                Experience working with SCRUM and KANBAN methodologies.
            <p/>
            <br/>
            <p>
                Autonomy, teamwork and adaptation to change,
                looking for new challenges,  learning and continuous improvement, 
                special interest focused on increasing cloud skills and knowledge.
            <p/>
        `,
        aboutAnswers: {
            degree: "Computer Engineering",
            residence: "Santander, Spain",
            nationality: "Salvadorian",
            movility: "Available ",
            coffee: "Yes"
        },
        age: "Age",
        university: "EUROPEAN UNIVERSITY OF THE ATLANTIC",
        degree: "Degree",
        nationality: "Nationality",
        residence: "Residence",
        movility: "Movility",
        coffee: "Coffee",
        phone: "Phone",
        certificationSubTitle: "Certifications",
        educationSubTitle: "Education",
        languagesSubTitle: "Languages"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> My</span> Projects",
        deploy: "Deployment",
        repository: "Repository",
        projectCategories: {
            All: "All",
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
                img: "sort-algo-visualizer.webp",
                description: "hay bro",
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Uneatlantico's Residence Web Clone",
                img: "residencia-clone.webp",
                description: "hay bro",
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Nutritional Composition Table",
                img: "tabla-nutricional.webp",
                description: "hay bro",
                deployment: "https://composicionnutricional.com"
            },
            {
                categories: ["npm"],
                technologies: ["Typescript", "npm"],
                title: "tbin-tree",
                img: "npm-logo.webp",
                description: "Aca va el tbin bro",
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Página Web Colegio Bill Gates",
                img: "bill-gates-school.webp",
                description: "hay bro",
                deployment: "https://djeo5ux2imymg.cloudfront.net"
            },
            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "SCSS", "Tailwindcss"],
                title: "Portafolio",
                img: "portafolio.webp",
                description: "hay bro",
                deployment: "https://cantinalamexicana.es/nosotros/"
            },

            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Javascript", "CSS", "HTML"],
                title: "Card Memory Game",
                img: "card-memory-game.webp",
                description: "hay bro",
                deployment: "https://d1ozgsa565oy1f.cloudfront.net",
                repository: "https://github.com/Woohaik/card-memory-game"
            },

            {
                categories: ["Frontend", "npm"],
                technologies: ["Reactjs", "Typescript", "GitHubActions", "npm"],
                title: "react-date-range-divider",
                img: "npm-logo.webp",
                description: "hay bro",
                deployment: "https://www.npmjs.com/package/react-date-range-divider"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "Heroku", "SCSS"],
                title: "Supra Kat",
                img: "supra-kat.webp",
                description: "hay bro",
                deployment: "https://supra-kat.herokuapp.com",
                repository: "https://github.com/Woohaik/supra-kat"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> My</span> Experience",
        places: [
            {
                place: {
                    name: "EUROPEAN UNIVERSITY OF THE ATLANTIC",
                    logoUrl: "logo_uneatlantico.svg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Analysis and development of web components and SPA.
                                </li>
                                <li>
                                    Analysis, Design and development of REST APIs with Node.js.
                                </li>
                                <li>
                                    Architecture design for web projects and cloud native microservices.
                                </li>
                                <li>
                                    Application containerization and development environments with Docker and Docker Compose
                                </li>
                                <li>
                                    Task automation.
                                </li>
                            </ul>`,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Web Developer",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Nuxt", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Built components and web pages from prototypes,
                                    application of responsive styles and interactivity.
                                </li>
                            </ul>
                        `,
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: "Web Builder",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
