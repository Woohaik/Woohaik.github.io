import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import { POSIBLE_LOCALS } from "../utils/constants";

const AboutView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "aboutView" });
    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} />
            <CardBody>
                <div>
                    {t(POSIBLE_LOCALS.aboutView.description)}
                </div>
            </CardBody>
        </Card>
    );
};

export default AboutView;
