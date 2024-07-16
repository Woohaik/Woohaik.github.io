import { ResponsiveOptions, ScreenSizeType } from "./types";

export const capitalizeText = (text: string): string => {
    const [firstLetter, ...rest] = text.split("");
    return [firstLetter.toUpperCase(), ...rest].join("");
};

export const getResponsiveSize = (size: ScreenSizeType, desiredOptions: ResponsiveOptions) =>
    desiredOptions[size];

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

export const getAge = (birthDate: Date) =>
    Math.floor((new Date().getTime() - birthDate.getTime()) / MS_PER_YEAR);
