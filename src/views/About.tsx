import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardSubTitle from "../components/Card/CardSubTitle";
import CardTitle from "../components/Card/CardTitle";
import CertificationCard from "../components/CertificationCard";
import { POSIBLE_LOCALS } from "../utils/constants";
import { capitalizeText } from "../utils/functions";
import logoUneat from "./../assets/logo_uneatlantico.svg";
import { FaGlobe, FaUserGraduate, FaCertificate } from "react-icons/fa";
import LanguageLevel from "../components/LanguageLevel";
import { FR, ES, GB } from "country-flag-icons/react/3x2";

const AboutView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "aboutView" });
    const { t: baseT } = useTranslation();

    const { t: aboutAnswersT } = useTranslation("translation", { keyPrefix: "aboutView.aboutAnswers" });

    const age = useMemo(() => {
        const date = new Date("November 12, 1998");
        const timeDiff = Math.abs(Date.now() - date.getTime());
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    }, []);

    const universityRange: string = useMemo(() => {
        const startedUniversity = capitalizeText((new Date("September 1, 2018").toLocaleDateString(baseT(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" })));
        const finisheDUniversity = capitalizeText(new Date("June 1, 2022").toLocaleDateString(baseT(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" }));
        return `${startedUniversity} - ${finisheDUniversity}`;
    }, [baseT(POSIBLE_LOCALS.locale)]);

    const certifications = [
        {
            imageUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
            title: "AWS Solutions Architect Associate",
            link: "https://www.credly.com/badges/477fc37d-73d2-4384-9ede-f3770ef2e4ac/public_url"
        },
        {
            imageUrl: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
            title: "AWS SysOps Administrator Associate",
            link: "https://www.credly.com/badges/5bedfbed-8052-405c-94e8-a862cefaabe9?source=linked_in_profile"
        },
        {
            imageUrl: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",

            title: "AWS Developer Associate",
            link: "https://www.credly.com/badges/54aafad6-2a9f-41ee-8551-dda1128044d6?source=linked_in_profile"
        },
        {
            imageUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
            title: "AWS Cloud Practitioner",
            link: "https://www.credly.com/badges/894de035-d6c4-43c7-a531-23be48732b27/public_url"
        }
    ];

    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} />
            <CardBody>
                <div className="flex gap-4 mb-3">
                    <div className="flex-1 text-justify" dangerouslySetInnerHTML={{ __html: t(POSIBLE_LOCALS.aboutView.description) }} />

                    <div style={{ flex: "0 1 250px" }}>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.age)}:  </div>
                            <div>
                                {age}
                            </div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.degree)}: </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.degree)}
                            </div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.residence)}: </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.residence)}
                            </div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.nationality)}: </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.nationality)}
                            </div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.movility)}:  </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.movility)}
                            </div>
                        </div>
                        <div className="flex justify-between pb-2">
                            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{t(POSIBLE_LOCALS.aboutView.coffee)}: </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.coffee)}
                            </div>
                        </div>

                    </div>
                </div>
                <CardSubTitle icon={<FaCertificate />} html={t(POSIBLE_LOCALS.aboutView.certificationSubTitle)} />
                <div className="grid grid-cols-4 gap-3 ">
                    {
                        certifications.map(cert => <CertificationCard key={cert.title} {...cert} />)
                    }
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    <div className="mb-3">
                        <CardSubTitle icon={<FaUserGraduate />} html={t(POSIBLE_LOCALS.aboutView.educationSubTitle)} />
                        <div className="text-center">
                            <img className="h-[100px] w-auto mx-auto " src={logoUneat} alt="logo uneatlantico" />
                            <div className="font-medium mt-2">
                                {t(POSIBLE_LOCALS.aboutView.university)}
                            </div>
                            <div>
                                {aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.degree)}
                            </div>
                            <div className="text-[13px] dark:text-primary-dark">
                                {
                                    universityRange
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <CardSubTitle icon={<FaGlobe />} html={t(POSIBLE_LOCALS.aboutView.languagesSubTitle)} />
                        <div className="flex flex-col gap-5">
                            <LanguageLevel flag={ES} level={9} />
                            <LanguageLevel flag={GB} level={6} />
                            <LanguageLevel flag={FR} level={3} />
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default AboutView;
