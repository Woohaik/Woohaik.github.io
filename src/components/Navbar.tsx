import React, { useEffect, useState } from "react";
import DarkMode from "./Navbar/DarkMode";
import NavbarItem from "./Navbar/NavbarItem";
import { FaBriefcase, FaUser, FaFile, FaAddressBook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { posibleLocals } from "../utils/translations";
import i18n from "i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const [selectedLang, setSelectedLang] = useState<string>("es");

    useEffect(() => {
        i18n.changeLanguage(selectedLang);
    }, [selectedLang]);

    return (
        <div className="max-w-[1240px] mx-auto flex gap-8 justify-end">
            <div className="navbar  rounded-md h-auto flex  justify-between  dark:bg-dark bg-white hover">
                <select value={selectedLang} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedLang(event.target.value);
                }}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>
            <div className="navbar rounded-md h-auto flex gap-12 p-3 justify-between  max-w-[1240px] dark:bg-dark bg-white">
                <NavbarItem
                    to="/about"
                    icon={<FaUser className="w-5 h-5" />}
                    text={t(posibleLocals.about)}
                />
                <NavbarItem
                    to="/resume"
                    icon={<FaFile className="w-5 h-5" />}
                    text={t(posibleLocals.resume)}

                />
                <NavbarItem
                    to="/projects"
                    icon={<FaBriefcase className="w-5 h-5" />}
                    text={t(posibleLocals.projects)}
                />
                <NavbarItem
                    to="/contact"
                    icon={<FaAddressBook className="w-5 h-5" />}
                    text={t(posibleLocals.contact)}
                />
            </div>
            <DarkMode />
        </div>
    );
};

export default Navbar;
