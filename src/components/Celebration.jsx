import { motion } from 'framer-motion';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Heart, Sparkles, Gift } from 'lucide-react';
import HandDrawnHeart from './decorative/HandDrawnHeart';

const Celebration = () => {
    const [showConfetti, setShowConfetti] = useState(true);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 relative">
            {/* Confetti explosion */}
            {showConfetti && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                    <ConfettiExplosion
                        force={0.8}
                        duration={3500}
                        particleCount={250}
                        width={1600}
                        colors={['#fb7185', '#f472b6', '#a78bfa', '#fde68a', '#f9a8d4']}
                        onComplete={() => setShowConfetti(false)}
                    />
                </div>
            )}

            <motion.div
                className="text-center max-w-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Celebration emoji */}
                <motion.div
                    className="text-8xl mb-8"
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.8 }}
                >
                    🎉
                </motion.div>

                {/* Main celebration message */}
                <motion.h2
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-soft-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Yay! You made me the happiest! 💕
                </motion.h2>

                {/* Heartbeat animation */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <HandDrawnHeart
                        size={100}
                        className="text-rose-500 animate-heartbeat"
                    />
                </motion.div>

                {/* Personal message - Parchment Scroll */}
                <motion.div
                    className="relative mb-12 max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    {/* Parchment scroll background */}
                    <div className="relative">
                        <img
                            src={`${import.meta.env.BASE_URL}pngtree-aged-parchment-scroll-with-authentic-old-paper-texture-png-image_21093002.png`}
                            alt="Parchment scroll"
                            className="w-full h-auto"
                        />
                        {/* Text overlay on parchment - carefully positioned */}
                        <div className="absolute top-[18%] bottom-[18%] left-[15%] right-[15%] flex flex-col items-center justify-center">
                            <p className="font-handwritten text-lg md:text-2xl lg:text-3xl text-rose-700 mb-2 md:mb-4 text-center leading-tight px-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                I can't wait to spend this Valentine's Day with you! 💝
                            </p>
                            <p className="font-body text-xs md:text-base lg:text-lg text-amber-900 leading-snug text-center px-4" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>
                                Every moment with you is special, and I'm so grateful to have you in my life.
                                You make every day feel like Valentine's Day! ✨
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative icons */}
                <motion.div
                    className="flex justify-center gap-8 text-rose-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="w-8 h-8" fill="currentColor" />
                    </motion.div>
                </motion.div>

                {/* Date reminder */}
                <motion.p
                    className="mt-12 font-body text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    Save the date: <span className="font-semibold text-rose-500">February 14, 2026</span> 📅
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Celebration;
