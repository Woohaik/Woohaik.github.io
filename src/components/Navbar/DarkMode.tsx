import React, { FC } from "react";
import { useDarkMode } from "../../utils/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
const DarkMode: FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <div onClick={() => toggleDarkMode()} className=" rounded-md h-auto flex   px-6 cursor-pointer place-items-center justify-between  dark:bg-dark bg-white hover">
            {
                isDarkMode
                    ? <FaMoon className="w-8 h-8" />
                    : <FaSun className="w-8 h-8" />
            }
        </div>
    );
};

export default DarkMode;
