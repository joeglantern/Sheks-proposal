const Sparkle = ({ size = 20, delay = 0, className = "" }) => (
    <div
        className={`absolute animate-twinkle ${className}`}
        style={{ animationDelay: `${delay}s` }}
    >
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 0l1.545 7.455L21 9l-7.455 1.545L12 18l-1.545-7.455L3 9l7.455-1.545L12 0z" />
        </svg>
    </div>
);

export default Sparkle;
