import React, { FC } from "react";

interface IProps {
    html: string,
    children?: React.ReactNode
}

const CardTitle: FC<IProps> = (props) => {
    return (
        <>
            <div className=" card__title relative flex justify-between text-xl pb-5 px-4 bg-white dark:bg-dark font-semibold">
                <div dangerouslySetInnerHTML={{ __html: props.html }} />
                {
                    props.children
                }
            </div>
        </>
    );
};

export default CardTitle;
