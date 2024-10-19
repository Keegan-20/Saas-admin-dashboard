/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
                fontFamily: {
                    Inter:["Inter", "sans-serif"],
                },
                // example for custome color
            colors: {
                primary:"#1C1C1C",
            },

			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
        },
    },
    plugins: [],
    darkMode: 'class',
});
