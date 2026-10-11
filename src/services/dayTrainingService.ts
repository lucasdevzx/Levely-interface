import type {DayTraining} from "../types/dayTraining.ts";
import {api} from "./api.ts";

/* TODO ADICIONAR O ID DO PLANNER */
export async function findByTrainingPlannerIdAndDayOfWeek() {
    const { data } = await api.get<DayTraining>('/daytrainings/trainingplanner/399bcaf4-ebd4-4053-a015-dd118937e2e0/dayofweek');
    return data;
}

