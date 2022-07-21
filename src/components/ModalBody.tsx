import React, { FC } from "react";

interface IProps {
    children?: React.ReactNode
}

const ModalBody: FC<IProps> = (props) => {
    return (
        <div>
            {
                props.children
            }
        </div>
    );
};

export default ModalBody;
