import type { DayTrainingWorkoutLog } from '../types/dayTrainingWorkoutLog';
import {api} from "./api.ts";

/* TODO ADICIONAR O ID DO PLANNER */
export async function findAllByCompletedActualMonth() {
    const { data } = await api.get<DayTrainingWorkoutLog[]>('/daytrainingworkoutlogs/trainingplanner/PLANNERID/completed');
    return data;
}

/* TODO ADICIONAR O ID DO PLANNER */
export async function findTotalVolumeByActualMonth() {
    const { data } = await api.get<number>('/daytrainingworkoutlogs/trainingplanner/PLANNERID/volume/actualmonth');
    return data;
}

