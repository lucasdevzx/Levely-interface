export type DayTrainingWorkoutLog = {
    id: string;
    dayTrainingId: string;
    workoutId: string;
    orderIndex: number;
    completed: boolean;
    completedAt: Date | null;
    timeTraining: string | null;
    createdAt: Date;
    updatedAt: Date;
};