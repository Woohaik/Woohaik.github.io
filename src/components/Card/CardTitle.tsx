import React, { FC } from "react";

interface IProps {
    html: string
}

const CardTitle: FC<IProps> = (props) => {
    return (
        <div className=" card__title relative text-xl pb-5 bg-white dark:bg-dark font-semibold" dangerouslySetInnerHTML={{ __html: props.html }} />
    );
};

export default CardTitle;
