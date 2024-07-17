import { t } from "i18next";
import { POSIBLE_LOCALS } from "utils/constants";
import { capitalizeText } from "utils/functions";

type DisplayDateRangeTextParams = { start: string, end: string }

export const displayDateRangeText = ({ start, end }: DisplayDateRangeTextParams) => {
    const startedUniversity = capitalizeText((new Date(start).toLocaleDateString(t(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" })));
    const finisheDUniversity = capitalizeText(new Date(end).toLocaleDateString(t(POSIBLE_LOCALS.locale), { year: "numeric", month: "long" }));
    return `${startedUniversity} - ${finisheDUniversity}`;
};
