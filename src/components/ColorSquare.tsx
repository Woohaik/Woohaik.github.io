import React, { FC } from "react";

interface IProps {
    text?: string,
    title: string,
    children?: React.ReactNode
}

const ColorSquare: FC<IProps> = (props) => {
    return (
        <div className="flex justify-between place-items-center pb-2">
            <div className="bg-primary text-white p-1 pr-2 dark:bg-bg-dark">{props.title}:  </div>
            <div>
                {props.text ?? props.children}
            </div>
        </div>
    );
};

export default ColorSquare;
