import type { DayTrainingWorkoutLog } from '../types/dayTrainingWorkoutLog';
import {api} from "./api.ts";

/* TODO ADICIONAR O ID DO PLANNER */
export async function findAllByCompletedActualMonth() {
    const { data } = await api.get<DayTrainingWorkoutLog[]>('/daytrainingworkoutlogs/trainingplanner/399bcaf4-ebd4-4053-a015-dd118937e2e0/completed');
    return data;
}

/* TODO ADICIONAR O ID DO PLANNER */
export async function findTotalVolumeByActualMonth() {
    const { data } = await api.get<number>('/daytrainingworkoutlogs/trainingplanner/399bcaf4-ebd4-4053-a015-dd118937e2e0/volume/actualmonth');
    return data;
}