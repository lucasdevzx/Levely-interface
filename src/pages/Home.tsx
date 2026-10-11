import {InfoCard} from "../components/shared/info-card.tsx";
import {Card} from "../components/ui/card";
import {TotalVolumeCard} from "../features/daytrainingworkoutlog/TotalVolumeCard.tsx";
import {CompletedTrainingMonthSizeCard} from "../features/daytrainingworkoutlog/CompletedTrainingMonthSizeCard.tsx";
import {DayTrainingDayWeekCard} from "../features/daytraining/DayTrainingDayWeekCard.tsx";

export function Home() {
    return (
        <div className={"flex flex-col justify-between w-full min-w-full h-screen"}>
            <header>
                <h1>Welcome to the Home Page</h1>
            </header>
            <main className={"grid grid-cols-2 content-start gap-3"}>
                <Card.Root className={"col-span-2 h-45"} >
                    <Card.Content>
                        <p>Conteúdo do card</p>
                    </Card.Content>
                </Card.Root>
                <CompletedTrainingMonthSizeCard />
                <TotalVolumeCard />
                <InfoCard className={"h-25"} />
                <DayTrainingDayWeekCard />
            </main>
        </div>
    );
}