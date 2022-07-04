import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import Project from "../components/Project";
import { IProject, posibleLocals, PROJECTS_CATEGORIES, PROJECTS_CATEGORIES_TYPES } from "../utils/translations";

const ProjectsView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "projectsView" });
    const { t: categoriesT } = useTranslation("translation", { keyPrefix: "projectsView.projectCategories" });

    const [selectedCategory, setSelectedCategory] = useState<PROJECTS_CATEGORIES_TYPES>("All");

    return (
        <Card>
            <CardTitle html={t(posibleLocals.aboutView.title)} >
                <div className="flex gap-4 font-normal ">
                    {
                        PROJECTS_CATEGORIES.map(
                            projectCat =>
                                <div
                                    className={
                                        `cursor-pointer hover:${projectCat === selectedCategory
                                            ? "text-primary text-primary dark:text-primary-dark"
                                            : "text-gray-500 dark:text-gray-500"}`
                                    }
                                    onClick={() => setSelectedCategory(projectCat)} key={projectCat}>
                                    {categoriesT(projectCat)}
                                </div>
                        )
                    }
                </div>
            </CardTitle>
            <CardBody>
                Mostrando categoria: {selectedCategory}
                <br />
                <div className="grid-cols-3 grid gap-5">
                    {

                        (t("projects", { returnObjects: true }) as IProject[])
                            .filter(project => selectedCategory === "All" || project.categories.some(category => category === selectedCategory))
                            .map(project => <Project key={project.title} project={project} />)
                    }
                </div>
            </CardBody>
        </Card>
    );
};

export default ProjectsView;
