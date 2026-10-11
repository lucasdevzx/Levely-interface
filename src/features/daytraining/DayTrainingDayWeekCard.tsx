import {InfoCard} from "../../components/shared/info-card.tsx";
import {ChartLine} from "lucide-react";
import {useDayTrainingDayWeek} from "../../hooks/daytraining/useDayTrainingDayWeek.ts";
import {Link} from "react-router";

export function DayTrainingDayWeekCard() {
    const { dayTraining, loading, error } = useDayTrainingDayWeek();

    /* TODO ADICIONAR SKELETON PARA O LOADING */

    return (
        <Link to={"/daytraining"} className={"h-25 max-h-25"}>
            <InfoCard
                className={"h-25 max-h-25"}
                title={"Treinos completos"}
                content={dayTraining?.name || "Sem treino"}
                description={
                    error
                        ? "Falha ao carregar"
                        : "hoje " + `(${dayTraining?.dayOfWeek || "nenhum"})`
                }
                icon={ChartLine}
            />
        </Link>
    )
}