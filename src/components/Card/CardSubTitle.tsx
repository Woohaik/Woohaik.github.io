import React, { FC } from "react";

interface IProps {
    html: string,
    icon?: React.ReactNode,
    children?: React.ReactNode
}

const CardSubTitle: FC<IProps> = (props) => {
    return (
        <>
            <div className=" card__title sticky top-[-1px] flex justify-between text-xl mb-4 pb-3 mt-3 text-[18px] bg-white dark:bg-dark font-semibold z-10">
                <span className="flex justify-center place-items-center gap-3">
                    <span className="text-[20px]">
                        {props.icon}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: props.html }} />
                </span>

            </div>
        </>
    );
};

export default CardSubTitle;
