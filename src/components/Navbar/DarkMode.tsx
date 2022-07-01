import React, { FC } from "react";
import { useDarkMode } from "../../utils/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
const DarkMode: FC = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <div onClick={() => toggleDarkMode()} className="flex w-[100%] px-6 justify-center place-items-center cursor-pointer">
            <div className="w-8 h-8" >
                {
                    isDarkMode
                        ? <FaMoon className="w-8 h-8" />
                        : <FaSun className="w-8 h-8" />
                }
            </div>
        </div>
    );
};

export default DarkMode;
