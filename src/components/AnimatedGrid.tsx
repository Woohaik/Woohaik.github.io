import React, { FC } from "react";

interface IProps {
    columns: number;
    gap?: number,
    animationDuration: number;
    itemHeight: number;
    conditionToShow: boolean[],
    children?: React.ReactNode[];
}

const AnimatedGrid: FC<IProps> = (props) => {
    if (!props.children) return null;
    if (props.columns <= 0) return null;
    if (props.gap && props.gap < 0) return null;
    const gap = props.gap ?? 0;
    const elementSize = (100) / props.columns;
    const stringCalcElementSize = `calc(${elementSize}% - ${(gap / props.columns) * (props.columns - 1)}px)`;

    const getSymbolicIndex = (realIndex: number) => {
        const arrayUntilHere = props.conditionToShow.slice(0, realIndex + 1);
        const countTrues = arrayUntilHere.filter(el => el).length - 1; // how many trues are over here OMG.
        const indexToSymbol = countTrues;
        const top = (Math.floor((indexToSymbol) / props.columns) * props.itemHeight) + gap * Math.floor((indexToSymbol) / props.columns);
        const left = `calc(calc(${stringCalcElementSize}*${(indexToSymbol % props.columns)} ) + ${gap * (indexToSymbol % props.columns)}px)`;
        return {
            opacity: props.conditionToShow[realIndex] ? 1 : 0,
            top: props.conditionToShow[realIndex] ? top : 0,
            left: props.conditionToShow[realIndex] ? left : 0,
            transform: `scale(${props.conditionToShow[realIndex] ? 1 : 0})`
        };
    };
    return (
        <div className="relative">
            {
                props.children.map((Children, index) =>
                    <div className="absolute animatedxd" key={index} style={{
                        transition: `all ${props.animationDuration}s`,
                        width: stringCalcElementSize,
                        overflow: "hidden",
                        height: props.itemHeight,
                        ...getSymbolicIndex(index)
                    }}>
                        {Children}
                    </div>)
            }
        </div >
    );
};

export default AnimatedGrid;
