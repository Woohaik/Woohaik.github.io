import { useEffect, useState } from "react";
import i18n from "i18next";
import { ILocals } from "../types";
import { LANGUAGES } from "../constants";

export const useLocales = (): [ILocals, (newLocale: ILocals) => void] => {
    const [currentLocale, setCurrentLocale] = useState<ILocals>(() => localStorage.getItem("locale") as ILocals ?? LANGUAGES.es); // If is not use "es"
    const setLocale = (newLocale: ILocals) => {
        setCurrentLocale(newLocale);
    };
    useEffect(() => {
        i18n.changeLanguage(currentLocale);
        localStorage.setItem("locale", currentLocale);
    }, [currentLocale]); // on locale option change update localstorage

    return [currentLocale, setLocale];
};
