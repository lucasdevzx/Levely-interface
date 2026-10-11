import {twMerge} from "tailwind-merge";
import * as React from "react";

type ContentProps = {
    children: React.ReactNode;
    className?: string;
};

export function Content({ className, children }: ContentProps) {
    return (
        <main className={twMerge("flex flex-col w-full h-fit", className)}>
            {children}
        </main>
    )
}