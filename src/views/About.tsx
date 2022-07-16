import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardSubTitle from "../components/Card/CardSubTitle";
import CardTitle from "../components/Card/CardTitle";
import CertificationCard from "../components/CertificationCard";
import { MY_CERTIFICATIONS, MY_EMAIL, MY_PHONE_NUMBER, POSIBLE_LOCALS } from "../utils/constants";
import { capitalizeText } from "../utils/functions";
import logoUneat from "./../assets/logo_uneatlantico.svg";
import { FaGlobe, FaUserGraduate, FaCertificate, FaAddressBook } from "react-icons/fa";
import LanguageLevel from "../components/LanguageLevel";
import { FR, ES, GB } from "country-flag-icons/react/3x2";
import ColorSquare from "../components/ColorSquare";

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

    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} />
            <CardBody>
                <div className="flex gap-4 mb-3">
                    <div className="flex-1 text-justify" dangerouslySetInnerHTML={{ __html: t(POSIBLE_LOCALS.aboutView.description) }} />
                    <div style={{ flex: "0 1 250px" }}>
                        <ColorSquare text={age + ""} title={t(POSIBLE_LOCALS.aboutView.age)} />
                        <ColorSquare
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.degree)}
                            title={t(POSIBLE_LOCALS.aboutView.degree)}
                        />
                        <ColorSquare
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.residence)}
                            title={t(POSIBLE_LOCALS.aboutView.residence)}
                        />
                        <ColorSquare
                            title={t(POSIBLE_LOCALS.aboutView.nationality)}
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.nationality)}
                        />
                        <ColorSquare
                            title={t(POSIBLE_LOCALS.aboutView.nationality)}
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.nationality)}
                        />
                        <ColorSquare
                            title={t(POSIBLE_LOCALS.aboutView.movility)}
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.movility)}
                        />
                        <ColorSquare
                            title={t(POSIBLE_LOCALS.aboutView.coffee)}
                            text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers.coffee)}
                        />
                    </div>
                </div>
                <CardSubTitle icon={<FaCertificate />} html={t(POSIBLE_LOCALS.aboutView.certificationSubTitle)} />
                <div className="grid grid-cols-4 gap-3  ">
                    {
                        MY_CERTIFICATIONS.map(cert => <CertificationCard key={cert.title} {...cert} />)
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
                <CardSubTitle icon={<FaAddressBook />} html={t(POSIBLE_LOCALS.aboutView.contact)} />
                <div className="flex gap-6">
                    <div className="flex-1">
                        <ColorSquare
                            title={"Email"}
                        >
                            <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>
                        </ColorSquare>
                        <ColorSquare
                            title={t(POSIBLE_LOCALS.aboutView.phone)}
                        >
                            <a href={`tel:${MY_PHONE_NUMBER.replaceAll(" ", "")}`}>{MY_PHONE_NUMBER}</a>
                        </ColorSquare>
                    </div>
                    <div className="flex-1 text-center">
                        <a href="https://www.linkedin.com/in/wilfredo-hndz/" className="hover-bigger-img" target="_blank" rel="noreferrer">
                            <div className="bg-white rounded-[38%] w-fit mx-auto">
                                <img className="h-auto w-[75px] rounded-md" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo linkedin" />
                            </div>
                            <div className="font-medium mt-2">
                                {t(POSIBLE_LOCALS.aboutView.conect)}
                            </div>
                        </a>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default AboutView;
