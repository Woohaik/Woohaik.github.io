import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLock, FaEye } from "react-icons/fa";
import { POSIBLE_LOCALS } from "utils/constants";
import { IProject } from "utils/types";
import Modal from "components/Modal";

interface IProps {
    project: IProject
}

const Project: FC<IProps> = ({ project }) => {
    const [modalState, setModalState] = useState(0);
    const { t } = useTranslation("translation", { keyPrefix: "projectsView" });
    return (
        <>
            <Modal changeState={modalState}>
                <div>
                    <div className="w-[100%] h-[320px] overflow-hidden ">
                        <img className="w-[100%] h-[320px] object-cover" {...({ src: project.img ? require(`assets/projects/${project.img}`) : "https://via.placeholder.com/300x150.png" })} alt="project preview" />
                    </div>
                    <div className="px-2 pt-3 pb-2 text-[20px] text-center font-medium">
                        {project.title}
                    </div>
                    <div className="flex gap-2 justify-center text-primary dark:text-gray-200  font-medium">
                        {project.technologies.map(tech => <div key={`${project.title}-${tech}`}>{tech}</div>)}
                    </div>

                    <p className="my-5 project-description" dangerouslySetInnerHTML={{ __html: project.description }} />

                    <div className="flex gap-2">
                        <a href={project.deployment} rel="noreferrer" target="_blank" className="bg-primary   w-fit flex justify-center  place-items-center gap-2 dark:bg-bg-dark    hover:bg-blue-600  dark:hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
                            {t(POSIBLE_LOCALS.projectsView.deploy)} <FaEye className="h-5 w-5 bigger-on-hover" />
                        </a>
                        {
                            project.repository
                                ? <a href={project.repository} rel="noreferrer" target="_blank" className="bg-primary   w-fit flex justify-center  place-items-center gap-2 dark:bg-bg-dark    hover:bg-blue-600  dark:hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
                                    {t(POSIBLE_LOCALS.projectsView.repository)} <FaGithub className="h-5 w-5 bigger-on-hover" />
                                </a>
                                : <div className="opacity-50 cursor-not-allowed  bg-primary w-fit flex justify-center  place-items-center gap-2 dark:bg-bg-dark text-white font-bold py-2 px-4 rounded">
                                    {t(POSIBLE_LOCALS.projectsView.repository)} <FaLock className="h-5 w-5 bigger-on-hover" />
                                </div>
                        }
                    </div>

                </div>
            </Modal>
            <div onClick={() => { setModalState(modalState + 1); }} className="project-card relative after:absolute after:w-[100%] rounded-md  after:h-[100%] after:cursor-pointer">
                <div className="w-[100%] h-[180px] rounded-md overflow-hidden">
                    <img className="rounded-md  w-[100%] h-[180px] object-cover "
                        {...({ src: project.img ? require(`assets/projects/${project.img}`) : "https://via.placeholder.com/300x150.png" })}
                        alt="project preview" />
                </div>
                <div className="project-card__body bg-white dark:bg-dark text-[13px]">
                    <div className="px-2 pt-2 text-[18px] text-center font-medium">
                        {project.title}
                    </div>
                    <div className="flex gap-2 pb-2 justify-center text-primary dark:text-gray-200  font-medium">
                        {project.technologies.map(tech => <div key={`${project.title}-${tech}`}>{tech}</div>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
