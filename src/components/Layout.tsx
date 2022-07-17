import React from "react";
import Body from "./Card/Body";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";
import BGParticles from "./Particles";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { ResponsiveOptions } from "../utils/types";
import { getResponsiveSize } from "../utils/functions";

const Layout = () => {
    const mediaQuerySize = useMediaQuery();

    const responsiveLayoutSize: ResponsiveOptions = {
        largeLaptop: 1130,
        mobile: 900,
        laptop: 1000,
        tablet: 1100,
        default: 1200
    };

    const flexDirection: ResponsiveOptions = {
        default: "row",
        largeLaptop: "row",
        laptop: "row",
        tablet: "col",
        mobile: "col"
    };

    const flexCol: ResponsiveOptions = {
        default: "col",
        largeLaptop: "col",
        laptop: "col",
        tablet: "col-reverse",
        mobile: "col-reverse"
    };

    return (
        <div className={`w-[95%] flex mx-auto gap-3 flex-${getResponsiveSize(mediaQuerySize, flexCol)}`} style={{ maxWidth: `${getResponsiveSize(mediaQuerySize, responsiveLayoutSize)}px` }}>
            <BGParticles />
            <div className={`w-[100%] mx-auto flex my-auto  flex-${getResponsiveSize(mediaQuerySize, flexDirection)}`} >
                <Body />
                <div className="card-area relative w-[100%]">
                    <AnimatedRoutes />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Layout;
