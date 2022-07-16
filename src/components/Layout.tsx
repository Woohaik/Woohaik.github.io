import React from "react";
import Body from "./Card/Body";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";
import BGParticles from "./Particles";

const Layout = () => {
    return (
        <div className="max-w-[1175px]">

            <BGParticles />
            <div className="w-[1175px] mx-auto flex my-auto ">
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
