import { IPosibleLocals } from "../utils/types";

export const eslocal: IPosibleLocals = {
    locale: "es-ES",
    role: "Desarrollador Web",
    downloadCV: "Descargar Curriculum",
    about: "Sobre mi",
    resume: "Curriculum",
    techs: "Tecnologias",
    month: "mes",
    year: "año",
    months: "meses",
    years: "años",
    projects: "Proyectos",
    aboutView: {
        fullDegree: "Grado en Ingeniería Informática",
        conect: "Conecta Conmigo",
        contact: "Contacto",
        title: "<span class='text-primary dark:text-lightText'> Sobre</span> Mi",
        description:
            `
            <p>
                Apasionado de las nuevas tecnologías
                con experiencia construyendo
                aplicación web full-stack, diseñando
                arquitecturas cloud, microservicios,
                trabajo con contenedores y tecnologias
                serverless. Experiencia trabajando con
                metodologías SCRUM y KANBAN.
            </p>
            <br/>
            <p>
                Autonomía, trabajo en equipo y
                adaptación al cambio, en busca de
                nuevos retos, resolución de problemas,
                aprendizaje y mejora continua, especial
                interés enfocado a incremento de
                conocimientos y habilidades cloud.
            </p>
        `,
        aboutAnswers: {
            degree: "Ing. Informática",
            residence: "Santander, España",
            nationality: "Salvadoreño",
            movility: "Disponible",
            coffee: "Si"
        },
        university: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
        age: "Edad",
        degree: "Titulación",
        nationality: "Nacionalidad",
        residence: "Residencia",
        movility: "Movilidad",
        coffee: "Café",
        certificationSubTitle: "Certificaciones",
        phone: "Móvil",
        educationSubTitle: "Educación",
        languagesSubTitle: "Idiomas"
    },
    projectsView: {
        title: "<span class='text-primary dark:text-lightText'> Mis</span> Proyectos",
        deploy: "Despliegue",
        repository: "Repositorio",
        projectCategories: {
            All: "Todas",
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
                Extensión  para el editor de código <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                Visual Studio Code
                </a>. Perfecta para rickrollear a tus compañeros que dejan el ordenador desbloqueado.

                </p>
                <br/>
                <p>
                    Una vez instalada se ejecutará mientras se esté usando el editor, cambiando el fondo con Rick, 
                    cuando el fondo cambia la música comenzará a sonar de fondo.
                    Cerrar y abrir el editor no funcionará para removerlo.                
                </p>
                <br/>
                <p>
                    Desarrollada en Typescript Funciona editando directamente el CSS en "desktop.main.css" en los archivos de Visual Studio Code
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
                         Página web para visualizar animaciones del funcionamiento de los algoritmos de ordenación “Bubble”, 
                         “Selection” e “Insertion” donde se puede variar la cantidad de elementos y cambiar su velocidad de animación.
                    </p>
                `,
                deployment: "https://d2i3u80xnhzugk.cloudfront.net",
                repository: "https://github.com/Woohaik/sort-visualize"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "SCSS", "JQuery", "S3", "Cloudfront"],
                title: "Clon web residencia Uneatlantico",
                img: "residencia-clone.webp",
                description:
                    `
                    <p>
                        Clon de sitio web de residencia universitaria de Uneatlantico. Fue hecho como un ejercicio de maquetación, interactividad y responsive usando javascript,
                        jquery y CSS. Está hospedada en AWS usando S3 y cloudfront.
                    </p>
                `,
                deployment: "https://d1yk06cdai7txo.cloudfront.net/",
                repository: "https://github.com/Woohaik/Residencia"
            },
            {
                categories: ["Frontend"],
                technologies: ["Javascript", "Nuxtjs", "i18n"],
                title: "Tabla de Composición Nutricional",
                img: "tabla-nutricional.webp",
                description:
                    `
                <p>
                 Aplicación para consulta de  datos de composición nutricional de alimentos usando la base de datos internacional de composición de alimentos.
                </p>
                <br/>
                <p>
                Desarrollada en Colaboración con
                    <a href="https://www.linkedin.com/in/cristian-camilo-rojas-cruz-b88593212/">Cristian Rojas</a>,
                    <a href="https://www.linkedin.com/in/dar%C3%ADo-ruiz-di%C3%A9guez-492416230/">Dario Ruiz</a>
                    y
                    <a href="https://www.linkedin.com/in/kevin-acuna">Kevin Acuña</a>, 
                    aplicación web desarrollada con Nuxtjs para aprovechar las capacidad del Renderizado desde el Servidor
                    SSR es un cambio de imagen a la antigua aplicación de composición de alimentos de <a href="https://www.funiber.org/">FUNIBER</a> cuenta
                    Traducción dinámica  para 4 idiomas usando módulo de i18n.
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
                        Un módulo de npm compatible con typescript de un árbol binario con el cual se pueden añadir
                         y remover nodos asignando contenido usando tipos genéricos y puede ser recorrido en “inorden“, “preorden” , “postorden”.
                    </p>
                    `,
                deployment: "https://www.npmjs.com/package/tbin-tree",
                repository: "https://github.com/Woohaik/bin-tree"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "SCSS", "Route53", "S3", "Cloudfront", "Lambda"],
                title: "Página web Colegio Bill Gates",
                img: "bill-gates-school.webp",
                description:
                    `
                        <p>
                            Página web para el colegio Bill Gates ubicado en 
                            <a href="https://goo.gl/maps/eaZsznRekhm1FEYz8">"Metapan El Salvador"</a>.
                            Proyecto llevado desde la fase de diseño, maquetación implementación hasta el despliegue y configuración DNS.
                        </p>
                        <br/>
                        <p>
                            Desarrollado en Vuejs actualmente desplegado en AWS usando S3 Cloudfront para su hospedaje Route53 para DNS y Certificarte manager para el certificado TLS
                        </p>
                        <br/>
                        <p>
                            Cuenta con despliegue e integración continua con github actions y un formulario de contacto implementado AWS Lambda con nodejs y Api Gateway. 
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
                        Portafolio personal desarrollado con react y typescript en el cual recopilar mi información,
                         como curriculum, certificados, proyectos personales o colaboraciones con que tengan una URL pública.
                    </p>
                `,
                deployment: "https://Woohaik.github.io",
                repository: "https://github.com/Woohaik/Woohaik.github.io"
            },

            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Javascript", "CSS", "HTML"],
                title: "Juego de Memoria de Cartas",
                img: "card-memory-game.webp",
                description:
                    `
                    <p>
                        Juego básico de memoria de cartas desarrollado con HTML, CSS y Javascript vanilla, todas las animaciones y
                        el tablero en perspectiva está hecho con CSS.
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
                            Módulo de npm para React compatible con typescript de un selector de intervalos de fechas
                            al cual se le proporcionan un intervalo (fecha inicio y fecha fin) y luego puede ser divididos en “n” intervalos en días.
                        </p>
                    `,
                deployment: "https://www.npmjs.com/package/react-date-range-divider",
                repository: "https://github.com/Woohaik/react-date-range-divider"
            },
            {
                categories: ["Frontend"],
                technologies: ["Vuejs", "Typescript", "Heroku", "SCSS"],
                title: "Supra Kat",
                img: "supra-kat.webp",
                description:
                    `
                <p>
                    Single Web Application (SPA) de una galería de gatos con scroll infinito desarrollada en VUEjs consumiendo el <a href="https://thecatapi.com">API de gatos</a>
                </p>
            `,
                deployment: "https://supra-kat.herokuapp.com",
                repository: "https://github.com/Woohaik/supra-kat"
            }
        ]
    },
    resumeView: {
        title: "<span class='text-primary dark:text-lightText'> Mi</span> Experiencia",
        places: [
            {
                place: {
                    name: "UNIVERSIDAD EUROPEA DEL ATLÁNTICO",
                    logoUrl: "logo_uneatlantico.svg"
                },
                roles: [
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Análisis y Desarrollo de componentes web y SPA en reactjs y vuejs.
                                </li>
                                <li>
                                    Análisis, Diseño y desarrollo de APIs REST con Node.js.
                                </li>
                                <li>
                                    Diseño de arquitectura de proyectos web y microservicios cloud native.
                                </li>
                                <li>
                                    Automatización de tareas.
                                </li>
                                <li>
                                    Contenerización de aplicación y entornos de desarrollo con Docker y Docker Compose.
                                </li>
                            </ul>
                        `,
                        period: ["December 1, 2019", "now"], // from december to nowadays
                        role: "Desarrollador Web",
                        technologies: ["Reactjs", "Typescript", "Vuejs", "AWS", "Nuxt", "Docker", "GCP"]
                    },
                    {
                        description:
                            `
                            <ul>
                                <li>
                                    Maquetación de elementos y paginas Web a
                                    partir de prototipos, aplicación de estilos
                                    responsivos e interactividad.
                                </li>
                            </ul>
                        `,
                        period: ["September 1, 2018", "November 30, 2019"],
                        role: " Maquetador Web",
                        technologies: ["HTML", "CSS", "SCSS", "Javascript"]
                    }
                ]
            }
        ]
    }
};
