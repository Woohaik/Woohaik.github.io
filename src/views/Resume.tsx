import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import Experience from "../components/Experience";
import { IExperience } from "../utils/translations";

const ResumeView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "resumeView" });

    return (
        <Card>
            <CardTitle html={t("title")} />
            <CardBody>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    <div>
                        {
                            (t("places", { returnObjects: true }) as IExperience[])
                                .map(experience => <Experience key={experience.place.name} experience={experience} />)
                        }
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ResumeView;
