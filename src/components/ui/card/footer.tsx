import {twMerge} from "tailwind-merge";
import * as React from "react";

type FooterProps = {
    children: React.ReactNode;
    className?: string;
};

export function Footer({ className, children }: FooterProps) {
    return (
        <footer className={twMerge("flex flex-col w-full h-fit", className)}>
            {children}
        </footer>
    )
}