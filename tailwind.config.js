/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#fffbf5',
                'warm-gray': '#f5f5f4',
                'soft-black': '#1c1917',
            },
            fontFamily: {
                handwritten: ['Caveat', 'cursive'],
                display: ['Crimson Pro', 'serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            animation: {
                'gentle-float': 'gentle-float 4s ease-in-out infinite',
                'twinkle': 'twinkle 2s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            },
            keyframes: {
                'gentle-float': {
                    '0%, 100%': {
                        transform: 'translateY(0px) rotate(0deg)'
                    },
                    '50%': {
                        transform: 'translateY(-20px) rotate(3deg)'
                    },
                },
                'twinkle': {
                    '0%, 100%': {
                        opacity: '0',
                        transform: 'scale(0)'
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                },
                'heartbeat': {
                    '0%, 100%': {
                        transform: 'scale(1)'
                    },
                    '15%, 35%': {
                        transform: 'scale(1.15)'
                    },
                    '25%, 45%': {
                        transform: 'scale(1)'
                    },
                },
                'fade-in-up': {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
        },
    },
    plugins: [],
}
