import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Media items
const mediaItems = [
    { src: '/memories/8E44B908-0B69-43F9-8E86-D2E29D8974D7.MP4', type: 'video' },
    { src: '/memories/C4F27B08-CF38-4719-B674-D2374D2A1F8C.MP4', type: 'video' },
    { src: '/memories/VIDEO-2025-12-29-14-02-17.mp4', type: 'video' },
    { src: '/memories/127e5e8e0c984d0babaf19dd2431c91d.mov', type: 'video' },
];

const FloatingSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance slideshow every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen py-12 px-4 relative flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-7xl mx-auto flex justify-center">
                {/* Decorative floating hearts - positioned around portrait video */}
                <motion.div
                    className="absolute top-[15%] right-[10%] md:right-[20%] text-7xl md:text-8xl z-10"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    ✨
                </motion.div>

                <motion.div
                    className="absolute bottom-[15%] left-[10%] md:left-[20%] text-7xl md:text-8xl z-10"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    💕
                </motion.div>

                <motion.div
                    className="absolute top-[35%] right-[8%] md:right-[18%] text-6xl md:text-7xl z-10"
                    animate={{
                        x: [0, 20, 0],
                        rotate: [0, 15, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    💖
                </motion.div>

                <motion.div
                    className="absolute top-[55%] left-[8%] md:left-[18%] text-6xl md:text-7xl z-10"
                    animate={{
                        x: [0, -20, 0],
                        rotate: [0, -15, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                    ❤️
                </motion.div>

                {/* Main portrait-style slideshow (Reels/TikTok format) */}
                <motion.div
                    className="relative w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Video container - Portrait/Reels style (9:16 aspect ratio) */}
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-3xl md:rounded-[3rem] shadow-2xl border-8 border-white/30 bg-rose-50">
                        {/* Render all videos layered, show current one */}
                        <div className="relative w-full h-full">
                            {mediaItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
                                    initial={false}
                                    animate={{
                                        opacity: index === currentIndex ? 1 : 0,
                                        scale: index === currentIndex ? 1 : 1.05,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                    />

                                    {/* Subtle gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Progress dots - positioned below the video */}
                    <div className="flex justify-center gap-3 mt-8">
                        {mediaItems.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-rose-500 w-12'
                                    : 'bg-rose-300/60 w-3 hover:bg-rose-400'
                                    }`}
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`View video ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Handwritten-style caption */}
                    <motion.p
                        className="text-center mt-8 font-handwritten text-4xl md:text-5xl text-rose-500 drop-shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        You're amazing! 💝
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default FloatingSlideshow;
