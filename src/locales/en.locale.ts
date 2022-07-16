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
                title: "supra chat francais",
                description: "hay bro"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "SCSS"],
                title: "supra asdsdfsdf chat francais",
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
                title: "La revolucion industrial omg b",
                description: "hay bro"
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
