import React, { FC } from "react";
import { FlagComponent } from "country-flag-icons/react/3x2";

interface IProps {
    level: number,
    flag: FlagComponent
}

const LanguageLevel: FC<IProps> = (props) => {
    const maxLevel = 9;
    const levelArr = Array.from(Array(maxLevel).keys());
    return (
        <div className="language-level flex gap-3">
            {
                <props.flag height={18} />
            }
            {
                levelArr.map((_, index) =>
                    <div
                        key={`language-l-${index}`}
                        className={
                            `
                            w-[18px] h-[18px] rounded-full language-level__stair
                            ${(index + 1) > props.level ? "bg-gray-400 dark:bg-bg-dark" : "bg-primary dark:bg-gray-300"}  
                            `
                        }
                    />)
            }
        </div >
    );
};

export default LanguageLevel;
