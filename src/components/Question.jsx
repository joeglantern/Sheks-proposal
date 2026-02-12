import { motion } from 'framer-motion';
import InteractiveButtons from './InteractiveButtons';
import Sparkle from './decorative/Sparkle';

const Question = ({ onYes }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 relative">
            {/* Decorative sparkles */}
            <Sparkle size={24} delay={0} className="top-20 left-1/4 text-amber-300" />
            <Sparkle size={20} delay={0.5} className="top-32 right-1/3 text-rose-300" />
            <Sparkle size={28} delay={1} className="bottom-40 left-1/3 text-violet-300" />
            <Sparkle size={22} delay={1.5} className="bottom-32 right-1/4 text-pink-300" />

            <motion.div
                className="text-center max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Intro messages */}
                <motion.p
                    className="font-handwritten text-2xl md:text-3xl text-rose-500 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    I know I'm late, this took long to make 😂
                </motion.p>

                <motion.p
                    className="font-body text-lg md:text-xl text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    Try to click NO 😏
                </motion.p>

                {/* The main question */}
                <motion.h2
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-16 text-soft-black leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Will You Be My Valentine? <motion.span
                        className="inline-block"
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                    >
                        💝
                    </motion.span>
                </motion.h2>

                {/* Interactive buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <InteractiveButtons onYes={onYes} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Question;
