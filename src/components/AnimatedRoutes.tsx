import React from "react";
import { Route, Navigate, useLocation, Routes } from "react-router-dom";
import AboutView from "../views/About";
import ResumeView from "../views/Resume";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<AboutView />} />
                <Route path="/resume" element={<ResumeView />} />
                <Route
                    path="*"
                    element={<Navigate to="/about" replace />}
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
