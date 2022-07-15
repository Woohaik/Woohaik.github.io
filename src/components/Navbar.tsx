import React from "react";
import DarkMode from "./Navbar/DarkMode";
import NavbarItem from "./Navbar/NavbarItem";
import { FaBriefcase, FaUser, FaFile, FaAddressBook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ILocals } from "../utils/types";
import { POSIBLE_LOCALS } from "../utils/constants";
import { useLocales } from "../utils/useLocales";

const Navbar = () => {
    const { t } = useTranslation();
    const [currentLocale, setCurrentLocale] = useLocales();

    return (
        <div className="max-w-[1240px] mx-auto flex gap-7  justify-end">
            <div className="navbar   rounded-md h-auto flex  z-10  justify-between  dark:bg-dark bg-white hover">
                <select className="dark:bg-dark rounded-md" value={currentLocale} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setCurrentLocale(event.target.value as ILocals);
                }}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>
            <div className="navbar rounded-md h-auto flex gap-10 p-3  z-10  justify-between dark:bg-dark bg-white  max-w-[1240px] ">
                <NavbarItem
                    to="/about"
                    icon={<FaUser className="w-5 h-5" />}
                    text={t(POSIBLE_LOCALS.about)}
                />
                <NavbarItem
                    to="/resume"
                    icon={<FaFile className="w-5 h-5" />}
                    text={t(POSIBLE_LOCALS.resume)}

                />
                <NavbarItem
                    to="/projects"
                    icon={<FaBriefcase className="w-5 h-5" />}
                    text={t(POSIBLE_LOCALS.projects)}
                />
                <NavbarItem
                    to="/contact"
                    icon={<FaAddressBook className="w-5 h-5" />}
                    text={t(POSIBLE_LOCALS.contact)}
                />
            </div>
            <DarkMode />
        </div>
    );
};

export default Navbar;
