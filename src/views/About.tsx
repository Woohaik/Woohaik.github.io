import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import { posibleLocals } from "../utils/translations";

const AboutView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "aboutView" });
    return (
        <Card>
            <CardTitle html={t(posibleLocals.aboutView.title)} />
            <CardBody>
                <div>
                    {t(posibleLocals.aboutView.description)}
                </div>
            </CardBody>
        </Card>
    );
};

export default AboutView;
