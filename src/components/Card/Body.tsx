import React, { useRef } from "react";
import me from "assets/me.webp";
import { FaGithub, FaStackOverflow, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { POSIBLE_LOCALS } from "utils/constants";
import { ResponsiveOptions } from "utils/types";
import { getResponsiveSize } from "utils/functions";
import useMediaQuery from "utils/hooks/useMediaQuery";

const Body = () => {
    const location = useLocation();
    const body = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();
    const mediaQuerySize = useMediaQuery();
    const responsiveImageH: ResponsiveOptions = {
        largeLaptop: 380,
        mobile: 330,
        laptop: 340,
        tablet: 350,
        default: 430
    };

    const responsiveImageW: ResponsiveOptions = {
        largeLaptop: 370,
        mobile: 320,
        laptop: 340,
        tablet: 350,
        default: 430
    };

    const marginBySize = () => {
        if (mediaQuerySize === "mobile" || mediaQuerySize === "tablet") {
            if (location.pathname === "/about") {
                return "100px";
            }
            return `calc(${"-" + body.current?.clientHeight + "px"} + 100px)`;
        }
        return "0px";
    };
    return (
        <div
            ref={body}
            style={{
                opacity: (mediaQuerySize === "mobile" || mediaQuerySize === "tablet") ? location.pathname === "/about" ? 1 : 0 : 1,
                marginTop: marginBySize()
            }}
            className="profile md:mt-0 opacity-0   dark:bg-dark z-10 bg-white navbar rounded-md">
            <div style={{
                height: getResponsiveSize(mediaQuerySize, responsiveImageH),
                width: getResponsiveSize(mediaQuerySize, responsiveImageW)
            }} className="rounded-md  mx-auto ">
                <img className="h-[100%] rounded-md lg:w-[450px] sm:w-[400px] object-cover image-clip-path" src={me} alt="" />
            </div>
            <div className="text-center my-5">
                <div className="py-1 text-3xl">Wilfredo Hernández</div>
                <div className="py-1 text-xl">
                    {
                        t(POSIBLE_LOCALS.role)
                    }
                </div>
                <div className="flex gap-[10px] py-3 mb-5 mx-auto w-fit">
                    <a href="https://github.com/Woohaik" className="bigger-on-hover" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://stackoverflow.com/users/17200950/woohaik" className="bigger-on-hover" target="_blank" rel="noreferrer">
                        <FaStackOverflow />
                    </a>
                    <a href="https://www.linkedin.com/in/wilfredo-hndz" className="bigger-on-hover" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <hr />
            <Link className="h-[50px] flex justify-center place-items-center hover cursor-pointer" to={`/files/CV - Wilfredo Hernández ${t(POSIBLE_LOCALS.locale).split("-")[0].toUpperCase()}.pdf`} target="_blank" download>
                {t(POSIBLE_LOCALS.downloadCV)}
            </Link>
        </div>
    );
};

export default Body;
