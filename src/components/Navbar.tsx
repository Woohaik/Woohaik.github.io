import React from "react";
import DarkMode from "./Navbar/DarkMode";
import NavbarItem from "./Navbar/NavbarItem";
import { FaBriefcase, FaUser, FaFile, FaAddressBook } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="max-w-[1240px] mx-auto flex gap-8 justify-end">
            <div className="navbar rounded-md h-auto flex gap-14 p-3 justify-between  max-w-[1240px] dark:bg-dark bg-white">
                <NavbarItem
                    to="/about"
                    icon={<FaUser className="w-5 h-5" />}
                    text="Sobre mi"
                />
                <NavbarItem
                    to="/resume"
                    icon={<FaFile className="w-5 h-5" />}
                    text="Curriculum"

                />
                <NavbarItem
                    to="/projects"
                    icon={<FaBriefcase className="w-5 h-5" />}
                    text="Proyectos"
                />
                <NavbarItem
                    to="/contact"
                    icon={<FaAddressBook className="w-5 h-5" />}
                    text="Contacto"
                />
            </div>
            <div className="navbar  rounded-md h-auto flex  justify-between  dark:bg-dark bg-white hover">
                <DarkMode />
            </div>
        </div>
    );
};

export default Navbar;
