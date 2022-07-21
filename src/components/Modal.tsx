import React, { FC, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        width: "90%",
        maxWidth: "675px",
        right: "auto",
        maxHeight: "80vh",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

interface IProps {
    changeState: number,
    children?: React.ReactNode
}

const AppModal: FC<IProps> = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    useEffect(() => {
        if (props.changeState > 0) {
            openModal();
        }
    }, [props.changeState]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {props.children}
        </Modal>
    );
};

export default AppModal;
