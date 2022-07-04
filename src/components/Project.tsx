import React, { FC } from "react";
import { IProject } from "../utils/translations";

interface IProps {
    project: IProject
}

const Project: FC<IProps> = ({ project }) => {
    return (
        <div className="w-auto bg-red-400">
            {project.title}
            <br />
            <img src="https://via.placeholder.com/300x150.png" alt="project preview" />
            {project.description}
            <br />
            <div className="flex gap-2">
                {project.technologies.map(tech => <div key={`${project.title}-${tech}`}>{tech}</div>)}
            </div>
        </div>
    );
};

export default Project;
