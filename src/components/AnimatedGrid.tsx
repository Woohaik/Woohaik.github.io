import React, { FC } from "react";

interface IProps {
    columns: number;
    gap?: number,

    itemHeight: number;
    children?: React.ReactNode[];
}

const AnimatedGrid: FC<IProps> = (props) => {
    if (!props.children) return null;
    if (props.columns <= 0) return null;
    if (props.gap && props.gap < 0) return null;
    const gap = props.gap ?? 0;
    const elementSize = (100) / props.columns;
    const stringCalcElementSize = `calc(${elementSize}% - ${(gap / props.columns) * (props.columns - 1)}px)`;

    return (

        <div className="relative bg-red-600">
            {
                props.children.map((child, index) =>
                    <div className="absolute bg-blue-600" key={index} style={{
                        border: "red 1px solid",
                        width: stringCalcElementSize,
                        height: props.itemHeight,
                        top: (Math.floor((index) / props.columns) * props.itemHeight) + gap * Math.floor((index) / props.columns),
                        left: `calc(calc(${stringCalcElementSize}*${(index % props.columns)} ) + ${gap * (index % props.columns)}px)`
                    }}>
                        {child}
                    </div>)
            }
        </div >
    );
};

export default AnimatedGrid;
