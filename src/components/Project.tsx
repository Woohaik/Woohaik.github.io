import { motion, AnimatePresence } from "framer-motion";
import React, { FC } from "react";
import { IProject } from "../utils/translations";

interface IProps {
    project: IProject
}

const Project: FC<IProps> = ({ project }) => {
    return (
        <AnimatePresence>
            <motion.div

                exit={{
                    opacity: 0,
                    transform: "scale(0)"
                }}
                initial={{
                    opacity: 0,
                    transform: "scale(0)"
                }}
                animate={
                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                }
                className="w-auto bg-red-400 transition-all">
                {project.title}
                <br />
                <img src="https://via.placeholder.com/300x150.png" alt="project preview" />
                {project.description}
                <br />
                <div className="flex gap-2">
                    {project.technologies.map(tech => <div key={`${project.title}-${tech}`}>{tech}</div>)}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Project;
