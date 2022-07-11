import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedGrid from "../components/AnimatedGrid";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import Project from "../components/Project";
import { POSIBLE_LOCALS, PROJECTS_CATEGORIES } from "../utils/constants";
import { IProject, PROJECTS_CATEGORIES_TYPES } from "../utils/types";

const ProjectsView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "projectsView" });
    const { t: categoriesT } = useTranslation("translation", { keyPrefix: "projectsView.projectCategories" });

    const [selectedCategory, setSelectedCategory] = useState<PROJECTS_CATEGORIES_TYPES>("All");

    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} >
                <div className="flex gap-4 font-normal">
                    {
                        PROJECTS_CATEGORIES.map(
                            projectCat =>
                                <div
                                    className={
                                        `cursor-pointer hover:${projectCat === selectedCategory
                                            ? "text-primary  dark:text-primary-dark font-medium " + "text-primary"
                                            : "text-gray-500 dark:text-gray-500"}`
                                    }
                                    onClick={() => setSelectedCategory(projectCat)} key={projectCat}
                                >
                                    {categoriesT(projectCat)}
                                </div>
                        )
                    }
                </div>
            </CardTitle>
            <CardBody>
                <AnimatedGrid
                    conditionToShow={(t("projects", { returnObjects: true }) as IProject[]).map(project => selectedCategory === "All" || project.categories.some(category => category === selectedCategory))}
                    gap={15}
                    animationDuration={0.4}
                    columns={2}
                    itemHeight={242}
                >
                    {
                        (t("projects", { returnObjects: true }) as IProject[])
                            .map(project => <Project key={project.title} project={project} />)
                    }
                </AnimatedGrid>

            </CardBody>
        </Card>
    );
};

export default ProjectsView;
