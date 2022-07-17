import { useEffect, useState } from "react";
import { SCREEN_SIZES } from "../constants";
import { ScreenSizeType } from "../types";

const findLargesMinimun = () => {
    const maxKey = Object.entries(SCREEN_SIZES).sort((a, b) => a[1] - b[1]).find(el => el[1] >= window.innerWidth)![0] as ScreenSizeType;
    return maxKey;
};

const useMediaQuery = () => {
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        size: findLargesMinimun()
    });

    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth;
            const size = findLargesMinimun();
            setState({ windowWidth: currentWindowWidth, size });
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [state.windowWidth]);

    return state.size;
};

export default useMediaQuery;
