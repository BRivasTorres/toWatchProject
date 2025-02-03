/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-color": "#DEF9C4",
                "accent-color": "#9CDBA6",
                "highlight-color": "#50B498",
                "minor-color": "#468585",
            },
        },
    },
    plugins: [],
};

