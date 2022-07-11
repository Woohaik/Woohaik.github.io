import React from "react";
import me from "./../assets/me.webp";
import { FaGithub, FaStackOverflow, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { POSIBLE_LOCALS } from "../utils/constants";

const Body = () => {
    const { t } = useTranslation();
    return (
        <div className="profile dark:bg-dark z-10 bg-white navbar rounded-md">
            <div className="h-[420px] w-[420px] rounded-md">
                <img className="h-[100%] rounded-md w-[450px] object-cover image-clip-path" src={me} alt="" />
            </div>
            <div className="text-center my-5">
                <div className="py-1 text-3xl">Wilfredo Hernández</div>
                <div className="py-1 text-xl">
                    {
                        t(POSIBLE_LOCALS.role)
                    }
                </div>
                <div className="flex gap-[10px] py-3 mb-5 mx-auto w-fit">
                    <a href="https://github.com/Woohaik" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://stackoverflow.com/users/17200950/woohaik" target="_blank" rel="noreferrer">
                        <FaStackOverflow />
                    </a>
                    <a href="https://www.linkedin.com/in/wilfredo-hndz" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <hr />
            <Link className="h-[50px] flex justify-center place-items-center hover cursor-pointer" to="/files/Wilfredo-Hernandez-CV.pdf" target="_blank" download>
                {t(POSIBLE_LOCALS.downloadCV)}
            </Link>
        </div>
    );
};

export default Body;
