import {twMerge} from "tailwind-merge";
import type {LucideIcon} from "lucide-react";

type ImageProps = {
    className?: string;
    icon?: LucideIcon
};

export function Image({ className, icon: Icon }: ImageProps) {
    return (
        <div className={twMerge("flex flex-col w-fit h-fit rounded-lg", className)}>
            {Icon && <Icon size={22} color={"var(--primary)"} />}
        </div>
    )
}