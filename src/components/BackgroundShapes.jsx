const BlobShape = ({ color = "#ffeef8", className = "" }) => (
    <svg
        viewBox="0 0 200 200"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill={color}
            d="M43.1,-57.4C54.7,-49.3,61.7,-34.1,65.4,-18.2C69.1,-2.3,69.5,14.3,63.5,28.4C57.5,42.5,45.1,54.1,30.8,60.3C16.5,66.5,0.3,67.3,-15.6,64.8C-31.5,62.3,-47.1,56.5,-58.3,45.8C-69.5,35.1,-76.3,19.5,-76.8,3.7C-77.3,-12.1,-71.5,-28.1,-61.2,-40.4C-50.9,-52.7,-36.1,-61.3,-21.2,-68C-6.3,-74.7,8.7,-79.5,21.8,-76.2C34.9,-72.9,46.1,-61.5,43.1,-57.4Z"
            transform="translate(100 100)"
        />
    </svg>
);

const BackgroundShapes = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top right blob */}
        <BlobShape
            color="#ffeef8"
            className="absolute -top-20 -right-20 w-96 h-96 opacity-40 animate-gentle-float"
        />

        {/* Bottom left blob */}
        <BlobShape
            color="#fff5f7"
            className="absolute bottom-0 -left-32 w-80 h-80 opacity-30"
            style={{ animationDelay: '1s' }}
        />

        {/* Center right blob */}
        <BlobShape
            color="#f9a8d4"
            className="absolute top-1/2 right-1/4 w-64 h-64 opacity-20 animate-gentle-float"
            style={{ animationDelay: '0.5s' }}
        />

        {/* Additional small blob - top left */}
        <svg
            viewBox="0 0 200 200"
            className="absolute top-20 left-10 w-48 h-48 opacity-25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#d8b4fe"
                d="M39.5,-52.9C50.9,-43.6,59.4,-31.4,63.2,-17.8C67,-4.2,66.1,10.8,59.8,23.1C53.5,35.4,41.8,45,28.3,51.4C14.8,57.8,-0.5,61,-15.1,58.7C-29.7,56.4,-43.6,48.6,-53.4,37.2C-63.2,25.8,-68.9,10.8,-67.7,-3.5C-66.5,-17.8,-58.4,-31.4,-47.5,-40.5C-36.6,-49.6,-23,-54.2,-9.2,-56.9C4.6,-59.6,28,-60.2,39.5,-52.9Z"
                transform="translate(100 100)"
            />
        </svg>
    </div>
);

export default BackgroundShapes;
