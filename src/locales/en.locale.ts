import { IPosibleLocals } from "utils/types";

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
Passionate about new technologies, with experience building full-stack web applications (Node/React), designing cloud application architectures and microservices, working with containers and serverless technologies. 

            <p/>
            <br/>
            <p>
I work with autonomy and adaptation to change, I am looking for new challenges with learning and continuous improvement, special interest in pursuing my career as a Cloud developer.
            <p/>
        `,
        aboutAnswers: {
            degree: "Computer Engineering",
            residence: "Santander, Spain",
            nationality: "Salvadorian",
            movility: "Available ",
            coffee: "Yes"
        },
        university: "EUROPEAN UNIVERSITY OF THE ATLANTIC",
        degree: "Degree",
        nationality: "Nationality",
        residence: "Residence",
        movility: "Movility",
        coffee: "Coffee  ☕",
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
                description:
                    `
                <img class="mb-2" src="https://vsmarketplacebadge.apphb.com/installs/woohaik.vscode-rickroll.svg?style=flat-square" />
                <p>
                    Extension for the code editor <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                    Visual Studio Code
                    </a>, perfect for rickrolling your colleagues who leave the computer unlocked.
                </p>
                <br/>
                <p>
                    Once installed it will run while you are using the editor making
                     the background change with Rick, when the background changes the music 
                     will start playing in the background. Closing and opening the editor will not work to remove it.                 
                </p>
                <br/>
                <p>
                    Developed in Typescript Works by directly editing the CSS in "desktop.main.css" in the Visual Studio
                    Code files.
                </p>
                `,
                deployment: "https://marketplace.visualstudio.com/items?itemName=Woohaik.vscode-rickroll",
                repository: "https://github.com/Woohaik/vscode-rickroll"
            },

            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "S3", "Cloudfront"],
                title: "Sort Algorithme Visualizer",
                img: "sort-algo-visualizer.webp",
                description:
                    `
                    <p>
                        Web page to visualize animations of the operation of the sorting algorithms "Bubble", "Selection" and "Insertion", 
                        "Selection" and "Insertion" where you can vary the number of elements and change their animation speed.
                    </p>
                `,
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Uneatlantico's Residence Web Clone",
                img: "residencia-clone.webp",
                description:
                    `
                        <p>
                        Clon de sitio web de residencia universitaria de uneatlantico. Fue hecho como un ejercicio de maquetación, interactividad y responsive usando javascript,
                        jquery y CSS. Está hospedada en AWS usando S3 y cloudfront.
                        </p>
                    `,
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Nutritional Composition Table",
                img: "tabla-nutricional.webp",
                description:
                    `
                <p>
                Application for querying food nutritional composition data using the
                 international food composition database.

                </p>
                <br/>
                <p>
                Developed in Collaboration with
                    <a href="https://www.linkedin.com/in/cristian-camilo-rojas-cruz-b88593212/">Cristian Rojas</a>,
                    <a href="https://www.linkedin.com/in/dar%C3%ADo-ruiz-di%C3%A9guez-492416230/">Dario Ruiz</a>
                    and
                    <a href="https://www.linkedin.com/in/kevin-acuna">Kevin Acuña</a>, 
                    Web application developed with Nuxtjs to take advantage of the Rendering from ServerSSR capability is a makeover to the old food composition application of <a href="https://www.funiber.org/">FUNIBER</a> account.
                    Dynamic translation for 4 languages using i18n module.
                </p>
            `,
                deployment: "https://composicionnutricional.com"
            },
            {
                categories: ["npm"],
                technologies: ["Typescript", "npm"],
                title: "tbin-tree",
                img: "npm-logo.webp",
                description:
                    `
                    <img class="mb-2"  src="https://badgen.net/npm/dt/tbin-tree" />
                    <p>
                        A typescript-compatible npm module of a binary tree with which nodes can be added and removed by assigning content using
                        generic types and can be traversed in "inorder", "preorder", "postorder".
                    </p>
                    `,
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Página Web Colegio Bill Gates",
                img: "bill-gates-school.webp",
                description:
                    `
                    <p>
                    Website for Bill Gates School, located in  <a href="https://goo.gl/maps/eaZsznRekhm1FEYz8">"Metapan El Salvador"</a>.  Projet pris en charge depuis la phase de conception, la mise en page, la mise en œuvre jusqu'au déploiement et la configuration du DNS.
                    </p>
                    <br/>
                    <p>
                        Developed in Vuejs and currently deployed on AWS using S3 Cloudfront for hosting Route53 for DNS and Certificarte manager for TLS certificate.

                    </p>
                    <br/>
                    <p>
                    It has deployment and continuous integration with github actions and a contact form implemented AWS Lambda with nodejs and Api Gateway. 
                    </p>
            `,
                deployment: "https://www.colegiobillgates.edu.sv"
            },
            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "SCSS", "Tailwindcss"],
                title: "Portafolio",
                img: "portafolio.webp",
                description:
                    `
                <p>
                    Personal portfolio developed with react and typescript
                    in which to collect my information, such as resume, certificates, personal projects or collaborations with that have a public URL.
                 
                </p>
            `,
                deployment: "https://Woohaik.github.io",
                repository: "https://github.com/Woohaik/Woohaik.github.io"
            },

            {
                categories: ["Frontend"],
                technologies: ["Javascript", "CSS", "HTML"],
                title: "Card Memory Game",
                img: "card-memory-game.webp",
                description:
                    `
                <p>
                    Basic card memory game developed with HTML, CSS and vanilla Javascript, all animations and the perspective board are made with CSS.          
                </p>
             `,
                deployment: "https://d1ozgsa565oy1f.cloudfront.net",
                repository: "https://github.com/Woohaik/card-memory-game"
            },

            {
                categories: ["Frontend", "npm"],
                technologies: ["Reactjs", "Typescript", "GitHubActions", "npm"],
                title: "react-date-range-divider",
                img: "npm-logo.webp",
                description:
                    `
                    <img class="mb-2"  src="https://badgen.net/npm/dt/react-date-range-divider" />
                        <p>
                            Npm module for React compatible with typescript of a date range selector which is given an 
                            interval (start date and end date) and then can be divided into "n" intervals in days.
                        </p>
                    `,
                deployment: "https://www.npmjs.com/package/react-date-range-divider",
                repository: "https://github.com/Woohaik/react-date-range-divider"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> My</span> Experience",
        places: [
            {
                place: {
                    name: "Sopra Steria",
                    logoUrl: "logo_soprasteria.jpeg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
 Development of new modules and maintenance in apps with React, Typescript, Redux, ChakraUI.
                                </li>
                                <li>
         Maintenance and new functionalities and components for UI component library with React and Storybook based on ChakraUI.
                                </li>
                                <li>
Testing with react-testing-library and Mock Service Worker

                                </li>
                                <li>
 Code review and new features estimations

                                </li>
                            </ul>`,
                        period: ["April 1, 2023", "now"], // from december to nowadays
                        role: "Senior Frontend Developer Analyst",
                        technologies: ["React", "Typescript", "Redux", "react-query", "Jest", "Docker"]
                    }
                ]
            },
            {
                place: {
                    name: "Iberoamerican University Foundation (FUNIBER)",
                    logoUrl: "logo_funiber.jpeg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
   Analysis and development of components inReactjs and Vuejs.
                                </li>
                                <li>
                     Analysis, design and development of REST APIs with Node.js, expressjs and serverless Cloud Functions. 
                                </li>
                                <li>
                        Architecture design of web projects and cloud native microservices.
                                </li>
                                <li>
Task automation with scripts
                                </li>
                                <li>
                            Application containerization and development environments with Docker and Docker Compose.

                                </li>
                            </ul>`,
                        period: ["December 1, 2019", "July 31, 2022"], // from december to nowadays
                        role: "Web Developer",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Express", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                            <ul>
                                <li>
               Built components and web pages from prototypes, application of responsive styles and interactivity.
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
