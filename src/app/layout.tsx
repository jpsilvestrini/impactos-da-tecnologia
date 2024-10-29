import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";

import cn from "@/utils/cn";

import { Provider } from "./provider";
import { getBaseUrl } from "@/utils/urls";

const outfit = Outfit({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: "#8957ff",
    initialScale: 0.85
};

export const generateMetadata = async(): Promise<Metadata> => {
    const title = "Tecnologia na Educação: Transformando o Ensino Digital";
    const description = "Explore como a tecnologia está revolucionando a educação moderna. Descubra ferramentas interativas, plataformas de aprendizado adaptativo e recursos digitais que tornam o ensino mais envolvente e eficaz.";
    return {
        metadataBase: new URL(getBaseUrl()),
        manifest: "/manifest.json",
        title: {
            default: title,
            template: "%s"
        },
        description,
        alternates: {
            canonical: getBaseUrl()
        },

        creator: "João Pedro Silvestrini (subscr.is-a.dev)",
        publisher: "João Pedro Silvestrini (subscr.is-a.dev)",

        robots: "index, follow"
    }
};

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-theme="dark"
            suppressHydrationWarning
            className="flex justify-center min-h-screen overflow-x-hidden dark max-w-screen"
        >
            <body
                className={cn(
                    "w-full max-w-7xl overflow-x-hidden xl:!overflow-visible",
                    outfit.className
                )}
                style={{ overflow: "visible" }}
            >
                <div id="bg" className="absolute top-0 right-0 w-screen h-screen -z-10" />
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}