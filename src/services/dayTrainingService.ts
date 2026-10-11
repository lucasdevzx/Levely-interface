import type {DayTraining} from "../types/dayTraining.ts";
import {api} from "./api.ts";

/* TODO ADICIONAR O ID DO PLANNER */
export async function findByTrainingPlannerIdAndDayOfWeek() {
    const { data } = await api.get<DayTraining[]>('/daytrainings/trainingplanner/PLANNERID/dayofweek');
    return data;
}

