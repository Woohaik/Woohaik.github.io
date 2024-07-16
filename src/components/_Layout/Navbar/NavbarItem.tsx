import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavbarItemProps {
    text?: string,
    icon: ReactNode,
    to: string
}

const NavbarItem: FC<NavbarItemProps> = ({ text, icon, to }) => {
    return (
        <NavLink
            className="navlink"
            to={to}
        >
            <div className="hover text-center flex navbar__item place-items-center p-2 rounded-md flex-col-reverse after:bg-primary justify-center cursor-pointer" onClick={() => console.log(to)}>
                {text && <div>{text}</div>}
                {icon}
            </div>
        </NavLink>
    );
};

export default NavbarItem;
