import {useEffect, useState} from "react";
import type {DayTraining} from "../../types/dayTraining.ts";
import {findByTrainingPlannerIdAndDayOfWeek} from "../../services/dayTrainingService.ts";

export function useDayTrainingDayWeek() {
    const [dayTraining, setDayTraining] = useState<DayTraining | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        findByTrainingPlannerIdAndDayOfWeek()
            .then(setDayTraining)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { dayTraining, loading, error };
}