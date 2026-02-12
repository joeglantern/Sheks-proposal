import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SaveTheDate = () => {
    return (
        <section className="min-h-screen py-20 px-6 relative flex items-center justify-center">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Save the Date heading */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="font-handwritten text-3xl md:text-4xl text-rose-400 mb-4">
                        Save the Date
                    </p>
                    <h2 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-rose-500 mb-2">
                        February 14
                    </h2>
                    <p className="font-display text-4xl md:text-5xl text-rose-400">
                        2026
                    </p>
                </motion.div>

                {/* Decorative heart */}
                <motion.div
                    className="mb-12"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Heart className="w-20 h-20 md:w-24 md:h-24 mx-auto text-rose-500 fill-current" />
                </motion.div>

                {/* Details card */}
                <motion.div
                    className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-4 border-rose-200/50 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="font-handwritten text-4xl md:text-5xl text-rose-600 mb-8">
                        Let's Make It Special 💕
                    </h3>

                    <div className="space-y-6">
                        <p className="font-body text-xl md:text-2xl leading-relaxed text-soft-black">
                            This Valentine's Day is going to be unforgettable because I get to spend it with you.
                            Every moment together is a gift, and I can't wait to create more beautiful memories! ✨
                        </p>

                        <p className="font-body text-xl md:text-2xl leading-relaxed text-soft-black">
                            You make every day feel like Valentine's Day, and I'm so grateful to have you in my life. 💖
                        </p>
                    </div>

                    {/* Final message */}
                    <motion.div
                        className="mt-10 pt-8 border-t-2 border-rose-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="font-handwritten text-3xl md:text-4xl text-rose-500">
                            I can't wait to celebrate with you! 🌹
                        </p>
                    </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-10 right-10 text-5xl"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    🎁
                </motion.div>

                <motion.div
                    className="absolute bottom-10 left-10 text-5xl"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    💐
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SaveTheDate;
