import type { Config } from "tailwindcss";

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
                background: {
                    100: "D9D9D9",
                },
                primary: {
                    400: "#334155",
                    700: "#0F172A",
                    900: "#1E293B",
                },
            },
        },
    },

    plugins: [],
} satisfies Config;
