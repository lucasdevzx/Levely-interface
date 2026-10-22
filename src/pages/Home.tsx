import {InfoCard} from "../components/shared/info-card.tsx";
import {Card} from "../components/ui/card";
import {Icon} from "../components/ui/icon";
import {TotalVolumeCard} from "../features/daytrainingworkoutlog/TotalVolumeCard.tsx";
import {CompletedTrainingMonthSizeCard} from "../features/daytrainingworkoutlog/CompletedTrainingMonthSizeCard.tsx";
import {DayTrainingDayWeekCard} from "../features/daytraining/DayTrainingDayWeekCard.tsx";
import {Link} from "react-router";
import {ChevronRight, Dumbbell, Goal, RotateCcwClock, Ruler} from "lucide-react";

export function Home() {
    return (
        <div className={"flex flex-col w-full min-w-full h-screen gap-5"}>
            <header className={"flex flex-col items-start justify-start gap-3"}>
                <div>
                    // TODO: Add Planner Layout
                </div>
                <div>
                    <h1 className={"text-text font-bold text-lg text-wrap"}>Olá, Usuário</h1>
                    <p className={"text-text-secondary"}>Pronto pra mais um treino ?</p>
                </div>
            </header>
            <main className={"grid grid-cols-2 content-start gap-3"}>
                <Link to={"/"} className={"col-span-2 h-37.5"} >
                    <Card.Root >
                        <Card.Content className={"flex flex-row p-3"}>
                            <div className={"flex flex-col w-4/5 justify-between"}>
                                <div>
                                    <p className={"text-text-secondary"}>Progresso</p>
                                    <h2 className={"text-text font-bold text-wrap"}>Acompanhe seu progresso rumo ao seu objetivo</h2>
                                </div>
                                <div className={"flex flex-row items-center text-center gap-2 text-primary font-bold cursor-pointer"}>
                                    <p>Ver progresso</p>
                                    <ChevronRight size={22} color={"var(--primary)"} />
                                </div>
                            </div>
                            <div className={"flex justify-center items-center"}>
                                <img src={"src/assets/goal.png"} alt="Progresso" width={100} height={100} />
                            </div>
                        </Card.Content>
                    </Card.Root>
                </Link>
                <CompletedTrainingMonthSizeCard />
                <TotalVolumeCard />
                <InfoCard className={"h-25"} />
                <DayTrainingDayWeekCard />
            </main>
            <footer className={"flex flex-col gap-3 justify-between"}>
                <div className={"flex flex-row justify-between items-center text-center"}>
                    <p className={"text-text-secondary font-bold"}>Veja também</p>
                    <Link to={"/"} className={"text-text-secondary"}>
                        <ChevronRight />
                    </Link>
                </div>
                <div className={"flex flex-row justify-between items-start gap-10"}>
                    <Link to={"/"} className={"flex-1 w-20 h-20"}>
                        <Icon.Root className={"justify-center items-center"}>
                            <Icon.Image className={"component-background w-full h-full items-center justify-center"} icon={Dumbbell} />
                            <Icon.Text className={"text-text-secondary text-center"} text="Exercícios" />
                        </Icon.Root>
                    </Link>
                    <Link to={"/"} className={"flex-1 w-20 h-20"}>
                        <Icon.Root className={"justify-center items-center"}>
                            <Icon.Image className={"component-background w-full h-full items-center justify-center"} icon={RotateCcwClock} />
                            <Icon.Text className={"text-text-secondary text-center"} text="Histórico" />
                        </Icon.Root>
                    </Link>
                    <Link to={"/"} className={"flex-1 w-20 h-20"}>
                        <Icon.Root className={"justify-center items-center"}>
                            <Icon.Image className={"component-background w-full h-full items-center justify-center"} icon={Goal} />
                            <Icon.Text className={"text-text-secondary text-center"} text="Exercícios" />
                        </Icon.Root>
                    </Link>
                    <Link to={"/"} className={"flex-1 w-20 h-20"}>
                        <Icon.Root className={"justify-center items-center"}>
                            <Icon.Image className={"component-background w-full h-full items-center justify-center"} icon={Ruler} />
                            <Icon.Text className={"text-text-secondary text-center"} text="Exercícios" />
                        </Icon.Root>
                    </Link>

                </div>
            </footer>
        </div>
    );
}