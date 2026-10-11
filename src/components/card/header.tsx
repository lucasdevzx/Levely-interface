import {twMerge} from "tailwind-merge";
import * as React from "react";

type HeaderProps = {
    children: React.ReactNode;
    className?: string;
};

export function Header({ children, className }: HeaderProps) {
    return (
        <header>
            <div className={twMerge("flex flex-col w-full h-fit", className)}>
                {children}
            </div>
        </header>
    )
}