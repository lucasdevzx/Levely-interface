import {CardContext} from "./card-context.ts";
import {twMerge} from "tailwind-merge";
import * as React from "react";

type RootProps = {
    children: React.ReactNode;
    className?: string;
};

export function Root({ className, children }: RootProps) {
    return (
        <CardContext.Provider value={null}>
            <div className={twMerge("flex flex-col w-full h-full component-background rounded-lg", className)}>
                {children}
            </div>
        </CardContext.Provider>
    )
}