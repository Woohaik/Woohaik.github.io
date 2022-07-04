import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// TODO: ver framer motion para animar algunos textos  https://dev.to/harshhhdev/create-a-satisfying-wavy-text-animation-with-framer-motion-3hb5 ref
interface IProps {
    text?: string,
    icon: ReactNode,
    to: string
}

const NavbarItem: FC<IProps> = (props: IProps) => {
    return (
        <NavLink
            className="navlink"
            to={props.to}
        >
            <div className="hover flex navbar__item place-items-center p-2 rounded-md flex-col-reverse after:bg-primary justify-center cursor-pointer" onClick={() => console.log(props.to)}>

                {
                    props.text
                        ? <div

                        >
                            {props.text}
                        </div>
                        : null
                }
                {
                    props.icon
                }
            </div>
        </NavLink>
    );
};

export default NavbarItem;
