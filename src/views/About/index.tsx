import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardSubTitle from "components/Card/CardSubTitle";
import CardTitle from "components/Card/CardTitle";
import CertificationCard from "components/CertificationCard";
import { MY_CERTIFICATIONS, MY_EMAIL, MY_PHONE_NUMBER, POSIBLE_LOCALS } from "utils/constants";
import logoUneat from "assets/logo_uneatlantico.svg";
import { FaGlobe, FaUserGraduate, FaCertificate, FaAddressBook } from "react-icons/fa";
import LanguageLevel from "components/LanguageLevel";
import { FR, ES, GB, JP } from "country-flag-icons/react/3x2";
import ColorSquare from "components/ColorSquare";
import { displayDateRangeText } from "./utils";
import { UNIVERSITY_DATE_RANGE } from "./contants";

const AboutView = () => {
    const { t } = useTranslation("translation", { keyPrefix: "aboutView" });
    const { t: baseT } = useTranslation();
    const { t: aboutAnswersT } = useTranslation("translation", { keyPrefix: "aboutView.aboutAnswers" });

    const universityRange: string = useMemo(() => displayDateRangeText(UNIVERSITY_DATE_RANGE), [baseT(POSIBLE_LOCALS.locale)]);

    const colorSquareKeys = Object.keys(POSIBLE_LOCALS.aboutView.aboutAnswers) as (keyof typeof POSIBLE_LOCALS.aboutView.aboutAnswers)[];

    return (
        <Card>
            <CardTitle html={t(POSIBLE_LOCALS.aboutView.title)} />
            <CardBody>
                <div className="flex gap-4 mb-3 lg:flex-row sm:flex-col flex-col ">
                    <div className="flex-1 text-justify" dangerouslySetInnerHTML={{ __html: t(POSIBLE_LOCALS.aboutView.description) }} />
                    <div style={{ flex: "0 1 250px" }}>
                        {
                            colorSquareKeys.map(key => <ColorSquare
                                key={key}
                                text={aboutAnswersT(POSIBLE_LOCALS.aboutView.aboutAnswers[key])}
                                title={t(POSIBLE_LOCALS.aboutView[key])}
                            />)
                        }
                    </div>
                </div>
                <CardSubTitle icon={<FaCertificate />} html={t(POSIBLE_LOCALS.aboutView.certificationSubTitle)} />
                <div className="grid lg:grid-cols-4 mb-3 sm:grid-cols-2 gap-3  ">
                    {
                        MY_CERTIFICATIONS.map(cert => <CertificationCard key={cert.title} {...cert} />)
                    }
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
                    <div className="mb-1">
                        <CardSubTitle icon={<FaUserGraduate />} html={t(POSIBLE_LOCALS.aboutView.educationSubTitle)} />
                        <div className="text-center pt-2">
                            <img className="h-[70px] w-auto mx-auto " src={logoUneat} alt="logo uneatlantico" />
                            <div className="font-medium mt-2 text-[18px]">
                                {t(POSIBLE_LOCALS.aboutView.fullDegree)}
                            </div>
                            <div className="text-[13px]" >
                                {t(POSIBLE_LOCALS.aboutView.university)}
                            </div>
                            <div className="text-[14px] dark:text-primary-dark">
                                {
                                    universityRange
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <CardSubTitle icon={<FaGlobe />} html={t(POSIBLE_LOCALS.aboutView.languagesSubTitle)} />
                        <div className="flex flex-col pt-2 pb-4 gap-5">
                            <LanguageLevel flag={ES} level={9} />
                            <LanguageLevel flag={GB} level={6} />
                            <LanguageLevel flag={FR} level={4} />
                            <LanguageLevel flag={JP} level={2} />
                        </div>
                    </div>

                </div>
                <CardSubTitle icon={<FaAddressBook />} html={t(POSIBLE_LOCALS.aboutView.contact)} />
                <div className="flex gap-6 lg:flex-row sm:flex-col flex-col">
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
