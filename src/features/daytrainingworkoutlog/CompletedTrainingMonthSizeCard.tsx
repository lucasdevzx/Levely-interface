import {InfoCard} from "../../components/shared/info-card.tsx";
import {ChartLine} from "lucide-react";
import {
    useDayTrainingWorkoutLogCompletedMonthList
} from "../../hooks/daytrainingworkoutlog/useDayTrainingWorkoutLogCompletedMonthList.ts";

export function CompletedTrainingMonthSizeCard() {
    const { dayTrainingWorkoutLogs, loading, error } = useDayTrainingWorkoutLogCompletedMonthList();

    /* TODO ADICIONAR SKELETON PARA O LOADING */

    return (
        <InfoCard
            className={"h-25 max-h-25"}
            title={"Treinos completos"}
            content={dayTrainingWorkoutLogs?.length.toString() || "0"}
            description={
                error
                    ? "Falha ao carregar"
                    : "nesse mês"
            }
            icon={ChartLine}
        />
    )
}