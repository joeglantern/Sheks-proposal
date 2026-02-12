import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveButtons = ({ onYes }) => {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [noHoverCount, setNoHoverCount] = useState(0);

    const noMessages = [
        "Are you sure? 🥺",
        "Really? Try again! 💕",
        "Come on, Sheks! ❤️",
        "You know you want to! 😊",
        "Last chance to change your mind! 💝"
    ];

    const yesMessages = [
        "I'm getting bigger! 👀",
        "Can't miss me now! 😄",
        "Look at me! 🎉",
        "I'm HUGE! Pick me! 🙋‍♀️",
        "IMPOSSIBLE TO IGNORE! 💖"
    ];

    // YES button grows with each NO hover
    const yesScale = 1 + (noHoverCount * 0.3); // Grows 30% each time

    const handleNoHover = () => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 200;
        setNoPosition({ x: randomX, y: randomY });
        setNoHoverCount(prev => Math.min(prev + 1, noMessages.length - 1));
    };

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6 items-center justify-center flex-wrap relative min-h-[120px]">
                {/* YES Button - Grows bigger each time NO is hovered */}
                <motion.button
                    onClick={onYes}
                    animate={{
                        scale: yesScale,
                        rotate: noHoverCount > 0 ? [0, -3, 3, -3, 0] : 0
                    }}
                    whileHover={{ scale: yesScale * 1.1 }}
                    whileTap={{ scale: yesScale * 0.95 }}
                    transition={{
                        scale: { type: "spring", stiffness: 200, damping: 15 },
                        rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
                    }}
                    className="px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow relative z-10"
                    style={{
                        boxShadow: noHoverCount > 2 ? '0 0 30px rgba(244, 63, 94, 0.6)' : undefined
                    }}
                >
                    Yes! 💕
                </motion.button>

                {/* NO Button - Runs away on hover/tap */}
                <motion.button
                    onHoverStart={handleNoHover}
                    onTouchStart={handleNoHover}
                    onClick={handleNoHover}
                    animate={noPosition}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="px-12 py-4 bg-gray-200 text-gray-600 text-xl font-semibold rounded-full relative"
                >
                    No 😢
                </motion.button>
            </div>

            {/* Messages container */}
            <div className="flex flex-col items-center gap-3 min-h-[100px]">
                {/* NO button messages */}
                {noHoverCount > 0 && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={`no-${noHoverCount}`}
                        className="text-center text-2xl text-rose-500 font-handwritten max-w-md"
                    >
                        {noMessages[noHoverCount - 1]}
                    </motion.p>
                )}

                {/* YES button growing messages */}
                {noHoverCount > 0 && (
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={`yes-${noHoverCount}`}
                        className="text-center text-xl text-violet-600 font-handwritten max-w-md font-bold"
                    >
                        {yesMessages[Math.min(noHoverCount - 1, yesMessages.length - 1)]}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default InteractiveButtons;
