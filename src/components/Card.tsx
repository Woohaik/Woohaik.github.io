import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IProps {
    children?: ReactNode;
}

const Card: FC<IProps> = ({
    children
}) => {
    return (
        <motion.div
            exit={{
                opacity: 0,
                left: "-300px"
            }}
            initial={{
                opacity: 0,
                left: "-300px"
            }}
            animate={
                {
                    opacity: 1,
                    left: "0px"
                }
            }
            transition={{ type: "spring", bounce: 0.05 }}
            className="card  absolute rounded-tr-md rounded-br-md p-4 pl-7 dark:bg-dark bg-white h-[100%] w-[100%]" >
            {
                children
            }
        </motion.div >
    );
};

export default Card;
