import { ResponsiveOptions, ScreenSizeType } from "./types";

export const capitalizeText = (text: string): string => {
    const [firstLetter, ...rest] = text.split("");
    return [firstLetter.toUpperCase(), ...rest].join("");
};

export const getResponsiveSize = (size: ScreenSizeType, desiredOptions: ResponsiveOptions) =>
    desiredOptions[size];
