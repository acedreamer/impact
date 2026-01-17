/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "rgb(var(--color-primary) / <alpha-value>)",
                "background-dark": "#0f0f0f",
                "surface-dark": "#18181b",
                "text-muted": "#a1a1aa",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Inter", "sans-serif"] // Updated to Inter as per critique
            },
            borderRadius: {
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
            },
        },
    },
    plugins: [],
}
