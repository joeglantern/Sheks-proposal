const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div
        className={`animate-gentle-float ${className}`}
        style={{ animationDelay: `${delay}s` }}
    >
        {children}
    </div>
);

export default FloatingElement;
