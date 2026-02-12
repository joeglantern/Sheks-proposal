import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { loadHeartShape } from 'tsparticles-shape-heart';

const ParticleEffect = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
        await loadHeartShape(engine);
    }, []);

    const particlesConfig = {
        background: {
            color: { value: "transparent" }
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 20,
                density: { enable: true, value_area: 800 }
            },
            color: {
                value: ["#fb7185", "#f472b6", "#a78bfa"]
            },
            shape: {
                type: "heart"
            },
            opacity: {
                value: 0.3,
                random: true,
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1
                }
            },
            size: {
                value: 8,
                random: { enable: true, minimumValue: 4 }
            },
            move: {
                enable: true,
                speed: 1,
                direction: "top",
                random: true,
                straight: false,
                outModes: { default: "out" }
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    distance: 100,
                    size: 12,
                    duration: 2,
                    opacity: 0.6
                }
            }
        },
        detectRetina: true
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
};

export default ParticleEffect;
