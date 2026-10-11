import type { DayTrainingWorkoutLog } from '../types/dayTrainingWorkoutLog';
import {api} from "./api.ts";

/* TODO ADICIONAR O ID DO PLANNER */

export async function findAllByCompletedActualMonth() {
    const { data } = await api.get<DayTrainingWorkoutLog[]>('/daytrainingworkoutlogs/trainingplanner/PLANNERID/completed');
    return data;
}