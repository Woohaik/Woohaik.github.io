import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { getResponsiveSize } from "../utils/functions";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import { ResponsiveOptions } from "../utils/types";

const BGParticles: FC = () => {
    const mediaQuerySize = useMediaQuery();

    const responsiveDisplay: ResponsiveOptions = {
        largeLaptop: "block",
        laptop: "block",
        tablet: "none",
        mobile: "none",
        default: "block"
    };

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <Particles
            style={{
                display: getResponsiveSize(mediaQuerySize, responsiveDisplay) as "block" | "none"
            }}
            id="tsparticles"
            init={particlesInit}

            options={{
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 144,
                interactivity: {
                    events: {
                        resize: true
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: false
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    zIndex: {
                        value: -1
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 50
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 5 }
                    }
                }
            }}
        />
    );
};

export default BGParticles;
