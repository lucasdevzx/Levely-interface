import {Card} from "../ui/card";
import {twMerge} from "tailwind-merge";
import type {LucideIcon} from "lucide-react";

type InfoCardProps = {
    className?: string;
    title?: string;
    content?: string;
    description?: string;
    icon?: LucideIcon;
};

export function InfoCard({ className, title, content, description, icon: Icon }: InfoCardProps) {
    return (
        <div className={twMerge("", className)}>
            <Card.Root className={"p-3 flex flex-col justify-center items-start"}>
                <Card.Header>
                    <p className={"text-sm font-medium text-text"}>{title || "Sem informação"}</p>
                </Card.Header>
                <Card.Content className={"flex flex-row items-center"}>
                    <h2 className={"text-lg fade-text w-full max-w-full font-bold text-text text-nowrap"}>{content || "Vazio"}</h2>
                </Card.Content>
                <Card.Footer>
                    <div className={"flex flex-row items-center justify-between gap-2"}>
                        <p className={"text-sm text-text"}>{description || "Sem descrição"}</p>
                        {Icon && <Icon size={22} color={"var(--primary)"} />}
                    </div>
                </Card.Footer>
            </Card.Root>
        </div>
    )
}