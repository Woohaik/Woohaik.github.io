import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";

const AboutView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "aboutView" });
    return (
        <Card>
            <CardTitle html={t("title")} />
            <CardBody>
                <div>
                    et consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                </div>
            </CardBody>
        </Card>
    );
};

export default AboutView;
