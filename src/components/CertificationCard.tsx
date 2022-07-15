import React, { FC } from "react";

interface IProps {
    imageUrl: string,
    title: string,
    link: string
}

const CertificationCard: FC<IProps> = (props) => {
    return (
        <a target="_blank" rel="noreferrer" href={props.link} className="certification-card relative py-1 after:absolute after:w-[100%] after:h-[100%] after:cursor-pointer">
            <img className="w-auto mx-auto h-[130px] object-cover transition-all" src={props.imageUrl} alt="project preview" />
            <div className="px-2 pt-2 text-[15px] text-center font-medium">
                {props.title}
            </div>
        </a>
    );
};

export default CertificationCard;
