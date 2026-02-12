import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { useState } from 'react';

const LoveLetter = () => {
    const [envelopeOpen, setEnvelopeOpen] = useState(false);

    return (
        <section className="min-h-screen py-20 px-6 relative flex items-center justify-center">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Section title */}
                <motion.h2
                    className="text-center font-handwritten text-5xl md:text-6xl text-rose-500 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    A Message for You 💌
                </motion.h2>

                {/* Envelope container */}
                <div className="relative">
                    {/* Envelope */}
                    <motion.div
                        className="relative cursor-pointer"
                        onClick={() => setEnvelopeOpen(true)}
                        whileHover={{ scale: envelopeOpen ? 1 : 1.05 }}
                    >
                        {/* Envelope background */}
                        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg p-8 md:p-12 shadow-xl border-4 border-rose-200/50">
                            {/* Envelope flap (animated) */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-rose-200 to-pink-200 origin-top"
                                style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
                                animate={envelopeOpen ? { rotateX: 180, y: -20 } : { rotateX: 0, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            {/* Letter content */}
                            <motion.div
                                className="relative z-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={envelopeOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: envelopeOpen ? 0.5 : 0 }}
                            >
                                {!envelopeOpen ? (
                                    // Prompt to open
                                    <div className="text-center py-12">
                                        <Mail className="w-16 h-16 mx-auto mb-4 text-rose-400" />
                                        <p className="font-handwritten text-2xl text-rose-600">
                                            Click to open 💕
                                        </p>
                                    </div>
                                ) : (
                                    // Letter content
                                    <div className="space-y-6 text-soft-black">
                                        <p className="font-handwritten text-2xl md:text-3xl text-rose-600 mb-8">
                                            My Dearest Sheks,
                                        </p>

                                        <p className="font-body text-lg md:text-xl leading-relaxed">
                                            Every moment with you feels like a dream I never want to wake up from.
                                            Your smile lights up my world, and your laughter is the most beautiful
                                            melody I've ever heard.
                                        </p>

                                        <p className="font-body text-lg md:text-xl leading-relaxed">
                                            From the first time we met, I knew there was something special about you.
                                            You make every day brighter, every challenge easier, and every celebration
                                            more meaningful. You are my best friend, my partner, and my everything.
                                        </p>

                                        <p className="font-body text-lg md:text-xl leading-relaxed">
                                            I can't imagine my life without you in it. You've shown me what true
                                            love feels like, and I'm so grateful for every second we spend together.
                                        </p>

                                        <p className="font-handwritten text-3xl md:text-4xl text-rose-600 mt-12 text-center">
                                            Nakupenda 💕
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Decorative hearts */}
                    <motion.div
                        className="absolute -top-6 -right-6 text-5xl"
                        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        💕
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-6 -left-6 text-5xl"
                        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        💖
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default LoveLetter;
