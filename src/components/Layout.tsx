import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

const Layout = () => {
    return (
        <div className="max-w-[1240px]">
            <div className="w-[1240px] mx-auto flex my-auto ">
                <Body />
                <div className="card-area relative w-[100%]">
                    <AnimatedRoutes />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Layout;
