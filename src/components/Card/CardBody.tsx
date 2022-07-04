import React, { FC } from "react";

interface IProps {
    children?: React.ReactNode
}

const CardBody: FC<IProps> = (props) => {
    return (
        <div className="card__body  mt-5 px-4 text-justify flex-1">
            {
                props.children
            }
        </div>
    );
};

export default CardBody;
