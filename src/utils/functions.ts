export const capitalizeText = (text: string): string => {
    const [firstLetter, ...rest] = text.split("");
    return [firstLetter.toUpperCase(), ...rest].join("");
};
