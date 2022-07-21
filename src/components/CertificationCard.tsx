import React, { FC } from "react";
import { getResponsiveSize } from "../utils/functions";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { ResponsiveOptions } from "../utils/types";

interface IProps {
    imageUrl: string,
    title: string,
    link: string
}

const CertificationCard: FC<IProps> = (props) => {
    const mediaQuerySize = useMediaQuery();

    const responsiveImgSize: ResponsiveOptions = {
        largeLaptop: 115,
        mobile: 95,
        laptop: 100,
        tablet: 110,
        default: 120
    };

    return (
        <a target="_blank" rel="noreferrer" href={props.link} className="overflow-hidden certification-card relative py-1 after:absolute after:w-[100%] after:h-[100%] after:cursor-pointer">
            <img style={{
                height: getResponsiveSize(mediaQuerySize, responsiveImgSize)
            }} className="certification-card__img w-auto mx-auto transition-all" src={props.imageUrl} alt="project preview" />
            <div className="certification-card__text px-2 pt-2 text-[15px] text-center font-medium">
                {props.title}
            </div>
        </a>
    );
};

export default CertificationCard;
