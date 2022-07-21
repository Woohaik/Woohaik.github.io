import React, { FC } from "react";

interface IProps {
    text?: string,
    title: string,
    children?: React.ReactNode
}

const ColorSquare: FC<IProps> = (props) => {
    return (
        <div className="flex justify-between place-items-center gap-2 pb-2" >
            <div style={{ perspective: "600px" }}>
                <div className="bg-primary rotate-square text-white p-1 pr-2 dark:bg-bg-dark">
                    <div>

                        {props.title}:
                    </div>

                </div>
            </div>
            <div>
                {props.text ?? props.children}
            </div>
        </div>
    );
};

export default ColorSquare;
