import { useEffect, useState } from "react";

const THEME = {
    dark: "dark",
    light: "light"
};

export const useDarkMode = (): [boolean, () => void] => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === THEME.dark); // If is not dark by default will be light
    const toggleDarkMode = () => {
        console.log("im here righ");
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const html = window.document.documentElement; // the root html element
        const lastTheme = isDarkMode ? THEME.light : THEME.dark;
        const nextTheme = !isDarkMode ? THEME.light : THEME.dark;
        html.classList.remove(lastTheme);
        html.classList.add(nextTheme);
        localStorage.setItem("theme", nextTheme);
    }, [isDarkMode]); // on theme option change update localstorage

    return [isDarkMode, toggleDarkMode];
};
