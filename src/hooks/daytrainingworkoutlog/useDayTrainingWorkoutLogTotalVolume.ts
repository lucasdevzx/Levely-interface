import {useEffect, useState} from "react";
import {findTotalVolumeByActualMonth} from "../../services/dayTrainingWorkoutLog.ts";

export function useDayTrainingWorkoutLogTotalVolume() {
    const [totalVolume, setTotalVolume] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        findTotalVolumeByActualMonth()
            .then(setTotalVolume)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { totalVolume, loading, error };
}