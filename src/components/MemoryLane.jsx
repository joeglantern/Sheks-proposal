import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Grid3x3, Maximize2 } from 'lucide-react';

// Your videos from public/memories/
const mediaItems = [
    { src: '/memories/086297ea2eda4befb63aed1d7ccfc6b5.MOV', type: 'video', caption: 'Us together 💕' },
    { src: '/memories/8E44B908-0B69-43F9-8E86-D2E29D8974D7.MP4', type: 'video' },
    { src: '/memories/C4F27B08-CF38-4719-B674-D2374D2A1F8C.MP4', type: 'video' },
    { src: '/memories/VIDEO-2025-12-29-14-02-17.mp4', type: 'video' },
    { src: '/memories/127e5e8e0c984d0babaf19dd2431c91d.mov', type: 'video' },
];

const MemoryLane = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'slideshow'
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openSlideshow = (index) => {
        setSelectedIndex(index);
        setViewMode('slideshow');
    };

    const closeSlideshow = () => {
        setViewMode('grid');
    };

    const nextSlide = () => {
        setSelectedIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setSelectedIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (viewMode === 'slideshow') {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === 'Escape') closeSlideshow();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [viewMode]);

    return (
        <section className="min-h-screen py-20 px-6 relative">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="font-display text-5xl md:text-6xl font-semibold mb-4 text-soft-black"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Beautiful Moments 💝
                    </motion.h2>
                    <motion.p
                        className="font-handwritten text-2xl text-rose-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Every picture tells our story
                    </motion.p>
                </div>

                {/* Pinterest-style Masonry Grid */}
                {viewMode === 'grid' && (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="break-inside-avoid mb-6 group cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                onClick={() => openSlideshow(index)}
                            >
                                <div className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all bg-white/40 backdrop-blur-sm p-4 border border-rose-100/50">
                                    {item.type === 'image' ? (
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            className="w-full h-auto rounded-2xl"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            className="w-full h-auto rounded-2xl"
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            onMouseEnter={(e) => e.target.play()}
                                            onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                                        />
                                    )}

                                    {/* Soft gradient overlay on hover - only show if caption exists */}
                                    {item.caption && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-rose-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end justify-center p-4 m-4">
                                            <p className="text-white font-handwritten text-xl drop-shadow-lg">
                                                {item.caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Subtle expand icon */}
                                    <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm">
                                            <Maximize2 className="w-4 h-4 text-rose-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Slideshow View */}
                <AnimatePresence>
                    {viewMode === 'slideshow' && (
                        <motion.div
                            className="fixed inset-0 bg-gradient-to-br from-rose-900/95 via-pink-900/95 to-purple-900/95 backdrop-blur-xl z-50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeSlideshow}
                                className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors z-10"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Grid view button */}
                            <button
                                onClick={closeSlideshow}
                                className="absolute top-6 left-6 text-white hover:text-rose-400 transition-colors z-10"
                            >
                                <Grid3x3 className="w-8 h-8" />
                            </button>

                            {/* Previous button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-3"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            {/* Next button */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-3"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            {/* Current media */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex}
                                    className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center px-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {mediaItems[selectedIndex].type === 'image' ? (
                                        <img
                                            src={mediaItems[selectedIndex].src}
                                            alt={mediaItems[selectedIndex].caption}
                                            className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl border-4 border-white/20"
                                        />
                                    ) : (
                                        <video
                                            src={mediaItems[selectedIndex].src}
                                            className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl border-4 border-white/20"
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                        />
                                    )}

                                    {/* Caption - only show if exists */}
                                    {mediaItems[selectedIndex].caption && (
                                        <motion.p
                                            className="text-white font-handwritten text-2xl md:text-3xl mt-8 text-center drop-shadow-lg"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {mediaItems[selectedIndex].caption}
                                        </motion.p>
                                    )}

                                    {/* Counter */}
                                    <p className="text-white/50 mt-4 text-sm font-body">
                                        {selectedIndex + 1} / {mediaItems.length}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Keyboard hint */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-sm font-body">
                                Use ← → arrow keys or ESC to exit
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default MemoryLane;
