import {twMerge} from "tailwind-merge";

type RootProps = {
    children: React.ReactNode;
    className?: string;
};

export function Root({ className, children }: RootProps) {
    return (
        <div className={twMerge("flex flex-col w-full h-full rounded-lg", className)}>
            {children}
        </div>
    )
}