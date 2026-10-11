import {
    useDayTrainingWorkoutLogTotalVolume
} from "../../hooks/daytrainingworkoutlog/useDayTrainingWorkoutLogTotalVolume.ts";
import {InfoCard} from "../../components/shared/info-card.tsx";
import {Weight} from "lucide-react";

export function TotalVolumeCard() {
    const { totalVolume, loading, error } = useDayTrainingWorkoutLogTotalVolume();

    /* TODO ADICIONAR SKELETON PARA O LOADING */

    return (
        <InfoCard
            className={"h-25 max-h-25"}
            title={"Total Volume"}
            content={totalVolume?.toString() || "0"}
            description={
                error
                    ? "Falha ao carregar"
                    : "nesse mês"
            }
            icon={Weight}
        />
    )
}