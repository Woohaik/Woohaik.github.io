import React, { FC } from "react";
import { IProject } from "../utils/translations";

interface IProps {
    project: IProject
}

const Project: FC<IProps> = ({ project }) => {
    return (
        <div className="project-card relative after:absolute after:w-[100%] after:h-[100%] after:cursor-pointer">
            <div className="w-[100%] h-[180px]">
                <img className="w-[100%] h-[180px] object-cover" src="https://via.placeholder.com/300x150.png" alt="project preview" />
            </div>
            <div className="px-2 pt-2 text-[18px] text-center font-medium">

                {project.title}
            </div>
            <div className="flex gap-2 pb-2 justify-center text-[13px]">
                {project.technologies.map(tech => <div key={`${project.title}-${tech}`}>{tech}</div>)}
            </div>
        </div>
    );
};

export default Project;
