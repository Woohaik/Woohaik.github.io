import React, { FC } from "react";

interface AnimatedGridProps {
    columns: number;
    gap?: number,
    animationDuration?: number;
    itemHeight: number;
    conditionToShow?: boolean[],
    children?: React.ReactNode[];
}

const AnimatedGrid: FC<AnimatedGridProps> = ({
    children,
    columns,
    itemHeight,
    animationDuration = 0.5,
    conditionToShow,
    gap = 15
}) => {
    if (!children) return null;
    if (columns <= 0) return null;

    const elementSize = (100) / columns;
    const stringCalcElementSize = `calc(${elementSize}% - ${(gap / columns) * (columns - 1)}px)`;

    const getSymbolicIndex = (realIndex: number) => {
        const auxShowCondition = Array.isArray(conditionToShow) ? conditionToShow : children ? children.map(() => true) : [true];
        const arrayUntilHere = auxShowCondition.slice(0, realIndex + 1);
        const countTrues = arrayUntilHere.filter(el => el).length - 1; // how many trues are over here.
        const indexToSymbol = countTrues;
        const top = (Math.floor((indexToSymbol) / columns) * itemHeight) + gap * Math.floor((indexToSymbol) / columns);
        const left = `calc(calc(${stringCalcElementSize}*${(indexToSymbol % columns)} ) + ${gap * (indexToSymbol % columns)}px)`;
        return {
            opacity: auxShowCondition[realIndex] ? 1 : 0,
            top: auxShowCondition[realIndex] ? top : 0,
            left: auxShowCondition[realIndex] ? left : 0,
            transform: `scale(${auxShowCondition[realIndex] ? 1 : 0})`
        };
    };

    return (
        <div className="relative">
            {
                children.map((Children, index) =>
                    <div className="absolute animatedxd" key={Children?.toString()} style={{
                        transition: `all ${animationDuration}s`,
                        width: stringCalcElementSize,
                        overflow: "hidden",
                        height: itemHeight,
                        ...getSymbolicIndex(index)
                    }}>
                        {Children}
                    </div>)
            }
        </div >
    );
};

export default AnimatedGrid;
