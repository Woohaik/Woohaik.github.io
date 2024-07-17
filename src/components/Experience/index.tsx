import React, { FC } from "react";
import { IExperience, ResponsiveOptions } from "utils/types";
import Datedif from "date-diff";
import { useTranslation } from "react-i18next";
import { POSIBLE_LOCALS } from "utils/constants";
import { capitalizeText, getResponsiveSize } from "utils/functions";
import useMediaQuery from "utils/hooks/useMediaQuery";

interface IProps {
    experience: IExperience
}

const Experience: FC<IProps> = (props) => {
    const mediaQuerySize = useMediaQuery();

    const responsiveFlexSize: ResponsiveOptions = {
        largeLaptop: "0 1 220px",
        mobile: "1",
        laptop: "1",
        tablet: "1",
        default: "0 1 250px"
    };

    const { t } = useTranslation();
    const toLocaleDateString = (date: Date) => {
        const traducedDate = date.toLocaleDateString(t(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" });
        return capitalizeText(traducedDate);
    };

    const calcTimeDiference = (...dates: [string, string]) => {
        const date1 = new Date(dates[0]);
        const date2 = dates[1] === "now" ? new Date() : new Date(dates[1]);
        const diff = new Datedif(date2, date1);
        const rest = diff.years() % 1;
        const years = diff.years() - rest;
        const months = Math.floor(diff.months() - years * 12);
        const yearText = years > 0 ? `${years} ${t(years > 1 ? POSIBLE_LOCALS.years : POSIBLE_LOCALS.year)}` : "";
        const monthText = months > 0 ? `${months} ${t(months > 1 ? POSIBLE_LOCALS.months : POSIBLE_LOCALS.month)}` : "";
        const periodText = yearText && monthText ? ` ( ${yearText} ${monthText} )` : "";
        const firstDateText = toLocaleDateString(date1);
        const secondDateText = toLocaleDateString(date2);
        return `${firstDateText} - ${secondDateText}${periodText}`;
    };

    return (
        <div className="flex experience lg:flex-row sm:flex-col flex-col gap-7 mb-3">
            <div style={{
                flex: `${getResponsiveSize(mediaQuerySize, responsiveFlexSize)}`
            }} className="experience__company sm:text-center text-center lg:text-right">
                <div className="text-[16px] font-semibold">
                    {
                        props.experience.place.name

                    }
                </div>
                <img className="ml-auto lg:h-[100px] lg:ml-auto lg:mr-0 sm:mx-auto mx-auto sm:h-[85px] h-[85px] mt-2" src={require(`assets/${props.experience.place.logoUrl}`)} alt={`${props.experience.place.name} - logo`} />
            </div>
            {/* lg:after:block  sm:after:hidden  lg:before:block  sm:before:hidden */}
            <div className="experience__timeline relative  flex flex-col gap-5 flex-1">
                {
                    props.experience.roles.map(role =>
                        <div className="experience__timeline__item  relative" key={role.role + props.experience.place.name}>
                            <div className="experience__timeline__item__title relative text-[16px] font-semibold">
                                {role.role}
                            </div>
                            <div className="text-[14px] mt-1 dark:text-primary-dark">
                                {
                                    calcTimeDiference(...role.period)
                                }
                            </div>
                            <div className="text-[14px] mt-1" dangerouslySetInnerHTML={{ __html: role.description }} />
                            <div className="text-[13px] font-semibold text-primary mt-1 dark:text-primary-dark">
                                <span className="text-dark dark:text-white">
                                    {t(POSIBLE_LOCALS.techs)}:&nbsp;
                                </span>
                                {
                                    role.technologies.join(", ")
                                }.
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Experience;
