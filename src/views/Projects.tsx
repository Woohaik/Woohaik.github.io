import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedGrid from "../components/AnimatedGrid";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import Project from "../components/Project";
import { POSIBLE_LOCALS, PROJECTS_CATEGORIES } from "../utils/constants";
import { getResponsiveSize } from "../utils/functions";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { IProject, PROJECTS_CATEGORIES_TYPES, ResponsiveOptions } from "../utils/types";

const ProjectsView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "projectsView" });
    const { t: categoriesT } = useTranslation("translation", { keyPrefix: "projectsView.projectCategories" });

    const [selectedCategory, setSelectedCategory] = useState<PROJECTS_CATEGORIES_TYPES>("All");
    const mediaQuerySize = useMediaQuery();

    const responsiveGrid: ResponsiveOptions = {
        largeLaptop: 2,
        mobile: 1,
        laptop: 1,
        tablet: 2,
        default: 2
    };

    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} >
                <div className="md:flex grid sm:grid-cols-4 grid-cols-2  gap-4 font-normal">
                    {
                        PROJECTS_CATEGORIES.map(
                            projectCat =>
                                <div
                                    className={
                                        `cursor-pointer    hover:${projectCat === selectedCategory
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
                    animationDuration={0.5}
                    columns={getResponsiveSize(mediaQuerySize, responsiveGrid) as number}
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
