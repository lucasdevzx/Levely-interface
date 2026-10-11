import type { DayTrainingWorkoutLog } from '../../types/dayTrainingWorkoutLog.ts';
import {useEffect, useState} from "react";
import {findAllByCompletedActualMonth} from "../../services/dayTrainingWorkoutLog.ts";

export function useDayTrainingWorkoutLogCompletedMonthList() {
    const [dayTrainingWorkoutLogs, setDayTrainingWorkoutLogs] = useState<DayTrainingWorkoutLog[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        findAllByCompletedActualMonth()
            .then(setDayTrainingWorkoutLogs)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { dayTrainingWorkoutLogs, loading, error };
}