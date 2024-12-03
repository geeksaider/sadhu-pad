import type { Config } from "tailwindcss"

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: "#334155",
                    700: "#0F172A",
                },
            },
        },
    },

    plugins: [],
} satisfies Config
