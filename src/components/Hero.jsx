import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import FloatingElement from './decorative/FloatingElement';
import HandDrawnHeart from './decorative/HandDrawnHeart';

const pageVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2
        }
    }
};

const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Hero = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center p-6 relative"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            {/* Decorative sparkles */}
            <FloatingElement delay={0.5} className="absolute top-20 right-20">
                <Sparkles className="w-8 h-8 text-amber-200" />
            </FloatingElement>

            <FloatingElement delay={1} className="absolute bottom-32 left-20">
                <Heart className="w-10 h-10 text-rose-400" />
            </FloatingElement>

            {/* 3D Flower Bouquet - positioned on the right side with pop-out effect */}
            <motion.div
                className="absolute right-2 sm:right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-24 sm:w-48 md:w-72 lg:w-96 z-20 opacity-60 sm:opacity-100"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{
                    opacity: [0.6, 1],
                    x: 0,
                    scale: 1,
                    y: [0, -12, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.5 },
                    x: { duration: 1.2, delay: 1.5 },
                    scale: { duration: 1.2, delay: 1.5 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
                }}
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                }}
            >
                <img
                    src="/flower-bouquet.png"
                    alt="Flower bouquet"
                    className="w-full h-auto"
                    style={{
                        filter: 'drop-shadow(15px 15px 30px rgba(244, 63, 94, 0.25)) drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.15))',
                        transform: 'rotateY(-12deg) rotateX(3deg) translateZ(30px)',
                    }}
                />
            </motion.div>

            {/* Valentine's Love Tree Frame - positioned on the left side */}
            <motion.div
                className="absolute left-2 sm:left-4 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-20 sm:w-40 md:w-56 lg:w-72 z-20 opacity-60 sm:opacity-100"
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{
                    opacity: [0.6, 1],
                    x: 0,
                    scale: 1,
                    y: [0, -10, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.7 },
                    x: { duration: 1.2, delay: 1.7 },
                    scale: { duration: 1.2, delay: 1.7 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }
                }}
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                }}
            >
                <img
                    src="/love-tree.png"
                    alt="Valentine's love tree"
                    className="w-full h-auto"
                    style={{
                        filter: 'drop-shadow(12px 12px 25px rgba(244, 63, 94, 0.2)) drop-shadow(3px 3px 12px rgba(0, 0, 0, 0.12))',
                        transform: 'rotateY(8deg) rotateX(-2deg) translateZ(25px)',
                    }}
                />
            </motion.div>

            <motion.div
                className="text-center max-w-3xl"
                variants={childVariants}
            >
                {/* Main greeting */}
                <motion.h1
                    className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 text-soft-black"
                    variants={childVariants}
                >
                    Hey Sheks <motion.span
                        className="inline-block"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    >
                        ❤️
                    </motion.span>
                </motion.h1>

                {/* Hand-drawn heart illustration */}
                <motion.div
                    className="flex justify-center mb-12"
                    variants={childVariants}
                >
                    <FloatingElement>
                        <HandDrawnHeart
                            size={120}
                            className="text-rose-500 animate-heartbeat"
                        />
                    </FloatingElement>
                </motion.div>

                {/* Personal message */}
                <motion.p
                    className="font-handwritten text-3xl md:text-4xl text-rose-600 mb-12"
                    variants={childVariants}
                >
                    I have something special to ask you...
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    className="mt-16"
                    variants={childVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <p className="text-gray-500 text-sm mb-2">Scroll down</p>
                    <div className="w-6 h-10 border-2 border-rose-300 rounded-full mx-auto flex justify-center">
                        <motion.div
                            className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
