import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BGParticles: FC = () => {
    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}

            options={{
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 120,
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
                        enable: true
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
                        value: 60
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
