/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                display: ['"Bungee Spice"', 'cursive'],
            },
            colors: {
                'neon-pink': '#ff00ff',
                'neon-lime': '#ccff00',
                'neon-cyan': '#00ffff',
                'neon-purple': '#bf00ff',
                'brutal-black': '#1a1a1a',
                'brutal-white': '#f0f0f0',
            },
            boxShadow: {
                'brutal': '4px 4px 0px 0px #000000',
                'brutal-lg': '8px 8px 0px 0px #000000',
                'brutal-sm': '2px 2px 0px 0px #000000',
            }
        },
    },
    plugins: [],
}
