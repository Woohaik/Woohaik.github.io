import { IPosibleLocals } from "utils/types";

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
        fullDegree: "Diplôme en ingénierie informatique",
        conect: "Connectez",
        contact: "Contact",
        title: "<span class='text-primary dark:text-lightText'> À propos de</span> Moi",
        description:
            `
            <p>
Passionné par les nouvelles technologies, avec expérience dans la création d'applications web full-stack (Node/React), la conception d'architectures d'applications cloud et de microservices, le travail avec des Docker Containers et des technologies serverless. 
            <p>
            <br/>
            </p>
Je travaille avec autonomie et adaptation au changement, je suis à la recherche de nouveaux défis avec apprentissage et amélioration constante, intérêt particulier pour poursuivre ma carrière en tant que développeur Cloud.
            </p>
        `,
        aboutAnswers: {
            degree: "Ing. informatique",
            residence: "Santander, Espagne",
            nationality: "Salvadorien",
            movility: "Disponible",
            coffee: "Oui"
        },
        university: "UNIVERSITÉ EUROPÉENNE DE L'ATLANTIQUE",
        degree: "Diplôme",
        nationality: "Nationalité",
        residence: "Résidence",
        movility: "Mobilité",
        phone: "Portable",
        coffee: "Café ☕",
        certificationSubTitle: "Certifications",
        educationSubTitle: "Éducation",
        languagesSubTitle: "Langues"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mes</span> Projets",
        deploy: "Déploiement",
        repository: "Code",
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
                description:
                    `
                <img class="mb-2" src="https://vsmarketplacebadge.apphb.com/installs/woohaik.vscode-rickroll.svg?style=flat-square" />
                <p>
                    Extension pour l'éditeur de code de <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                    Visual Studio Code
                    </a>, parfaite pour Rickroller vos
                    collègues qui laissent l'ordinateur déverrouillé.
                </p>
                <br/>
                <p>
                    Une fois installé, il s'exécute pendant l'utilisation de l'éditeur en faisant changer
                    l'arrière-plan avec Rick, lorsque l'arrière-plan change, la musique commence à jouer en arrière-plan.
                    Fermer et ouvrir l'éditeur ne fonctionnera pas pour le supprimer.
                </p>
                <br/>
                <p>
                    Développé en Typescript Works en modifiant directement le CSS dans "desktop.main.css" dans les fichiers
                    de code de Visual Studio.
                </p>
                `,
                deployment: "https://marketplace.visualstudio.com/items?itemName=Woohaik.vscode-rickroll",
                repository: "https://github.com/Woohaik/vscode-rickroll"
            },

            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "S3", "Cloudfront"],
                title: "Visualisateur d'algorithme de tri",
                img: "sort-algo-visualizer.webp",
                description:
                    `
                    <p>
                        Page web permettant de visualiser les animations du fonctionnement des algorithmes
                        de tri "Bulle", "Sélection" et "Insertion" où vous pouvez faire varier le nombre d'éléments
                        et modifier leur vitesse d'animation.
                    </p>
                `,
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Clone du site de la résidence Uneatlantico",
                img: "residencia-clone.webp",
                description:
                    `
                        <p>
                            Clone du site de la résidence universitaire d'Uneatlantico. Il a été réalisé
                            comme un exercice d'interactivité et de réactivité en utilisant
                            javascript, jquery et CSS. Il est déployé sur AWS en utilisant S3 et cloudfront.
                        </p>
                    `,
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Tableau de composition nutritionnelle",
                img: "tabla-nutricional.webp",
                description:
                    `
                <p>
                    Application permettant d'interroger des données sur la composition
                    nutritionnelle des aliments à l'aide de la base de données internationale
                    sur la composition des aliments.
                </p>
                <br/>
                <p>
                    Développée en collaboration avec 
                    <a href="https://www.linkedin.com/in/cristian-camilo-rojas-cruz-b88593212/">Cristian Rojas</a>,
                    <a href="https://www.linkedin.com/in/dar%C3%ADo-ruiz-di%C3%A9guez-492416230/">Dario Ruiz</a>
                    et
                    <a href="https://www.linkedin.com/in/kevin-acuna">Kevin Acuña</a>, 
                    l'application web développée avec Nuxtjs pour tirer parti de la capacité de rendu du serveur 
                    SSR est une refonte de l'ancienne application de composition alimentaire <a href="https://www.funiber.org/">FUNIBER</a> 
                    avec une traduction dynamique pour 4 langues à l'aide du module i18n.
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
                        Un module npm d'un arbre binaire compatible avec Typescript dans lequel des 
                        nœuds peuvent être ajoutés et supprimés en assignant du contenu à l'aide de 
                        types génériques et qui peut être parcouru dans l'ordre suivant : "inorder", 
                        "preorder", "postorder".
                    </p>
                    `,
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Site web de l'école Bill Gates Scholl",
                img: "bill-gates-school.webp",
                description:
                    `
                        <p>
                            Site web de l'école Bill Gates située à <a href="https://goo.gl/maps/eaZsznRekhm1FEYz8">"Metapan El Salvador"</a>.  Projet pris en charge depuis la phase de conception, la mise en page, la mise en œuvre jusqu'au déploiement et la configuration du DNS.
                        </p>
                        <br/>
                        <p>
                            Développé en Vuejs actuellement déployé sur AWS en utilisant S3 Cloudfront pour l'hébergement Route53 pour le DNS et Certificarte manager pour le certificat TLS.
                        </p>
                        <br/>
                        <p>
                            Déploiement et intégration continue avec des actions github et un formulaire de contact implémenté avec AWS Lambda avec nodejs et Api Gateway. 
                        </p>
                `,
                deployment: "https://www.colegiobillgates.edu.sv"
            },
            {
                categories: ["Frontend"],
                technologies: ["Reactjs", "Typescript", "SCSS", "Tailwindcss"],
                title: "Portefeuille",
                img: "portafolio.webp",
                description:
                    `
                    <p>
                        Portefeuille personnel élaboré avec réactivité et dactylographie dans lequel
                        recueillir mes informations, telles que CV, certificats, projets personnels ou
                        collaborations avec qui ont une URL publique.
                    </p>
                `,
                deployment: "https://Woohaik.github.io",
                repository: "https://github.com/Woohaik/Woohaik.github.io"
            },

            {
                categories: ["Frontend"],
                technologies: ["Javascript", "CSS", "HTML"],
                title: "Jeu de mémoire de cartes",
                img: "card-memory-game.webp",
                description:
                    `
                    <p>
                        Jeu de mémoire de cartes basique développé avec HTML, CSS et vanilla Javascript,
                        toutes les animations et le tableau de perspective sont réalisés avec CSS.
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
                            Module npm pour le script type compatible avec React d'un sélecteur de plage de dates 
                            qui reçoit un intervalle (date de début et date de fin) et peut ensuite être divisé en 
                            "n" intervalles de jours.
                        </p>
                    `,
                deployment: "https://www.npmjs.com/package/react-date-range-divider",
                repository: "https://github.com/Woohaik/react-date-range-divider"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> Mon</span> Expérience",
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
                                   Développement de nouveaux modules et maintenance dans les applications avec React, Typescript, Redux et ChakraUI.
                                </li>
                                <li>
                                   Maintenance et nouvelles fonctionnalités pour la bibliothèque de composants UI avec React et Storybook basé sur ChakraUI.                                </li>
                                <li>
                                   Tests avec react-testing-library et Mock Service Worker
                                </li>
                                <li>
                                   Revue de code, estimation des nouvelles fonctionnalités
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
                    name: "Fondation universitaire ibéroaméricaine (FUNIBER)",
                    logoUrl: "logo_funiber.jpeg"
                },
                roles: [
                    {
                        description:
                            `
                                <ul>
                                    <li>
                                       Analyse et développement d'applications en Reactjs et Vuejs
                                    </li>
                                    <li>
                                       Analyse, conception et développement d'API REST avec Node.js, Express et serverless Cloud Functions. 
                                    </li>
                                    <li>
                                       Conception de l'architecture de projets web et de microservices natifs du cloud.
                                    </li>
                                    <li>
                                      Automatisation des tâches avec scripts.
                                    </li>
                                    <li>
                                     Conteneurisation d'applications et environnements de développement avec Docker et Docker Compose.
                                    </li>
                                </ul>
                            `,
                        period: ["December 1, 2019", "July 31, 2022"], // from december to nowadays
                        role: "Développeur Web",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Express", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                                <ul>
                                    <li>
                                     Création d'éléments et de pages Web, styles et l'interactivité à partir de prototypes.
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
