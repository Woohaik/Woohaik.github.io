import React, { FC } from "react";
import { IExperience } from "../utils/types";
import Datedif from "date-diff";
import { useTranslation } from "react-i18next";
import { POSIBLE_LOCALS } from "../utils/constants";

interface IProps {
    experience: IExperience
}

const Experience: FC<IProps> = (props) => {
    const { t } = useTranslation();
    const toLocaleDateString = (date: Date) => {
        const traducedDate = date.toLocaleDateString(t(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" });
        const [firstLetter, ...rest] = traducedDate.split("");
        return [firstLetter.toUpperCase(), ...rest].join("");
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
        <div className="flex experience gap-7 mb-3">
            <div className="experience__company text-right">
                <div className="text-[15px] font-medium">
                    {
                        props.experience.place.name

                    }
                </div>
                <img className="ml-auto h-[100px] mt-2" src={require(`./../assets/${props.experience.place.logoUrl}`)} alt={`${props.experience.place.name} - logo`} />
            </div>

            <div className="experience__timeline relative flex flex-col gap-5 flex-1">
                {
                    props.experience.roles.map(role =>
                        <div className="experience__timeline__item relative" key={role.role + props.experience.place.name}>
                            <div className="experience__timeline__item__title relative text-[16px] font-medium">
                                {role.role}
                            </div>
                            <div className="text-[12px] mt-1 dark:text-primary-dark">
                                {
                                    calcTimeDiference(...role.period)
                                }
                            </div>
                            <div className="text-[13px] mt-1" dangerouslySetInnerHTML={{ __html: role.description }} />
                            <div className="text-[12px] font-medium text-primary mt-1 dark:text-primary-dark">
                                <span className="text-dark dark:text-white">
                                    Tecnologias:&nbsp;
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
