import React, { FC } from "react";
import { useDarkMode } from "../../utils/hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
const DarkMode: FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <div onClick={() => toggleDarkMode()} className=" rounded-md h-auto flex  z-10 px-5 lg:px-6 cursor-pointer place-items-center justify-between  dark:bg-dark bg-white hover">
            {
                isDarkMode
                    ? <FaMoon className="lg:w-8 md:w-7 lg:h-8 md:h-7 h-6 w-6" />
                    : <FaSun className="lg:w-8 md:w-7 lg:h-8 md:h-7 h-6 w-6" />
            }
        </div>
    );
};

export default DarkMode;
