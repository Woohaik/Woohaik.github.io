import React from "react";
import DarkMode from "../DarkMode";
import NavbarItem from "./NavbarItem";
import { FaBriefcase, FaUser, FaFile } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { POSIBLE_LOCALS } from "utils/constants";
import { useLocales } from "utils/hooks/useLocales";
import { ILocals } from "utils/types";

const Navbar = () => {
    const { t } = useTranslation();
    const [currentLocale, setCurrentLocale] = useLocales();

    return (
        <div
            className="ml-auto w-[100%] border-b-4 md:dark:border-transparent dark:border-white border-primary md:border-transparent md:sticky fixed  top-0 left-0 lg:text-[16px] md:bg-transparent md:dark:bg-transparent bg-white dark:bg-dark sm:text-[14px] text-[13px] flex lg:gap-7 md:gap-4 sm:gap-2 z-10 gap-0 md:w-fit lg:w-fit justify-between lg:justify-end">
            <div
                className="navbar  lg:gap-10 md:gap-8 sm:gap-7 gap-2  overflow-hidden rounded-md h-auto flex  p-3 z-10  justify-between dark:bg-dark bg-white "
            >
                <NavbarItem
                    to="/about"
                    icon={<FaUser className="lg:w-5 w-4 h-4 lg:h-5" />}
                    text={t(POSIBLE_LOCALS.about)}
                />
                <NavbarItem
                    to="/resume"
                    icon={<FaFile className="lg:w-5 w-4 h-4 lg:h-5" />}
                    text={t(POSIBLE_LOCALS.resume)}
                />
                <NavbarItem
                    to="/projects"
                    icon={<FaBriefcase className="lg:w-5 w-4 h-4 lg:h-5" />}
                    text={t(POSIBLE_LOCALS.projects)}
                />
                <div className="language-select lg:after:block lg:after:left-[-25px] md:after:left-[-20px] md:after:block after:hidden rounded-md h-auto flex z-10 justify-between  ">
                    <select className="dark:bg-dark rounded-md " value={currentLocale} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setCurrentLocale(event.target.value as ILocals);
                    }}>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </div>
            <DarkMode />
        </div>
    );
};

export default Navbar;
