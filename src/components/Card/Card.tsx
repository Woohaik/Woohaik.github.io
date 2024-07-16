import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "utils/hooks/useMediaQuery";
import { ResponsiveOptions } from "utils/types";
import { getResponsiveSize } from "utils/functions";

interface IProps {
    children?: ReactNode;
}

const Card: FC<IProps> = ({
    children
}) => {
    const mediaQuerySize = useMediaQuery();

    const responsiveAnimation: ResponsiveOptions = {
        largeLaptop: "-300px",
        laptop: "-300px",
        mobile: "auto",
        tablet: "auto",
        default: "-300px"
    };

    // height calc etc for project view
    const responsiveCardHeight: ResponsiveOptions = {
        largeLaptop: "calc(100% - 50px)",
        mobile: "calc(100% - 50px)",
        tablet: "calc(100% - 50px)",
        laptop: "calc(100% - 50px)",
        default: "calc(100% - 50px)"
    };

    return (
        <motion.div
            exit={{
                opacity: 0,
                left: getResponsiveSize(mediaQuerySize, responsiveAnimation)
            }}
            initial={{
                opacity: 0,
                left: getResponsiveSize(mediaQuerySize, responsiveAnimation)
            }}
            animate={
                {

                    opacity: 1,
                    left: "auto"
                }
            }

            transition={{ type: "spring", bounce: 0.05 }}
            style={{
                height: getResponsiveSize(mediaQuerySize, responsiveCardHeight)
            }}
            className="card flex flex-col absolute rounded-tr-md rounded-br-md py-8 px-5  dark:bg-dark bg-white  md:w-[100%]  w-[95%] " >

            {

                children
            }
        </motion.div >
    );
};

export default Card;
