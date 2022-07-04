import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";

const ContactView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "contactView" });
    return (
        <Card>
            <CardTitle html={t("title")} />
            <CardBody>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    pariatur sit ex cum rerum commodi voluptatem expedita similique iusto recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    pariatur sit ex cum rerum commodi voluptatem expedita similique iusto recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae

                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
                    recusandae
                    fuga optio, adipisci officia deserunt! Necessitatibus, molestiae officia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime vero
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

export default ContactView;
