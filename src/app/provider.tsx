"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export function Provider({ children }: Props) {
    return (
        <NextUIProvider style={{ minHeight: "85%" }}>
            <main className="flex flex-col items-center justify-between max-w-full p-3 mt-2 dark:text-neutral-400 text-neutral-700 md:p-5 w-6xl md:mt-10">
                {children}
            </main>
        </NextUIProvider>
    );
}