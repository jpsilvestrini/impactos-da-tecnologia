import { nextui } from "@nextui-org/react";

const portinari = "rgba(255, 255, 255, 0.05)";
const violet = "rgb(139 92 246)";

const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                portinari: portinari,
                "portinari-light": "rgb(30, 32, 34)",
                "portinari-alpha": "rgba(255, 255, 255, 0.06)",

                "portinari-100": "#e2e8f0",
                "portinari-100-light": "#ced3da",
                "portinari-100-alpha": "rgba(0, 0, 0, 0.06)",
                "portinari-900-alpha": "rgba(0, 0, 0, 0.54)",

                blurple: "#5865f2",
                "blurple-dark": "#454fbf",
                "discord-gray": "#1c1d23"
            },
            width: {
                128: "32rem",
                160: "40rem"
            },
            fontSize: {
                xxs: "0.6rem"
            }
        }
    },
    darkMode: "class",
    plugins: [nextui({
        addCommonColors: false,
        layout: {
            radius: {
                small: "0.375rem",
                medium: "0.5rem",
                large: "0.75rem"
            },
            fontSize: {
                small: "0.875rem",
                medium: "1rem",
                large: "1.125rem"
            }
        },
        themes: {
            dark: {
                colors: {
                    secondary: {
                        foreground: "rgb(255 255 255)",
                        background: portinari,
                        DEFAULT: violet,
                        divider: portinari,
                        focus: violet
                    },
                    default: {
                        foreground: "rgb(212 212 212)",
                        background: portinari,
                        DEFAULT: portinari,
                        focus: violet
                    },
                    overlay: portinari,
                    content1: portinari,
                    content2: portinari,
                    content3: portinari,
                    content4: portinari
                }
            },
            violet: {
                extends: "dark",
                colors: {
                    default: {
                        foreground: "rgb(255 255 255)",
                        background: portinari,
                        DEFAULT: violet
                    }
                }
            }
        }
    })]
};
export default config;