import {twMerge} from "tailwind-merge";

type TextProps = {
    className?: string;
    text?: string;
};

export function Text({ className, text }: TextProps) {
    return (
        <p className={twMerge("text-sm font-medium text-text", className)}>
            {text || "Sem informação"}
        </p>
    )
}